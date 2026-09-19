import { BasePage } from "./BasePage";
import {Page,Locator} from '@playwright/test';
import { PaymentPage } from "./PaymentPage";



export class ShippingPage extends BasePage{
  readonly page:Page;
  readonly proceedToCheckOutLocator:Locator;
  readonly termsCheckBox:Locator;

    constructor(page:Page){
        super(page);
        this.page=page;
        this.proceedToCheckOutLocator=page.getByRole('button',{name:'Proceed to checkout'});
        this.termsCheckBox=page.getByRole('checkbox',{name:'I agree to the terms of service and will adhere to them unconditional'});


    }

    async goToPayementPage():Promise<PaymentPage>{

        await this.termsCheckBox.check();
        await this.clickOnElement(this.proceedToCheckOutLocator);
        return new PaymentPage(this.page);

    }




}