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
            .pipe(wait(300))
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gcmq())
            .pipe(gulp.dest('./assets/css'));
}

function minifyStyle(){
    return gulp.src('./assets/css/style.css')
        .pipe(wait(300))
        .pipe(rename('style.min.css'))
        .pipe(clean({compatibility: 'ie8'}))
        .pipe(gulp.dest('./assets/css'));
}

function scripts(){
    return gulp.src('./assets/js/*.js')
                .pipe(webpack({
                    mode: 'development',
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

function build(){
    gulp.series(style, minifyStyle);
    scripts();

    gulp.watch('./assets/js/*.js').on('change', scripts);
    gulp.watch('./assets/js/modules/**/*.js').on('change', scripts);
    gulp.watch('./assets/js/components/**/*.js').on('change', scripts);
    gulp.watch('./assets/scss/**/*.{scss,sass}').on('change', style);
}

function prod(){
    gulp.series(style, minifyStyle);
    scripts();
}

exports.prod = prod;
exports.build = build;