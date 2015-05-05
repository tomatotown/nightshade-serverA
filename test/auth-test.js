'use strict';

var request = require('supertest');
var should = require('should');
var app = require('../app/app');

describe('auth', function(){
    describe('POST /login', function(){
        it('should login with correct username and password', function(done){
            var data = {
                            "username":"测试用户1",
                            "password": "1234"
                        }
            request(app)
                .post('/login')
                .type('urlencoded')
                .send('username=测试用户1&password=1234')
                .expect(200)
                .end(function(err, res){
                    console.log(res.body);
                    res.body.should.eql(data);
                    done();
                });
        });
    });
});
