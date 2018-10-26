describe('',function(){
    var scope = {};

    beforeEach(function(){
        module('comments');
    });

    beforeEach(inject(function($controller) {
        $controller('CommentController', {$scope: scope});

        scope.add('Any Comment');
    }));

    it('', function(){
        let firstComment = scope.comments[0];
        expect(firstComment.value).toBe('Any Comment');
    });
});