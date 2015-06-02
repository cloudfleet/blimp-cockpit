'use strict';

/**
 * @ngdoc directive
 * @name blimpCockpitApp.directive:setNgAnimate
 * @description
 * # setNgAnimate
 */
angular.module('blimpCockpitApp')
  .directive('setNgAnimate', ['$animate', function ($animate) {
  return {
    link: function ($scope, $element, $attrs) {
      $scope.$watch(function () {
        return $scope.$eval($attrs.setNgAnimate, $scope);
      }, function (valnew) {
        $animate.enabled(!!valnew, $element);
      });
    }
  };
}]);
