const gulp = require('gulp');
const babel = require('gulp-bable');
gulp.task('default', function () {
  //node source
  gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
  //browser source
  gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("pulice/dist"));
});
