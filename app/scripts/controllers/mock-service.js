'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:mails
 * @description
 * # AboutCtrl
 * Controller of the mails
 */
angular.module('blimpCockpitApp')
  .factory('mock', ['$http', function ($http) {
  var mail_path = 'scripts/controllers/mails.json';
  var mails = $http.get(mail_path).then(function (resp) {
    return resp.data.mails;
  });
  var notification_path = 'scripts/controllers/notifications.json';
  var notifications = $http.get(notification_path).then(function (resp) {
    return resp.data.notifications;
  });

  var factory = {};
  factory.allMails = function () {
    return mails;
  };
  factory.getMail = function (id) {
    return mails.then(function(mails){
      for (var i = 0; i < mails.length; i++) {
        if (mails[i].id === id) {
          return mails[i];
        }
      }
      return null;
    });
  };
  factory.allNotifications = function () {
    return notifications;
  };
  return factory;
}]);
