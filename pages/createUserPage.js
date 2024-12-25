import { expect } from '@playwright/test';

export class CreateUserPage {
    constructor(page) {
        this.page = page;
        
        //Locators
        this.txt_firstName = '#customer\\.firstName'
        this.txt_lastName = '#customer\\.lastName'
        this.txt_address = '#customer\\.address\\.street'
        this.txt_city = '#customer\\.address\\.city'
        this.txt_state = '#customer\\.address\\.state'
        this.txt_zipCode = '#customer\\.address\\.zipCode'
        this.txt_phone = '#customer\\.phoneNumber'
        this.txt_ssn = '#customer\\.ssn'

        this.txt_username = '#customer\\.username'
        this.txt_password = '#customer\\.password'
        this.txt_confirmPassword = '#repeatedPassword'
        this.btn_register = '*[value="Register"]'

        this.elm_welcome = 'b:has-text("Welcome")'
        this.elm_error = '.error'
    }

    async createAccountAction(data){
        await this.page.locator(this.txt_firstName).fill(data.firstName);
        await this.page.locator(this.txt_lastName).fill(data.lastName);
        await this.page.locator(this.txt_address).fill(data.address);
        await this.page.locator(this.txt_city).fill(data.city);
        await this.page.locator(this.txt_state).fill(data.state);
        await this.page.locator(this.txt_zipCode).fill(data.zipCode);
        await this.page.locator(this.txt_phone).fill(data.phone);
        await this.page.locator(this.txt_ssn).fill(data.ssn);
        await this.page.locator(this.txt_username).fill(data.username);
        await this.page.locator(this.txt_password).fill(data.password);
        await this.page.locator(this.txt_confirmPassword).fill(data.password);
        await this.page.locator(this.btn_register).click()
        await this.page.waitForLoadState()
        await expect(this.page.locator(this.elm_welcome).nth(0)).toBeVisible()
    }
}
