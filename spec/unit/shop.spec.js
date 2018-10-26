describe('',function(){
    let scope = {};
    
    beforeEach(function(){
        module('shop');
        inject(function($controller){
            $controller('ShopSearchController', {$scope: scope});
            let routePrams = {id: 1};
            $controller('ShopSearchDetailController', {$scope: scope, $routeParams: routePrams});
        })
    });

    it('Should return results', function(){
        expect(scope.detail.id).toBe(1);
    });
});

describe('', function() {
    var selectedProductSpy = jasmine.createSpy();
    var shopSearchControllerScope = {};

    beforeEach(() => {
        module('shop');
        inject(function($controller, $rootScope){
            shopSearchControllerScope = $rootScope.$new();
            $controller('ShopSearchController', {$scope: shopSearchControllerScope});
            shopSearchControllerScope.$on('SELECTEDPRODUCT', selectedProductSpy);
        });

        var fakeProduct = {productId: 1};
        shopSearchControllerScope.selectProduct(fakeProduct);
    });

    it('',()=> {
        expect(selectedProductSpy).toHaveBeenCalled();
    });

    afterEach(()=>{
        shopSearchControllerScope = {};
        selectedProductSpy.calls.reset();
    });
});


describe('',()=> {
    let recentlyViewedScope = {};
    beforeEach(()=>{
        module('shop');
        inject(($controller, $rootScope) => {
            recentlyViewedScope = $rootScope.$new();
            $controller('ShopRecentlyViewedController', {$scope: recentlyViewedScope});
            expect(recentlyViewedScope.recent.length).toBe(0);
            let fakeProductEvent = {productId: 1};
            $rootScope.$broadcast('SELECTEDPRODUCT', fakeProductEvent);
        });
    });
    
    it('',()=>{
        expect(recentlyViewedScope.recent.length).toBe(1);
    });

    afterEach(()=>{

    });
});

describe('',()=> {
    beforeEach(()=>{

    });

    it('',()=>{

    });

    afterEach(()=>{

    });
});