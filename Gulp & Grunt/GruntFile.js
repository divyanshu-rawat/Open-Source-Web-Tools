module.exports = function(grunt) {

  grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
            options: {},
            build: {
                src: 'lintTest.js',
                dest: 'dist-grunt/lintTest.min.js'
            }
        },

         
         jshint: {
         files: ['Gruntfile.js', 'lintTest.js'],
         options: {
         globals: {
          jQuery: true
        }
      }
    }
    ,

     watch: {
        files: ['lintTest.js'],
        tasks: ['uglify', 'jshint']
    }
  
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['uglify','jshint','watch']);

};



// Note that instead of using the Node Streams .pipe() feature,
 // we are using properties of the build object src and dest to set the source and destination of the transform.
  // This is a key difference between Gulp and Grunt.