import{test,expect} from '@playwright/test'
import { getUserData} from '../Data/user.data';
import { LoginPage } from '../pages/LoginPage';



test('Login test', async({page})=>{
  const userData=getUserData();
  const loginPage=new LoginPage(page);
  await loginPage.goTo();
  await loginPage.doLoginWith(userData.email,userData.password);
})

test('Account confirmation', async({page})=>{
     const userData=getUserData();
     const loginPage=new LoginPage(page);
     await loginPage.goTo();
     const myAccountPage=await loginPage.doLoginWith(userData.email,userData.password);
     await expect(myAccountPage.profileLocator).toBeVisible();
     await expect(myAccountPage.profileLocator).toContainText('Shharma');
     await myAccountPage.chooseCategory();

})
 
test("product page test" ,async({page})=>{
    const userData=getUserData();
    const loginPage=new LoginPage(page);
     await loginPage.goTo();
    const accountPage=await loginPage.doLoginWith(userData.email,userData.password);
    const productPage=await accountPage.chooseCategory();
    await expect(productPage.page).toHaveURL('/3-women')
    await productPage.addToCart();
})