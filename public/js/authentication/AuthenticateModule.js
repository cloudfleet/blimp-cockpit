/**
 * ******************************************************************************************************
 *
 *   QuizModule
 *
 *   Defines controllers and services for the Authentication Module Quiz
 *
 *  @author     Thomas Burleson
 *  @date       December 2013
 *
 * ******************************************************************************************************
 */

(function ( define, angular ) {
    "use strict";

    define([
            'auth/Session',
		    'app/CockpitApi',
		    'auth/Authenticator',
            'auth/SessionController',
            'auth/LoginController'
        ],
        function ( Session, CockpitApi, Authenticator, SessionController, LoginController )
        {
            var moduleName = "cockpit.Authenticate";

            angular
                .module(     moduleName,    [ ]                     )
	            .service(    "session",           Session           )
	            .service(    "cockpitApi",        CockpitApi        )
                .service(    "authenticator",     Authenticator     )
                .controller( "SessionController", SessionController )
                .controller( "LoginController",   LoginController   );

            return moduleName;
        });


}( define, angular ));

