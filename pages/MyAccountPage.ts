import{Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';
export class MyAccountPage extends BasePage{

    readonly page:Page;
    readonly profileLocator:Locator;

    constructor(page:Page){
        super(page);
        this.page=page;
        this.profileLocator=page.getByText('Jatin Shharma');
    }


    async isAccountVisible():Promise<Boolean>{
        return await this.profileLocator.isVisible();
    }

}
