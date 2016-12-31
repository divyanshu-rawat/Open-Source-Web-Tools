'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')

  .controller('MainCtrl', ['$http' ,'$scope', function ($http,$scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  	$scope.callApi = function () {
		   
		   var url = 'http://localhost:3000/welcome';

		   $http.get(url)

		   .then(function (response){

		   		console.log(response);
			
			},

     		function (error){

     			console.log(error);
     		});
}


  }]);
