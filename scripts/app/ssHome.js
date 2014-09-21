angular.module('ssHome', ['ngRoute']);
angular.module('ssHome').config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: '/templates/index.html',
        controller: 'HomeCtrl'
    });

}]);
