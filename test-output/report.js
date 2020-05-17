$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/dealsmap.feature");
formatter.feature({
  "name": "Deal data Creation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Free CRM create a new deal scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.DealsStepWithMapDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.DealsStepWithMapDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.DealsStepWithMapDefinition.user_enters_username_and_password(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.DealsStepWithMapDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.DealsStepWithMapDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.DealsStepWithMapDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters deal details",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.DealsStepWithMapDefinition.user_enters_deal_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.DealsStepWithMapDefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});