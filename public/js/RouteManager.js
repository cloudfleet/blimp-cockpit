/**
 * Created by emileharmel on 16/07/2014.
 */

(function ( define ) {
	"use strict";


	define([
			'utils/logger/ExternalLogger',
			'auth/LoginController',
			'dashboard/DashboardController',
            'admin/UsersController',
			'cockpit'

		],
		function ( $log, DashboardController, LoginController, UsersController )
		{

			var RouteManager = function ( $stateProvider, $urlRouterProvider )
			{
				$log.debug( "Configuring $stateProvider...");



				$stateProvider
					.state('UserLogin', {
						url: "/userLogin",
						templateUrl : "views/login.tpl.html",
						controller  : "LoginController"
					})
					.state('Dashboard', {
						url: "/dashboard",
						templateUrl : "views/dashboard.tpl.html",
						controller  : "DashboardController"
					})
                    .state('User Management', {
                        url: "users",
                        templateUrl : "views/users.tpl.html",
                        controller  : "UsersController"
                    })
                    ;

			};

			$log = $log.getInstance( "RouteManager" );

			return ["$stateProvider", "$urlRouterProvider", RouteManager ];
		}


	);


}( define ));
