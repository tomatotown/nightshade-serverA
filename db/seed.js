//删除所有测试幼儿园
db.entities.remove({});
//创建测试幼儿园
db.entities.insert({name: "爸爸去哪园", logo: "", classes: [], staffs: []});
//创建测试班级
db.entities.insert({name: "小1班", staffs: [], children: []});

//删除所有测试人员
db.people.remove({});

//创建测试老师
db.people.insert({name: "李锐", nickname: "", gender: "男", dob: "1973-07-24", friends: [], entities: []});

//创建测试儿童
db.people.insert({name: "小小志", nickname: "Kimi", gender: "男", dob: "2009-09-15", parents:[]});
db.people.insert({name: "王诗龄", nickname: "Angela", gender: "女", dob: "2009-10-13", parents:[]});
db.people.insert({name: "田雨橙", nickname: "Cindy", gender: "女", dob: "2008-4-15", parents:[]});
db.people.insert({name: "郭子睿", nickname: "石头", gender: "男", dob: "2007-2-26", parents:[]});
db.people.insert({name: "张悦轩", nickname: "天天", gender: "男", dob: "2007-11-12", parents:[]});

//创建测试家长
db.people.insert({password: "123456789", name: "林志颖", mobile: "12345678901", gender: "男", nickName: "", emUsername: "test1", friends: [], children:[]});
db.people.insert({password: "123456789", name: "王岳伦", mobile: "12345678902", gender: "男", nickName: "", emUsername: "test2", friends: [], children:[]});
db.people.insert({password: "123456789", name: "田亮", mobile: "12345678903", gender: "男", nickName: "", emUsername: "test3", friends: [], children:[]});
db.people.insert({password: "123456789", name: "郭涛", mobile: "12345678904", gender: "男", nickName: "", emUsername: "test4", friends: [], children:[]});
db.people.insert({password: "123456789", name: "张亮", mobile: "12345678905", gender: "男", nickName: "", emUsername: "test5", friends: [], children:[]});

setParents("小小志", "林志颖");
setParents("王诗龄", "王岳伦");
setParents("田雨橙", "田亮");
setParents("郭子睿", "郭涛");
setParents("张悦轩", "张亮");

joinClass("小小志", "小1班");
joinClass("王诗龄", "小1班");
joinClass("田雨橙", "小1班");
joinClass("郭子睿", "小1班");
joinClass("张悦轩", "小1班");

setClass("爸爸去哪园", "小1班");
setStaff("爸爸去哪园", "李锐");
setStaff("小1班", "李锐");

function setParents(childName, parentName) {
    var childId = db.people.find({name: childName})[0]._id;
    var parentId = db.people.find({name: parentName})[0]._id;
    db.people.update({"name": parentName}, { $set: {children:[childId]}});
    db.people.update({"name": childName}, { $set: {parents:[parentId]}});
};

function joinClass(childName, className) {
    var classId = db.entities.find({name: className})[0]._id;
    var childId = db.people.find({name: childName})[0]._id;
    db.entities.update({"name": className}, { $set: {children:[childId]}});
    db.people.update({"name": childName}, { $set: {entities:[classId]}});
};

function setClass(nurseryName, className) {
    var classId = db.entities.find({name: className})[0]._id;
    db.entities.update({"name": nurseryName}, { $set: {classes:[classId]}});
};

function setStaff(entityName, staffName) {
    var staffId = db.people.find({name: staffName})[0]._id;
    var entityId = db.entities.find({name: entityName})[0]._id;
    db.entities.update({"name": entityName}, { $set: {staffs:[staffId]}});
    db.people.update({"name": staffName}, { $set: {entities:[entityId]}});
};
