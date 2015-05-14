var express = require('express');
var router = express.Router();
router.use('/person', require('./personController'));
router.use('/', require('./siteController'));
module.exports = router;
