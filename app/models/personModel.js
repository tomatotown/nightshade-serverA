'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var parentSchema = new Schema({
    uname: String,
    password: String,
    name: String,
    mobile: String,
    gender: String,
    nickname: String,
    emUsername: String,
    friends: [mongoose.Schema.Types.ObjectId],
    children: [mongoose.Schema.Types.ObjectId]
});

var parent = mongoose.model('Parent', parentSchema, 'people');

var teacherSchema = new Schema({
    uname: String,
    password: String,
    name: String,
    mobile: String,
    gender: String,
    nickname: String,
    dob: Date,
    emUsername: String,
    role: String,
    friends: [mongoose.Schema.Types.ObjectId],
    entities: [mongoose.Schema.Types.ObjectId]
});

var teacher = mongoose.model('Teacher', teacherSchema, 'people');

var childSchema = new Schema({
    name: String,
    nickname: String,
    gender: String,
    dob: Date,
    entities: [mongoose.Schema.Types.ObjectId],
    parents: [mongoose.Schema.Types.ObjectId]
});

var child = mongoose.model('Child', teacherSchema, 'people');

module.exports = {
    parent: parent,
    teacher: teacher,
    child: child
};
