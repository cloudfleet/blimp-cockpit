'use strict';

/**
 * @ngdoc service
 * @name blimpCockpitApp.cockpit.api
 * @description
 * # cockpit.api
 * Service in the blimpCockpitApp.
 */
angular.module('blimpCockpitApp')
  .factory('cockpitApi', ['$resource', '$http', '$q', '$rootScope', '$state', '$localstorage',
    function ($resource, $http, $q, $rootScope, $state, $localstorage) {

      var localStorageUserKey = "cloudfleet.cockpit.currentUser";

      var storeCurrentUser = function(user)
      {
        $localstorage.setObject(localStorageUserKey, user);
      };

      var  clearCurrentUser = function()
      {
        $localstorage.getObject(localStorageUserKey, null);
      };

      var service = {

        getCurrentUser: function()
        {
          return $localstorage.setObject(localStorageUserKey);
        },

        login: function (username, password) {
          var deferred = $q.defer();

          $http.post('/musterroll/login', {
            'username': username,
            'password': password
          }).
            success(function (data) {
              storeCurrentUser(data);
              deferred.resolve(data);

            }).
            error(function (data) {
              deferred.resolve(false);

            });
          return deferred.promise;
        },

        logOut: function(){
          var deferred = $q.defer();
          $http.get('/musterroll/logout').
            success(function (data, status, header) {
              clearCurrentUser();
              deferred.resolve(data);

            }).
            error(function (data, status) {

              deferred.resolve(status);
            });

          return deferred.promise;
        },

        loadCurrentUser: function () {
          var deferred = $q.defer();

          var storedUser = $localstorage.setObject(localStorageUserKey);

          if(storedUser && storedUser.id)
          {
            deferred.resolve(storedUser);
          }
          else
          {
            deferred.resolve(status)
            $http.get('/musterroll/api/v1/currentUser').
              success(function (data, status, header) {
                $storeCurrentUser(data);
                deferred.resolve(data);
              }).
              error(function (data, status) {
                deferred.resolve(status);
              });
          }
          return deferred.promise;
        }



      };
      return service;

    }]);
