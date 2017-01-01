#### yeoman

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

#### Build & development

Run `grunt` for building and `grunt serve` for preview.

#### Testing

Running `grunt test` will run the unit tests with karma.



#### Introduction to Using Yeoman

Yeoman [http://yeoman.io] utilizes a set of tools for automating development workflow and generates projects in any language. Yeoman employs a modular architecture with customizable scale to help you quickly and easily create new modules, packages, or projects; bootstrap new services; and promote new projects by providing sample apps to other developers. In addition, Yeoman suggests best practices, and offers tools such as style guides that help you streamline the maintenance of your new and existing web app projects.

Specifically, Yeoman creates the basic folders, files, and configurations for your app. During development, Yeoman's tools create the development environment, automatically reload the browser when changes are saved, handle notification for apps, and ensure packages are up-to-date. When it comes time to deploy your app, the tools will minify all the code, optimize images, compile files, and package the app for distribution.

What makes Yeoman unique is its generator plugin. You run the generator using the yo command to build the structure for parts of an application or complete projects. Since Yeoman is supported by an active development community, there are many publicly available generators, or you can create your own for a specific workflow.

The Yeoman workflow is promoted via the generators and is a robust client-side stack, consisting of tools and frameworks that help developers quickly build web apps. Even though the Yeoman workflow tools have been developed and are maintained separately, they are compatible with each other.

The Yeoman Workflow Tools

Yeoman's workflow tools are the scaffolding tool, the build tool, and the package manager.

The Scaffolding Tool

yo scaffolds a new application by writing your build configuration, and pulling in relevant build tasks and package manager dependencies, such as npm, that you might need for your build.

Use npm to install yo globally, like so:

`npm install -g yo`

Then install the needed generator using this command:

`npm install -g generator-angular`

Note: New Node and npm users might run into permissions issues. These issues appear in the form of EACCESS errors during installation. Refer to the npm guide to fix permissions if this happens to you.

yo is also a fully interactive tool. Simply typing yo in a terminal will display a list of options to manage the generators. These options include run, update, install, help, and other utilities; here are a few commands:

yo --help Access the full help screen

yo --generators List all installed generators

yo --version Get the version

The Build Tool

You use the Build tool to build, preview, and test your app.

The Package Manager

The Package Manager, such as npm or Bower, manages your application's dependencies, eliminating the need to manually download and manage your scripts. npm is used for development/server dependencies, while Bower handles client/browser dependencies.

Note: Since Bower is a package manager, it won't add your files to the index.html file; you must do that.


#### Using a Yeoman Generator

To use Yeoman, first you need to install it with this command:

`npm install --global yo`
If you have already installed Yeoman in the previous step, you can check by typing:

yo --version
Install a generator using this command (in this case, the Yeoman team's Angular generator):

`npm install -g generator-angular`
Then, create a directory that you want your project to be generated in:

mkdir example-project
cd example-project
Once you are within the desired directory, type yo and the name of the generator you're using. This will execute the generator command to scaffold your app.

Yeoman then generates the scaffolding for your app, including building out example HTML files, and getting Karma, Protractor, and Bower ready for your application.

You can use this scaffold, or any of the other Yeoman generators, to build applications faster since much of the work of setting up your initial application scaffolding has been done for you.


In addition, Yeoman offers support for linting and testing, providing extra resources for your web app development.
