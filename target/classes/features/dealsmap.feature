Feature: Deal data Creation 

Scenario: Free CRM create a new deal scenario 

	Given User is already on login page 
	When Title of login page is Cogmento CRM 
	Then user enters username and password 
		|      username       |  password  |
		| kush.ag25@gmail.com | KushAnshul |
		
	Then user clicks on Login button 
	Then user is on home page 
	Then user moves to new deal page 
	Then user enters deal details 
		|    title   | amount | probability | commission |
		| test deal1 |  1000  |      40     |     10     |
		| test deal2 |  2000  |      50     |     20     |
		| test deal3 |  3000  |      60     |     30     |
		| test deal4 |  4000  |      70     |     40     |	
		
	Then Close the browser