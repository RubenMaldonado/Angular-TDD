angular.module('shop')
    .controller('ShopRecentlyViewedController',['$rootScope','$scope', function($rootScope, $scope){
        $scope.recent = [];

        $rootScope.$on('SELECTEDPRODUCT', function(productEvent, value){
            $scope.recent.push(value);
        });
    }]);