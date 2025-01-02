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
  });
*/



  //Usage of different befoe each hooks  
/*
  import { test, expect, Page } from '@playwright/test';
import { user } from '../../fixtures/testdata';
import { locators } from '../../fixtures/dashboard_locators';
import { teamsummary_locators } from '../../fixtures/tsr_locators';
import { HomePage } from '../../pages/home-page';
import { LoginPage } from '../../pages/login-page';
import { ReportsPage } from '../../pages/reports-page';

let reportspage: ReportsPage;

test.describe('Group 1', () => {
  test.beforeEach(async ({ page }) => {
    const homepage = new HomePage(page);
    reportspage = new ReportsPage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password, user.companyid);
    await page.click(locators.reports_button);
  });

  test('TC-01-Check VG Title', async ({ page }) => {
    await reportspage.opentsr();
    await expect(page).toHaveTitle(/Viva Glint/);
  });
});

test.describe('Group 2', () => {
  test.beforeEach(async ({ page }) => {
    const homepage = new HomePage(page);
    reportspage = new ReportsPage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password, user.companyid);
    await page.click(locators.reports_button);
    await page.click(locators.teamsummary_button);
  });

  test('TC-02-Open Team Summary', async ({ page }) => {
    await reportspage.opentsr();
    await expect(page.getByText('Team Summary')).toBeVisible();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'test-results/titlescreenshot.png' });
  });

  test('TC-03, Report Card Verification', async ({ page }) => {
    await reportspage.opentsr();
    await page.waitForSelector(teamsummary_locators.survey_card);
    await expect(page.locator(teamsummary_locators.survey_card)).toBeVisible();
    await page.locator(teamsummary_locators.survey_card).screenshot({ path: 'test-results/card_screenshot.png' });
  });
});



//For review later

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


test('(444848)TC-26, Method 2-Detailed Score Reports', async ({ page }) => {
  await reportspage.opentsr();
  await expect(page.locator(teamsummary_locators.drivers_section)).toBeVisible();

  const buttonIndex = await new Promise<number>((resolve, reject) => {
    rl.question('Please enter the button index (1-4): ', (input) => {
      const index = parseInt(input, 10);
      if (isNaN(index) || index < 1 || index > 4) {
        console.log('Invalid index, please enter a number between 1 and 4.');
        //rl.close();
        reject(new Error('Invalid input'));
      } else {
        resolve(index);
      }
    });
  });

  // Wait for the button selection to complete before proceeding with the test
  const buttons = [
    page.locator("(//div[@role='cell'])[7]"),  // Acceptance
    page.locator("(//div[@role='cell'])[14]"), // Accomplishment-work
    page.locator("(//div[@role='cell'])[21]"), // Care
    page.locator("(//div[@role='cell'])[28]"), // Acts Ethically
  ];

  // Click the corresponding button
  switch (buttonIndex) {
    case 1:
      await buttons[0].click();
      break;
    case 2:
      await buttons[1].click();
      break;
    case 3:
      await buttons[2].click();
      break;
    case 4:
      await buttons[3].click();
      break;
    default:
      throw new Error('Invalid button index');
  }

  // Close the readline interface after the button click
  //rl.close();
});

*/
