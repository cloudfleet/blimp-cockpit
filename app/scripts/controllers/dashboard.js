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
  [ '$scope', 'mock', 'todoStorage',
    function ($scope, mock, todoStorage) {
      console.log('Creating cockpit scope');

      $scope.todos = todoStorage.get();


      $scope.mailStyle = function(mail)
      {
        return {'font-weight': mail.unread ? 'bold' : 'normal'};
      };

      $scope.countUnread = function() {
        return 0 || $scope.last_mails && $scope.last_mails.filter((item) => {return item.unread;}).length;
      }

      // END MOCKUP
    }]);
