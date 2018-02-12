'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const karma = require('karma');

gulp.task('clean', function() {
  return gulp.src('coverage', {read: false})
      .pipe(clean());
});

gulp.task('test', ['clean'], function (done) {
  new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    browsers: ['PhantomJS']
  }, done).start();
});
