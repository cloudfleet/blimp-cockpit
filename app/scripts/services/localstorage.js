'use strict';

angular.module('blimpCockpitApp')
.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {

      $window.localStorage[key] = (value && JSON.stringify(value)) || null;
    },
    getObject: function(key) {

      var objectString = $window.localStorage[key];

      return (objectString && JSON.parse(objectString)) || null;
    }
  }
}])
