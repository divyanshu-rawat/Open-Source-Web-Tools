#### Introduction to Compiling

#### Compiling Your Front-End with Node

In standard computer programming, compiling generally refers to rendering a machine-code version of a file programmed in a higher level language.

In web development, however, compiling refers to the process by which your code is made production ready.

This process often includes minification or other optimizations that are not intended to be edited, but instead will make your code run faster.

With Node and task runners like Gulp or Grunt

you can effectively build an asset pipeline into your application that will handle all the compiling tasks for you.
Such compilers can include, but are not limited to:

* CSS Preprocessors like Sass or Less
* JavaScript template engines like Handlebars
* Module bundlers like Browserify or Webpack

Using these tools will help you to make your application run smoothly and quickly in production.

With Grunt or Gulp, you can run these processes automatically to create your production builds with a single command, while still maintaining your development code for easy modification


#### Using Compilers

Most compilers are installed and used in a similar fashion; for instance, all of them are available through npm. Detailed instructions for installing and using each of these tools are contained in these links:

* CSS Precompilers Sass, Less

* JavaScript Precompilers and Bundlers Handlebars, Browserify, Webpack, Google Closure Compiler

Let's use Less as an example. Less is a precompiler for CSS that allows developers to write functions, variables, and other programming into their CSS.

For our intents and purposes, Less needs to be compiled into basic CSS to be production ready. To do this, first install it with npm:

`npm install less`

Now we can take our Less files and convert them to CSS with a simple command, where styles.less is the path to the Less files that need to be compiled, and styles.css is the desired CSS output path:

`lessc styles.less styles.css`

And that's it!

The real magic in using Compilers is using task runners like Grunt and Gulp to tie everything together in one big automated process or build script. 
