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


      // END MOCKUP
    }]);
