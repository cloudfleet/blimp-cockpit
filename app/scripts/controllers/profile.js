'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:ProfileController
 * @description
 * # AboutCtrl
 * Controller of the SigninFormController
 */
angular.module('blimpCockpitApp')
  .controller('ProfileCtrl',
  ['$scope', '$http', '$state', 'cockpitApi',
    function($scope, $http, $state, cockpitApi) {

	$scope.changePassword = function() {
    var oldPassword = $scope.oldPassword;
    var newPassword = $scope.newPassword;
    var newPasswordRepeat = $scope.newPasswordRepeat;

    if(newPassword !== newPasswordRepeat)
    {
      alert("Passwords are not equal!");
    }
    else if(!oldPassword){
      alert("You have to enter your old password!");
    }
    else {
      cockpitApi.changePassword(oldPassword, newPassword);

    }


	};

	$scope.updateUser = function() {
	};

  }]);
