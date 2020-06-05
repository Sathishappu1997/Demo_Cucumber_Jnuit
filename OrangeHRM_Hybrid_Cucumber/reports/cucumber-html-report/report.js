$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Hp/eclipse-workspace/OrangeHRM_Hybrid_Cucumber/src/test/resources/Feature_File/Login_Page.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the OrangeHRM Application",
  "description": "",
  "id": "validate-the-orangehrm-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "To validate the login functionality of OrangeHRM Application",
  "description": "",
  "id": "validate-the-orangehrm-application;to-validate-the-login-functionality-of-orangehrm-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open the Browser and Navigate to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify the Title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click the Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validate-the-orangehrm-application;to-validate-the-login-functionality-of-orangehrm-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "validate-the-orangehrm-application;to-validate-the-login-functionality-of-orangehrm-application;;1"
    },
    {
      "cells": [
        "admin",
        "Admin123"
      ],
      "line": 14,
      "id": "validate-the-orangehrm-application;to-validate-the-login-functionality-of-orangehrm-application;;2"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 15,
      "id": "validate-the-orangehrm-application;to-validate-the-login-functionality-of-orangehrm-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "To validate the login functionality of OrangeHRM Application",
  "description": "",
  "id": "validate-the-orangehrm-application;to-validate-the-login-functionality-of-orangehrm-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open the Browser and Navigate to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify the Title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the \"admin\" and \"Admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click the Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Page_Step.open_the_Browser_and_Navigate_to_the_URL()"
});
formatter.result({
  "duration": 12405863200,
  "status": "passed"
});
formatter.match({
  "location": "Login_Page_Step.verify_the_Title_of_the_Page()"
});
formatter.result({
  "duration": 19363400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 11
    },
    {
      "val": "Admin123",
      "offset": 23
    }
  ],
  "location": "Login_Page_Step.enter_the_and(String,String)"
});
formatter.result({
  "duration": 644977800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Page_Step.click_the_Submit_Button()"
});
formatter.result({
  "duration": 1357415000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Page_Step.close_the_Browser()"
});
formatter.result({
  "duration": 1166341000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "To validate the login functionality of OrangeHRM Application",
  "description": "",
  "id": "validate-the-orangehrm-application;to-validate-the-login-functionality-of-orangehrm-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open the Browser and Navigate to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify the Title of the Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click the Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Page_Step.open_the_Browser_and_Navigate_to_the_URL()"
});
formatter.result({
  "duration": 9579349700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Page_Step.verify_the_Title_of_the_Page()"
});
formatter.result({
  "duration": 12251900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 11
    },
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "Login_Page_Step.enter_the_and(String,String)"
});
formatter.result({
  "duration": 449403200,
  "status": "passed"
});
formatter.match({
  "location": "Login_Page_Step.click_the_Submit_Button()"
});
formatter.result({
  "duration": 4833180800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Page_Step.close_the_Browser()"
});
formatter.result({
  "duration": 875406700,
  "status": "passed"
});
});