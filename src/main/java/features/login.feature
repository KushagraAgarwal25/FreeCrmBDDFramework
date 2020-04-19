Feature: Free CRM Login Feature 

#Without Examples Keyword
#Scenario: Free CRM Login Test Scenario
#	Given User is already on login page 
#	When Title of login page is Cogmento CRM 
#	Then user enters "kush.ag25@gmail.com" and "KushAnshul" 
#	Then user clicks on Login button 
#	Then user is on home page 
	
#Scenario: user is able to create a new contact 
#	Given user is already on home page 
#	When user clicks on Contacts link 
#	Then user clicks on New button 
#	Then user enters firstname and lastname
#	Then user clicks on save button
#	Then verify new contact created
	
#With Examples Keyword
Scenario Outline: Free CRM Login Test Scenario
	Given User is already on login page 
	When Title of login page is Cogmento CRM 
	Then user enters "<username>" and "<password>" 
	Then user clicks on Login button 
	Then user is on home page 
	Then close the browser
	
	Examples: 
		| username            | password  |
		| kush.ag25@gmail.com |KushAnshul |
		| naveenk             | test@123  |
		|  tom                | test456   |	
	
