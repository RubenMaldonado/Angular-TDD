describe('',()=> {
    let scope = {};
    let $httpBackend = null;

    beforeEach(()=>{
        module('product');
        inject(function($controller,_$httpBackend_){
            $httpBackend = _$httpBackend_;
            $controller('ProductController',{$scope: scope})
        });
    });

    it('',()=>{
        var testProduct = productDataBuilder().build();
        $httpBackend.when('GET','/products').respond(200,[testProduct]);
        scope.getAll();

        $httpBackend.flush();
        expect(scope.results.data[0]).toEqual(testProduct);
    });

    afterEach(()=>{

    });
});