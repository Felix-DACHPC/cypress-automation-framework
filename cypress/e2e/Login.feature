@login @regression
Feature: Feature for testing Login

    Background: Pre conditions
        Given I navigate to the WebdriverUniversity homepage
        When I click on the login portal button

    Scenario Outline: Login Test
        When I type a username <username>
        And I type a password <password>
        And I click the login button
        Then I should be presented with an Alert with '<alertMessage>'

        Examples:
            | username  | password     | alertMessage         |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver    | validation failed    |