/**
 * Created by emileharmel on 16/07/2014.
 */

(function( define) {
    "use strict";

    define( [
	    'utils/supplant',
	    'cockpit'
    ], function (supplant, cockpit)
    {


        var SERVER_NOT_RESPONDING  = "Server is not responding",
            UNABLE_TO_CONNECT      = 'Unable to connect',
            TIMEOUT_RESPONSE       = 'Data service did not respond and timed out.',
	        PAGE_NOT_FOUND         = '404 Not Found',
	        NOT_AUTHORIZED         = '401 (Unauthorized)',



	    LoginController = function( session, authenticator, $rootScope, $scope, $q, $log, $state, $cookieStore, cockpitApi )
            {
                $log = $log.getInstance( "LoginController" );
                $log.debug( "constructor() ");

	            $rootScope.isCheckingUserLogin = false;


	            //show notification
	            //center the login box
	            //apply css to checkbox

	            if ($rootScope.userData == null) {
		            cockpit.Cnotific8();
		            cockpit.toCenter();
		            cockpit.createiCheck();
	            }

                var onLogin = function ()
                    {
                        $log.debug( "onLogin( username={username}, password={password} )", $rootScope );

	                    $rootScope.isCheckingUserLogin = true;

	                    cockpit.isCheckingUserLogin('startChecking');
                        authenticator.login( $scope.username, $scope.password )
                                     .then(
	                                    function onResult_login( response )
                                        {
                                            $log.debug( "onResult_login( sessionID={session}" ,response );

	                                        cockpit.isCheckingUserLogin('stopChecking');

                                            session.sessionID = response.session;

	                                        $cookieStore.put('loggedIn', session.sessionID);



	                                        session.account    = {
                                              userName :  $scope.username
                                            };

	                                        getUserData();

                                            return session;
                                        },
                                        function onFault_login( fault )
                                        {

	                                        $log.debug( "onFault_login( fault={fault}" ,fault );
	                                        cockpit.isCheckingUserLogin('errorChecking');

	                                        fault = fault || SERVER_NOT_RESPONDING;
                                            fault = supplant( String(fault), [ "onLogin()" ] );

                                            // force clear any previously valid session...
                                            session.sessionID = null;

                                            return $q.reject( fault );
                                        }
                                    );
                    },
	                getUserData = function()
	                {
		                cockpitApi.getUser().then(
			                function onResult_userData( response )
			                {

				                $rootScope.userData = response.data;


				                $state.go('Dashboard');

				                //$location.path( '/dashboard' );

			                },
			                function onFault_userData( fault )
			                {
				                $log.debug( "onFault_login( fault={fault}" ,fault );
				                cockpit.isCheckingUserLogin('errorChecking');
				                return $q.reject( fault );
			                }
		                );
	                },

                    onLogout = function()
                    {
                        $log.debug( "onLogout( )" );

                            authenticator
                                        .logout( )
                                        .then( function onResult_logout( )
                                        {
                                            $log.debug( "onResult_logout()" );

	                                        $rootScope.sessionID = null;
                                            session.sessionID = null;


                                            return session;
                                        },
                                        function onFault_login( fault )
                                        {
                                            fault = fault || SERVER_NOT_RESPONDING;
                                            $log.error( fault.toString() );

                                            // force clear any previously valid session...
                                            session.sessionID = null;

                                            return $q.reject( session );
                                        });
                            };


	                    $rootScope.sessionID = session.sessionID;
	                    $rootScope.errorMessage = "";

	                    $rootScope.submit   = onLogin;
	                    $rootScope.logout   = onLogout;

                    };

        // Register as global constructor function

        return [ "session", "authenticator",  "$rootScope", "$scope", "$q", "$log", "$state", "$cookieStore", "cockpitApi", LoginController ];

    });


}( define ));
