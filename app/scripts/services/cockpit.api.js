'use strict';

/**
 * @ngdoc service
 * @name blimpCockpitApp.cockpit.api
 * @description
 * # cockpit.api
 * Service in the blimpCockpitApp.
 */
angular.module('blimpCockpitApp')
  .factory('cockpitApi', ['$resource', '$http', '$q', '$rootScope', '$state',
    function ($resource, $http, $q, $rootScope, $state) {

      var service = {

        current_user: null,

        login: function (username, password) {
          var deferred = $q.defer();

          $http.post('/musterroll/login', {
            'username': username,
            'password': password
          }).
            success(function (data) {
              service.current_user = data;
              $rootScope.currentUser = data.id;
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
              $rootScope.currentUser = null;
              service.current_user = null;
              deferred.resolve(data);

            }).
            error(function (data, status) {

              deferred.resolve(status);
            });

          return deferred.promise;
        },
        getCurrentUser: function () {
          var deferred = $q.defer();
          if(service.current_user && service.current_user.id)
          {
            deferred.resolve(service.current_user);
          }
          else
          {
            deferred.resolve(status)
            $http.get('/musterroll/api/v1/currentUser').
              success(function (data, status, header) {
                $rootScope.currentUser = data.id;
                service.current_user = data;
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