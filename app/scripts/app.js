'use strict';

/**
 * @ngdoc overview
 * @name blimpCockpitApp
 * @description
 * # blimpCockpitApp
 *
 * Main module of the application.
 */
angular
  .module('blimpCockpitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        //templateUrl: 'views/main.html',
        templateUrl: 'views/dashboard.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
