var express = require('express');
var router = express.Router();
var person = require('../models/personModel').person;

router.get('/', function(req, res) {
    res.json({status: "OK"});
});

router.post('/login', function(req, res) {
    var mobile = req.query.mobile;
    var password = req.query.password;
    var role = req.query.role;
    person.find({mobile: mobile, password: password, role: role}, function (err, results) {
        if (results.length == 0) {
            return res.json({status: "error", msg: "用户不存在"});
        }
        if (err) {
            return res.json({status: "error"});
        }
        return res.json({
            "id": results[0].id,
            "name": results[0].name,
            "mobile": results[0].mobile,
            "gender": results[0].gender,
            "nickname": results[0].nickname,
            "emUsername": results[0].emUsername
        });
    });
});

module.exports = router;
