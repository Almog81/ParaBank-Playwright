import { expect } from '@playwright/test';

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        
        //Locators
        this.txt_loginEmail = '#email'
        this.txt_password = '#pass'
        this.btn_login = '.action.login.primary'
        this.elm_loggedIn = '.logged-in'
    }
    
    async loginAction(email, password){
        await this.page.locator(this.txt_loginEmail).fill(email)
        await this.page.locator(this.txt_password).nth(0).fill(password)
        await this.page.locator(this.btn_login).click()
        await this.page.waitForLoadState()
    }
}
