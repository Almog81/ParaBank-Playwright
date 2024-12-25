import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
        
        //Locators
        this.txt_username = 'input[name="username"]'
        this.txt_password = 'input[name="password"]'
        this.btn_login = '*[value="Log In"]'
        this.elm_error = '.error'
        this.elm_welcome = 'b:has-text("Welcome")'
    }
    
    async loginAction(data){
        await this.page.locator(this.txt_username).fill(data.username)
        await this.page.locator(this.txt_password).nth(0).fill(data.password)
        await this.page.locator(this.btn_login).click()
        await expect(this.page.locator(this.elm_welcome).nth(0)).toBeVisible()
        await this.page.waitForLoadState()
    }
}
