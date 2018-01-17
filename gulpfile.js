
    
    
    const gulp = require('gulp'),
        gutil = require('gulp-util'),
        changed = require('gulp-changed'),
        gulpSequence = require('gulp-sequence').use(gulp);

    // libs
    const clean = require('./gulp/gulp.clean'),
        gulp_config = require('./gulp/gulp.config'),
        gulpCss = require('./gulp/gulp.css'),
        gulpHtml = require('./gulp/gulp.html'),
        gulpCopy = require('./gulp/gulp.copy'),
        gulpJs = require('./gulp/gulp.javascript'),
        gulpImage = require('./gulp/gulp.image');

    gulp.task('build:js', () => gulpJs());

    gulp.task('build:image', () => gulpImage());

    gulp.task('build:css', () => gulpCss());

    gulp.task('build:html', () => gulpHtml());

    gulp.task('build:copy', () => gulpCopy());

    gulp.task('clean', () => clean());

    gulp.task('build', gulpSequence(
        'clean',
        'build:css',
        'build:image',
        'build:js', [
            'build:html',
            'build:copy'
        ]
    ));

    gulp.task('watch', ['build'], function () {
        gulp.watch([`${gulp_config.src}${gulp_config.static}js/**/*.js`], ['build:js']);
        gulp.watch([`${gulp_config.src}${gulp_config.static}css/**/*.css`], ['build:css']);
        gulp.watch([`${gulp_config.src}${gulp_config.static}images/**/*.images`], ['build:images']);
        gulp.watch([`${gulp_config.src}views/**/*.html`], ['build:html']);
    });
