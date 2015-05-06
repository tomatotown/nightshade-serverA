'use strict';

var request = require('supertest');
var should = require('should');
var app = require('../app/app');

describe('auth', function(){
    describe('POST /v1/login', function(){
        it('should login with correct username and password', function(done){
            request(app)
                .post('/v1/login')
                .type('urlencoded')
                .send('username=test1&password=1234')
                .expect(200)
                .end(function(err, res){
                    res.body.should.have.property('username', 'test1');
                    res.body.should.have.property('email', 'test1@tomatotown.com');
                    res.body.should.have.property('mobile', '12345678910');
                    res.body.should.have.property('emUsername', 'test1');
                    done();
                });
        });
    });
});
