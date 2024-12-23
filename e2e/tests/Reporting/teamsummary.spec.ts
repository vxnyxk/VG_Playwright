import { test, expect, beforeEach, Page } from '@playwright/test';
import { user } from '../../fixtures/testdata';
import { locators } from '../../fixtures/dashboard_locators'
import { teamsummary_locators } from '../../fixtures/tsr_locators';
import { HomePage } from '../../pages/home-page';
import { LoginPage }  from '../../pages/login-page';
import { reportsPage }  from '../../pages/reports';

let reportspage: reportsPage;

beforeEach(async ({ page }) => {
  const homepage = new HomePage(page);
  reportspage = new reportsPage(page);
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password, user.companyid);
  await page.click(locators.reports_button);
});

test('TC-01-Check VG Title', async ({ page }) => {
  await reportspage.opentsr();
  await expect(page).toHaveTitle(/Viva Glint/);
});

test('TC-02-Open Team Summary', async ({ page }) => {
  await reportspage.opentsr();
  //await page.click(locators.teamsummary_button);
});

test('TC-03,Check Team Summary Report Name',async ({page}) => {
  await reportspage.opentsr();
  await expect(page.getByText('Team Summary')).toBeVisible();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'test-results/titlescreenshot.png' });
});

test('TC-04,Report Card Verification',async ({page}) => {
  await reportspage.opentsr();
  await page.waitForSelector(teamsummary_locators.survey_card);
  await expect(page.locator(teamsummary_locators.survey_card)).toBeVisible();
  await page.locator(teamsummary_locators.survey_card).screenshot({ path: 'test-results/card_screenshot.png' });
});
