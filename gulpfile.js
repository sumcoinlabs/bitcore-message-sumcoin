'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-sumcoin');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
