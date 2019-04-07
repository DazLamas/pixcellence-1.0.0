var gulp = require('gulp');
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');

// Compile sass files
gulp.task('styles', function(){
  return gulp.src('app/scss/app.scss')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/css'))
});

// Watch changes on sass files
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', gulp.series('styles'));
});

gulp.task('minify-css', () => {
     return gulp.src('styles/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});
