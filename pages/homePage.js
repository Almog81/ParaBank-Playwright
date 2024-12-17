import { expect } from '@playwright/test';

exports.HomePage = class HomePage {
    url = 'https://magento.softwaretestingboard.com/';
    constructor(page) {
        this.page = page 
        this.lin_signIn = 'a[href*="login"]:has-text("Sign In")'
        this.btn_createAccount = ' a[href*="create"]:has-text("Create an Account")'
        this.elm_loggedIn = '.logged-in'
    }
    
    async naviToHomePage(){
        await this.page.goto(this.url)
        await expect.soft(this.page.waitForLoadState('networkidle')).toBeTruthy()
        
    }
    async naviToLogin(){
        await this.naviToHomePage()
        await this.page.locator(this.lin_signIn).nth(0).click();
        await this.page.waitForLoadState('networkidle')
    }
}
