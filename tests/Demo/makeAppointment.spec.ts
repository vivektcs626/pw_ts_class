import { test, expect } from '@playwright/test';

test.describe('Make Appointment', () => {

    test.beforeEach("Login with valid creds", async ({page}) => {

        await page.goto('https://katalon-demo-cura.herokuapp.com/');
        await page.locator('html').click();
        await page.getByRole('link', { name: 'Make Appointment' }).click();
        await page.getByLabel('Username').click();
        await page.getByLabel('Username').fill('John Doe');
        await page.getByLabel('Username').press('Tab');
        await page.getByLabel('Password').fill('ThisIsNotAPassword');
        await page.getByRole('button', { name: 'Login' }).click();
    })
    test('Should be able to make an appointment with non-default values', async ({ page }) => {
    
    //Dropdown selection and other form filling actions    
    await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
    //Checkbox and radio button selection
    await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
    await page.getByRole('radio', { name: 'Medicaid' }).check();
    //Date picker interaction
    await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
    await page.getByRole('cell', { name: '25' }).click();
    //Text area interaction
    await page.getByRole('textbox', { name: 'Comment' }).click();
    await page.getByRole('textbox', { name: 'Comment' }).fill('This is a recoding code generator ');
    await page.getByRole('button', { name: 'Book Appointment' }).click();
    // Assertions to verify the appointment confirmation page
    await expect(page.locator('h2')).toContainText('Appointment Confirmation');
    await expect(page.getByRole('link', { name: 'Go to Homepage' })).toBeVisible();
})
})

