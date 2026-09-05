import {Page,Locator} from '@playwright/test';

export class BasePage{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }


    async goToUrl(){
        await this.page.goto('/');
    }

    async clickOnElement(locator:Locator){
        await locator.click();

    }
    async fillValue(locator:Locator, value:string){
        await locator.fill(value);
    }


}