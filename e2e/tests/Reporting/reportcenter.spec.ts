import { test, expect, beforeEach, Page } from '@playwright/test';
import { user } from '../../fixtures/testdata';
import { locators } from '../../fixtures/dashboard_locators'
import { teamsummary_locators } from '../../fixtures/tsr_locators';
import { HomePage } from '../../pages/home-page';
import { LoginPage }  from '../../pages/login-page';
import { reportsPage }  from '../../pages/reports_common_actions';
import { waitForDebugger } from 'inspector';
import * as readline from 'readline';

let reportspage: reportsPage;
let homepage: HomePage;

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

test.describe('Report Center Test Cases', () => {
    test.setTimeout(60000);
    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        reportspage = new reportsPage(page);
        await homepage.open();
        await new LoginPage(page).login(user.email2, user.password, user.companyid2);
        await page.click(locators.reports_button);
});

        test('TC-01 Change the Program ', async ({ page }) => {
            await reportspage.Program_change();
            await sleep(5000); 
            //await page.click(locators.adhoc1);   
});
});

