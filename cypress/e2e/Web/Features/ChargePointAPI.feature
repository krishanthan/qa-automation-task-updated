Feature: Charge Point API

    Scenario: 010 Adding the Serial Number
        Given The API is working "/charge-point"
        When I send a POST request to "/charge-point" with SerialNumbers
        Then the response status should be 201
        And  The response should contain SerialNumber

    Scenario:020 Check Invalid request (BUG-01)
        #The invalid post request send successfully

        Given The API is working "/charge-point"
        When I send a invalid POST request to "/charge-point" with SerialNumbers
        Then the invalid response status should be 400
        Then The response not contain the following details



    Scenario: 030 Verify the GET response for user data
        Given I send a GET request to "/charge-point"
        Then the get response status should be 200
        Then The Get response of "/charge-point" contains the following details

    Scenario: 040 Verify the DELETE response for user data



