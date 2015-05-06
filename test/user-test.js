'use strict';

var request = require('supertest');
var should = require('should');
var app = require('../app/app');

describe('user', function(){
    describe('GET /v1/user/:id/friends', function(){
        it('should list all friends of a user', function(done){
            request(app)
                .get('/v1/user/test1/friends')
                .expect(200)
                .end(function(err, res){
                    res.body.should.have.length(2);
                    done();
                });
        });
    });
});
