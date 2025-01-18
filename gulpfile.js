const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function sassCompiler() {
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

function jsCompress() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function imgCompress() {
  return gulp
    .src('./src/images/*', {
      encoding: false
    })
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

exports.default = function() {
  gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(sassCompiler));
  gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.series(jsCompress));
  gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.series(imgCompress));
}

