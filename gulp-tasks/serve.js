var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var reload = browserSync.reload;
var clean = require('gulp-clean');
var maps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watchSass = require("gulp-watch-sass");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('serve', ['browser-sync'], function() {
  gulp.watch('public/assets/js/*.js').on('change', reload);
  gulp.watch('public/assets/build/css/*.css').on('change', reload);
  gulp.watch('sass/partials/*.scss', ['sass']);
  // gulp.watch('/**/*.css').on('change', reload);
});

// nodemon listen on localhost 20080
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:20080',
    open: 'google-chrome',
    port: 10080
  });
});

gulp.task('nodemon', ['sass', 'concatScripts'], function(done) {
  var running = false;
  return nodemon({
    script: 'server.js',
    watch: 'public/assets/'
  }).on('start', function() {
    console.log('-----------------start-----------------');
    if(!running) {
      done();
    }
    running = true;
  }).on('restart', function() {
    console.log('-----------------restart-----------------');
    setTimeout(function() {
      reload();
    }, 2000);
  })
});

// take the styles in styles.scss and convert them to .css and push them to the assets/css folder
gulp.task('sass', function() {
  return gulp.src('sass/styles.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('public/assets/build/css'))
});

// clean the build folder
gulp.task('clean', function() {
  console.log('gulp clean task');
  return gulp.src([ // return acts as sort of a promise, without the return statement, other tasks wont know until the clean task is finished.
    'public/assets/build/'
      ])
      .pipe(clean());
});

// // concat, map, and write js to build folder
gulp.task('concatScripts', function() {
  console.log('gulp concatScripts task');
  return gulp.src([
    './public/assets/js/*.js'
      ])
      // .pipe(maps.init({loadMaps: true}))
      .pipe(maps.init())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public/assets/build/js'))
      .pipe(uglify())
      .pipe(rename({ extname: '.min.js' }))
      .pipe(maps.write('./'))
      .pipe(gulp.dest('public/assets/build/js'));
});

// return gulp.src(sourceFiles)
//     .pipe(sourcemaps.init())
//     .pipe(plumber())
//     .pipe(concat(filenameRoot + '.js'))
//     .pipe(gulp.dest(destinationFolder)) // save .js
//     .pipe(uglify({ preserveComments: 'license' }))
//     .pipe(rename({ extname: '.min.js' }))
//     .pipe(sourcemaps.write('maps'))
//     .pipe(gulp.dest(destinationFolder)) // save .min.js

// convert sass into css, concatenate and minify. add it to build/css folder
// gulp.task('compileSass', function() { // clean is a dependency of compileSass
//   console.log('gulp compileSass task');
//   return gulp.src('sass/styles.scss')
//     .pipe(maps.init())
//     .pipe(sass())
//     .pipe(maps.write('./'))
//     // .pipe(concat('app.css'))
//     // .pipe(cssMin())
//     .pipe(gulp.dest('public/assets/css/'))
//     .pipe(gulp.dest('public/assets/build/css'));
// });
