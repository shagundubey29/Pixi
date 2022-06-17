"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

let sass_files_path = "./src/sass/*.scss";
let sass_resets_files_path = "./src/sass/resets/*.scss";
let sass_compiled_files_path = "./src/css";

function SassToCss() {
    return gulp
        .src(sass_files_path)
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(sass_compiled_files_path));
}

function WatchChange() {
    gulp.watch(sass_files_path, SassToCss);
    gulp.watch(sass_resets_files_path, SassToCss);
}

exports.WatchChange = WatchChange;
