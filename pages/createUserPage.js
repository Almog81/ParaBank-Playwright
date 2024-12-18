import { expect } from '@playwright/test';

export class CreateUserPage {
    constructor(page) {
        this.page = page;
        
        //Locators
        this.txt_firstName = '#firstname'
        this.txt_lastName = '#lastname'
        this.txt_email = '#email_address'
        this.txt_password = '#password'
        this.txt_confirmPassword = '#password-confirmation'
        this.btn_createAccount = '.action.submit.primary'
        this.elm_success = '.message-success'
        this.elm_error = '.message-error'
    }
    
    async createAccountAction(firstName, lastName, email, password){
        await this.page.locator(this.txt_firstName).fill(firstName)
        await this.page.locator(this.txt_lastName).fill(lastName)
        await this.page.locator(this.txt_email).fill(email)
        await this.page.locator(this.txt_password).nth(0).fill(password)
        await this.page.locator(this.txt_confirmPassword).fill(password)
        await this.page.locator(this.btn_createAccount).click()
        await this.page.waitForLoadState()
        await expect(this.page.locator(this.elm_success).nth(0)).toBeVisible()

    }
}
