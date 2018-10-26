describe('Given a view A that has a single button',function(){
    describe('When the button is pushed', function(){

        let viewA = element(by.css('#viewA'));
        let viewB = element(by.css('#viewB'));
        
        beforeEach(function(){    
            browser.get('/index.html');    
            expect(viewA.isPresent()).toBeTruthy();
            expect(viewB.isPresent()).toBeFalsy();
            let buttonToPush = element(by.linkText('flip'));
            buttonToPush.click();
        });

        it('Should be switched to view B', function(){
            expect(viewB.isPresent()).toBeTruthy();
        });

        it('Should not display view A', function(){
            expect(viewA.isPresent()).toBeFalsy();
        });
    });
});