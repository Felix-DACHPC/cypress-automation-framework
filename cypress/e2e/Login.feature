@login @regression
Feature: Feature for testing Login

    Background: Pre conditions

        When I wait for 0 seconds

    Scenario Outline: Login Test
        Given I navigate to the WebdriverUniversity Login Page
        When I type a username <username>
        And I type a password <password>
        And I click the login button
        Then I should be presented with an Alert with '<alertMessage>'

        Examples:
            | username  | password     | alertMessage         |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver    | validation failed    |