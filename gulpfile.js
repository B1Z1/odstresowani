let gulp                = require('gulp'),
    sass                = require('gulp-sass'),
    autoprefixer        = require('gulp-autoprefixer'),
    clean               = require('gulp-clean-css'),
    rename              = require('gulp-rename'),
    babel               = require('gulp-babel'),
    gcmq                = require('gulp-group-css-media-queries');

function style(){
    return gulp.src('assets/scss/style.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gcmq())
            .pipe(gulp.dest('assets/css'))
            .pipe(rename('style.min.css'))
            .pipe(clean({compatibility: 'ie8'}))
            .pipe(gulp.dest('assets/css'));
}

function scripts(){
    return gulp.src('./assets/js/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(gulp.dest('assets/js/updated'))
}

function init(){
    style();
    scripts();

    gulp.watch('./assets/js/*.js').on('change', scripts);
    gulp.watch('./assets/scss/**/*.{scss,sass}').on('change', style);
}

exports.default = init;