#ServerA API文档

## 用户登录 [/v1/login/?username=test1&password=123123]

### 验证用户身份 [POST]
+ Response 200 (application/json; charset=utf-8)
    + Body

            {
                "id":"1",
                "username":"test1",
                "email":"test1@tomatotown.com",
                "mobile":"12345678910",
                "emUsername": "test1"
            }

## 创建用户 [/v1/user/]
+ Parameters
    + userId (string, `12345`) ... 希望得到的用户ID.

### 创建一个用户 [POST]
+ Request (application/json; charset=utf-8)
    + Body  

            {
                "username":"test3",
                "password": "123123",
                "email":"test3@tomatotown.com",
                "mobile":"12345678910",
            }

+ Response 201 (application/json; charset=utf-8)
    + Body  

            {
                "id":"1",
                "username":"test3",
                "email":"test3@tomatotown.com",
                "mobile":"12345678910",
                "emUsername": "test3"
            }


## 用户信息 [/v1/user/{userId}]
+ Parameters
    + userId (string, `12345`) ... 希望得到的用户ID.

### 根据ID获得某个用户信息 [GET]
+ Response 200 (application/json; charset=utf-8)
    + Body

            [
                {
                    "id":"1",
                    "username":"test3",
                    "email":"test3@tomatotown.com",
                    "mobile":"12345678910",
                    "emUsername": "test3"
                }
            ]

## 用户好友列表 [/v1/user/{username}/friends]
+ Parameters
    + userId (string, `12345`) ... 希望得到的用户ID.

### 根据ID获得某个用户信息 [GET]
+ Response 200 (application/json; charset=utf-8)
    + Body

            [
                {
                    "id":"1",
                    "username":"test1",
                    "emUsername": "test1"
                },
                {
                    "id":"2",
                    "username":"test2",
                    "emUsername": "test2"
                }
            ]
