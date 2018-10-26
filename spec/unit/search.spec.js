describe('',function(){
    let scope = {};
    
    beforeEach(function(){
        module('search');
        inject(function($controller){
            $controller('SearchController', {$scope: scope});
            let routePrams = {id: 1};
            $controller('SearchDetailController', {$scope: scope, $routeParams: routePrams});
        })
    });

    it('Should return results', function(){
        expect(scope.detail.id).toBe(1);
    });
});