let gulp     = require('gulp');
let sass     = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
// let concat   = require('gulp-concat');
let rename   = require('gulp-rename');
// let uglify   = require('gulp-uglify');

/*
 * Dev Tasks:
 */
// Compile sass files
gulp.task('styles', () => {
  return gulp.src('app/scss/app.scss')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('app/css'))
});

// Watch changes on sass files
gulp.task('watch', () => {
  gulp.watch('app/scss/**/*.scss', gulp.series('styles'));
});



/*
 * Prod Tasks:
 */

//CSS
gulp.task('prod-css', () => {
     return gulp.src('app/css/app.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('app/css'));
});
