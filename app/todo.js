var app = angular.module('todo',[]);


app.controller('TodoController', function($scope){
    $scope.greeting = "Control Loaded";
    $scope.list = ['test','execute','refactor'];

    $scope.add = function(value){
        $scope.list.push(value);
    };
});