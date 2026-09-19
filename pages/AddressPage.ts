import { BasePage } from "./BasePage"; 
import {Page,Locator} from '@playwright/test';
import { ShippingPage } from "./ShippingPage";


export class AddressPage extends BasePage{
    readonly page:Page;
    readonly proceedToCheckOutLocator:Locator;
     constructor(page:Page){
        super(page);
        this.page=page;
        this.proceedToCheckOutLocator=page.getByRole('button',{name:'Proceed to checkout'});
     }

     async goToShiPPingPage():Promise<ShippingPage>{
        await this.clickOnElement(this.proceedToCheckOutLocator);
        return new ShippingPage(this.page);
     }



}