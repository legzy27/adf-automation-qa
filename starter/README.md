## Prerequisites
- install NodeJS on your environment

# clone the repo from Github
- cd into the repo
  
# install npm packages below
- `npm install` to install the project dependencies
- `npm install -g protractor` to install protractor

## Run test
- start test- webdriver-manager update
- webdriver-manager start
- run tests: `protractor conf.js`

## Solution description
- The reason behind this solution are listed below  and some features of Protractor that makes it worthy for 
  E2E testing of Anglular Applications

- Protractor is a wrapper around WebDriverJS and supports behavior-driven development frameworks like Jasmine, Mocha and Cucumber.
- It offers some new locator strategies and functions that automate the testing of AngularJS applications. 
- Protractor works in conjunction with Selenium to offer an automated test infrastructure.
- It makes use of Selenium grid to run multiple test on browsers.

Protractor acts as an end-to-end testing framework for both Angular and non-Angular applications that does not use CSS attributes. Automating web applications built on AngularJS using Protractor is a major step forward for enterprises in their efforts to automate the business process applications.

# Implementend Page Object Model in the framework
- Page object is a design pattern used to enhance code maintence and reduce code duplication
  
- qaexcerise.envalfresco.com is a dynamic application so i decided to implement page object to organise the tests
- it will help hanlde the UI testing challenges.


# Note
- All test cases passed
- Last test case there is issue with element not clickable at point which affects test completion.