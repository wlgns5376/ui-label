/**
 * Created by Administrator on 2016-12-07.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('scss/label.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('src/css'))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
});