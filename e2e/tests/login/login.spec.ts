import { test, expect, beforeEach } from '@playwright/test';
import { user } from '../../fixtures/testdata';
import { locators } from '../../fixtures/dashboard_locators';
import { HomePage } from '../../pages/home-page';
import { LoginPage }  from '../../pages/login-page';

let loginpage: LoginPage;

beforeEach(async ({ page }) => {
  const homepage = new HomePage(page);
  loginpage= new LoginPage(page);
  await homepage.open();
  await loginpage.login(user.email, user.password, user.companyid);
  //await new LoginPage(page).login(user.email, user.password, user.companyid);
});

test('TC-01,Check title', async ({ page }) => {
  await expect(page).toHaveTitle(/Viva Glint/);
});

test('TC_02,click on reports', async ({ page }) => {
  await page.click(locators.reports_button);
});