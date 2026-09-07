import{test,expect} from '@playwright/test'
import { getUserData} from '../Data/user.data';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';

test('Account confirmation', async({page})=>{
     //await loginPage.goTo();
     await page.goto('/my-account');
     const myAccountPage=new MyAccountPage(page);
     await expect(myAccountPage.profileLocator).toBeVisible();
     await expect(myAccountPage.profileLocator).toContainText('Shharma');
})