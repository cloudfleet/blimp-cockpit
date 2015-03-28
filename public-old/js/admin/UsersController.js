(function( define ) {
    "use strict";

    define( [
        'cockpit'
    ], function ( cockpit )
    {

        var DashboardController =  function($rootScope, session, $log, cockpitApi, $q, $http, $resource ) {
            $log = $log.getInstance( "DashboardController" );
            $log.debug( "constructor() ");
            $log.debug( "session.sessionID : "+session.sessionID);

            var usersResource = $resource("/api/v1/users/:id", {id: '@id'});



            //cockpitApi.refreshUser();


        };




        return [ "$rootScope", "session", "$log", "cockpitApi", "$q", DashboardController ];

    });

}( define ));
