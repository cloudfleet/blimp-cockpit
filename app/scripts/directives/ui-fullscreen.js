'use strict';

/**
 * @ngdoc directive
 * @name blimpCockpitApp.directive:uiFullscreen
 * @description
 * # uiFullscreen
 */
angular.module('blimpCockpitApp')
  .directive('uiFullscreen', ['uiLoad', 'JQ_CONFIG', '$document', function (uiLoad, JQ_CONFIG, $document) {
    return {
      restrict: 'AC',
      template: '<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
      link: function (scope, el, attr) {
        el.addClass('hide');
        uiLoad.load(JQ_CONFIG.screenfull).then(function () {
          // disable on ie11
          if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
            el.removeClass('hide');
          }
          el.on('click', function () {
            var target;
            attr.target && ( target = $(attr.target)[0] );
            screenfull.toggle(target);
          });
          $document.on(screenfull.raw.fullscreenchange, function () {
            if (screenfull.isFullscreen) {
              el.addClass('active');
            } else {
              el.removeClass('active');
            }
          });
        });
      }
    };
  }]);
