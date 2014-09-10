/**
 * Now let's start our AngularJS app...
 * which uses RequireJS to load  packages and code
 *
 *
 * Created by emileharmel on 16/07/2014.
 *
 */
(function (define)
{
	"use strict";

	define([
		'domReady',
		'utils/logger/ExternalLogger',
		'utils/logger/LogDecorator',
		'auth/AuthenticateModule',
		'dashboard/DashboardModule',
		'app/RouteManager'
	], function (domReady, $log, LogDecorator, AuthenticateModule, DashboardModule, RouteManager)
	{




		require(['domReady!'], function (document) {

			var app, appName = 'cloudfleet.cockpit';

			$log = $log.getInstance("BOOTSTRAP");
			$log.debug("Initializing {0}", [ appName ]);

		/**
		 * Start the main application
		 *
		 * We manually start this bootstrap process; since ng:app is gone
		 * ( necessary to allow Loader splash pre-AngularJS activity to finish properly )
		 */


			app = angular.module(appName, ["ui.router", "ngSanitize", "ngResource", "ngCookies", AuthenticateModule, DashboardModule ])
				.config(LogDecorator)
				.config(RouteManager);

			try {
				angular.bootstrap(document.getElementsByTagName("html")[0], [ appName ]);
			} catch (e) {
				$log.debug(e.stack || e.message || e);
			}

			return app;

		});

	});

}(define));
