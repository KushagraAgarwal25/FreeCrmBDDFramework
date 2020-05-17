package stepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

//data table with maps: for paramaterization of test cases

public class DealsStepWithMapDefinition {

	WebDriver driver;

	@Given("^User is already on login page$")
	public void user_is_already_on_login_page() {

		System.setProperty("webdriver.chrome.driver", "D:\\java\\chromedriver_win32_version81\\chromedriver.exe");
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

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) throws Throwable {
		List<Map<String, String>> list = credentials.asMaps(String.class, String.class);

		for (Map<String, String> data : list) {
			driver.findElement(By.name("email")).sendKeys(data.get("username"));
			driver.findElement(By.xpath("//input[@type = 'password']")).sendKeys(data.get("password"));
		}
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

	@Then("^user moves to new deal page$")
	public void user_moves_to_new_deal_page() throws InterruptedException {
		driver.findElement(By.xpath("//*[contains(text(), 'Deals')]")).click();
		driver.findElement(By.xpath("//a[@href = '/deals/new']")).click();
	}

	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable dealData) throws InterruptedException {
		List<Map<String, String>> value = dealData.asMaps(String.class, String.class);

		for (Map<String, String> dealValues : value) {

			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			driver.findElement(By.name("title")).sendKeys(dealValues.get("title"));
			driver.findElement(By.name("amount")).sendKeys(dealValues.get("amount"));
			driver.findElement(By.name("probability")).sendKeys(dealValues.get("probability"));
			driver.findElement(By.name("commission")).sendKeys(dealValues.get("commission"));
			driver.findElement(By.xpath("//*[contains(text(), 'Save')]")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//*[contains(text(), 'Deals')]")).click();
			driver.findElement(By.xpath("//a[@href = '/deals/new']")).click();

		}

	}

	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
