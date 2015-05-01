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
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', 'cockpitApi', '$state', '$interval',
    function(              $scope,   $translate,   $localStorage,   $window , cockpitApi, $state, $interval) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

      // config
      $scope.app = {
        name: 'cloud fleet',
        version: '1.0.1',
        // for chart colors
        color: {
          primary: '#e26826',
          info:    '#088076',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
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
      if ( angular.isDefined($localStorage.settings) ) {
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }
      // angular translate
      $scope.lang = { isopen: false };
      $scope.langs = {en:'English', de_DE:'German'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey, $event) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };


      function isSmartDevice( $window )
      {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

      $scope.initLoginSession = function(){
        $scope.isLogedIn = $interval(function(){$scope.checkSession()}, 20000, 0);

      };

      $scope.checkSession = function() {
        cockpitApi.getCurrentUser().then(function (res) {

          if(res == 401){
            if (angular.isDefined($scope.isLogedIn)) {
              console.log('res '+res)

              $interval.cancel($scope.isLogedIn);
              $scope.isLogedIn = undefined;
              $state.go('access.signin');

            }

          } else {
            if($state.includes('access.signin') || $state.includes('access.forgotpwd')){
              $state.go('app.cockpit');

            }
          }
        }, function () {

        });

      }

      $scope.$on('LOGED_IN', function(event, data) { $scope.initLoginSession(); });

      $scope.logOut = function() {
        cockpitApi.logOut().then(function(res){
          console.log(res);

        }, function(){

        })
      }
    }]);
