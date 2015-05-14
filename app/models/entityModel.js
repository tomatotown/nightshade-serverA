'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var entitySchema = new Schema({
    name: String,
    logo: String,
    entities: [{id: ObjectId, relation: String}],
    people: [{id: ObjectId, relation: String}]
});

var entity = mongoose.model('Entity', entitySchema, 'entities');

module.exports = {
    entity: entity
};
