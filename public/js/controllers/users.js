/**
 * Created by doublemalt on 12/3/13.
 */
var app = angular.module('cockpit', ['ngRoute', 'ngResource', 'xeditable']);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

angular.module('cockpit').controller('CockpitCtrl', function ($scope, $http, $resource) {

    var usersCollection = $resource("/api/v1/users/");
    var usersResource = $resource("/api/v1/users/:id", {id: '@id'});

    $scope.isAdmin = true;

    $scope.refreshCurrentUser = function()
    {
        "use strict";
        $http.get("/api/v1/currentUser").success(function(data){
            $scope.currentUser = data;
            $scope.addresser = data.firstName || data.id
            console.log(data);
        });
    };
    $scope.refreshUsers = function() {
        $scope.users = usersCollection.query(function(){});
    };

    $scope.saveUser = function(data, user) {
        //$scope.user not updated yet
        angular.extend(user, data);
        return usersResource.save(user);
    };


    $scope.refreshCurrentUser();
    $scope.refreshUsers();

});

angular.module('cockpit').controller('UserCtrl', function ($scope) {

    $scope.newUserId = "";

    $scope.addUser = function() {
        var newUser = {id:$scope.newUserId, firstName:"", lastName:"", isAdmin: false};
        usersResource.save(newUser);
        $scope.users.push(newUser);
        $scope.newUserId = "";
    };


});

angular.module('cockpit').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/users', {
        templateUrl:'templates/users.tpl.html',
        controller:'UserCtrl'
    });
}]);


angular.module('cockpit').controller('DashboardCtrl', function ($scope) {



});

angular.module('cockpit').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl:'templates/dashboard.tpl.html',
        controller:'DashboardCtrl'
    });
}]);



angular.module('cockpit').controller('LoginCtrl', function ($scope, $http, $resource) {

    $scope.login_error = false;

    $scope.login = function(){
        $http({
            method: 'POST',
            url: '/login',
            data: $.param({
                'username': $scope.username,
                'password': $scope.password
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function ()
            {
                $scope.login_error = false;
                $scope.refreshCurrentUser();
                $scope.refreshUsers();
            }
        ).error(function()
            {
                $scope.login_error = true;
                $scope.refreshCurrentUser();
                $scope.username = "";
                $scope.password = "";
            });
    };


});
