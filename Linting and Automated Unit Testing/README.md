#### Introduction to Linting

In this unit, we will teach you about using Linters with Node to improve your code format quality.

Linting is the process of running a program to check for errors in your code, whether you're using JavaScript, CSS, or HTML. Generally speaking, Linting does not check for exceptions or other breaking errors in your code, but rather enforces code standards and optimizations designed to make your code not only run more smoothly, but be more readable in a standard format.

For example, a Linter would find:

Missing semicolons
References to weak type equality (== instead of ===)
Indentation Errors
Why Use a Linter?

You definitely want to use a Linter if:

You work with other developers
You are maintaining a large project
You want to write more consistent code
There are Linters for virtually every language; for JavaScript, reference these sites:

* jsHint

* jsLint

For a CSS Linter, go to:

* csslint

For an HTML Linter, go to this site:

* HTML Tidy

Linters are available within Node, and also as a plugin for popular code editors. Using a Linting plugin enables you to have your code analyzed as you create it, and helps you write cleaner and more consistent code.


#### Using jsLint

This unit will teach you about using jsLint with Node to lint your JavaScript. For complete configuration options, visit the jsLint Documentation.

In order to use jsLint to check your files, you first have to install it globally with npm, like so:

`npm install -g jslint`

Or you could also install it as a dev dependency in your node.js project, using this command:

`npm install --save-dev jslint`

After this, linting is as easy as typing:

`jslint /path/to/myfile.js`

Or type this to lint multiple files:

`jslint /path/to`

Using jsLint generates detailed warnings about your code, based on your linting settings. Use the information from the warnings to correct your code.

Tip: FixMyJS is a tool that you can use with your build processes to automatically correct many common linting errors. With FixMyJS, you don't actually edit any files containing linting errors. The advantage to this is that you will spend less time correcting your own mistakes. The disadvantage to using FixMyJS is that you won't receive feedback instructing you how to write code with less linting errors.
