#ServerA API文档

## 家长身份验证 [/v1/login/parent?mobile=12345678901&password=123456789]

### 验证用户身份 [POST]
+ Response 200 (application/json; charset=utf-8)
    + Body

            {
                "id":"1",
                "username":"test1",
                "emUsername": "test1"
            }

# 家长管理

## 创建家长 [/v1/parent/]

### 创建一个家长 [POST]
+ Request (application/json; charset=utf-8)
    + Body  

            {
                "name":"测试用户3",
                "mobile":"12345678910",
                "gender": "女",
                "nickName": "妞妞的妈妈"
            }

+ Response 201 (application/json; charset=utf-8)
    + Body  

            {
                "id":"1",
                "username":"test3",
                "emUsername": "test3",
                "name":"测试用户3",
                "mobile":"12345678910",
                "gender": "女",
                "nickName": "妞妞的妈妈"
            }


## 家长信息 [/v1/parent/{parentId}]
+ Parameters
    + userId (string, `12345`) ... 希望得到的用户ID.

### 根据ID获得某个家长信息 [GET]
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

## 好友列表 [/v1/parent/{username}/friends]
+ Parameters
    + userId (string, `12345`) ... 希望得到的用户ID.

### 根据ID获得某个家长的好友信息 [GET]
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
