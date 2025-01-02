import { test, expect, beforeEach, Page } from '@playwright/test';
import { user } from '../../fixtures/testdata';
import { locators } from '../../fixtures/dashboard_locators'
import { teamsummary_locators } from '../../fixtures/tsr_locators';
import { HomePage } from '../../pages/home-page';
import { LoginPage }  from '../../pages/login-page';
import { reportsPage }  from '../../pages/reports';
import { waitForDebugger } from 'inspector';

let reportspage: reportsPage;
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

test.describe('Admin based Test cases,Group 1', () => {
  test.beforeEach(async ({ page }) => {
  const homepage = new HomePage(page);
  reportspage = new reportsPage(page);
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password, user.companyid);
  await page.click(locators.reports_button);
});

test('(444821)TC-01-Check VG Title', async ({ page }) => {
  await reportspage.opentsr();
  await expect(page).toHaveTitle(/Viva Glint/);
});

test('(444822)TC-02-Open Team Summary', async ({ page }) => {
  await reportspage.opentsr();
  //await page.click(locators.teamsummary_button);
});

test('(444824)TC-03,Check Team Summary Report Name',async ({page}) => {
  await reportspage.opentsr();
  await expect(page.getByText('Team Summary')).toBeVisible();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'test-results/titlescreenshot.png' });
});

test('(444825)TC-04,Report Card Verification',async ({page}) => {
  await reportspage.opentsr();
  await page.waitForSelector(teamsummary_locators.survey_card);
  await expect(page.locator(teamsummary_locators.survey_card)).toBeVisible();
  await page.locator(teamsummary_locators.survey_card).screenshot({ path: 'test-results/card_screenshot.png' });
});


test('(444826)TC-05,Check Primary Hierarchy',async ({page}) => {
  await reportspage.opentsr();
  await page.waitForSelector(teamsummary_locators.Primary_hierarchy);
  await expect(page.locator(teamsummary_locators.Primary_hierarchy)).toBeVisible();
  await page.locator(teamsummary_locators.Primary_hierarchy).screenshot({ path: 'test-results/primary_hierarchy.png' });
});

test('(444827)TC-06,Check Response Rate and Comments Card',async ({page}) => {
  await reportspage.opentsr();
  await page.waitForSelector(teamsummary_locators.reponserate_comments_card);
  await expect(page.locator(teamsummary_locators.reponserate_comments_card)).toBeVisible();
  await page.locator(teamsummary_locators.reponserate_comments_card).screenshot({ path: 'test-results/responserate.png' });
});

test('(444828)TC-08,Check Comments Count', async ({page}) => {
  await reportspage.opentsr();
  await page.waitForSelector(teamsummary_locators.reponserate_comments_card);
  await expect(page.locator(teamsummary_locators.reponserate_comments_card)).toBeVisible();
  await page.locator(teamsummary_locators.reponserate_comments_card).screenshot({ path: 'test-results/commentscount.png' });
});

test('(444829)TC-09,Check driver with most comments', async ({page}) => {
  //Most Commented Driver in this CLient is "Care and Acts ethically"
  await reportspage.opentsr();
  //await expect(page.getByText('Care and Acts ethically')).toBeVisible();
  await expect(page.locator(teamsummary_locators.reponserate_comments_card).getByText('Care and Acts ethically')).toBeVisible();
});

test('(444830)TC-10,Check driver with least comments', async ({page}) => {
  await reportspage.opentsr();
  await page.waitForSelector(teamsummary_locators.view_comments);
  await expect(page.locator(teamsummary_locators.view_comments)).toBeVisible();
  //await page.locator(teamsummary_locators.view_comments).click();
  await reportspage.click_comments();
});

test('(444831)TC-11,Check Comments Visibility', async ({page}) => {
  await reportspage.opentsr();
  await page.waitForSelector(teamsummary_locators.view_comments);
  await expect(page.locator(teamsummary_locators.view_comments)).toBeVisible();
  await reportspage.click_comments();
  await page.waitForSelector(teamsummary_locators.view_comments_report);
  await page.locator(teamsummary_locators.view_comments_report).click();
});

test('(444833,444834)TC-14,Check Key Outcome section ', async ({ page }) => {
  await reportspage.opentsr();
  await page.waitForSelector(teamsummary_locators.key_outcome);
  await expect(page.locator(teamsummary_locators.key_outcome)).toBeVisible();
  await page.locator(teamsummary_locators.key_outcome).screenshot({ path: 'test-results/key_outcome.png' });
});

test('(444835)TC-15,Check Score Section ', async ({ page }) => {
  await reportspage.opentsr();
  await expect(page.locator(teamsummary_locators.score_svg_path)).toBeVisible();
  await page.locator(teamsummary_locators.score_svg_path).click();
  await sleep(3000);
});

test('(444836)TC-16,Check Learn More Button ', async ({ page }) => {
  await reportspage.opentsr();
  await expect(page.locator(teamsummary_locators.learn_more_button)).toBeVisible();
  await page.locator(teamsummary_locators.learn_more_button).click();

});

test('(444837)TC-17,Check Help Button ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.score_in_comparison_help_button).click();
  await reportsPage.dismiss();
  await page.locator(teamsummary_locators.favourability_help_button).click();
  await reportsPage.dismiss();
});
});

//Group of Test Cases on qa20191108_1 client 

test.describe('Test Cases in qa20191108_1 client', () => {
  test.beforeEach(async ({ page }) => {
    const homepage = new HomePage(page);
    reportspage = new reportsPage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email2, user.password, user.companyid2);
    await page.click(locators.reports_button);
    //await sleep(5000);
    await page.waitForSelector(locators.adhoc1);
    await reportspage.Program_change();
    await reportspage.opentsr();
  });

  test('(444832)TC-12,Check Celebrating success ', async ({ page }) => {
    await page.waitForSelector(teamsummary_locators.celebrating_success);
    await expect(page.locator(teamsummary_locators.celebrating_success)).toBeVisible();
    await page.locator(teamsummary_locators.celebrating_success).screenshot({ path: 'test-results/celebrating_success.png' });
  });
});
