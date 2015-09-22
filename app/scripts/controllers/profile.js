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

  $scope.removeAlias = function(alias) {
    var user = cockpitApi.getCurrentUser();
    var current_aliases = user.aliases || [];

    var pos = current_aliases.indexOf(alias);
    current_aliases.splice(pos, 1);

    user.aliases = current_aliases;

    cockpitApi.updateUser(user);

  };


  $scope.addAlias = function() {
    var new_alias = $scope.newAlias;

    var user = cockpitApi.getCurrentUser();
    var current_aliases = user.aliases || [];

    current_aliases.push(new_alias);

    user.aliases = current_aliases;

    cockpitApi.updateUser(user);

    $scope.newAlias = '';

  };

	$scope.updateUser = function() {
	};

  }]);
