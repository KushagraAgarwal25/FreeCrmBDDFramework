$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/contacts.feature");
formatter.feature({
  "name": "Free CRM Create Contacts",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ]
    },
    {
      "cells": [
        "kush.ag25@gmail.com",
        "KushAnshul",
        "Tom",
        "Peter",
        "Manager"
      ]
    },
    {
      "cells": [
        "kush.ag25@gmail.com",
        "KushAnshul",
        "David",
        "Moore",
        "Director"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"kush.ag25@gmail.com\" and \"KushAnshul\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"Manager\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_enters_contact_details(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"kush.ag25@gmail.com\" and \"KushAnshul\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters contact details \"David\" and \"Moore\" and \"Director\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.user_enters_contact_details(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});