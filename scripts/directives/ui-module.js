'use strict';

/**
 * @ngdoc directive
 * @name blimpCockpitApp.directive:uiModule
 * @description
 * # uiModule
 */
angular.module('blimpCockpitApp')
  .directive('uiModule', ['MODULE_CONFIG','uiLoad', '$compile', function(MODULE_CONFIG, uiLoad, $compile) {
    return {
      restrict: 'A',
      compile: function (el) {
        var contents = el.contents().clone();
        return function(scope, el, attrs){
          el.contents().remove();
          uiLoad.load(MODULE_CONFIG[attrs.uiModule])
          .then(function(){
            $compile(contents)(scope, function(clonedElement) {
              el.append(clonedElement);
            });
          });
        };
      }
    };
  }]);
