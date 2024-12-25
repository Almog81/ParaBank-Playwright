import { expect } from '@playwright/test';

export class HomePage {
    url = 'https://parabank.parasoft.com/';
    constructor(page) {
        this.page = page;
        this.btn_register = 'a[href*="register"]:has-text("Register")'
    }
    
    async naviToHomePage(){
        await this.page.goto(this.url)
        await expect.soft(this.page.waitForLoadState()).toBeTruthy()
        
    }
    async naviToRegister(){
        await this.naviToHomePage()
        await this.page.locator(this.btn_register).click();
        await this.page.waitForLoadState()
    }
}
