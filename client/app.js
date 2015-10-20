'use strict';

// This creates a angular app with no dependencies (empty brackets)
angular.module('angularIntroduction',['highcharts-ng'])

// This creates an introduction controller with $scope as a dependency
angular.module('angularIntroduction').controller('IntroductionController',['$scope',function($scope){
	$scope.test = 'Hello World';

	var data = 

	//This is not a highcharts object. It just looks a little like one!
	$scope.chartConfig = {

		  series: [{
		     data: [10, 15, 12, 8, 7]
		  }],

		  title: {
		     text: 'Hello'
		  }
		  
	  };
	
}]);