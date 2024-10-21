@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: Preconditions
        Given I navigate to the Contact Us homepage
        
    Scenario: Valid Contact Us Form submission
        When I type a first name
        And I type a last name
        And I enter an email adress
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form submission
        When I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with an unsuccessful contact us submission message

    Scenario: Valid Contact Us Form submission - Using specific data
        When I type a specific first name "Felix"
        And I type a specific last name "Rühl"
        And I type a specific email address "felix.ruehl@dachpc.com"
        And I type a specific word "hello123" and number 6789 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    @smoke
    Scenario Outline: Validate contact us page
        When I type a first name <firstName> and a last name '<lastName>'
        And I type a '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress           | comment                | message                      |
            | John      | Jones    | john.jones@mail.com    | Hello how are you?     | Thank You for your Message!  |
            | Mia       | Carter   | mia.carter123@mail.com | Test123 Test 321       | Thank You for your Message!  |
            | Felix     | Rühl     | felix.ruehl@dachpc.com | Test123 Test 321       | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson           | Do you build websites? | Error: Invalid email address |

