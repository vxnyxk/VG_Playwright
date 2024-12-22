import { test, expect, beforeEach} from '@playwright/test';
import { user } from './testdata';
import { locators } from '../locators/dashboard_locators';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { LogoutPage } from '../pages/logout-page';

beforeEach( async ({ page }) => {
    const homepage = new HomePage(page);
    
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password, user.companyid);
  });

  test('Check title', async ({ page }) => {
    await expect(page).toHaveTitle(/Viva Glint/);
  });

  test('click on reports', async ({ page }) => {
    await page.click(locators.reports_button);
  });