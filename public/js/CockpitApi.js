/**
 * Created by emileharmel on 18/07/2014.
 */

(function (define ) {
	"use strict";

	define( [
		'utils/createGuid'
	], function (createGuid )
	{

		var UNABLE_TO_CONNECT      = 'Unable to connect',

		 CockpitApi = function ($rootScope, $resource, $http, $q, $log )
			{

				$log = $log.getInstance( "CockpitApi" );
				$log.debug( "constructor() ");


				var usersCollection     = $resource("/musterroll/api/v1/users/"),
					usersResource       = $resource("/musterroll/api/v1/users/:id", {id: '@id'}),

					/**
					 * Util function to build a resolved promise
					 * @returns {promise|*|promise}
					 */
					makeResolved = function( response )
					{
						var dfd = $q.defer();
						dfd.resolve( response );

						return dfd.promise;
					},
					makeRejected = function( fault )
					{
						var dfd = $q.defer();
						dfd.reject( fault );

						return dfd.promise;
					},


					getCurrentUser = function()
					{
						return $http.get("/musterroll/api/v1/currentUser")
								.then(
								function (data)
								{
									return makeResolved({ data : data.data });

								},
								function(error)
								{
									return makeRejected( '401 (Unauthorized)' )
								},
								function(progress)
								{
									console.log(progress+'progress');
								});
					},

					saveUser = function (data, user)
					{
						angular.extend(user, data);
						return usersResource.save(user);
					},


					checkLogin = function(username, password){


						return $http(
							{
								method: 'POST',
								url: '/musterroll/login',
								data: $.param({
									'username': username,
									'password': password
								}),
								headers: {'Content-Type': 'application/x-www-form-urlencoded'}
							}).then(
							function (answer)
							{
								return makeResolved({ session : createGuid(), username : username });
							},
							function(error)
							{
								return makeRejected( '401 (Unauthorized)' )
							},
							function(progress)
							{
								console.log(progress+'progress');
							});

					};

				return {

					getUser         : getCurrentUser,
					saveUser        : saveUser,
					checkLogin      : checkLogin,
					makeResolved    : makeResolved,
					makeRejected    : makeRejected

				};



			};



		return ["$rootScope", "$resource", "$http", "$q", "$log", CockpitApi];
	});


}( define  ));
