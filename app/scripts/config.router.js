'use strict';

/**
 * @ngdoc run config
 * @name blimpCockpitApp.routeProvider
 * @description
 * route provider of the blimpCockpitApp
 */
angular.module('blimpCockpitApp')
  .run(['$state', '$rootScope', 'cockpitApi',
    function ($state, $rootScope, cockpitApi) {
      $rootScope.$on('$stateChangeStart', function (event, toState) {


        console.log('Going to ' + toState.name);
        return true;
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
  ['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('app/cockpit');
      $stateProvider
        .state('app', {
          resolve: {
            cockpitApi: 'cockpitApi',
            currentUser: function(cockpitApi) {
              return cockpitApi.loadCurrentUser();
            }
          },
          abstract: true,
          url: '/app',
          templateUrl: 'views/app.html',
          data: {
            requireLogin: true
          }
        })
        .state('app.cockpit', {
          url: '/cockpit',
          templateUrl: 'views/app_dashboard.html'
        })


        // mail
        .state('app.profile', {
          url: '/profile',
          templateUrl: 'views/app_profile.html'
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
          templateUrl: 'views/app_calendar.html'
        })

        .state('apps', {
          abstract: true,
          resolve: {
            cockpitApi: 'cockpitApi',
            currentUser: function(cockpitApi) {
              return cockpitApi.loadCurrentUser();
            }
          },
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

        });


    }
  ]
);
