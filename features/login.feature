
@smoke
Feature:login functionality
Scenario: Login with valid credentials
Given user is on login page
When user enters valid username and password
And clicks on login button
Then user should navigate to homepage


Scenario: Login with invalid credentials
Given user is on login page
When user enters invalid username "standard_user1" and invalidpassword "secret_sauce1"
And clicks on login button
Then user should navigate to errorpage

