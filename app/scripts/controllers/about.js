'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blimpCockpitApp
 */
angular.module('blimpCockpitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
