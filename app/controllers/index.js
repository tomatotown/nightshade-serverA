var express = require('express');
var router = express.Router();
router.use('/parent', require('./parentController'));
router.use('/', require('./siteController'));
module.exports = router;
