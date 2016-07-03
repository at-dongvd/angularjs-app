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

templateControllers.controller('AppController', ['$scope', '$http',
  function ($scope, $http) {
    // Controller method for App
  var url = 'http://localhost:8000/data/rate.json';   
  $http.get(url).then(function(response) {
    $scope.rates= response.data.rates;
    // $scope.toType= $scope.rates.VND;
    // $scope.fromType = $scope.rates.VND;
    $scope.fromValue =1;
    $scope.forExConvert();
  });

 $scope.forExConvert = function() {
   $scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
   $scope.toValue = $scope.toValue;
 };
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