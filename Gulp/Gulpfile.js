var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['jshint', 'uglify']);
    gulp.watch('scss/*.scss', ['sass']);
});

// gulp.task('default', ['jshint', 'sass', 'uglify', 'watch']);

 // (e.g. linting, followed by testing, followed by compilation, followed by minification) 