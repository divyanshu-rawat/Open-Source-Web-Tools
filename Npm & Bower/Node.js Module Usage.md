#### Node.js Module Usage

#### Installing Node.js Modules and Dependencies

In order to use npm, you need to initialize a package.json file, which tells npm what modules you are using.

This enables you to give your app to other developers without the node_modules folder and allows them to install npm dependencies by running npm install.

To begin, go to the root folder of your application, and type npm init.

Here you will be asked questions about the details of your Node.js application. When you are done, you will have a file labeled package.json that looks similar to this:

```javascript
  {
  "name": "npm-modules",
  "version": "1.0.0",
  "description": "This is an app that shows how to use npm modules.",
  "main": "app.js",
  "scripts": {
    "test": "karma start karma.conf.js"
  },
  "author": "somename",
  "license": "ISC"
}
```

Once this is complete, you can add modules by typing npm install module-name.

For example, if you want to install Express, you'd type npm install express --save.

This will cause Express to install itself with each of its dependencies.

As with your app, Express also has a package.json that lists the modules it requires.

Each of Express' dependencies also has a package.json file with its dependencies.

This cascades down until every module's dependencies are met.

If you open your package.json file, you'll see a new block called dependencies. Within this block, you'll see Express listed.

```javascript
{
  "name": "npm-modules",
  "version": "1.0.0",
  "description": "This is an app that shows how to use npm modules.",
  "main": "app.js",
  "scripts": {
    "test": "karma start karma.conf.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.14.0"
  }
}
```

Navigate to the node_packages folder and you'll see an Express folder.

Within that folder, you'll find the package.json file for Express. If you open it, you'll see all the dependencies of Express.

```javascript

javascript "dependencies":
{ 
  "accepts": "~1.3.3",
  "array-flatten": "1.1.1",
  "content-disposition": "0.5.1",
  "content-type": "~1.0.2",
  "cookie": "0.3.1",
  "cookie-signature": "1.0.6",
  "debug": "~2.2.0",
  "depd": "~1.1.0",
  "encodeurl": "~1.0.1",
  "escape-html": "~1.0.3",
  "etag": "~1.7.0",
  "finalhandler": "0.5.0",
  "fresh": "0.3.0",
  "merge-descriptors": "1.0.1",
  "methods": "~1.1.2",
  "on-finished": "~2.3.0",
  "parseurl": "~1.3.1",
  "path-to-regexp": "0.1.7",
  "proxy-addr": "~1.1.2",
  "qs": "6.2.0",
  "range-parser": "~1.2.0",
  "send": "0.14.1",
  "serve-static": "~1.11.1",
  "type-is": "~1.6.13",
  "utils-merge": "1.0.0",
  "vary": "~1.1.0" 
},

```

The Express folder has its own node_modules folder that contains each of those dependencies.

How do you keep track of all these dependencies with your version control? The beauty of npm and package.json is that you can exclude the node_modules folder in your app from version control.

When other developers obtain your code, all they have to do is run npm install. All the dependencies of your app are installed and they're ready to go!

If you want to use Bluebird for promises in your Express app, type npm install bluebird --save. Your package.json file now looks something like this:

If you want to use a module like Gulp that helps with development, but is not to be deployed as part of your build, you'd type npm install gulp --save-dev.

Now you have another block in your package.json file that is called devDependencies. This is how you would add development tools like Karma to your app.

```javascript
 "dependencies": {
    "bluebird": "^3.4.1",
    "express": "^4.14.0"
  },
  "devDependencies": {
    "gulp": "^3.9.1"
  }
```

#### Module Dependencies and Semantic Versioning

The Node.js module world is fast moving and new module versions are constantly being developed and released.

For many modules to evolve functionally, this means that there could be breaking changes from one version to the next that could be crippling to a large code base.

Because of this, Node.js module developers are urged to use the Semantic Versioning System (SemVer).

This states that Node.js modules should use a version with three parts, X.Y.Z. Each of these letters represents a number with:

X being a major version
Y being a minor version
Z being a patch version


For example, 1.2.34 would represent version 1.2 patch 34.

An increment of major version (X) will contain any backward incompatible changes to the API.

An increment of minor version (Y) will contain backward compatible changes to the private code and any API functionality that has become deprecated.

An increment of patch (Z) must be backward compatible bug fixes.

For more information, visit the SemVer website.

Look at the dependencies section of your package.json file.

```javascript

 "dependencies": {
    "bluebird": "^3.4.1",
    "express": "^4.14.0"
  },
  "devDependencies": {
    "gulp": "^3.9.1"
  }
  
```

When you use npm install some-module, npm installs the latest version of the module, and adds it to package.json with the caret ^ notation:

"express": "^4.14.0"
If the major (X) and minor (Y) versions are included, then the caret indicates that only patch versions will be loaded.

If there is no minor version indicated, then both patch and minor versions will be loaded, like so:

"express": "^4"
As a best practice, update only patch versions; the notation that Express uses when using npm install module-name is recommended unless there are special requirements.

There are many ways to indicate module versions in package.json utilizing notations such as x, >, >=, ~, and =, among others.

For more information, see the AngularJS SemVer documentation.

#### Loading Node.js Modules Into a Node.js App

To use Express in a Node.js app, you would first need to create a Javascript file for the app. Since Express can be used to create an HTTP server, it could be called server.js.

To load the Express Node.js module, you use the Node.js require() method.

```javascript

var express = require('express');

//instantiate Express
var app = express();

//Set up REST responses
app.get('/', function(req, res){
  res.send('Hello from Express!');
});

//Start the server
app.listen(3000, function(){
  console.log("Express running on port 3000.");
});

```

You simply run your Node.js app by entering node server.js, and head to [http://localhost:3000/] in your web browser.



