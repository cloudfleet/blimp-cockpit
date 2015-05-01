'use strict';

/**
 * @ngdoc run config
 * @name blimpCockpitApp.routeProvider
 * @description
 * route provider of the blimpCockpitApp
 */
angular.module('blimpCockpitApp')
  .run(['$state', '$rootScope', 'cockpitApi', '$interval',
    function ($state, $rootScope, cockpitApi, $interval) {

      $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {


        var requireLogin = toState.data.requireLogin;
        cockpitApi.getCurrentUser().then(function (res) {

          if (requireLogin && res.id == undefined && !$state.includes('access.forgotpwd')) {
            $state.go('access.signin');
          }

          if(($state.includes('access.forgotpwd') || $state.includes('access.signin')) && res.id!=undefined){

            $state.go('app.cockpit');
          }
        }, function () {
          console.log('error')
        });

      });


    }])
  .run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
)
  .config(
  ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
    function ($stateProvider, $urlRouterProvider, JQ_CONFIG) {

      $urlRouterProvider.otherwise('access/signin');
      $stateProvider
        .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: 'views/app.html',
          data: {
            requireLogin: true
          }
        })
        .state('app.cockpit', {
          url: '/cockpit',
          templateUrl: 'views/app_dashboard.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(
                  JQ_CONFIG.fullcalendar.concat('scripts/controllers/calendar.js')
                )
              }]
          }
        })


        // mail
        .state('app.mail', {
          abstract: true,
          url: '/mail',
          templateUrl: 'views/mail.html'
        })
        .state('app.mail.list', {
          url: '/inbox/{fold}',
          templateUrl: 'views/mail.list.html'
        })
        .state('app.mail.detail', {
          url: '/{mailId:[0-9]{1,4}}',
          templateUrl: 'views/mail.detail.html'
        })
        .state('app.mail.compose', {
          url: '/compose',
          templateUrl: 'views/mail.new.html'
        })

        // fullCalendar
        .state('app.calendar', {
          url: '/calendar',
          templateUrl: 'views/app_calendar.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(
                  JQ_CONFIG.fullcalendar.concat('scripts/controllers/calendar.js')
                )
              }]
          }
        })

        .state('apps', {
          abstract: true,
          url: '/apps',
          templateUrl: 'views/layout.html',
          data: {
            requireLogin: true
          }
        })
        .state('apps.note', {
          url: '/note',
          templateUrl: 'views/apps_note.html'

        })
        .state('apps.contact', {
          url: '/contact',
          templateUrl: 'views/apps_contact.html'
        })
        .state('app.todo', {
          url: '/todo',
          templateUrl: 'views/apps_todo.html'

        })
        .state('app.todo.list', {
          url: '/{fold}'
        })


        .state('access', {
          url: '/access',
          template: '<div ui-view class="fade-in-right-big smooth"></div>',
          data: {
            requireLogin: false
          }
        })
        .state('access.signin', {
          url: '/signin',
          templateUrl: 'views/page_signin.html'

        })
        .state('access.signup', {
          url: '/signup',
          templateUrl: 'views/page_signup.html'

        })
        .state('access.forgotpwd', {
          url: '/forgotpwd',
          templateUrl: 'views/page_forgotpwd.html'
        })


    }
  ]
);
