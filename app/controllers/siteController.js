var express = require('express');
var router = express.Router();
var user = require('../models/userModel');

router.get('/', function(req, res) {
    res.json({status: "OK"});
});

router.post('/login', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    user.find({username: username, password: password}, function (err, users) {
        if (!err & users.count != 0) {
            res.json({
                "username": users[0].username,
                "email" : users[0].email,
                "mobile": users[0].mobile,
                "emUsername": users[0].emUsername
            });
        } else {
            res.json({status: "error"});
        }
    });
});


module.exports = router;
