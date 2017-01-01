Introduction to Gulp

Gulp and Grunt are usually taught together since they’re both JavaScript task runners that automate your development workflow.

The difference between them is that Grunt uses the Gruntfile in a configuration-based approach, while Gulp codes its tasks using a Node style syntax, preferring code over configuration.

In addition, since Gulp is a streaming build system, file manipulation is all done in memory, and a file isn’t written until it receives a command to do so.

Because of Gulp’s use of node streams, you get fast builds.

As part of its workflow automation, Gulp uses plugins and options that execute specific tasks when a file is saved in your project.

Gulp’s strengths are that it is automated and uses npm modules.

In addition, Gulp integrates easily with PHP, .NET, Node.js, Java, and other platforms with integrations built into all major software development environments.

Software developers prefer Gulp due to its speed, since it’s built for concurrency. Gulp also provides a minimal API surface that produces easily readable and maintainable code.

The basis of Gulp is the use of Node.js streams. Gulp takes data, transforms it, and then pipes it to the next stream.

This way, for example, a file does not have to get minified and saved, and then opened again and uglified.

The output of minify pipes the data directly to uglify.

At the end of the process, the file can then be written out. This provides a performance improvement over the read/write at each step that other Javascript task runners use.

If the stream only renames or copies a file, then you can avoid reading it at all.


#### Using Gulp

To install Gulp to be used with your application, you first need to install the Gulp-CLI globally by entering:

`npm install -g gulp-cli`

Then install Gulp locally in your project by entering:

`npm install --save-dev gulp`

Create a Gulpfile in your directory, which is a file with the filename Gulpfile.js and add the following to it:

```javascript

var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

```

#### Building a Gulp Task

To build a Gulp task, first we must require in the plugin that we are going to be using for the task. For the sake of this demonstration we will be using the sass plugin, which compiles Sass to CSS for production usage.

```javascript

var sass = require('gulp-sass');
Then we create the task, which essentially involves using the pipe() function to route the files through the plugin into the desired destination file.

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

```
We can also bind this task to a watch to check the files and compile them as they are changed.

```javascript

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

```

* Many different tasks can be included into a watch statement.

```javascript

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['jshint', 'uglify']);
    gulp.watch('scss/*.scss', ['sass']);
});
```

And you can combine multiple tasks together to make a default task to be run when the command gulp is entered.

```javascript

gulp.task('default', ['jshint', 'sass', 'uglify', 'watch']);
```
