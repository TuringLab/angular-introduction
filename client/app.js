'use strict';

// This creates a angular app with no dependencies (empty brackets)
angular.module('angularIntroduction',['ngResource'])

// Lets create a service to share the fruit resource
angular.module('angularIntroduction').service('Fruit',['$resource',function($resource){
	var Fruit = new $resource('/fruits/:id',{id:'@_id'});
	Fruit.prototype.greeting = function(){
		return 'Hello I am a ' + this.color + ' ' + this.name + ', how lovely to meet you!';
	};
	return Fruit;
}]);

// This creates an introduction controller with $scope as a dependency
angular.module('angularIntroduction').controller('FruitController',['$scope','Fruit',function($scope,Fruit){

	$scope.message = 'Search for your favorite fruit';

	$scope.query = '';

	$scope.fruits = Fruit.query();

}]);