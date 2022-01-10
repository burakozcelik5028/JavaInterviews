import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class StepDefinitionsApplicature {

    private WebDriver webDriver;
    private String baseUrl = "https://www.google.com";
    private String secondPage = "https://www.google.com/search?q=cucumber&sxsrf=AOaemvJy6DLKqoHxcZ04OsOocjcsxWkp4w:1641778014039&ei=XovbYfrnAYf_rgS4762wCg&start=10&sa=N&ved=2ahUKEwj6js7ag6b1AhWHv4sKHbh3C6YQ8tMDegQIChA_&biw=844&bih=756&dpr=1.13";

    @Before
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "driver/chrome-driver-81.0.4044.69.exe");
        webDriver = new ChromeDriver();
        webDriver.manage().window().maximize();
    }

    @Given("Open google.com")
    public void open_google_com() {
        webDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        webDriver.get(baseUrl);
    }

    @When("Entering string {cucumber}")
    public void entering_string(String cucumber) {
        WebElement googleTextBox = webDriver.findElement(By.className("gLFyf"));
        googleTextBox.sendKeys(cucumber);
    }

    @When("Press enter")
    public void press_enter() {
        WebElement searchButton = webDriver.findElement(By.className("gNO89b"));
        searchButton.click();
    }

    @When("Press enter")
    public void result_should_be(String result) {
        //expected result parameter should be "Approximate number of results: 201 000 000"

        WebElement results = webDriver.findElement(By.id("result-stats"));

        String getResult = results.getText();
        Assert.assertEquals(getResult, result);

        if (results.getText().equals(result)){
            System.out.print("Approximate number of results are 201 000 000");
        } else {
            System.out.print("Unfortunately approximate number of results are not 201 000 000");
        }
    }

    @When("Open second page")
    public void open_second_page() {
        webDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        webDriver.get(secondPage);
    }

    @Then("Result2 should be {cucumber}")
    public void result2_should_be(String result) {
        //expected result parameter should be "7 Health Benefits of Eating Cucumber - Healthline"

        WebElement calculatorTextBox = webDriver.findElement(By.className("LC20lb"));
        String results = calculatorTextBox.getText();

        if (calculatorTextBox.getText().equals(result)){
            System.out.print("First item in response at second page is 7 Health Benefits of Eating Cucumber - Healthline");
        } else {
            System.out.print("Unfortunately first item in response at second page is not 7 Health Benefits of Eating Cucumber - Healthline");
        }

        Assert.assertEquals(results, result);
        webDriver.close();
    }

    @After
    public void end() {
        if (webDriver != null) {
            webDriver.quit();
        }
    }

}
