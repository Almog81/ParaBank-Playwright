import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { LoginPage } from '../../pages/loginPage';

test.describe('sanityTest', ()=> {
  
  let page
  let homePage
  let loginPage

  test.beforeEach('page mange',async ({browser})=> {
    const context  = await browser.newContext()
    page = await context.newPage()
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    
  })

  test('test', async () => {
    await homePage.naviToLogin()
    await loginPage.loginAction('user4Test@example.com','!@userPassword1234')
    await expect(page.locator(homePage.elm_loggedIn).nth(0)).toContainText('Sam One')
  });

  test.afterAll(async () => {
    await page.close();
  });
})


