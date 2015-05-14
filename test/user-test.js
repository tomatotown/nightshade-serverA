'use strict';

var request = require('supertest');
var should = require('should');
var app = require('../app/app');

describe('用户', function(){
    describe('GET /v1/person?mobile=12345678901', function(){
        it('根据用户手机查找', function(done){
            request(app)
                .get('/v1/person?mobile=12345678901')
                .expect(200)
                .end(function(err, res){
                    res.body.should.have.property("id");
                    done();
                });
        });
    });

    describe('GET /v1/user/:id/friend', function(){
        it('得到用户的好友列表', function(done){
            request(app)
                .get('/v1/person?mobile=12345678901')
                .expect(200)
                .end(function(err, res){
                    request(app)
                        .get('/v1/person/' + res.body.id + '/friend')
                        .expect(200)
                        .end(function(err, res){
                            res.body.should.have.length(1);
                            res.body[0].should.have.property("name", "李锐");
                            res.body[0].should.have.property("gender", "男");
                            done();
                        });
                });
        });
    });

    describe('GET /v1/user/:id', function(){
        it('得到用户的信息列表', function(done){
            request(app)
                .get('/v1/person?mobile=12345678901')
                .expect(200)
                .end(function(err, res){
                    request(app)
                        .get('/v1/person/' + res.body.id)
                        .expect(200)
                        .end(function(err, res){
                            res.body.should.have.property("name", "林志颖");
                            res.body.should.have.property("mobile", "12345678901");
                            res.body.should.have.property("gender", "男");
                            res.body.should.have.property("role");
                            res.body.should.have.property("people");
                            res.body.people.should.have.length(2);
                            done();
                        });
                });
        });
    });
});
