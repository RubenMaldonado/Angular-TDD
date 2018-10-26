var searchApp = angular.module('search',['ngRoute']);

searchApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/splash',{
        templateUrl: 'app/search/splash.html',
        controller: 'SplashController',    
    })
    .when('/detail/:id',{
        templateUrl: 'app/search/searchDetail.html',
        controller: 'SearchDetailController',    
    })
    .otherwise({
       redirectTo: '/splash'    
    });
}]);