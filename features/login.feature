
Feature: Login functionality

  Scenario: Successful Login
    Given I navigate to SwagLabs
    When I login with valid credentials
    Then I should see products page

  Scenario: Invalid Login
    Given I navigate to SwagLabs
    When I login with invalid credentials
    Then I should see an error message
