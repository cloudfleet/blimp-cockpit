'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blimpCockpitApp
 */
angular.module('blimpCockpitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // config
    // TODO: move into a config service
    $scope.app = {
      name: 'cloud fleet',
      version: '1.0.1',
      // for chart colors
      color: {
        primary: '#e26826',
        info:    '#088076',
        success: '#27c24c',
        warning: '#fad733',
        danger:  '#f05050',
        light:   '#e8eff0',
        dark:    '#3a3f51',
        black:   '#1c2b36'
      },
      settings: {
        themeID: 1,
        navbarHeaderColor: 'bg-cf-orange',
        asideColor: 'bg-black',
        headerFixed: true,
        asideFixed: true,
        asideFolded: true
      }
    };
  });
