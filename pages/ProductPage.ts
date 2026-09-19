import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';
import { OrderPage } from './OrderPage';

export class ProductPage extends BasePage{
    readonly page:Page;
    readonly itemLocator:Locator;
    readonly addTocartLocator:Locator;
    readonly searchLocator:Locator;
    readonly searchButton:Locator;
    readonly itemTextLocator:Locator;
    readonly confirmationLocator:Locator;
    readonly proceedToCheckOut:Locator;
    constructor(page:Page){
        super(page);
        this.page=page;
        this.itemLocator=page.getByText('Printed Chiffon Dress');
        this.addTocartLocator=page.getByRole('link', { name: 'Add to cart' });
        this.searchLocator=page.getByRole('textbox', {name:'Search'});
        this.searchButton=page.locator('.button-search');
        this.itemTextLocator=page.locator('#product_list').locator('.product-name').filter({hasText:'Printed Chiffon Dress'});
        this.confirmationLocator=page.getByText('Product successfully added to your shopping cart');
        this.proceedToCheckOut=page.getByRole('link',{name:'Proceed to checkout'});
    }

    async searchProduct(value:string){
          await this.fillValue(this.searchLocator,value);
          await this.clickOnElement(this.searchButton);
         
    }

    async checkUrl():Promise<string>{
        return await this.page.url();
    }

    async addToCart():Promise<OrderPage>{
         await this.itemTextLocator.hover();
         await this.addTocartLocator.click();
         await this.clickOnElement(this.proceedToCheckOut);
         return new OrderPage(this.page);
    }

}