db.users.remove({});
db.users.insert({username: "test1", email: "test1@tomatotown.com", mobile: "12345678910", emUsername: "test1", password: "1234", friends:["test2", "test3"]});
db.users.insert({username: "test2", email: "test2@tomatotown.com", mobile: "12310987654", emUsername: "test2", password: "1234", friends:["test1"]});
db.users.insert({username: "test3", email: "test3@tomatotown.com", mobile: "12310987654", emUsername: "test3", password: "1234", friends:["test1", "test2"]});
