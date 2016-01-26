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
  .filter('format_contact', function () {
    return function (contact) {
      return contact;
    };
  });
