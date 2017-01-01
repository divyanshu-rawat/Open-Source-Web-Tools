#### Introduction to Unit Test with Karma and Jasmine

Unit Testing tests individual functions within your code to ensure that they're functioning properly and that they have expected outputs.
With Unit Tests, you divide your code into small, testable modules with each module having its own functionality and level of abstraction.

The benefits of Unit Testing are:

Ensuring code quality
Decreasing the number of regressions

Allowing you to easily change your code without fear of breaking it

In this unit, we’ll cover Unit Testing with Karma and Jasmine.

Karma is a JavaScript test runner that runs on all test frameworks.

Jasmine is a behavior-driven development framework for JavaScript.

Jasmine’s framework offers structure for organizing the tests and functions for asserting the output of your code.

Even though Jasmine is defined as a Behavior Driven Development framework (BDD), we will use it to write Unit Tests with a Test Driven Development (TDD) approach.

The general steps involved with Unit Testing are:

* Describe the object with type and name.
* Load your object's module.
* Load mock modules as needed.
* Inject dependencies and spy on methods.
* Initialize the object. Services need to get injected, controllers are instantiated using the $controller service, and we need to $compile directives.
* Write expectations that are grouped in describe blocks.

#### Unit Testing with Jasmine

Unit Testing with Jasmine involves isolating specific functionality within your application, and testing that functionality to see if it performs the desired task.

Learn more about Jasmine with the Jasmine Cheat Sheet.

#### The three primary functions that comprise a Jasmine test are:

`describe(message, test_group) it(message, test) expect(value)`

#### Describe

* describe(message, test_group) is what Jasmine uses to group tests together, providing an easy cue for which component is being tested when the tests are being run. The first parameter is the message that will be passed to label the test. This description should be indicative of the outcome expected from the tests. For example, naming the description "testing getUser" is less useful than saying "getUser should retrieve user values." The second parameter of the function contains the test group itself.

```javascript
describe("getUser should retrieve user values", function() {

});
It

it(message, test) defines individual tests in Jasmine. Similar to describe(), the first parameter is a description message to identify which test is being run. The second parameter is the test itself.

describe("searchFunction() should perform searches properly", function() {
  it('should not show the search box if empty', function(){

  })
  it('should not search if the query is less than 3 characters', function(){

  })
  it('should return a result', function(){

  })
});
```

#### Expect

* This is the condition by which the test fails or passes. Use expect(variable).toEqual(value) to evaluate the result of your functions to determine whether the test has succeeded or not. These results will vary depending on what you are testing. There are various methods to Expect, including toEqual, toBeGreaterThan, toBeUndefined, or toMatch in order to use regex to evaluate the result. Regex, a regular expression, is a special text string for describing a search pattern.

```javascript

describe("searchFunction() should perform searches properly", function() {
  it('should not show the search box if empty', function(){
    var query = ''
    expect(results).toEqual(0)
  })
  it('should not search if the query is less than 3 characters', function(){
    var query = 'wa'
    expect($scope.results.length).toEqual(0)
  })
  it('should return a result', function(){
    var query = 'warble'
    expect(results.length).toBeGreaterThan(0)
  })
});
```
#### Setting up KARMA 

Once you have created some Jasmine tests, it's time to get Karma set up on your machine to run those tests from the command line.

First, you will want to globally install karma-cli to get access to the command line tools of Karma.

`npm install -g karma-cli`

Then you will add Karma and Jasmine to your project. From within your project's directory, run:

`npm install karma jasmine karma-jasmine --save-dev`

Now that Karma is installed, we need to configure it. First, initialize Karma, which creates a configuration file for your project.

`karma init`

After you have run the initialization, locate the file karma.conf.js in your project, and add in your project files to the files array, like so:

```javascript
files: [
  '../vendor/angular.js',
  '../vendor/angular-mocks.js',
  'js/app.js',
  'tests/*.js'
],

```
After you have done all of this, you can run your tests by executing Karma from the command line by using:

`karma start`

Or

`npm test`
