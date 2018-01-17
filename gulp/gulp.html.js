const gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    gulpRemoveHtml = require('gulp-remove-html'),
    removeEmptyLines = require('gulp-remove-empty-lines');
    config = require('./gulp.config'),
    changed = require('gulp-changed');


function gulpHtml(){
    let options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: false, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: false, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };
    return gulp.src(config.src + config.html)
        .pipe(changed(config.src + config.html))
        .pipe(gulpRemoveHtml()) //清除特定标签
        .pipe(removeEmptyLines({
            removeComments: true
        })) //清除空白行
        .pipe(htmlmin(options))
        .pipe(gulp.dest(config.dist + '/views'));
}

module.exports = gulpHtml;