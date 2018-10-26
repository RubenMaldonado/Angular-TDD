let flipFlopApp = angular.module('flipFlop', ['ngRoute']);

flipFlopApp.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider.otherwise({ redirectTo: "/view/a" });

    $routeProvider
        .when('/view/a', {
            templateUrl: 'app/flipFlop/viewA.html',
            controller: 'ViewAController'
        }).when('/view/b', {
            templateUrl: 'app/flipFlop/viewB.html',
            controller: 'ViewBController'
        });
}]);