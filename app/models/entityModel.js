'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schoolSchema = new Schema({
    name: String,
    logo: String,
    staffs: [mongoose.Schema.Types.ObjectId],
    classes: [mongoose.Schema.Types.ObjectId]
});

var school = mongoose.model('School', schoolSchema, 'entities');

var classSchema = new Schema({
    name: String,
    staffs: [mongoose.Schema.Types.ObjectId],
    children: [mongoose.Schema.Types.ObjectId]
});

var class = mongoose.model('Class', classSchema, 'entities');

module.exports = {
    school: school,
    class: class
};
