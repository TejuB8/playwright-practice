import {test as setup}  from '@playwright/test'
import { getUserData } from '../Data/user.data'
import { LoginPage } from '../pages/LoginPage';

setup("authenticate", async({page})=>{
    const userData=getUserData();
    const loginpage=new LoginPage(page);
    await loginpage.goTo();
    await loginpage.doLoginWith(userData.email,userData.password);
    await page.context().storageState({
    path: 'playwright/.auth/user.json',
   });
    
})