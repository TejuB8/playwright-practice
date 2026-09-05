
import {Page,Locator} from '@playwright/test';
import { MyAccountPage } from './MyAccountPage';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
   readonly page:Page;
   readonly signInLinkLocator:Locator;
   readonly emailLocator:Locator;
   readonly passwordLocator:Locator;
   readonly signInButtonLocator:Locator;

   constructor(page:Page){
   super(page);
    this.page=page;
    this.signInLinkLocator=page.getByRole('link', { name: 'Sign in' });
    this.emailLocator=page.locator('#email');
    this.passwordLocator=page.getByRole('textbox', { name: 'Password' });
    this.signInButtonLocator=page.getByRole('button', { name: 'Sign in' });


   }

   async goTo(){
     await this.goToUrl();
   }

   async doLoginWith(email:string,password:string):Promise<MyAccountPage>{
    await this.clickOnElement(this.signInLinkLocator);
    await this.fillValue(this.emailLocator,email);
    await this.fillValue(this.passwordLocator,password);
    await this.clickOnElement(this.signInButtonLocator);
    const myAccountPage=new MyAccountPage(this.page);
    return myAccountPage;

   }
}