import { test, expect } from '@playwright/test';

// @playwright/test -- this is a test runner that provides a test framework and assertion library for writing end-to-end tests in Playwright.

test("Should load the homepage with correct title", async ({ page }) => {
    // Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");

    // Assert header text
    await expect(page.locator('//h1')).toHaveText('CURA Healthcare Service')
})

//A basic test case structure in Playwright consists of the following components:
//1. Test Function: The test function is used to define a test case. It takes a string description of the test and an asynchronous function that contains the test logic.
//2. Page Object: The page object represents a web page and provides methods to interact with it, such as navigating to URLs, clicking elements, filling forms, etc.
//3. Assertions: Assertions are used to verify that the application behaves as expected. Playwright provides built-in assertion methods like toHaveTitle, toHaveText, etc., to validate the state of the page or elements. a. ctrl+ space to see the list of available assertions.
//4. Test Info: The testInfo object provides information about the current test execution, such as the test name, status, and any additional metadata. It can be used for logging or reporting purposes.    
//5. Test Steps: Test steps are the individual actions performed during the test, such as navigating to a page, clicking a button, or filling out a form. Each step can be logged for better visibility and debugging.
//6. Test Hooks: Playwright provides hooks like beforeAll, afterAll, beforeEach, and afterEach to set up and tear down test environments. These hooks can be used to perform common setup tasks or clean up resources after tests.
//7. Middle {}:- can take annotations like @smoke, @regression, @sanity, etc. to categorize the test cases. This helps in organizing and filtering tests based on their purpose or priority. and tags can be used to group related tests together for easier management and execution.
test.only("Should demo locators ",async ({ page }) => {

    //Launch the application
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //Click on Make Appointment button
    let makeAppmtBtn =  page.locator('#btn-make-appointment');
    await makeAppmtBtn.click();
    await expect(page.getByText('Please login to make appointment.')).toBeVisible();   

    // the type of locator is an object and an object can have multiple properties and methods. The locator object provides various methods to interact with the element, such as click(), fill(), type(), etc. It also provides properties like count, first, last, etc., to access specific elements in a collection of matching elements.    
    // An object is a collection of key-value pairs, where each key is a string and each value can be any data type, including other objects or functions. Objects are used to represent and organize data in a structured way, allowing for easy access and manipulation of the data. In JavaScript, objects are created using curly braces {} and can be assigned to variables or passed as arguments to functions.  

})