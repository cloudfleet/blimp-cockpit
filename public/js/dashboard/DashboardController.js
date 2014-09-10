
(function( define ) {
	"use strict";

	define( [
		'cockpit'
	], function ( cockpit )
	{

		var DashboardController =  function($rootScope, session, $log, cockpitApi, $q ) {
			$log = $log.getInstance( "DashboardController" );
			$log.debug( "constructor() ");
			$log.debug( "session.sessionID : "+session.sessionID);

			cockpit.initMenu();

			//cockpitApi.refreshUser();


		};




		return [ "$rootScope", "session", "$log", "cockpitApi", "$q", DashboardController ];

	});

}( define ));
