/**
 * Created by emileharmel on 16/07/2014.
 */
/**
 *  AngularJS v1.2.20
 *  jQuery v1.10.2
 *  Use aysnc script loader, configure the application module (for AngularJS)
 *  and initialize the application ( which configures routing )
 *
 *
 * Created by emileharmel on 16/07/2014.
 *
 */

(function( head ) {
	"use strict";
	head.load(

		// Pre-load these...

		{ 'requirejs'     : "./vendor/requirejs/require.js"   },
		{ 'jquery'        : "./vendor/jquery/jquery.min.js" },
		{ 'angular'       : "./vendor/angular/angular.js"},
		{ 'ngResource'    : "./vendor/angular-resource/angular-resource.js"},
		{ 'ui.router'     : "./vendor/angular-ui-router/release/angular-ui-router.js"     },
		{ 'ngSanitize'    : "./vendor/angular-sanitize/angular-sanitize.js"},
		{ 'ngCookies'     : "./vendor/angular-cookies/angular-cookies.js"}


	).ready("ALL", function() {

			require.config (
				{
					appDir  : '',
					baseUrl : './',
					priority: 'angular',
					paths   :
					{
						// Configure alias to full paths
						'app'                   : './js',
						'domReady'              : './vendor/requirejs/domReady',
						'jqueryui'              : './vendor/jquery/jquery.ui.min',
						'bootstrap'             : './vendor/bootstrap/bootstrap.min',
						'modernizr'             : './vendor/modernizr/modernizr',
						'xeditable'             : './vendor/xeditable/xeditable',
						'vendor'                : './vendor',
						'utils'                 : './vendor/utils',
						'auth'                  : './js/authentication',
						'dashboard'             : './js/dashboard',
						'forms'                 : './assets/plugins/form/ori/form',
						'datetime'              : './assets/plugins/datetime/datetime',
						'chart'                 : './assets/plugins/chart/chart',
						'pluginsForBS'          : './assets/plugins/pluginsForBS/pluginsForBS',
						'miscellaneous'         : './assets/plugins/miscellaneous/miscellaneous',
						'mmenu'                 : './assets//plugins/mmenu/jquery.mmenu',

						'cockpit'               : './vendor/cockpit/cockpit.custom'


					},
					shim:
					{


						'jquery'        : {exports  : '$' },
						'angular'       : {exports  : 'angular'},
						'ui.router'     : {deps     : ['angular']},
						'ngResource'    : {deps     : ['angular']},
						'ngSanitize'    : {deps     : ['angular']},
						'ngCookies'     : {deps     : ['angular']},

						'xeditable'     : {deps     : ['angular']},
						'jqueryui'      : {deps     : ['jquery']},
						'bootstrap'     : {deps     : ['jquery']},
						'forms'         : {deps     : ['jquery']},
						'datetime'      : {deps     : ['jquery']},
						'chart'         : {deps     : ['jquery']},
						'mmenu'         : {deps     : ['jquery']},
						'cockpit'       : {deps     : ['jquery', 'bootstrap', 'modernizr', 'forms', 'datetime', 'chart', 'pluginsForBS', 'miscellaneous', 'mmenu']}
					}

				}
			);


			require( [ "js/main" ], function( app )
			{
				// Application has bootstrapped and started...
			});


		});



}( window.head ));
