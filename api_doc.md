#ServerA API文档

## 身份验证 [/v1/login?mobile={mobile}&password={password}&role={role}]
+ Parameters
    + mobile (string, `12345`) ... 用户手机号.
    + password (string, `12345`) ... 登录密码.
    + role (string, `parent`) ... 用户角色parent/staff/child.
    
### 验证用户身份 [POST]
+ Response 200 (application/json; charset=utf-8)
    + Body

            {
                "id":"1",
                "mobile": "12345678901",
                "name": "测试家长1",
                "gender": "男"
                "emUsername": "test1"
            }


## 查找用户 [/v1/person?mobile={mobile}]
+ Parameters
    + mobile (string, `12345`) ... 用户手机号.

### 查找一个用户 [GET]
+ Response 201 (application/json; charset=utf-8)
    + Body  

            {
                "id": "1",
                "mobile":"12345678910",
                "name":"测试用户3",
                "gender": "女",
                "emUsername": "test1"
            }


## 用户信息 [/v1/person/{id}]
+ Parameters
    + id (string, `12345`) ... 用户的id.

### 根据ID获得某个用户信息 [GET]
+ Response 200 (application/json; charset=utf-8)
    + Body

            {
                "_id":"1",
                "mobile":"12345678910",
                "name":"测试用户3",
                "gender":"女",
                "emUsername": "test3",
                "role": ["staff"],
                "people": [
                    {id: "2", relation: "friend"},
                    {id: "3", relation: "child"}
                ]
            }


## 好友列表 [/v1/person/{id}/friend]
+ Parameters
    + id (string, `12345`) ... 用户的id.

### 根据ID获得某个用户的好友信息 [GET]
+ Response 200 (application/json; charset=utf-8)
    + Body

            [
                {
                    "_id":"1",
                    "mobile":"12345678910",
                    "name":"测试用户3",
                    "gender":"女",
                    "emUsername": "test3",
                    "role": ["staff"],
                    "people": [
                        {id: "2", relation: "friend"},
                        {id: "3", relation: "child"}
                    ]
                }
            ]
