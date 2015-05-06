var gulp = require('gulp');
var shell = require('gulp-shell');
var config = require('./config');

gulp.task('default', shell.task('mongo <%=db%>/<%=dbname%> ./db/seed.js', {
    templateData: { db: config.db.host, dbname: config.db.name}
}));

gulp.task('mocha', shell.task('./node_modules/.bin/mocha'));
