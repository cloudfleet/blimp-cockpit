'use strict';

/**
 * @ngdoc run config
 * @name blimpCockpitApp.routeProvider
 * @description
 * route provider of the blimpCockpitApp
 */
angular.module('blimpCockpitApp')
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

            $urlRouterProvider
                .otherwise('/app/cockpit');
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'views/app.html'
                })
                .state('app.cockpit', {
                    url: '/cockpit',
                    templateUrl: 'views/app_dashboard.html',
                    resolve: {
                        deps: ['$ocLazyLoad', 'uiLoad',
                            function ($ocLazyLoad, uiLoad) {
                                return uiLoad.load(
                                    JQ_CONFIG.fullcalendar.concat('scripts/controllers/calendar.js')
                                ).then(
                                    function () {
                                        return $ocLazyLoad.load('ui.calendar');
                                    }
                                )
                            }]
                    }
                })


                // mail
                .state('app.mail', {
                    abstract: true,
                    url: '/mail',
                    templateUrl: 'views/mail.html',
                    // use resolve to load other dependences
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['scripts/controllers/mail.js',
                                    'scripts/controllers/mail-service.js',
                                    JQ_CONFIG.moment]);
                            }]
                    }
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
                    // use resolve to load other dependencies
                    resolve: {
                        deps: ['$ocLazyLoad', 'uiLoad',
                            function ($ocLazyLoad, uiLoad) {
                                return uiLoad.load(
                                    JQ_CONFIG.fullcalendar.concat('scripts/controllers/calendar.js')
                                ).then(
                                    function () {
                                        return $ocLazyLoad.load('ui.calendar');
                                    }
                                )
                            }]
                    }
                })

                .state('apps', {
                    abstract: true,
                    url: '/apps',
                    templateUrl: 'views/layout.html'
                })
                .state('apps.note', {
                    url: '/note',
                    templateUrl: 'views/apps_note.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['scripts/controllers/note.js',
                                    JQ_CONFIG.moment]);
                            }]
                    }
                })
                .state('apps.contact', {
                    url: '/contact',
                    templateUrl: 'views/apps_contact.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['scripts/controllers/contact.js']);
                            }]
                    }
                })
                .state('app.todo', {
                    url: '/todo',
                    templateUrl: 'views/apps_todo.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['scripts/controllers/todo.js',
                                    JQ_CONFIG.moment]);
                            }]
                    }
                })
                .state('app.todo.list', {
                    url: '/{fold}'
                })


                .state('access', {
                    url: '/access',
                    template: '<div ui-view class="fade-in-right-big smooth"></div>'
                })
                .state('access.signin', {
                    url: '/signin',
                    templateUrl: 'views/page_signin.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['scripts/controllers/signin.js']);
                            }]
                    }
                })
                .state('access.signup', {
                    url: '/signup',
                    templateUrl: 'views/page_signup.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['scripts/controllers/signup.js']);
                            }]
                    }
                })
                .state('access.forgotpwd', {
                    url: '/forgotpwd',
                    templateUrl: 'views/page_forgotpwd.html'
                })


        }
    ]
);
