'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:SigninFormController
 * @description
 * # AboutCtrl
 * Controller of the SigninFormController
 */
angular.module('blimpCockpitApp')
  .controller('SigninFormController',
  ['$scope', '$http', '$state', 'cockpitApi', '$cookies',
    function($scope, $http, $state, cockpitApi, $cookies) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login

      cockpitApi.login($scope.user.username, $scope.user.password).then(

        function(res){
          $scope.$emit('LOGED_IN');
          $state.go('app.cockpit');
        },function(res){

        }
      );
    };
  }]);
