
Feature: Add to cart

  Scenario: Add backpack to cart
    Given I navigate to SwagLabs
    And I login with valid credentials
    When I add backpack to cart
    Then It should appear in cart
