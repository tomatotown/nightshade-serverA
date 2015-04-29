#nightshade API文档

## 创建用户 [/api/v1/user/]
+ Parameters
    + userId (string, `12345`) ... 希望得到的用户ID.

### 创建一个用户 [POST]
+ Request (application/json; charset=utf-8)
    + Body  

            {
                "username":"测试用户1",
                "password": "123123"
                "email":"test1@tomatotown.com",
                "mobile":"12345678910",
            }

+ Response 201 (application/json; charset=utf-8)
    + Body  

            {
                "id":"1",
                "username":"测试用户1",
                "email":"test1@tomatotown.com",
                "mobile":"12345678910",
                "createdAt": "2015-03-23 15:34:42",
                "updatedAt": "2015-03-23 15:34:42"
            }


## 用户信息 [/api/v1/user/{userId}]
+ Parameters
    + userId (string, `12345`) ... 希望得到的用户ID.

### 根据ID获得某个用户信息 [GET]
+ Response 200 (application/json; charset=utf-8)
    + Body  

            [
                {
                    "id":"1",
                    "username":"测试用户1",
                    "email":"test1@tomatotown.com",
                    "mobile":"12345678910",
                    "createdAt": "2015-03-23 15:34:42",
                    "updatedAt": "2015-03-23 15:34:42"
                }
            ]
