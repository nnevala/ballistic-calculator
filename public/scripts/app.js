'use strict';

angular.module('infinityTheGameApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$locationProvider', '$routeProvider', '$interpolateProvider',
     function($locationProvider, $routeProvider, $interpolateProvider) {
       $locationProvider.html5Mode(true).hashPrefix('!');
       $routeProvider.when('/', {
         templateUrl: '/views/main.html',
         controller: 'MainCtrl'
       })
       .when('/weapons', {
         templateUrl: '/views/weapons.html',
         controller: 'WeaponsCtrl'
       })
       .otherwise({
        redirectTo: '/'
       });
     }
    ]);
