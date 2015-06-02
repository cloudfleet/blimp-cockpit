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
  ['$scope', '$http', '$state', 'cockpitApi',
    function($scope, $http, $state, cockpitApi) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login

      cockpitApi.login($scope.user.username, $scope.user.password).then(

        function(){
          console.log('logged in successfully');
          $state.go('app.cockpit');
        },function(res){
          console.log(res);
        }
      );
    };
  }]);
