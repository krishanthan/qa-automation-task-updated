Feature: Charge Point Installation

    Scenario Outline: 010 Add new serial number
        Given Navigate to URL
        Then The User Land on the Charge Point Installation Form
        When User add the Serial Number "<SerialNumber>"
        When User Click the Add Button
        Then Serial number present in list "<SerialNumber>"

        Examples:
            | SerialNumber |
            | 123456       |
            | 42554654656  |
            | 434242442    |

    Scenario Outline:020 Delete the Serial Number
        Given Navigate to URL
        Then The User Land on the Charge Point Installation Form
        When User Delete the Serial Number "<Serial Number>"
        Then Serial Number not appear in list "<Serial Number>"

        Examples:
            | Serial Number |
            | 123456        |
            | 434242442     |

  



