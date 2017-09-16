'use strict';

/**
 * Modulo que contiene la configuracion genérica.
 *
 * @module
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

const gulp = require('gulp');
const babel = require('gulp-babel');
const minify  = require('gulp-babel-minify');

gulp.task('build-server', () => {
    return gulp.src('server/index.js')
        .pipe(babel({
            presets: ['es2015','es2016','es2017']
        }))
        //.pipe(minify())
        .pipe(gulp.dest('built'));
});

/*gulp.task('build-package', () => {
    return gulp.src('package.json')
        //.pipe(minify())
        .pipe(gulp.dest('../built'));
});
*/

gulp.task('build-modules', () => {
    return gulp.src('server/modules/**/*.js')
        .pipe(babel({
            presets: ['es2015','es2016','es2017']
        }))
        //.pipe(minify())
        .pipe(gulp.dest('built/modules'));
});

gulp.task('build-middlewares', () => {
    return gulp.src('server/middlewares/*.js')
        .pipe(babel({
            presets: ['es2015','es2016','es2017']
        }))
        //.pipe(minify())
        .pipe(gulp.dest('built/middlewares'));
});

gulp.task('build-config-json', () => {
    return gulp.src('server/config/*.json')
        //.pipe(minify())
        .pipe(gulp.dest('built/config'));
});

gulp.task('build-config', () => {
    return gulp.src('server/config/*.js')
        .pipe(babel({
            presets: ['es2015','es2016','es2017']
        }))
        //.pipe(minify())
        .pipe(gulp.dest('built/config'));
});

gulp.task('watch', function() {
    gulp.watch(['server/server.js'], ['build-server']);
    gulp.watch(['server/modules/**/*.js'], ['build-modules']);
    gulp.watch(['server/middlewares/*.js'], ['build-middlewares']);
    gulp.watch(['server/config/*.js'], ['build-config']);
    gulp.watch(['server/config/*.json'], ['build-config-json']);
});

gulp.task('default', ['build-server','build-modules','build-middlewares','build-config','build-config-json'] );