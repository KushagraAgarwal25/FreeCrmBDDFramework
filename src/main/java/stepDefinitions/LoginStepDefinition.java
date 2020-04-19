package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginStepDefinition {

	WebDriver driver;

	@Given("^User is already on login page$")
	public void user_is_already_on_login_page() {

		System.setProperty("webdriver.chrome.driver", "D:\\java\\chromedriver_win32_version79\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		
		driver.get("https://ui.freecrm.com/");

	}

	@When("^Title of login page is Cogmento CRM$")
	public void title_of_login_page_is_Cogmento_CRM() {

		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
	}

	//Regular Expression:
	//1. \"([^\"]*)\"
	//2. \"(.*)\"
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.xpath("//input[@type = 'password']")).sendKeys(password);
		
	}

	@Then("^user clicks on Login button$")
	public void user_clicks_on_Login_button() {
		driver.findElement(By.xpath("//*[contains(text(), 'Login')]")).click();

	}
	
	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		boolean result = driver.findElement(By.xpath("//*[contains(text(),'Home')]")).isDisplayed();
		System.out.println(result);
	    
	}
	
	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact_page() {
	    driver.findElement(By.xpath("//*[contains(text(), 'Contacts')]")).click();
	    driver.findElement(By.xpath("//a[@href = '/contacts/new']")).click();
	    driver.navigate().refresh();
	    driver.navigate().refresh();
	}
	
	@Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enters_contact_details(String firstname, String lastname, String position){
		driver.findElement(By.name("first_name")).sendKeys(firstname);
		driver.findElement(By.name("last_name")).sendKeys(lastname);
		driver.findElement(By.xpath("//input[@name = 'position']")).sendKeys(position);
		driver.findElement(By.xpath("//button[contains(text(),'Save')]")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		
	}
	
	@Then("^close the browser$")
	public void close_the_browser(){
		driver.quit();
	}

}
