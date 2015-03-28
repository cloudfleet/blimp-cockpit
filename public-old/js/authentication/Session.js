/**
 *
 *  This Session module uses RequireJS to `define` a AngularJS constructor function
 *  with its dependencies.
 *
 *  @author  Emile Harmel
 *
 */
(function (define ) {
    "use strict";

    /**
     * Register the Session class with RequireJS
     */
    define( [], function ( ) {

        var validate = function ( target, defaultVal )
            {
                return target || defaultVal;
            },
            onClear  = function( all )
            {
                _session.account.userName       = validate( all, false ) ? '' : _session.account.userName;
                _session.sessionID              = null;


                return _session;
            },

            _session = {
                account : {
                    userName          : ''
                },

	            sessionID           : null,
                clear               : onClear,
	            logout              : onClear
            };


        /**
         * Publishes a constructor function which returns the `session` singleton instances
         *
         * @returns Hashmap
         * @constructor
         */
        return function () {
            return _session;
        };

    });


}( define  ));
