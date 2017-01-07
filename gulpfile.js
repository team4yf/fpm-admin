var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');

// 建立js任务，进行代码检查
gulp.task('jshint', function(){
    gulp.src('./js/*.js')  // 检查文件：js目录下所有的js文件
        .pipe(jshint())       // 进行检查
        .pipe(jshint.reporter('default'))  // 对代码进行报错提示
});

//复制 vender 的js文件到指定的目录下
gulp.task('copy-vender',function(){
    return gulp.src(['./vender/lodash/dist/lodash.core.min.js'
        ])
        .pipe(gulp.dest('./lib'));
});

// gulp.task('default', ['jshint', 'copy-vender', 'copy-fonts']);
gulp.task('default', ['jshint']);
