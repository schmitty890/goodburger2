var gulp = require('gulp');
var wrench = require('wrench');
var runSequence = require('run-sequence');

wrench
  .readdirSyncRecursive('./gulp-tasks')
  .filter(function(file) {
    return(/\.(js)$/i).test(file);
  })
  .map(function(file) {
    require('./gulp-tasks/' + file)
  });

// start gulp task by cleaning then running serve
gulp.task('default', function(done) {
  runSequence('clean', 'serve', function() {
    // console.log('Run something else');
    done();
  });
});
