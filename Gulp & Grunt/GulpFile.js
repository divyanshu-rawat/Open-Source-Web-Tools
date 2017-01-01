var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', ['uglify']);

// Create an uglify task by calling the task function on the gulp object. Pass a string 'uglify' as the first parameter.

  gulp.task('uglify', function() {


  		     return gulp.src('lintTest.js')
            
            .pipe(uglify())
            
            .pipe(gulp.dest('dist-gulp'));

    });





// gulp.task('default', ['jshint', 'sass', 'uglify', 'watch']);

 // (e.g. linting, followed by testing, followed by compilation, followed by minification) 