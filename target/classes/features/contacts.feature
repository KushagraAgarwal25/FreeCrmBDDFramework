Feature: Free CRM Create Contacts

Scenario Outline: Free CRM Create a new contact scenario
	Given User is already on login page 
	When Title of login page is Cogmento CRM 
	Then user enters "<username>" and "<password>" 
	Then user clicks on Login button 
	Then user is on home page
	Then user moves to new contact page
	Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
	Then close the browser
	
Examples:
	| username            | password    | firstname | lastname | position |
	| kush.ag25@gmail.com | KushAnshul | Tom       | Peter    | Manager  |
	| kush.ag25@gmail.com | KushAnshul | David     | Moore    | Director |