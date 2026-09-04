import{test,expect} from '@playwright/test'

test('Login test', async({page})=>{
  await page.goto('https://automationpractice.techwithjatin.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email').fill(process.env.EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD);
  await page.getByRole('button', { name: ' Sign in' }).click();
  await expect(page).toHaveTitle('My account - Automation Practice')
})