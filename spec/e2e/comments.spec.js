describe('Given I am posting a new comment', function(){
    describe('When I push the submit button', function(){
        beforeEach(function(){
            browser.get('/comments');
            let commentInput = $('input');
            commentInput.sendKeys('a comment');
            var submitButton = element.all(by.buttonText('Submit'));
            submitButton.click();
        });

        it('Should then add the comment',function(){
            var comment  = element.all(by.repeater('comment in comments')).first();
            
            expect(comment.getText()).toBe('a comment like 0');
        });
    });


    describe('When I like a comment', function(){
        let firstComment = null;
        beforeEach(function(){
            //Assemble
            firstComment = element.all(by.repeater('comment in comments')).first();
            var likeButton = firstComment.element(by.buttonText('like'));

            //Act
            likeButton.click();
        });
        //Assert
        it('should then be liked', function(){
            var commentLikes = firstComment.element(by.binding('likes'));
            expect(commentLikes.getText()).toBe('1');
        });
    });
});

