var express = require('express');
var router = express.Router();
var parent = require('../models/personModel').parent;

router.get('/', function(req, res) {
    res.json({status: "OK"});
});

router.post('/login', function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    parent.find({username: username, password: password}, function (err, users) {
        if (!err & users.count != 0) {
            res.json({
                "id": users[0].id,
                "username": users[0].username,
                "mobile": users[0].mobile,
                "emUsername": users[0].emUsername
            });
        } else {
            res.json({status: "error"});
        }
    });
});

router.post('/login/parent', function(req, res) {
    var mobile = req.query.mobile;
    var password = req.query.password;
    parent.find({mobile: mobile, password: password}, function (err, parents) {
        if (parents.length == 0) {
            return res.json({status: "error", msg: "用户不存在"});
        }
        if (err) {
            return res.json({status: "error"});
        }
        return res.json({
            "id": parents[0].id,
            "name": parents[0].name,
            "mobile": parents[0].mobile,
            "gender": parents[0].gender,
            "nickname": parents[0].nickname,
            "emUsername": parents[0].emUsername
        });
    });
});


module.exports = router;
