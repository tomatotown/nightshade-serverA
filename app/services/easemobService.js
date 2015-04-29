'use strict';

var easemob = (function () {
    var Client = require('node-rest-client').Client;
    var config = require('../../config');
    var client = new Client();

    var getToken = function (callback) {
        var args = {
            data: {
                grant_type: "client_credentials",
                client_id: config.easemob.clientId,
                client_secret: config.easemob.clientSecret,
            },
            headers:{"Content-Type": "application/json"}
        };

        client.post("https://a1.easemob.com/lanminit/tomatotowntest/token", args, function(data,response) {
            callback(data.access_token);
        });
    };

    return {
        createUser: function(username, password) {
            getToken(function(token){
                var args = {
                    data: {
                        username: username,
                        password: password
                    },
                    headers:{"Authorization": "Bearer " + token }
                };

                client.post("https://a1.easemob.com/lanminit/tomatotowntest/users", args, function(data,response) {
                    console.log("用户创建成功!");
                    console.log(data);
                });
            });
        }
    }
})();

module.exports = easemob;
