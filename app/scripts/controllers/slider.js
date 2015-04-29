'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:SliderCtrl
 * @description
 * # AboutCtrl
 * Controller of the SliderCtrl
 */
angular.module('blimpCockpitApp')
  .controller('SliderCtrl', function($scope) {
  $scope.cost = 40;
  $scope.range = {
    min: 30,
    max: 60
  };
  $scope.currencyFormatting = function(value) {
    return"$"+value.toString();
  }
});
