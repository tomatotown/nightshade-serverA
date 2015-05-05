###ServerA开发文档

###搭建研发环境
1. 安装nodejs版本管理工具[nvm](https://github.com/creationix/nvm)  
``curl https://raw.githubusercontent.com/creationix/nvm/v0.24.0/install.sh | bash``  
``source ~/.nvm/nvm.sh``
1. 使用nvm安装nodejs  
``nvm install 0.12.1``
1. 安装nodejs包管理工具[npm](https://github.com/npm/npm)  
``curl -L https://npmjs.com/install.sh | sh``
1. 安装项目依赖package  
``npm install``
1. 安装开发环境  
    * [atom](https://atom.io/) 或
    * [sublime text 3](http://www.sublimetext.com/3)

###数据库初始化与迁移(TBD)
1. 安装[MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
``brew update``  
``brew install mongodb``

###启动服务
1. 启动ServerA  
``node server.js``  

###测试
1. 运行测试  
``./node_modules/.bin/mocha``  

###技术栈
* 后端 Node.js(0.12.1)/[Express.js](http://expressjs.com/4x/api.html)  
* 持久化 MongoDB/mongoose  
* 测试 [Mocha](http://mochajs.org/)/[SuperTest](https://github.com/visionmedia/supertest)
* 文档语法 API Blueprint

###第三方服务
* [环信](http://www.easemob.com/)
    * [API文档](http://www.easemob.com/docs/gettingstart/)  
