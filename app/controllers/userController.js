var express = require('express');
var im = require('../services/easemobService');
var user = require('../models/userModel');
var router = express.Router();

router.get('/', function(req, res) {
    user.find({}, function (err, users) {
        if (!err) res.json(users);
    });
});

router.get('/:username/friends', function(req, res) {
    user.findOne({username: req.params.username}, function (err, result) {
        if (!err && result != undefined ) {
            user.find({'username': { $in: result.friends}}, function(err, results){
                if(!err) res.json(results);
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
