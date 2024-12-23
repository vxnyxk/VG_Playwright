import { test, expect, beforeEach } from '@playwright/test';
import { user } from '../../locators/testdata';
import { locators } from '../../locators/dashboard_locators';
import { HomePage } from '../../pages/home-page';
import { LoginPage }  from '../../pages/login-page';

beforeEach(async ({ page }) => {
  const homepage = new HomePage(page);
  
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password, user.companyid);
  await page.click(locators.reports_button);
});

test('TC-01-Check VG Title', async ({ page }) => {
  await page.click(locators.teamsummary_button);
  await expect(page).toHaveTitle(/Viva Glint/);
});

test('TC-02-Open Team Summary', async ({ page }) => {
  await page.click(locators.teamsummary_button);
});

test('TC-03,Check Team Summary Report Name',async ({page}) => {
  await page.click(locators.teamsummary_button);
  await expect(page.getByText('Team Summary')).toBeVisible();
});