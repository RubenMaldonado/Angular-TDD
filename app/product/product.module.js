angular.module('product',['ngMockE2E'])
    .run(['$httpBackend', function($httpBackend){
        let testProduct = productDataBuilder().build();
        let products = [testProduct];
        $httpBackend.whenGET('/products').respond(products);
    }]);

;