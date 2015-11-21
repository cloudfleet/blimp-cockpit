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
  [ '$scope', 'mailpileApi', 'mails',
    function ($scope, mailpileApi, mails) {
      console.log('Creating cockpit scope');
      mailpileApi.getInboxCount().then(function(count){
        $scope.inboxCount = count;
      });

      mails.all().then(
        function(data) {
          $scope.unread_mails = data;
        }
      );
    }]);
