//删除所有测试幼儿园
db.entities.remove({});
//创建测试幼儿园
db.entities.insert({name: "爸爸去哪园", logo: "", people: [], entities: []});
//创建测试班级
db.entities.insert({name: "小1班", people: [], entities: []});

//删除所有测试人员
db.people.remove({});

//创建测试老师
db.people.insert({password: "123456789", name: "李锐", mobile: "98765432101", gender: "男",
    nickname: "", dob: "1973-07-24", role:["staff"], emUsername: "staff1", people: []});

//创建测试儿童
db.people.insert({name: "小小志", nickname: "Kimi", gender: "男", dob: "2009-09-15", role:["child"], people:[]});
db.people.insert({name: "王诗龄", nickname: "Angela", gender: "女", dob: "2009-10-13", role:["child"], people:[]});
db.people.insert({name: "田雨橙", nickname: "Cindy", gender: "女", dob: "2008-4-15", role:["child"], people:[]});
db.people.insert({name: "郭子睿", nickname: "石头", gender: "男", dob: "2007-2-26", role:["child"], people:[]});
db.people.insert({name: "张悦轩", nickname: "天天", gender: "男", dob: "2007-11-12", role:["child"], people:[]});

//创建测试家长
db.people.insert({password: "123456789", name: "林志颖", mobile: "12345678901", gender: "男",
    nickName: "", role:["parent"], emUsername: "test1", people: []});
db.people.insert({password: "123456789", name: "王岳伦", mobile: "12345678902", gender: "男",
    nickName: "", role:["parent"], emUsername: "test2", people: []});
db.people.insert({password: "123456789", name: "田亮", mobile: "12345678903", gender: "男",
    nickName: "", role:["parent"], emUsername: "test3", people: []});
db.people.insert({password: "123456789", name: "郭涛", mobile: "12345678904", gender: "男",
    nickName: "", role:["parent"], emUsername: "test4", people: []});
db.people.insert({password: "123456789", name: "张亮", mobile: "12345678905", gender: "男",
    nickName: "", role:["parent"], emUsername: "test5", people: []});

addPeopleToPeople("林志颖", "小小志", "child");
addPeopleToPeople("王岳伦", "王诗龄", "child");
addPeopleToPeople("田亮" , "田雨橙", "child");
addPeopleToPeople("郭涛" , "郭子睿", "child");
addPeopleToPeople("张亮" , "张悦轩", "child");

//添加家长
["小小志", "王诗龄", "田雨橙", "郭子睿", "张悦轩"].forEach(function(entry) {
    addPeopleToEntity(entry, "小1班", "student");
});

//添加好友
["林志颖", "王岳伦", "田亮", "郭涛", "张亮"].forEach(function(entry) {
    addPeopleToPeople(entry, "李锐", "friend");
    addPeopleToPeople("李锐", entry, "friend");
});

addPeopleToEntity("李锐", "爸爸去哪园", "staff");
addPeopleToEntity("李锐", "小1班", "staff");

addEntityToEntity("爸爸去哪园", "小1班", "class");

function addPeopleToPeople (parentName, childName, relationship) {
    var parentId = db.people.find({name: parentName})[0]._id;
    var childId = db.people.find({name: childName})[0]._id;
    db.people.update({"name": parentName}, { $push: { people: { id: childId, relation: relationship}}});
}

function addPeopleToEntity (peopleName, entityName, relationship) {
    var peopleId = db.people.find({name: peopleName})[0]._id;
    var entityId = db.entities.find({name: entityName})[0]._id;
    db.entities.update({_id: entityId}, { $push: { people: { id: peopleId, relation: relationship}}});
}

function addEntityToEntity (parentName, childName, relationship) {
    var parentId = db.entities.find({name: parentName})[0]._id;
    var childId = db.entities.find({name: childName})[0]._id;
    db.entities.update({_id: parentId}, { $push: { entities: { id: childId, relation: relationship}}});
}
