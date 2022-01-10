$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/google.feature");
formatter.feature({
  "name": "Test addition using Google Calculator",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test 2 number addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.step({
  "name": "Entering number \u003cfirstNumber\u003e and \u003csecondNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.step({
  "name": "Result should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstNumber",
        "secondNumber",
        "result"
      ]
    },
    {
      "cells": [
        "6",
        "6",
        "12"
      ]
    },
    {
      "cells": [
        "6",
        "2",
        "9"
      ]
    },
    {
      "cells": [
        "8",
        "5",
        "13"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test 2 number addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Entering number 6 and 6",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Result should be 12",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test 2 number addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Entering number 6 and 2",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Result should be 9",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test 2 number addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Entering number 8 and 5",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Result should be 13",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/google1.feature");
formatter.feature({
  "name": "Test addition using Google Search Cucumber",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test 2 number addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.step({
  "name": "Entering string \u003ccucumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.step({
  "name": "Control how many are there search result",
  "keyword": "And "
});
formatter.step({
  "name": "Result should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Open second page",
  "keyword": "And "
});
formatter.step({
  "name": "Control if first item headline",
  "keyword": "And "
});
formatter.step({
  "name": "Result should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "cucumber",
        "result"
      ]
    },
    {
      "cells": [
        "cucumber",
        "Approximate number of results: 201 000 000"
      ]
    },
    {
      "cells": [
        "cucumber",
        "7 Health Benefits of Eating Cucumber - Healthline"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test 2 number addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Entering string cucumber",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Control how many are there search result",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Result should be Approximate number of results: 201 000 000",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Open second page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Control if first item headline",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Result should be Approximate number of results: 201 000 000",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test 2 number addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Entering string cucumber",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Control how many are there search result",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Result should be 7 Health Benefits of Eating Cucumber - Healthline",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Open second page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Control if first item headline",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Result should be 7 Health Benefits of Eating Cucumber - Healthline",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});