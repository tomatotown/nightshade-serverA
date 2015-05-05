var gulp = require('gulp');
var shell = require('gulp-shell');

// gulp.task('default', function() {
    // shell.task('echo <%= db/dbname%>', {
    //         templateData: {
    //             db: "localhost:27017",
    //             dbname: "nightshade_dev"
    //         }
    //     });
// });
gulp.task('default', shell.task('mongo <%=db%>/<%=dbname%> ./db/seed.js', {
    templateData: {
                db: "localhost:27017",
                dbname: "nightshade_dev"
            }
}));

gulp.task('mocha', shell.task('./node_modules/.bin/mocha'));
