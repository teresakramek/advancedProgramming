Feature: Calculator
  In order to avoid making mistakes
  As a math student
  I want to use a calculator to add, subtract, multiply, and divide numbers

  Scenario: Add two numbers
    Given I have entered 50 into the calculator
    And I have entered 70 into the calculator
    When I press add
    Then the result should be 120 on the screen

  Scenario: Subtract two numbers
    Given I have entered 100 into the calculator
    And I have entered 40 into the calculator
    When I press subtract
    Then the result should be 60 on the screen

  Scenario: multiply two numbers
    Given I have entered 10 into the calculator
    And I have entered 2 into the calculator
    When I press multiply
    Then the result should be 20 on the screen
  
