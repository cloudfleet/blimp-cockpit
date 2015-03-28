/**
 * Created by emileharmel on 18/07/2014.
 */


(function ( define, angular ) {
	"use strict";

	define([
			'auth/Session',
			'auth/SessionController',

			'dashboard/DashboardController'
		],
		function ( Session, SessionController, DashboardController )
		{
			var moduleName = "cockpit.DashboardModule";

			angular
				.module(     moduleName,    [ ]                             )
				.service(    "session",                 Session             )
				.controller( "SessionController",       SessionController   )
				.controller( "DashboardController",     DashboardController );

			return moduleName;
		});


}( define, angular ));

