'use strict';

var templateControllers = angular.module('templateControllers', [
  'ngRoute'
]);

templateControllers.controller('AboutController', ['$scope', '$http',
  function ($scope, $http) {
    // Controller method for About
    var url = 'http://localhost:8000/data/person.json';   
  $http.get(url).success(function(response) {
    $scope.person = response;
  });
}]);

templateControllers.controller('AppController', ['$scope', '$route',
  function ($scope, $route) {
    // Controller method for App
  
}]);

templateApp.controller('HeaderPartialCtrl', ['$scope', function ($scope) {
    //Do something
}]);

templateApp.controller('FooterPartialCtrl', ['$scope', '$http', function ($scope, $http) {
  var url = 'http://localhost:8000/data/contact.json';
   $http.get(url).success( function(response) {
                           $scope.contact = response.contact;
                           $scope.icon = response.icon;                     
    });
}]);