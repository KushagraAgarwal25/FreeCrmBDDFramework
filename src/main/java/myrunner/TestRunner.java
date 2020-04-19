package myrunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\java\\kush\\FreeCrmBDDFramework\\src\\main\\java\\features\\contacts.feature",//the path of feature files
		glue={"stepDefinitions"}, //the path of the step definition files
		plugin= {"pretty","html:test-output", "json:json_output/cucumber.json", 
				"junit:junit_xml/cucumber.xml", "junit:--step-notifications"},//to generate different types of reporting
		monochrome = true, //display the console output in a proper readable format
		strict = false, //it will check if any step is not defined in step definition file
		dryRun = true//to check the mapping is proper between feature file and step definition file
		)


public class TestRunner {
	
	
	
	

}
