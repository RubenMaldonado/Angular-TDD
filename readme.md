# What is this?
Is just a sample project that implements different situations regarding angular unit testing.

In order to test easily just change the html that you want to run to index.html and execute the following commands:

- Start selenium server
webdriver-manager start

- Start http server
http-server

- Run protractor test for a specifict suite.
protractor protractor.conf.js --specs='spec/e2e/product/product.spec.js'

- Run unit tests
karma start


# Scenarios
## To Do
Testing repeaters

## Comments
Page interactions

## FlipFlop
Testing routing show and display different views.

## Search
URL and routing testing

## Products
Test an asyncronous HTTP call, mocking the service itself.