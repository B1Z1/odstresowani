let gulp                = require('gulp'),
    sass                = require('gulp-sass'),
    autoprefixer        = require('gulp-autoprefixer'),
    clean               = require('gulp-clean-css'),
    rename              = require('gulp-rename'),
    babel               = require('gulp-babel'),
    webpack             = require('webpack-stream'),
    wait                = require('gulp-wait'),
    gcmq                = require('gulp-group-css-media-queries');

function style(){
    return gulp.src('./assets/scss/style.scss')
            .pipe(wait(600))
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gcmq())
            .pipe(gulp.dest('./assets/css'))
            .pipe(gulp.src('./assets/css/style.css'))
            .pipe(rename('style.min.css'))
            .pipe(clean({compatibility: 'ie8'}))
            .pipe(gulp.dest('./assets/css'));
}

function scripts(){
    return gulp.src('./assets/js/*.js')
                .pipe(webpack({
                    mode: 'production',
                    entry: {
                        main: './assets/js/main.js',
                        brain: './assets/js/brain.js'
                    },
                    output: {
                        filename: '[name].js'
                    },
                    performance: {
                        hints: false
                    }
                }))
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(gulp.dest('assets/js/dest'))
}

function init(){
    style();
    scripts();

    gulp.watch('./assets/js/*.js').on('change', scripts);
    gulp.watch('./assets/js/components/*.js').on('change', scripts);
    gulp.watch('./assets/scss/**/*.{scss,sass}').on('change', style);
}

exports.default = init;