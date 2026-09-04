import { test, expect } from '@playwright/test';
import { newUserData } from '../Data/customer.data';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  //await page.getByRole('button', { name: 'Create an account' }).click();
  await page.locator('#email_create').fill(newUserData().email);
  await page.getByRole('button', { name: 'Create an account' }).click();
  await page.getByRole('radio', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).fill(newUserData().firstName);
  await page.getByRole('textbox', { name: 'Last name *' }).fill(newUserData().lastName);
  await page.getByRole('textbox', { name: 'Password *' }).fill(newUserData().password);
  await page.locator('#days').selectOption(newUserData().day);
  await page.locator('#months').selectOption(newUserData().month);
  await page.locator('#years').selectOption(newUserData().year);
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('button', { name: 'Register ' }).click();
  await page.getByText('Your account has been created.').click();
});