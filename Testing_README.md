I have created Cypress tests using the BDD framework with Cucumber, which helps to understand the steps quickly. 

In my folder structure, I have organized web and API feature files under the 'e2e' folder. 

with step definitions, page objects, and API methods located in the 'support' folder. 

The fixture files include URL data.

Some of the API test feature files include web tests, and some web test feature files incorporate API testing.

I have integrated two workflows:

Automated Testing: This workflow is triggered automatically when code is pushed.

NightlyAutomated: This scheduled task runs every day at 8 AM CEST.

I have logged a bug regarding an invalid POST request, which will cause one of the scenarios to fail in the test.