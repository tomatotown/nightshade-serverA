var express = require('express');
var router = express.Router();
var user = require('../models/userModel');

router.get('/', function(req, res) {
    res.json({status: "OK"});
});

router.post('/login', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    user.find({username: username, password: password}, function (err, user) {
        if (!err) {
            res.json({"username": user[0].username, "password": user[0].password});
        } else {
            res.json({status: "error"});
        }
    });
});


module.exports = router;
