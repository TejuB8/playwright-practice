import { AddressPage } from "./AddressPage";
import { BasePage } from "./BasePage";
import {Page,Locator} from '@playwright/test'

export class OrderPage extends BasePage{
    readonly productLocator:Locator;
    readonly priceLocator:Locator;
    readonly proccedToCheckOutLocator:Locator;
    readonly page:Page;
    constructor(page:Page){
        super(page);
        this.page=page;
        this.productLocator=page.locator('.cart-info').locator('.cart_block_product_name');
        this.priceLocator=page.locator('.cart_total_price').locator('#total_price');
        this.proccedToCheckOutLocator=page.getByRole('link',{name:'Proceed to checkout'});

    }

    async goToAdressConfirmationPage():Promise<AddressPage>{
            await this.clickOnElement(this.proccedToCheckOutLocator);
            return new AddressPage(this.page);


    }

}