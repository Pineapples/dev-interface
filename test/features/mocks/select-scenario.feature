@mocks
@select-scenario
Feature: Select mock scenario's

  Developers should be able to select scenario's

  Scenario: Select another scenario
    Given I open the dev interface
    When I select scenario crypto-exchanges for mock with name get items
    Then the selected scenario for mock with name get items is changed to crypto-exchanges
