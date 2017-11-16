"use strict";

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    gulpif = require("gulp-if"),
    less = require("gulp-less"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    uglifycss = require("gulp-uglifycss"),
    argv = require("yargs").argv;

gulp.task("scss", function () {
    return gulp.src(
        [
            "scss/lato.scss"
        ]
    )
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("lato.css"))
    .pipe(gulpif(argv.production, uglifycss()))
    .pipe(gulpif(argv.production, rename({suffix: ".min"})))
    .pipe(gulp.dest("build"));
});

gulp.task("less", function () {
    return gulp.src(
        [
            "less/lato.less"
        ]
    )
    .pipe(less())
    .pipe(concat("lato.css"))
    .pipe(gulpif(argv.production, uglifycss()))
    .pipe(gulpif(argv.production, rename({suffix: ".min"})))
    .pipe(gulp.dest("build"));
});

gulp.task("default", ["scss"]);