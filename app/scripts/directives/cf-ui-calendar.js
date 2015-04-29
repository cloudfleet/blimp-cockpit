'use strict';

/**
 * @ngdoc directive
 * @name blimpCockpitApp.directive:cfUiCalendar
 * @description
 * # cfUiCalendar
 */
angular.module('blimpCockpitApp')
  .directive('cfUiCalendar', function () {
    return {
      restrict: 'A',
      scope: {
        title: '=',
        showDateSelectors:'=',
        showList:'=',
        view: '=',
        showClass:'='
      },
      templateUrl: 'views/calendar.html'
    };
  });
