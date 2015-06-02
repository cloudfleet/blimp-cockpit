'use strict';

/**
 * @ngdoc directive
 * @name blimpCockpitApp.directive:uiButterbar
 * @description
 * # uiButterbar
 */
angular.module('blimpCockpitApp')
  .directive('uiButterbar', ['$rootScope', '$anchorScroll', function ($rootScope, $anchorScroll) {
    return {
      restrict: 'AC',
      template: '<span class="bar"></span>',
      link: function (scope, el) {
        el.addClass('butterbar hide');
        scope.$on('$stateChangeStart', function () {
          $anchorScroll();
          el.removeClass('hide').addClass('active');
        });
        scope.$on('$stateChangeSuccess', function (event) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            el.addClass('hide').removeClass('active');
          });
        });
      }
    };
  }]);
