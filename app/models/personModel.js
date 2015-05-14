'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var personSchema = new Schema({
    password: String,
    name: String,
    mobile: String,
    gender: String,
    nickname: String,
    dob: String,
    emUsername: String,
    role: [String],
    people: [{id: ObjectId, relation: String}]
});

var person = mongoose.model('Person', personSchema, 'people');

module.exports = {
    person: person
};
