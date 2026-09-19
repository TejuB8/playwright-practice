import {BasePage} from "./BasePage";
import {Page} from '@playwright/test';

export class PaymentPage extends BasePage{
    readonly page:Page;
    constructor(page:Page){
        super(page);
        this.page=page;
    } 


}      