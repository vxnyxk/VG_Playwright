/*import { test, expect, beforeEach} from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { SettingsPage } from '../pages/settings-page';
import { LogoutPage } from '../pages/logout-page';

beforeEach( async ({ page }) => {
    const homepage = new HomePage(page);
    
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password, user.companyid);
    //expect(userIsLoggedIn).toBeTruthy();

    await homepage.goToSettings();
    await new SettingsPage(page).logout();

    const userIsLoggedOut = await new LogoutPage(page).userIsLoggedOut();
    expect(userIsLoggedOut).toBeTruthy();
  });

  test('Check title', async ({ page }) => {
    await expect(page).toHaveTitle(/Viva Glint/);
  });

  test('click on settings', async ({ page }) => {
    await page.click('//*[@id="tab-4"]');
  });*/