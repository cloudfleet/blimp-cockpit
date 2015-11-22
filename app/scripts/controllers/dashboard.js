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
  [ '$scope', 'mock', 'todoStorage', '$uibModal',
    function ($scope, mock, todoStorage, $uibModal) {
      console.log('Creating cockpit scope');

      $scope.todos = todoStorage.get();


      $scope.mailStyle = function(mail)
      {
        return {'font-weight': mail.unread ? 'bold' : 'normal'};
      };

      $scope.closeOpenedMail = function () {
        $scope.modalInstance.close();
      };

      $scope.openMail = function (mail) {

        $scope.opened_mail = mail;

          $scope.modalInstance = $uibModal.open({
            animation: true,
            scope: $scope,
            templateUrl: 'myModalContent.html',
            controller: 'DashboardCtrl',
            size: "lg",
            resolve: {
              items: function () {
                return $scope.items;
              }
            }
          });

        };
    }]);
