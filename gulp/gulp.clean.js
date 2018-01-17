const gulp = require('gulp'),
    del = require('del'),
    cfg = require('./gulp.config');


function clean() {
    return del([
        config.dist,
        // '!dist/**/*'
    ])
}

module.exports = clean;