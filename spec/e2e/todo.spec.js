describe('',function(){
    beforeEach(function(){

    });

    it('', function(){

    });
});

describe('',function(){
    //Assemble
    beforeEach(function(){
        //ACT
        browser.get('/');
    });

    
    it('', function(){
        var todoListItems = element.all(by.repeater('item in list'));
        //ASSERT
        expect(todoListItems.count()).toBe(3);
        done();
    });
});

