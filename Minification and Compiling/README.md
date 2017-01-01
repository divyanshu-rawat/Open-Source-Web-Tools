Introduction to Minification

Minification is the process of removing whitespace and extra characters to speed up code execution and download time, especially within JavaScript.

How does it work?

Minification takes your raw code as you have typed it and strips it to the absolute bare minimum for it to still function correctly.

Minification also provides a slight barrier to those who would want to comprehend and potentially plagiarize your code. It does this by:

* Concatenating code onto as few lines as possible
* Stripping as much whitespace as possible
* Shortening variable names, often to single characters

For example, this code sample:
```javascript

function doStuff(){
    var thisMessage = "hello world!"
    setTimeout(function(){
    alert(thisMessage)
    }, 500)
}
```

Would be transformed into this code by a minifier:

```javascript

function doStuff(){var o="hello world!"
setTimeout(function(){alert(o)},500)}

````

There are minifiers for every language of code available. Reference these links for minifiers for JavaScript, CSS, and HTML.

* JavaScript: UglifyJS

* CSS: CleanCSS

* HTML: HTML Tidy


#### Using UglifyJS

This unit will teach you how to use UglifyJS within Node to minify files in your development project for use in production environments.

For more detail, visit npm's listing for uglify.

In order to use UglifyJS as a command line tool, install it as a global with npm, like so:

`npm install uglify-js -g`

Then simply run uglify in the command line, with input files first and options last, as in this code:

`uglifyjs --compress --mangle -- input.js`
