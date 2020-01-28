var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-clean-css');

// Sass
gulp.task('sass', function () {
  return gulp
    .src('./scss/tiny-grid.scss')
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch('./scss/tiny-grid.scss', gulp.series('sass'));
});

// Default
gulp.task('default', gulp.series('sass'));
