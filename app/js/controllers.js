'use strict';

var templateControllers = angular.module('templateControllers', [
  'ngRoute'
]);

templateControllers.controller('AboutController', ['$scope', '$route',
  function ($scope, $route) {
    // Controller method for Home
    $scope.person = {
    	fullname: 'Võ Doãn Đồng',
    	birthday: '28/10/1994',
    	gender: 'Male',
    	nativeland: 'Quang Binh',
    	job: 'Intership',
    	team: 'Team Php',
    	email: 'vddongbk@gmail.com',
    	phone: '(+84) 165 747 4245',
    	github: 'at-dongvd',
    	urlgit: 'https://github.com/at-dongvd',
    	urlcv: 'https://i.topcv.vn/dongvodoan?ref=126024',
    	html: '70%',
    	js: '60%',
    	design: '65%',
    	english: '70%',
    	php: '80%',
    };
}]);

templateControllers.controller('AppController', ['$scope', '$route',
  function ($scope, $route) {
    // Controller method for About
    $scope.template = $route.current.templateUrl;
}]);
templateApp.controller('HeaderPartialCtrl', ['$scope', function ($scope) {
}]);

templateApp.controller('FooterPartialCtrl', ['$scope', function ($scope) {
  // Do something...
}]);