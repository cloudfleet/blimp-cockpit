/**
 * ******************************************************************************************************
 *
 *   Authenticator
 *
 *   Authorises and authenticates the specified user.
 *
 *
 *
 * ******************************************************************************************************
 */
(function ( define ) {
    "use strict";

    define([],
        function ( )
        {
            var Authenticator = function ( $http, $q, $log, cockpitApi)
                {

                   $log = $log.getInstance( "Authenticator" );
	               $log.debug( "constructor() ");


                    var
                        /**
                         * Request user authentication
                         * @return Promise on cockpitApi
                         */
                        loginUser = function( username, password )
                        {
                             $log.debug(
                                 "loginUser( username={0}, password={1} )",
                                 [ username, password ]
                             );

	                        return cockpitApi.checkLogin(username, password);

                        },

                        /**
                         * Logout user
                         * @return Promise
                         */
                        logoutUser = function()
                        {
                             $log.debug( "logoutUser()" );


                             return cockpitApi.makeResolved({
                                 session : null
                             });
                        };

                   return {

                       login           : loginUser,
                       logout          : logoutUser

                   };

                };

            return [ "$http", "$q", "$log", "cockpitApi", Authenticator ];

        });

}( define ));
