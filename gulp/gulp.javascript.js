const gulp = require('gulp'),
    watch = require('gulp-watch-path'),
    uglify = require('gulp-uglify'),
    config = require('./gulp.config'),
    changed = require('gulp-changed');

function gulpJs(){
    return gulp.src(config.static + config.js)
    .pipe(changed(config.static + config.js))
    .pipe(uglify())
    .pipe(gulp.dest(config.dist_static + 'js/'))
}

module.exports = gulpJs;