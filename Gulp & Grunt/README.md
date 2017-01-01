#### Introduction to Grunt

Employing task runners in your application automates certain tasks and saves you time during development.

Grunt is a very effective JavaScript task runner with a robust feature set that automates builds.

You can also use Grunt to automate other repetitive tasks such as linting, minifying, and validating your JavaScript code.

Gruntfile.js configures or defines tasks and loads Grunt plugins. These plugins are useful because they add specific features and functionality to your application.

#### A Gruntfile contains the following:

* The wrapper function
* Project and task configuration
* Grunt plugins and tasks loading
* Custom tasks

Gruntfile.js is a valid JavaScript that belongs in the root directory of your project, next to the package.json file, and should be committed with your project source.

You install and manage Grunt and Grunt plugins via npm, the Node Package Manager.

Type the following to put the Grunt command in your system path, which allows it to be run from any directory.

`npm install -g Grunt-cli`

Installing Grunt-cli does not install the Grunt task runner. The Grunt CLI runs the version of Grunt that has been installed next to a Gruntfile.

Each time Grunt is run, it looks for a locally installed Grunt using node's require() system.

This enables Grunt to run from any subfolder in your application, which allows multiple versions of Grunt to be simultaneously installed on the same machine.

#### Using Grunt

To use Grunt, first install it globally with npm

`npm install -g grunt-cli`

Then install it into your project directory as well.

`npm install grunt --save-dev`

Before installing plugins, make sure you have a package.json file in your project by initializing with NPM. Grunt uses the package.json file when using plugins.

`npm init`

Before creating a Gruntfile to load your tasks, let's go ahead and install a plugin to utilize within the Gruntfile.

In this case we are installing the Uglify grunt plugin provided by npm.

Almost all Grunt plugins on npm will have the grunt-contrib prefix indicating that they can be used automatically within the Grunt task runner.

`npm install grunt-contrib-uglify --save-dev`

Create a Gruntfile in your project directory. This will be named Gruntfile.js, and be in the main project directory next to your package.json file. and is used to configure or define tasks and load plugins.

```javascript

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};

```

Let's break this down into it's component parts to understand it more.

First, Grunt uses the Node style module export syntax to define tasks within a Gruntfile.

```javascript

module.exports = function(grunt) {

});

```

Then there is a initConfig call, which Grunt plugins use to define configurable options for each plugin. 

In Uglify's case, there is a banner option that will show certain info in the console while Uglify is running. 

Also are the build options, which tell the plugin where to look for source files and what destination to write to.

Note that the Gruntfile is reading package.json to provide default values for pkg.name.

```javascript

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
});

```

This command loads the plugin that you installed earlier with npm

```javascript

grunt.loadNpmTasks('grunt-contrib-uglify');

```
And this command registers the default task and attaches uglify to it.

```javascript

grunt.registerTask('default', ['uglify']);

```

Once all of this is completed uglify will run with the grunt command.

#### For more info about Grunt, check the following links out:

* Configuring Tasks
* Creating Tasks
