'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the blimpCockpitApp
 */
angular.module('blimpCockpitApp')
  .controller('MenuCtrl',
  [ '$scope', 'mailpileApi',
    function ($scope, mailpileApi) {
      console.log('Creating menu scope');
      mailpileApi.getInboxCount().then(function(count){
        $scope.inboxCount = count;
      });
    }]);
