'use strict';

var default_env = 'development';
var node_env = process.env.NODE_ENV || default_env;

module.exports = require('./' + node_env + '.json');

console.log('Server will start with config: ' + node_env);
