angular.module('comments')
.controller('CommentController', ['$scope', function($scope){
    $scope.comments = [];

    $scope.add = function(commentToAdd){
        let newComment = {value: commentToAdd, likes:0};
        $scope.comments.unshift(newComment);

    };

    $scope.like = function(comment){
        comment.likes++;
    };
}]);