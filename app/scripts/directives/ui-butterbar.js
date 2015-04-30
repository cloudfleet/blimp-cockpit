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
      link: function (scope, el, attrs) {
        el.addClass('butterbar hide');
        scope.$on('$stateChangeStart', function (event) {
          event;
          $anchorScroll();
          el.removeClass('hide').addClass('active');
        });
        scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            el.addClass('hide').removeClass('active');
          })
        });
      }
    };
  }]);
