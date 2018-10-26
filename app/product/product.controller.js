angular.module('product')
    .controller('ProductController',['$scope','productService',function($scope,productService){
        $scope.getAll = function(){
            productService.getAll()
                .then(function success(response){
                    $scope.results = response;
                }, function error(response){
                    $scope.error = response;
                });
        };
    }]);