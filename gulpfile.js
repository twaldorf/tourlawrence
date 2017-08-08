var gulp = require('gulp');
var less = require('gulp-less');
var deploy      = require('gulp-gh-pages');

gulp.task('css', function() {
  gulp.src('css/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css/'))
    console.log('piping!');
})

gulp.task('watch', function() {
    gulp.watch('css/less/*.less', ['css']);  // Watch all the .less files, then run the less task
    console.log('watching!');
});

gulp.task('default', ['watch']);

gulp.task('deploy', function () {
  return gulp.src("./**/*")
    .pipe(deploy())
});
