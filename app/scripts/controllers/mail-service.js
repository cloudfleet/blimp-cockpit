'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:mails
 * @description
 * # AboutCtrl
 * Controller of the mails
 */
angular.module('blimpCockpitApp')
  .factory('mails', ['$http', function ($http) {
  var path = 'scripts/controllers/mails.json';
  var mails = $http.get(path).then(function (resp) {
    return resp.data.mails;
  });

  var factory = {};
  factory.all = function () {
    return mails;
  };
  factory.get = function (id) {
    return mails.then(function(mails){
      for (var i = 0; i < mails.length; i++) {
        if (mails[i].id === id) {
          return mails[i];
        }
      }
      return null;
    });
  };
  return factory;
}]);
