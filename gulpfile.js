"use strict";
// Include gulp
const gulp = require('gulp');
const cssMinify = require('gulp-clean-css');
const sass = require('gulp-sass');
const map = require('map-stream');
const rename = require('gulp-rename');

const argsMap = (function(){
    let map = {};
    process.argv.forEach(function(arg){
        if (arg.startsWith("--")) {
            let argVal = arg.split("=");
            map[argVal[0].replace("--", "")] = (argVal[1] || "null");
        }
    });
    return map;
})();

const errorHandler = function (err) {
    if (err) {
        console.error(errMsg);
        process.exit(-1);
    }
};

function fileReporter(msgPrefix, silent){
    return map(function(file, cb){
        if(file._contents && !silent){
            console.log("[" + msgPrefix + "]", file.history[0]);
        }
        cb(null, file);
    });
}

gulp.task('sass', ["sass-class"]);

gulp.task('sass-class', function(){
    console.log('compiling scss');
    let destDir = argsMap["dir"] || "dist/.tmp/public/styles/css";
    let silent = !!argsMap["silentLog"];
    return gulp.src(['public/styles/sass/**', '!public/styles/**/*.css'])
        .pipe(sass())
        .on("error", errorHandler)
        .pipe(fileReporter("Sass-Compile", silent))
        .pipe(gulp.dest(destDir))
        .pipe(rename(function (path) {
            if (path.extname) {
                path.extname = ".min" + path.extname;
            }
        }))
        .pipe(cssMinify({compatibility: 'ie8'}))
        .on("error", errorHandler)
        .pipe(fileReporter("Compress Sass", silent))
        .pipe(gulp.dest(destDir));
});

gulp.task('default', ['sass']);
