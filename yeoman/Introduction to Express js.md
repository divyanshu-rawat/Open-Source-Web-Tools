#### Introduction to Express.js

Express is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications. Because Node.js wasn’t developed to build websites, the Express framework is able to layer in built-in web application features and the Express API--the structure and functions you need to actually build a website. Use Node.js to create and run server-side applications utilizing Express.

As a fast, minimalistic, and highly flexible web application framework, Express provides a robust set of features for web and mobile applications. While creating an HTTP server with Node.js is possible, Express handles all the heavy lifting and allows for customization through middleware. This middleware manages tasks such as handling requests and views, routing, JSON, cookies, sessions, data, and authentication, among others.

Basically, Express simplifies web application development and makes it easier for you to write secure, modular, and fast applications. Since Express maintains a clear distinction between client and server, your app is easier to maintain and test as well.

#### Creating a Basic Express Server

In order to properly test your web applications without having to deploy them to an external server, you can set up a local server to host the application. With Node and Express.js, this is a relatively straightforward process.

Once you have Node installed, use npm in your command prompt to install Express, like so:

#### npm install express

Creating the Server File

A basic server file in Express looks like this:

```javascript

'use strict';
var express = require('express'),
app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/'));
var server = app.listen('3000', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at port:'+ port);
});

module.exports = app;
```

These are the bare essentials needed to create a server from which to host your files. Once you have created a file like this, you can then start your server from the command prompt. You do this by navigating to the directory that contains the file, and then typing:

`node server.js`

This will output into the console.

#### listening at port:3000

At this point, you can access your server by navigating to [http://localhost:3000]. If you move your Angular Single Page App to that directory, and name the main view file index.html, you will then be able to run your Angular application locally. This is essential as you begin to modify the configuration of your Angular application, test routing configuration, and use data.
