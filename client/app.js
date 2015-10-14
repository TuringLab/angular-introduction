'use strict';

// This creates a angular app with no dependencies (empty brackets)
angular.module('angularIntroduction',['ngResource'])

// This creates an introduction controller with $scope as a dependency
angular.module('angularIntroduction').controller('FruitController',['$scope','$resource',function($scope,$resource){

	$scope.message = 'Search for your favorite fruit';

	$scope.query = '';

	$scope.fruits = $resource('/fruits/:id',{id:'@_id'}).query();

}]);