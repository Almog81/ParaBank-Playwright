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

  const RegisterData = DDTManager.getCreateAccountData();
  for (const data of RegisterData) {
    test(`Test01: Create Account Test for ${data.firstName} ${data.lastName}`, async () => {
      await homePage.naviToRegister();
      await createUserPage.createAccountAction(data);
    });
  }

  const loginTestData = DDTManager.getLoginData();
  for (const data of loginTestData) {
    test(`Test02: Login Test with ${data.username}`, async () => {
      await homePage.naviToHomePage()
        await loginPage.loginAction(data);
        await expect(page.locator(homePage.elm_welcome).nth(0)).toContainText(data.name);
    });
  }

  test.afterAll(async () => {
    await page.close();
  });
});


