/**
 *
 *
 *  @author  Emile Harmel
 */
(function( define ) {
    "use strict";


    define( [
	    'cockpit'
    ], function (  )
    {
        var VIEW_LOGIN = "/userLogin",


            SessionController = function( session, $rootScope, $log, $location, $cookieStore, cockpitApi, $q, $state )
            {
	            //$cookieStore.remove('loggedIn');
	            $log = $log.getInstance( "SessionController" );
	            $log.debug( "constructor() ");

	            session.sessionID = $cookieStore.get('loggedIn');

	            var validateSession = function()
                    {

	                    $log.debug( "session.sessionID : "+session.sessionID);

	                    cockpitApi.getUser().then(
		                    function onResult_userData( response ){

			                    $rootScope.userData = response.data;

			                    if ( session && !session.sessionID)
			                    {
				                    if ( $location.path() != VIEW_LOGIN )
				                    {
					                    $rootScope.userData = null;
					                    $cookieStore.remove('loggedIn');

					                    $log.debug( "session is invalid - routing to '{0}' ", [ VIEW_LOGIN ] );
					                    $state.go('UserLogin');

					                    //$location.path( VIEW_LOGIN );
				                    }
			                    }

		                    },
		                    function onFault_userData( fault ){
			                    $log.debug( "onFault_login( fault={fault}" ,fault );

			                    $rootScope.userData = null;
			                    $cookieStore.remove('loggedIn');
			                    $state.go('UserLogin');

			                    $q.reject( fault );
		                    }
	                    );



                    };


                // TODO - remember the bookmark url... and reroute to original bookmark AFTER login finishes


                $rootScope.$on('$routeChangeSuccess', function()
                {
	                $log.debug( "$routeChangeSuccess ");
                    validateSession();
                });

                // Watch the sessionID and auto route to the Login view
                // if logout() is invoked...

                $rootScope.$watch( function getSession()
                {

	                return session.sessionID;

                }, validateSession() );


            };

        // Register as global constructor function

        return [ "session", "$rootScope", "$log", "$location", "$cookieStore", "cockpitApi", "$q", "$state", SessionController ];

    });


}( define ));
