const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    config = require('./gulp.config'),
    changed = require('gulp-changed');

function gulpImage() {
    return gulp.src(config.static + config.image)
    .pipe(changed(config.static + config.image))    
    .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest(config.dist_static + '/images'))
}

module.exports = gulpImage;