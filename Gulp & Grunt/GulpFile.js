var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('default', ['uglify','lint']);

// Create an uglify task by calling the task function on the gulp object. Pass a string 'uglify' as the first parameter.

  gulp.task('uglify', function() {


  		     return gulp.src('lintTest.js')
            
            .pipe(uglify())
            
            .pipe(gulp.dest('dist-gulp'));

    });

  gulp.task('lint', function() {

  		gulp.src('lintTest.js')

            .pipe(jshint())

            .pipe(jshint.reporter('default'));




});




// gulp.task('default', ['jshint', 'sass', 'uglify', 'watch']);

 // (e.g. linting, followed by testing, followed by compilation, followed by minification) 