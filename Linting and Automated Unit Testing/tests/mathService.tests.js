//  Karma is an automated testing tool that uses Node to execute tests against your functions that you write using a testing framework 
//  such as Jasmine or Mocha.
//  For this tutorial we are going to be using the Jasmine framework


 describe('mathService', function () {

 		 it('add is defined', function () {
        
        	expect(mathService.add).toBeDefined();
      });


 		       it('should add', function () {

		        var first = 3;
		        var second = 5;

		        var expected = first + second;
		        var actual = mathService.add(first, second);

		        expect(expected).toBe(actual);
      });

    
    });


 // Congratulations! You have successfully written automated unit tests in Jasmine and executed them with Karma. 


 // Note: The it function is a single unit test. The expect function call is an assertion.
 // The toBeDefined function asserts that the mathService object has a method named add defined.