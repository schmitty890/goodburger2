var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var maps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

// remove dist and public assets css
gulp.task('clean', function() {
  console.log('gulp clean task');
  return gulp.src([ // return acts as sort of a promise, without the return statement, other tasks wont know until the clean task is finished.
    'public/assets/build/'
      ])
      .pipe(clean());
});

// convert sass into css, concatenate and minify. add it to build/css folder
gulp.task('compileSass', function() { // clean is a dependency of compileSass
  console.log('gulp compileSass task');
  return gulp.src('sass/styles.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    // .pipe(concat('app.css'))
    // .pipe(cssMin())
    .pipe(gulp.dest('public/assets/build/css'));
});

// concat and minify public assets js scripts that end in .js
gulp.task('concatScripts', function() {
  console.log('gulp concatScripts task');
  return gulp.src([
    './public/assets/js/*.js'
      ])
      .pipe(maps.init())
      .pipe(concat('app.js'))
      .pipe(maps.write('./'))
      // .pipe(uglify())
      .pipe(gulp.dest('public/assets/build/js'));
});

gulp.task('minifyCSS', ['compileSass'], function() {
  console.log('gulp minifyCSS task');
  gulp.src([
    'public/assets/build/css/styles.css'
    ])
    .pipe(cssMin())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('public/assets/build/css/'));
})

gulp.task('minifyScripts', ['concatScripts'], function() {
  console.log('gulp minifyScripts task');
  gulp.src([
    'public/assets/build/js/app.js'
    ])
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('public/assets/build/js/'));
});

gulp.task('watchFiles', function() {
  console.log('gulp watchFiles task');
  gulp.watch('sass/**/*.scss', ['compileSass']);
  gulp.watch('public/assets/js/*.js', ['concatScripts']);
})

gulp.task('serve', ['watchFiles']);

gulp.task('build', ['concatScripts', 'compileSass', 'minifyScripts', 'minifyCSS']);


gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
