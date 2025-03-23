Feature: Charge Point API

    Scenario: 010 Check any data are available in response
        Given I navigate the API Path "/charge-point"
        Given I recieved the GET Status code as 200
        Then  its not contains any following data

    Scenario: 020 Check POST request to Adding the Serial Number
        Given I navigate the API Path "/charge-point"
        When I send a POST request to "/charge-point" with ID and SerialNumbers as following
            | id      | serialNumber |
            | 1234567 | PVR-039-2910 |
            | 5378643 | RMC-920-2389 |
        Then the POST response status should be 201
        And  The POST response should contain id "1234567" and SerialNumber "PVR-039-2910" as following
        And  The POST response should contain id "5378643" and SerialNumber "RMC-920-2389" as following

    Scenario Outline: 021 Check POST data are available (Web)
        Given I Navigate to URL
        Then The User Land on the Charge Point Installation Form
        Then Serial numbers are present in the list "<SerialNumber>"
        Examples:
            | SerialNumber |
            | PVR-039-2910 |
            | RMC-920-2389 |


    Scenario:030 Check Invalid request (BUG-01)
        #The invalid post request send successfully

        Given I navigate the API Path "/charge-point"
        When I send a invalid POST request to "/charge-point" with ID and SerialNumbers as following
            | iddsa   | serialNumberdsadsad  |
            | 1234567 | PVR-039-2910-invalid |
            | 5378643 | RMC-920-2389-invalid |
        Then the invalid POST response status should be 400


    Scenario: 040 Check POST datas are available through GET Request
        Given I navigate the API Path "/charge-point"
        Given I recieved the GET Status code as 200
        Then The GET response should contain id "1234567" and SerialNumber "PVR-039-2910" as following

    Scenario Outline: 050 Verify the DELETE response for Serial Number
        Given I navigate the API Path "/charge-point"
        When I Send DELETE request to "/charge-point/" to specific id "<id>"
        Then The DELETE response status should be 204

        Examples:
            | id      |
            | 1234567 |
            | 5378643 |

    Scenario Outline: Verify Serial numbers are not appear (Web)
        Given I Navigate to URL
        Given The User lands on the Charge Point Installation Form successfully
        Then The Serial Numbers are not appear in list "<Serial Number>"
        Examples:
            | SerialNumber |
            | PVR-039-2910 |
            | RMC-920-2389 |






