import{test,expect} from '@playwright/test'
import { getUserData} from '../Data/user.data';

test('Login test', async({page})=>{
  await page.goto('');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email').fill(getUserData().email);
  await page.getByRole('textbox', { name: 'Password' }).fill(getUserData().password);
  await page.getByRole('button', { name: ' Sign in' }).click();
  await expect(page).toHaveTitle('My account - Automation Practice')
})