import{test,expect} from '@playwright/test'
import { getUserData} from '../Data/user.data';
import { LoginPage } from '../pages/LoginPage';

test('Account confirmation', async({page})=>{
     const userData=getUserData();
     const loginPage=new LoginPage(page);
     await loginPage.goTo();
     const myAccountPage=await loginPage.doLoginWith(userData.email,userData.password);
     await expect(await myAccountPage.isAccountVisible()).toBeTruthy();
})