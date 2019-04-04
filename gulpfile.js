var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass files
gulp.task('styles', function(){
  return gulp.src('app/scss/app.scss')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});

// Watch changes on sass files
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', gulp.series('styles'));
});
