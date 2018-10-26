angular.module('shop')
    .controller('ShopSearchDetailController',['$rootScope','$scope','$routeParams', function($rootScope, $scope, $routeParams){
        
        $scope.detail = {id: $routeParams.id};

        $rootScope.$broadcast('SELECTEDPRODUCT', {productId: $routeParams.id});

    }]);