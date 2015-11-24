'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blimpCockpitApp
 */
angular
  .module('blimpCockpitApp')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', 'cockpitApi', 'mailpileApi', 'mock',
    function ($scope, $translate, $localStorage, $window, cockpitApi, mailpileApi, mock) {

      function isSmartDevice($window) {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window.navigator.userAgent || $window.navigator.vendor || $window.opera;
        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

      /*mailpileApi.getInboxCount().then(function(count){
        $scope.inboxCount = 10;// MOCKUP count;
        $scope.$apply();
      });
      */


      $scope.getCurrentUser = function()
      {
        return cockpitApi.getCurrentUser();
      };

      // MOCKUP

      mock.allNotifications().then(
        function(data) {
          $scope.notifications = data;
        }
      );

      mock.allMails().then(
        function(data) {
          $scope.last_mails = data;
        }
      );

      $scope.countUnread = function() {
        return ($scope.last_mails && $scope.last_mails.filter((item) => {return item.unread;}).length) || null;
      }

      $scope.inboxCount = function() {
        return 0 || $scope.last_mails && $scope.last_mails.length;
      }


      setTimeout(function () {
        $scope.last_mails.unshift(    {
              "id": 10,
              "subject": "Cat Pictures",
              "from": {"name": "Christoph Witzany", "email": "christoph@cloudfleet.io"},
              "avatar": "images/a10.jpg",
              "to":[
                {"name":"Laura", "email":"alicetragedy@twotrickpony.org"}
              ],
              "content":"Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
              "attach":[
                {"name":"c1.jpg", "url":"images/c1.jpg"},
                {"name":"c3.jpg", "url":"images/c3.jpg"}
              ],
              "date":"12:20 7/23/2014",
              "label":"cloudfleet",
              "fold":"important",
              "unread": true
            });
        $scope.$apply();
      }, 5000);

      setTimeout(function () {
        $scope.notifications.unshift(
          {
              "text": "Your mother will have birthday soon!",
              "date": Date.now()

          });
        $scope.$apply();
      }, 10000);


      // config
      $scope.app = {
        name: 'cloud fleet',
        version: '1.0.1',
        // for chart colors
        color: {
          primary: '#e26826',
          info: '#088076',
          success: '#27c24c',
          warning: '#fad733',
          danger: '#f05050',
          light: '#e8eff0',
          dark: '#3a3f51',
          black: '#1c2b36'
        },
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-cf-orange',
          asideColor: 'bg-black',
          headerFixed: true,
          asideFixed: true,
          asideFolded: true
        }
      };

      // save settings to local storage
      if (angular.isDefined($localStorage.settings)) {
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }
      // angular translate
      $scope.lang = {isopen: false};
      $scope.langs = {en: 'English', de_DE: 'German'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || 'English';
      $scope.setLang = function (langKey) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };




      $scope.logOut = function () {
        cockpitApi.logOut().then(function (res) {
          console.log(res);

        }, function () {

        });
      };
    }]);
