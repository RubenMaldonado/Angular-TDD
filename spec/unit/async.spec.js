describe('',()=>{
    let spy = jasmine.createSpy();
    beforeEach((done)=>{
        let asynchronousFunc =  function(callback){
            setTimeout(callback,0);
        };
        var callback = function(){
            spy();
            done();
        };
        asynchronousFunc(callback);
    });

    it('',()=>{
        expect(spy).toHaveBeenCalled();
    });
});