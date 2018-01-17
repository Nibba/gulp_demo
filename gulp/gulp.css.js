const gulp = require('gulp'),
    watchPath = require('gulp-watch-path'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    config = require('./gulp.config'),
    changed = require('gulp-changed');

function gulpCss(){
    return gulp.src(config.static + config.css)
    // .pipe(sourcemaps.init())
    .pipe(changed(config.static + config.css))
    .pipe(autoprefixer({
        browsers: [
            "last 2 version",
            "ie 9",
            "> 1%"                
        ]
    }))
    .pipe(minifycss())
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dist_static + 'css/'))
}

module.exports = gulpCss;