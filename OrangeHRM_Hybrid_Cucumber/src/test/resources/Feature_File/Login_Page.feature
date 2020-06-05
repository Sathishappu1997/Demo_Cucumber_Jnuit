Feature: Validate the OrangeHRM Application

Scenario Outline: To validate the login functionality of OrangeHRM Application

Given Open the Browser and Navigate to the URL
When Verify the Title of the Page
Then Enter the "<Username>" and "<Password>"
Then Click the Submit Button
And Close the Browser

Examples:

|Username|Password|
|admin|Admin123|
|Admin|admin123|
