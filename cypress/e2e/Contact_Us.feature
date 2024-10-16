Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form submission
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I enter an email adress
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: Invalid Contact Us Form submission
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with an unsuccessful contact us submission message

    Scenario: Valid Contact Us Form submission - Using specific data
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a specific first name "Felix"
        And I type a specific last name "Rühl"
        And I type a specific email address "felix.ruehl@dachpc.com"
        And I type a specific word "hello123" and number 6789 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message