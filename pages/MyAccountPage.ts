import{Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';
import { ProductPage } from './ProductPage';

export class MyAccountPage extends BasePage{

    readonly page:Page;
    readonly profileLocator:Locator;
    readonly categoryLinkLocator:Locator;

    constructor(page:Page){
        super(page);
        this.page=page;
        this.profileLocator=page.getByText('Jatin Shharma');
        this.categoryLinkLocator=page.getByText('WOMEN').nth(0);
    }


    async isAccountVisible():Promise<Boolean>{
        return await this.profileLocator.isVisible();
    }
    async chooseCategory():Promise<ProductPage>{
        await this.categoryLinkLocator.click();
        const productPage=new ProductPage(this.page);
        return productPage;
    }

}
