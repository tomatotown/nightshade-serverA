var config = require('./config');
var routes = require('./app/app');

var port = process.env.PORT||config.app.port;
var server = routes.listen(port,function(){
  console.log('Nightshade-ServerA is listening on port '+server.address().port);
})
