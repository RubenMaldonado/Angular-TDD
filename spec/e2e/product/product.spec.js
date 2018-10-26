describe('',()=>{
    beforeEach(()=>{
        browser.get('/index.html');
        let productButton = element(by.buttonText('Get Products'));
        productButton.click();
    });

    it('',()=>{
        let results = element.all(by.repeater('result in results'));
        expect(results.count()).toBeGreaterThan(0);
    });
});