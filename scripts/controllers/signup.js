'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:SignupFormController
 * @description
 * # AboutCtrl
 * Controller of the SignupFormController
 */
angular.module('blimpCockpitApp')
  .controller('SignupFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function() {
      $scope.authError = null;
      // Try to create
      $http.post('api/signup', {name: $scope.user.username, email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = response;
        }else{
          $state.go('app.cockpit');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
 ;
