Feature: Deal data Creation

Scenario:  Free CRM create a new deal scenario

Given User is already on login page
When Title of login page is Cogmento CRM
Then user enters username and password
| kush.ag25@gmail.com |KushAnshul |
Then user clicks on Login button
Then user is on home page
Then user moves to new deal page
Then user enters deal details
| test deal | 1000 | 50 | 10 |
Then Close the browser

