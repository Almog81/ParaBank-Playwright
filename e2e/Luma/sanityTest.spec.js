import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { LoginPage } from '../../pages/loginPage';
import { CreateUserPage } from '../../pages/createUserPage';
const DDTManager = require('../../utilities/DDTManager');

test.describe('sanityTest', ()=> {
  
  let page;
  let homePage;
  let loginPage;
  let createUserPage;

  test.beforeEach('page mange',async ({browser})=> {
    const context  = await browser.newContext();
    page = await context.newPage();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    createUserPage = new CreateUserPage(page);
  });

  const loginTestData = DDTManager.getLoginData();
  for (const data of loginTestData) {
    test(`Test01: Login Test with ${data.email}`, async () => {
      await homePage.naviToLogin();
        await loginPage.loginAction(data.email, data.password);
        await expect(page.locator(homePage.elm_loggedIn).nth(0)).toContainText(data.name);
    });
  }

  const createAccountTestData = DDTManager.getCreateAccountData();
  for (const data of createAccountTestData) {
    test(`Test02: Create Account Test for ${data.firstName} ${data.lastName}`, async () => {
      await homePage.naviToCreateAccount();
      await createUserPage.createAccountAction(
        data.firstName,
        data.lastName,
        data.email,
        data.password
      );
    });
  }

  test.afterAll(async () => {
    await page.close();
  });
});


