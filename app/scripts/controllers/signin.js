'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:SigninFormController
 * @description
 * # AboutCtrl
 * Controller of the SigninFormController
 */
angular.module('blimpCockpitApp')
  .controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      $http.post('api/login', {username: $scope.user.username, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{
          $state.go('app.cockpit');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
;
