angular.module('shop')
    .controller('ShopSearchController',['$rootScope','$scope', function($rootScope, $scope){
        $scope.results = [];

        $scope.search = function(){
            $scope.results = [{id:1,name:'Any Value'}];
        };

        $scope.selectProduct = function(productId){
            $rootScope.$broadcast('SELECTEDPRODUCT', productId);
        };

    }]);