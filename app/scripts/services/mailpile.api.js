'use strict';

/**
 * @ngdoc service
 * @name mailpile.api
 * @description
 * # mailpile.api
 * Service in the blimpCockpitApp.
 */
angular.module('blimpCockpitApp')
  .factory('mailpileApi', ['$resource', '$http', '$q', '$rootScope', '$state', '$localstorage', 'cockpitApi',
    function ($resource, $http, $q, $rootScope, $state, $localstorage, cockpitApi) {
      var mailpileUrl = '/mailpile/' + cockpitApi.getCurrentUser().id;
      var mailpileApiUrl = mailpileUrl + '/api/0/';

      var service = {
        getInboxCount: function(){
          var deferred = $q.defer();
          $http.get(mailpileApiUrl + 'tags/inbox/').
            then(function (response) {
              if(response.data.result )
              {
                deferred.resolve(response.data.result.tags[0].stats.new);
              }
              else {
                deferred.resolve("n/a");
              }
            },
            function (_, status) {

              deferred.resolve("n/a");
            });

          return deferred.promise;

        }
      }
      return service;

    }]);
