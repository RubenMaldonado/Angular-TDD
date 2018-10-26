describe('Given I am searching',function(){
    let searchResult = null;
    beforeEach(function(){
        browser.get('/');
        searchResult = element.all(by.repeater('result in results'));
        expect(searchResult.count()).toBe(0);

        //ACT
        let searchQueryInput = $('input');
        searchQueryInput.sendKeys('any value');
        let searchButton = element(by.buttonText('search'));
        searchButton.click();
    });

    it('Should display a search result', function(){
        expect(searchResult.count()).toBe(1);
    });

    describe('Given search results', function(){
        describe('When I select an item from the search results', function(){    
            let resultId = null;
            beforeEach(()=>{
                let resultItem = element.all(by.repeater('result in results')).first();
                let resultLink = resultItem.element(by.css('a'));
                resultLink.click();
                resultId = resultLink.getAttribute('href').then(function(attr){
                    return attr.match(/#!\/detail\/(\d+)/)[1];
                });
            });

            it('should see the details in the main page component', function(){
                let resultDetail = element(by.css('#searchResultDetail'));
                expect(resultDetail.isDisplayed()).toBeTruthy();
            });

            /*
            it('Check Browser', function(){
                let url = browser.getLocationAbsUrl();
                expect(url).toBe('expectedUrl');
            });*/

            it('Should set the url to the selected detail view',function(){
                resultId.then(function(id){
                    let expectedUrl = '/detail/'+id;
                    let url = browser.getLocationAbsUrl();

                    expect(url).toBe(expectedUrl);
                });
            });
        });
    });
});