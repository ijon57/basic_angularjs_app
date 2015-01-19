angular.module('app', ['ngRoute'])

.service('NumbersService', function() {
  this.randomFloat = function(){
    return Math.random();
  },
  this.randomInteger = function(){
    return Math.round(Math.random()*100);
  };
})

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller:'NumbersController',
    templateUrl:'templates/numbers.html',
  })
  .when('/float', {
    controller:'NumbersController',
    templateUrl:'templates/float.html'
  })
  .when('/integer', {
    controller:'NumbersController',
    templateUrl:'templates/integer.html'
  })
  .otherwise({
    redirectTo:'/'
  });
})

.controller('NumbersController', function($scope, NumbersService) {
  $scope.randomFloat = NumbersService.randomFloat();
  $scope.randomInteger = NumbersService.randomInteger();
});