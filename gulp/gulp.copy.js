const gulp = require('gulp'),
    cfg = require('./gulp.copyConfig');
    sourceFiles = cfg.sourceFiles;
    resourceFiles = cfg.resourceFiles;

function gulpCopy() {
    // console.log(cfg.sourceFiles,cfg.resourceFiles);
    for (let i = 0; i < sourceFiles.length; i++) {
        gulp.src(sourceFiles[i])
            .pipe(gulp.dest(resourceFiles[i]));
    }
}

module.exports = gulpCopy;