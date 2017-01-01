module.exports = function(grunt) {

  grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {},
            build: {
                src: 'lintTest.js',
                dest: 'dist-grunt/lintTest.min.js'
            }
        }
  
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};



// Note that instead of using the Node Streams .pipe() feature,
 // we are using properties of the build object src and dest to set the source and destination of the transform.
  // This is a key difference between Gulp and Grunt.