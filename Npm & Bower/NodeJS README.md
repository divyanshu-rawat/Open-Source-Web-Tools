
#### Introduction to Node.js and Node Package Manager

#### About Node.js  

Node.js allows you to run JavaScript code in the back end, outside a browser.

NOTE: Node is not a webserver and, by itself, it doesn't do anything. There is no config file where you point it to your HTML files. If you want it to be an HTTP server, you have to write an HTTP server (with the help of its built-in libraries). Node.js is just another way to execute code on your computer. It is simply a JavaScript runtime.

Once you've installed Node.js, you can leverage the many packages available through the Node Package Manager community.

Node is ideal for I/O bound applications (or those that wait on user events) that must handle a large number of concurrent connections. Good examples of I/O bound applications include data-intensive realtime applications (DIRT), single page applications (SPA), JSON APIs, and data-streaming applications. Node is less ideal for CPU-heavy applications.

Node markets itself as an asynchronous, event-driven framework built on top of Chrome's JavaScript engine and designed for creating scalable network applications. It is basically JavaScript, plus a bunch of C/C++ under the hood designed to interact with the file system, starting up HTTP or TCP servers, and much more.

Node is single-threaded and uses a concurrency model based on an event loop. It is non-blocking, so it doesn't make the program wait, but instead it registers a callback and lets the program continue. This means Node can handle concurrent operations without multiple threads of execution, so it can scale very well. In Node, all the libraries have been designed from the ground up to be non-blocking.

Node owes a big part of its success to npm, the package manager that comes bundled with it.

#### The advantages of using npm include:

It installs application dependencies locally, not globally. 
It handles multiple versions of the same module at the same time.
You can specify tarballs or git repositories as dependencies.
It's easy to publish your own module to the npm registry.
It's useful for creating CLI utilities that others can install (with npm) and use immediately.
Node allows you to perform other tasks while waiting to be notified when the response is available.
The Node application is not buffering data into memory, but instead it is outputting it chunk-by-chunk.
Node Package Manager (or npm, for short) gives you access to the wide array of open source packages written for Node.js. In this subsequent course, you will learn to fully utilize npm's diverse functionality when creating complex applications.

Once you have downloaded and installed Node.js on your computer, you can use the commands node and npm from your command prompt.

#### Node.js Basics

Node.js enables you to run JavaScript code on your computer without a browser. By doing so, you have access to many different abilities, such as running a server, and performing computational tasks that would normally be reserved for languages like C++, all with JavaScript.

To run a file in Node, simply type this command into the command prompt in the directory that contains the script you want to execute:

node somefile.js

#### About Node Package Manager

An npm package is a directory structure with a package.json file describing the package. This is referred to as a complex module because npm recognizes many more package.json tags than does Node. The starting point for npm's package.json is the CommonJS Packages/1.0 specification.

The main npm command also has a long list of sub-commands, each designed for specific package management operations. These cover every aspect of the lifecycle of publishing packages (as an npm package author), and when downloading, using, or removing packages (as an npm consumer).

With a diverse and ever expanding collection of tools available, npm offers great ways to assist in making your programming tasks faster, more accurate, and more accountable, including, but not limited to:

Setting up web servers
Precompiling stylesheets for production with CSS preprocessors
Minifying JavaScript
Linting your JavaScript (checking it for basic syntax errors and adherence to common standards)
Running unit tests through Karma
Running end-to-end tests with Protractor
The npm registry is growing on a daily basis, and is enormously popular across an ever expanding range of the world's largest companies.

#### Finding Packages

By default, npm modules are retrieved over the Internet from the public package registry maintained on [http://npmjs.org]. If you know the module name, it can be installed by typing the following:

npm install module-name

But what if you don't know the module name? How do you discover the interesting modules?

The website [http://npmjs.org] publishes an index of the modules in that registry, and the [http://search.npmjs.org] site lets you search that index.

npm also has a command-line search function to consult the same index:

npm search module-name

What npm does is help you set up conditions that allow your application to work smoothly. Many packages include inner modules that are useful for other software.

More helpful documentation on Node and npm can be found in the npm documentation.
