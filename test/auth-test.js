'use strict';

var request = require('supertest');
var should = require('should');
var app = require('../app/app');

describe('登录', function(){
    describe('POST /v1/login/parent', function(){
        it('家长提供正确的用户名和密码后能够认证通过', function(done){
            request(app)
                .post('/v1/login/parent?mobile=12345678901&password=123456789')
                .expect(200)
                .end(function(err, res){
                    res.body.should.have.property('id');
                    res.body.should.have.property('name', '林志颖');
                    res.body.should.have.property('mobile', '12345678901');
                    res.body.should.have.property('gender', '男');
                    res.body.should.have.property('emUsername', 'test1');
                    done();
                });
        });
    });
});
