'use strict';

/**
 * @ngdoc filter
 * @name blimpCockpitApp.filter:fromNow
 * @function
 * @description
 * # fromNow
 * Filter in the blimpCockpitApp.
 */
angular.module('blimpCockpitApp')
  .filter('fromNow', function () {
    return function (date) {
      return moment(date).fromNow();
    };
  });
