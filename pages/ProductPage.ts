import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage{
    readonly page:Page;
    readonly itemLocator:Locator;
    readonly addTocartLocator:Locator;
    constructor(page:Page){
        super(page);
        this.page=page;
        this.itemLocator=page.getByText('Printed Chiffon Dress');
        this.addTocartLocator=page.getByRole('link', { name: 'Add to cart' });
        

    }

    async checkUrl():Promise<string>{
        return await this.page.url();
    }

    async addToCart(){
         await this.itemLocator.isVisible();
         await this.itemLocator.hover();
         await this.addTocartLocator.click();
    }

}