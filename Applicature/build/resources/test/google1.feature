Feature: Test addition using Google Search Cucumber


  Scenario Outline: Test 2 number addition
    Given Open google.com
    When Entering string <cucumber>
    And Press enter
    And Control how many are there search result
    Then Result should be <result>
    And Open second page
    And Control if first item headline
    Then Result should be <result>

    Examples:
      | cucumber          | result                                                          |
      | cucumber          | Approximate number of results: 201 000 000                      |
      | cucumber          | 7 Health Benefits of Eating Cucumber - Healthline               |
