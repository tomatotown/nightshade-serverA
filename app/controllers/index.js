var express = require('express');
var router = express.Router();
router.use('/user', require('./userController'));
router.use('/', require('./siteController'));
module.exports = router;
