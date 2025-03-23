Feature: Charge Point Installation -Web

    Scenario Outline: 010 Verify whether user could add serial number
        Given I Navigate to URL
        Then The User Land on the Charge Point Installation Form
        When The User add the Serial Number "<SerialNumber>"
        When The User Click the Add Button
        Then The Textbox value should be empty
        Then Serial numbers are present in the list "<SerialNumber>"

        Examples:
            | SerialNumber |
            | 498-VCS-391  |
            | 739-HVI-390  |
            | 492-VJC-204  |

    Scenario Outline:020 Verify whether user could delete the serial number
        Given I Navigate to URL
        Given The User lands on the Charge Point Installation Form successfully
        When  The User Delete the Serial Number of "<Serial Number>"
        Then The Serial Numbers are not appear in list "<Serial Number>"

        Examples:
            | Serial Number |
            | 498-VCS-391   |
            | 739-HVI-390   |

    Scenario: 030 Verify GET request include the serial number (API Testing)
        Given I navigate the API Path "/charge-point"
        Given I recieved the GET Status code as 200
        Then The GET response should contains SerialNumber "492-VJC-204"

    Scenario: 040 Verify DELETE request for serial number (API Testing)
        Given I navigate the API Path "/charge-point"
        Given The GET response should contains SerialNumber "492-VJC-204"
        When  I Send DELETE request to "/charge-point/" to specific Serial Number "492-VJC-204"
        Then I Recieved DELETE response status should be 204










