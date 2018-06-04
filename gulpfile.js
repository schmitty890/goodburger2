var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var maps = require('gulp-sourcemaps');

// remove dist and public assets css
gulp.task('clean', function() {
  console.log('gulp clean task');
  gulp.src([
    'public/assets/build'
      ])
      .pipe(clean());
});

// convert sass into css, concatenate and minify. add it to build/css folder
gulp.task('styles', function() {
  console.log('gulp styles task');
  gulp.src('sass/styles.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    // .pipe(concat('app.css'))
    // .pipe(cssMin())
    .pipe(gulp.dest('public/assets/build/css'));
});

// concat and minify public assets js scripts that end in .js
gulp.task('scripts', function() {
  console.log('gulp scripts task');
  gulp.src([
    './public/assets/js/*.js'
      ])
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(gulp.dest('public/assets/build/js'));
});

gulp.task('default', ['clean', 'scripts', 'styles']);
