'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the blimpCockpitApp
 */
angular.module('blimpCockpitApp')
  .controller('DashboardCtrl',
  [ '$scope', 'mailpileApi'
    function ($scope, mailpileApi) {
      console.log('Creating cockpit scope');
      mailpileApi.getInboxCount().success(function(count){
        $scope.inboxCount = count;
      });


    }]);
