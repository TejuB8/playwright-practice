import user from '../test-data/user.json';
import {User} from '../Data/user.type';
import{test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
const creds:User[]=user;


    

    for(const loginCreds of creds){
        test(`Login using ${loginCreds.email} and ${loginCreds.password}`, {tag:'@regression'}, async({page})=>{

      const loginPage=new LoginPage(page);
      await loginPage.goTo();
        await loginPage.doLoginWith(loginCreds.email,loginCreds.password);

    
    

})
    }