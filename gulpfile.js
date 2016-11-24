// including plugins
var gulp = require('gulp'),
	less = require("gulp-less"),
	watch = require('gulp-watch');
// task
gulp.task('less', function () {
  return gulp.src('./less/style.less') // path to your file
  .pipe(less())
  .pipe(gulp.dest('./css/'));
});
gulp.task('watch', function() {
    gulp.watch('./less/*.less', ['less']);  // Watch all the .less files, then run the less task
});