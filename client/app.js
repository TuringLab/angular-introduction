'use strict';

// This creates a angular app with no dependencies (empty brackets)
angular.module('angularIntroduction',['ngResource'])

// Lets create a service to share the fruit resource
angular.module('angularIntroduction').service('Fruit',['$resource',function($resource){
	return new $resource('/fruits/:id',{id:'@_id'});
}]);

// This creates an introduction controller with $scope as a dependency
angular.module('angularIntroduction').controller('FruitController',['$scope','Fruit',function($scope,Fruit){

	$scope.message = 'Search for your favorite fruit';

	$scope.query = '';

	$scope.fruits = Fruit.query();
	var fruit = new Fruit();
	fruit.color='red';
	fruit.$save();

}]);