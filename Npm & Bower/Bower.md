#### Introduction to Bower

#### Bower is a tool powered by Node.js that allows you to manage the packages you are using within an application.

Bower is similar to npm, with the exception that it is designed exclusively for web packages such as jQuery, Bootstrap, and Font Awesome. Bower is used to handle client/browser dependencies, while npm is used for dev/server dependencies. In addition, Bower keeps track of all the dependencies for your application in one file, bower.json, that is stored within your application.

All of this functionality gives you the ability to:

Install dependencies with one command, either one at a time, or all at once after you've set up your dependencies in bower.json
Update all dependencies with one command, either individually or combined
Uninstall dependencies easily
Define specific packages for development and production environments
Bower is optimized for the front end. If multiple packages depend on a package, such as jQuery, Bower will download jQuery just once. This is known as a flat dependency graph and it helps reduce page load.

With Bower, you can easily import all the libraries and packages you need for your front end, as well as maintain your development and production library ecosystems without having to find, download, and store individual scripts.

Bower can manage components that contain HTML, CSS, JavaScript, fonts, or even image files. Bower doesn’t concatenate or minify code, or do anything else; it simply installs the right versions of the packages and their dependencies that you need.

If you are producing reusable components for the web, you can also package your own application and save it without the dependencies. Further, the user of your component can install all the dependencies to make your module run with a single command. This can make your package size smaller in your repository, while still maintaining the same functionality.


#### Installing Bower

You will install Bower globally using npm. This is done by opening your command prompt, and then typing:

```javascript
npm install -g bower
```

#### Bower prerequisites are node, npm and git.

#### Initializing bower.json

With your command prompt in the root directory of your project, type bower init, and accept all the defaults.

This will create a bower.json file that looks something like this:
```javascript

{
  "name": "bower",
  "authors": [
    "Developer <dev@someemail.com>"
  ],
  "description": "",
  "main": "",
  "license": "MIT",
  "homepage": "",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ]
}

````

#### Using Bower

Install Bower packages by simply typing bower install package-name.

For example, to install Angular you'd type the following:

```javascript
bower install angular --save
```

Looking at the bower.json file, you'll see a new dependencies section.

```javascript

"dependencies": {
    "angular": "^1.5.7"
}

```

You'll notice that Bower uses the same caret notation as Node.js.

You can use the Bower search page to see a list of popular packages and also search for packages. For data formatting, you can install moment with bower install moment --save. For helpful JavaScript utilities, you can install lodash with bower install lodash --save.

The bower.json file now looks like this:

```javascript

"dependencies": {
    "angular": "^1.5.7",
    "moment": "^2.13.0",
    "lodash": "^4.13.1"
}

```

You can now add the packages to your app:
```javascript
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/lodash/dist/lodash.min.js"></script>
<script src="bower_components/moment/min/moment.min.js"></script>
```
When you learn about the task runners Grunt and Gulp in an upcoming unit, you'll see how to automatically insert the proper Bower package <script></script> tags instead of searching and adding them manually.
