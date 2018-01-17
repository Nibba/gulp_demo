
    
    
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


    let handleError = function (err) {
        let colors = gutil.colors;
        gutil.log(colors.red("error"));
        gutil.log('fileName: ' + colors.red(err.fileName));
        gutil.log('lineNumber: ' + colors.red(err.lineNumber));
        gutil.log('message: ' + err.message);
        gutil.log('plugin: ' + colors.yellow(err.plugin));
    }

    // gulp.task('watchjs', function () {
    //     gulp.watch(src + static + 'js/**/*.js', function (event) {
    //         let paths = watchPath(event, src + static + '', dist_static + '')
    //         let combined = combiner.obj([
    //             gulp.src(paths.srcPath),
    //             // sourcemaps.init(),
    //             uglify(),
    //             // sourcemaps.write('./'),
    //             gulp.dest(paths.distDir)
    //         ])
    //         combined.on('error', handleError)
    //     })
    // })

    // gulp.task('uglifyjs', function () {
    //     let combined = combiner.obj([
    //         gulp.src(src + static + 'js/**/*.js'),
    //         uglify(),
    //         gulp.dest(dist_static + 'js/')
    //     ])
    //     combined.on('error', handleError);
    // })

    // gulp.task('watchimage', function () {
    //     gulp.watch(src + static + 'images/**/*', function (event) {
    //         let paths = watchPath(event, src + static + '', dist_static + '')
    //         gulp.src(paths.srcPath)
    //             .pipe(imagemin({
    //                 progressive: true
    //             }))
    //             .pipe(gulp.dest(paths.distDir))
    //     })
    // })

    // gulp.task('image', function () {
    //     gulp.src(src + static + 'images/**/*')
    //         .pipe(imagemin({
    //             progressive: true
    //         }))
    //         .pipe(gulp.dest(dist_static + '/images'))
    // })

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