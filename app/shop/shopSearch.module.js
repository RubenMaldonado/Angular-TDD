var searchApp = angular.module('shop',['ngRoute']);

searchApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/splash',{
        templateUrl: 'app/shop/shopSplash.html',
        controller: 'ShopSplashController',    
    })
    .when('/detail/:id',{
        templateUrl: 'app/shop/shopSearchDetail.html',
        controller: 'ShopSearchDetailController',    
    })
    .otherwise({
       redirectTo: '/splash'    
    });
}]);