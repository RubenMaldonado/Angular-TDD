describe('when using a todo list',function(){

    let scope = {};
    beforeEach(module('todo'));
 
    beforeEach(inject(function($controller) {
        $controller('TodoController', {$scope: scope});
    }));
 
    it('should defeine a list object',function(){
        expect(scope.list).toBeDefined();
    });
 
    it('should dfine a list object', function() {
        expect(scope.list[0]).toEqual('test');
    });
 
    it('should dfine a list object', function() {
        expect(scope.list[1]).toEqual('execute');
    });
 
    it('should dfine a list object', function() {
        expect(scope.list[2]).toEqual('refactor');
    });
 
 
    describe('', function() {
        beforeEach(function(){
            scope.add('repeat');
        });
 
        it('it should add item to last item in list', function() {
            let lastItem = scope.list.length -1;
            expect(scope.list[lastItem]).toEqual('repeat');
        });
 
 
    });
 });