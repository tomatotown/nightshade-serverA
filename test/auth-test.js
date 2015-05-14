'use strict';

var request = require('supertest');
var should = require('should');
var app = require('../app/app');

describe('登录', function(){
    describe('POST /v1/login', function(){
        it('家长提供正确的用户名和密码后能够认证通过', function(done){
            request(app)
                .post('/v1/login?mobile=12345678901&password=123456789&role=parent')
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

        it('老师提供正确的用户名和密码后能够认证通过', function(done){
            request(app)
                .post('/v1/login?mobile=98765432101&password=123456789&role=staff')
                .expect(200)
                .end(function(err, res){
                    res.body.should.have.property('id');
                    res.body.should.have.property('name', '李锐');
                    res.body.should.have.property('mobile', '98765432101');
                    res.body.should.have.property('gender', '男');
                    res.body.should.have.property('emUsername', 'staff1');
                    done();
                });
        });

        it('家长提供不正确的用户名和密码后提示找不到用户', function(done){
            request(app)
                .post('/v1/login?mobile=98765432101&password=wrong&role=parent')
                .expect(200)
                .end(function(err, res){
                    res.body.should.have.property('status', 'error');
                    res.body.should.have.property('msg', '用户不存在');
                    done();
                });
        });

        it('老师提供不正确的用户名和密码后提示找不到用户', function(done){
            request(app)
                .post('/v1/login?mobile=fakeuser&password=wrong&role=staff')
                .expect(200)
                .end(function(err, res){
                    res.body.should.have.property('status', 'error');
                    res.body.should.have.property('msg', '用户不存在');
                    done();
                });
        });
    });
});
