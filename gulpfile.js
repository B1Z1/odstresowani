var gulp                = require('gulp'),
    browserSync         = require('browser-sync'),
    sass                = require('gulp-sass'),
    autoprefixer        = require('gulp-autoprefixer'),
    clean               = require('gulp-clean-css'),
    rename              = require('gulp-rename'),
    babel               = require('gulp-babel');

gulp.task('start', function(){
    
    browserSync.init({
        server: 'src/',
    });

    gulp.watch('assets/js/*.js', gulp.parallel('babel'));

    gulp.watch('assets/sass/*.sass', gulp.series('sass', gulp.parallel('clean')));
    gulp.watch('assets/sass/**/*.sass', gulp.series('sass', gulp.parallel('clean')));
    gulp.watch('assets/sass/**/**/*.sass', gulp.series('sass', gulp.parallel('clean')));

})

/**
 * 
 * Converter from sass to css
 * @Sass
 * @Autoprefixer last 2 versions
 * 
 */
gulp.task('sass', function(){
    return gulp.src('assets/sass/*.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('assets/css'))
            .pipe(browserSync.reload({
                stream: true,
            }));
});

/**
 * 
 * Minify all css files
 * 
 */
gulp.task('clean', function(){
    return gulp.src('assets/css/style.css')
            .pipe(rename('style.min.css'))
            .pipe(clean({compatibility: 'ie8'}))
            .pipe(gulp.dest('assets/css'))
            .pipe(browserSync.reload({
                stream: true,
            }));
});

/**
 * 
 * Converter from ES6 to ES5
 * @Babel
 * 
 */
gulp.task('babel', function(){
    return gulp.src('assets/js/main.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(gulp.dest('assets/js/updated'));
});
