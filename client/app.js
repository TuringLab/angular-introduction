'use strict';

// This creates a angular app with no dependencies (empty brackets)
angular.module('angularIntroduction',[])

// This creates an introduction controller with $scope as a dependency
angular.module('angularIntroduction').controller('IntroductionController',['$scope',function($scope){
	$scope.test = 'Hello World';
}]);