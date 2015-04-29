'use strict';

/**
 * @ngdoc directive
 * @name blimpCockpitApp.directive:uiScrollTo
 * @description
 * # uiScrollTo
 */
angular.module('blimpCockpitApp')
  .directive('uiScrollTo', ['$location', '$anchorScroll', function($location, $anchorScroll) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          $location.hash(attr.uiScrollTo);
          $anchorScroll();
        });
      }
    };
  }]);
