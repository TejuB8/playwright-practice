import{test,expect} from '@playwright/test'
import { getUserData} from '../Data/user.data';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';

test('Account confirmation',  {tag:'@regression'}, async({page})=>{
     const userData=getUserData();
     const loginPage=new LoginPage(page);
     await loginPage.goTo();
     const myAccountPage=await loginPage.doLoginWith(userData.email,userData.password);
     await expect(myAccountPage.profileLocator).toBeVisible();
     await expect(myAccountPage.profileLocator).toContainText('Shharma');
     await myAccountPage.chooseCategory();

})