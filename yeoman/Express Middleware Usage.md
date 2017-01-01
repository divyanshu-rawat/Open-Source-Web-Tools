#### Express Middleware Usage

Express has many third-party middleware modules that can be used on the web server, with more middleware being created every day.

Note: For a list of common middleware, see the Third-party middleware page on the Express website.

Installing Express middleware is done through the NPM command line interface; the same way we installed Express.

One middleware is bodyParser. It simplifies parsing incoming web requests from browsers or applications.

Note: See the body-parser site on GitHub for more information, and additional examples.

The following command allows you to download and install the bodyParser middleware.

`npm install body-parser --save-dev`

Note: Remember that the --save and --save-dev switches save dependencies to the package.json file.

Once we have bodyParser installed, we can configure it in our server.js file. Instantiate Express as follows:
```javascript
var express = require('express');
var app = express();
```

And add a require statement with `'body-parser' as a parameter.

`var bodyParser = require('body-parser');`

The next step is to configure the bodyParser to listen for incoming JSON and URL Encoded data in the body.

```javascript

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

This will parse the request, and set it to the body property of the incoming request object.

```javascript

app.use(function (req, res) { res.setHeader('Content-Type', 'text/plain'); res.end(JSON.stringify(req.body, null, 2)); });

```

Responding to REST requests is done using the Express app object's get(), post(), put(), and delete() methods. For a full list of routing methods, see the Express Routing documentation.

```javascript

app.get('/', function (req, res) {
  res.send('root');
});

app.post('/about', function (req, res) {
  res.send('about');
});

```
