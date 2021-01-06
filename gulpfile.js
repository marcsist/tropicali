var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

gulp.task("sass", function() {
      // we want to run "sass sass css/app.scss app.css --watch"
      return gulp.src('css/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('.'))
})


function defaultTask(cb) {


    cb();
  }
  
  exports.default = defaultTask