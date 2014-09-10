/**
 * Created by emileharmel on 16/07/2014.
 */

(function ( define ) {
	"use strict";


	define([
			'utils/logger/ExternalLogger',
			'auth/LoginController',
			'dashboard/DashboardController',
			'cockpit'

		],
		function ( $log, DashboardController, LoginController )
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
					});

			};

			$log = $log.getInstance( "RouteManager" );

			return ["$stateProvider", "$urlRouterProvider", RouteManager ];
		}


	);


}( define ));
