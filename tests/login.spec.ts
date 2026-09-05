import{test,expect} from '@playwright/test'
import { getUserData} from '../Data/user.data';
import { LoginPage } from '../pages/LoginPage';

test('Login test', async({page})=>{
  const userData=getUserData();
  const loginPage=new LoginPage(page);
  await loginPage.goTo();
  await loginPage.doLoginWith(userData.email,userData.password);
})