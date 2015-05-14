var express = require('express');
var im = require('../services/easemobService');
var person = require('../models/personModel').person;
var _ = require('lodash');
var router = express.Router();

router.get('/:id/friend', function(req, res) {
    person.findOne({_id: req.params.id}, function (err, result) {
        if (!err && result != undefined ) {
            var friends = _.pluck(_.filter(result.people, {'relation': 'friend'}), 'id');
            person.find({'_id': { $in: friends}}, function(err, results){
                if(!err) res.json(results);
            });
        }
    });
});

router.get('/:id', function(req, res) {
    person.findOne({_id: req.params.id}, function (err, result) {
        if (!err && result != undefined ) {
            if(!err) res.json(result);
        }
    });
});

router.get('/', function(req, res) {
    var mobile = req.query.mobile;
    person.findOne({mobile: mobile}, function (err, result) {
        if (!err && result != undefined ) {
            res.json({
                "id": result._id,
                "name": result.name,
                "mobile": result.mobile,
                "gender": result.gender,
                "nickname": result.nickname,
                "emUsername": result.emUsername
            });
        }
    });
});

router.post('/', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    im.createUser(username, password);
    res.redirect("/");
});

module.exports = router;
