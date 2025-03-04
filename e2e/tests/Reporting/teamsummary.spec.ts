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


function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

test.describe('Admin based Test cases,Group 1', () => {
  test.setTimeout(60000);
  
  test.beforeEach(async ({ page }) => {
  const homepage = new HomePage(page);
  reportspage = new reportsPage(page);
  //await page.setViewportSize({ width: 1920, height: 1080 });
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password, user.companyid);
  await page.click(locators.reports_button);
});

test('(444821)TC-01-Check VG Title', 
  async ({ page }) => {
  await reportspage.opentsr();
  await expect(page).toHaveTitle(/Viva Glint/);
});

test('(444822)TC-02-Open Team Summary', async ({ page }) => {
  await reportspage.opentsr();
  //await page.click(locators.teamsummary_button);
});

test('(444824)TC-03,Check Team Summary Report Name',async ({page}) => {
  await reportspage.opentsr();
  //await sleep(3000);
  //await expect(page.getByText('Team Summary ')).toBeVisible();
  await expect(page.locator(teamsummary_locators.report_title))
  //await page.waitForTimeout(3000);
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

test('(444837)TC-17,Check Score in Comparison Help Button ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.score_in_comparison_help_button).click();
  await reportspage.dismiss();
});

test('(444837-2)TC-18,Check Favourability Help Button ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.favourability_help_button).click();
  await reportspage.dismiss();
});

test('(444838-2)TC-19,S&O Page ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.key_outcome_button).click();
  await expect(page.locator(teamsummary_locators.suggested_learnings_section)).toBeVisible();
  //await page.screenshot({ path: 'test-results/s&opage.png' , fullPage: true  }); 
});


test('(444838)TC-20,S&O Suggested Learnings Page ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.key_outcome_button).click();
  await sleep(3000);
  await expect(page.locator(teamsummary_locators.suggested_learnings_section)).toBeVisible();

  if (await page.locator(teamsummary_locators.suggested_learnings_section).isVisible()) {
    await page.locator(teamsummary_locators.suggested_learnings_section).screenshot({ path: 'test-results/suggested_learnings_section.png' });
  } else {
    console.log('Element is not visible, skipping screenshot');
  }
});


test('(444838-3)TC-21,S&O Page-Suggested Actions ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.key_outcome_button).click();
  await sleep(3000);
  await expect(page.locator(teamsummary_locators.suggested_actions_section)).toBeVisible();

  if (await page.locator(teamsummary_locators.suggested_actions_section).isVisible()) {
    await page.locator(teamsummary_locators.suggested_actions_section).screenshot({ path: 'test-results/suggested_actions_section.png' });
  } else {
    console.log('Element is not visible, skipping screenshot');
  }
});

test('(444841)TC-22,Suggested Learnings Video ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.key_outcome_button).click();
  await expect(page.locator(teamsummary_locators.suggested_learnings_section)).toBeVisible();
  await page.locator(teamsummary_locators.example_video).click();
});

test ('(444843)TC-23,Check Drivers ', async ({page}) => {
  await reportspage.opentsr();
  await expect(page.locator(teamsummary_locators.drivers_section)).toBeVisible();
  if(await  page.locator(teamsummary_locators.drivers_section).isVisible()){
    await page.locator(teamsummary_locators.drivers_section).screenshot({ path: 'test-results/drivers_section.png' });
  }else {
      console.log('Section is not visible, skipping screenshot');
    }  
});

test ('(444844)TC-24,Primary Hierarchy ', async ({page}) => {
  await reportspage.opentsr();
  await expect(page.locator(teamsummary_locators.primary_hierarchy)).toBeVisible();
  if(await page.locator(teamsummary_locators.primary_hierarchy).isVisible()){
    await page.locator(teamsummary_locators.primary_hierarchy).screenshot({ path: 'test-results/primary_hierarchy.png' });  
  } else {
    console.log('Section is not visible, skipping screenshot');
  } 
});

test('(444847)TC-25,Detailed Score Reports ', async ({ page }) => {
  await reportspage.opentsr();
  await expect(page.locator(teamsummary_locators.drivers_section)).toBeVisible();
  //Modify here to choose the button or driver to choose
  let buttonIndex: number = 3; 
  const buttons = [
    page.locator(teamsummary_locators.Acceptance), //Acceptance
    page.locator(teamsummary_locators.Accomplishment_work), //Accomplishment-work
    page.locator(teamsummary_locators.Care), //Care
    page.locator(teamsummary_locators.Acts_Ethically), //Acts Ethically
  ];

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
 
});

test('(444841)TC-26,Driver Summary Report ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.Acceptance).click();
  await sleep(3000);
  await page.screenshot({ path: 'test-results/Driversummary.png' }); 
}); 


test('(444854)TC-27,focus area ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.Accomplishment_work).click();
  await page.locator(teamsummary_locators.choose_a_focus_area).click();
  await expect(page.getByText('Creating a New Focus Area')).toBeVisible();
  if(await page.getByText('Creating a New Focus Area').isVisible()){
  await page.screenshot({ path: 'test-results/focusarea.png'  });
  }
  else {
    console.log('Section is not visible, skipping screenshot');
  } 
  });

test('(444855)TC-28,Verify whether we can add sections in TSR ', async ({ page }) => {
 await reportspage.opentsr();
 await reportspage.Add_Sectionbutton();
 await  page.locator(teamsummary_locators.section_01).click();
 await sleep(2000);
 await page.screenshot({ path: 'test-results/Add_section_01.png' , fullPage: true  });  
});

test('(444855-2)TC-29,Verify whether we can add Sections in TSR -02 ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.Add_section_02).click();
  await  page.locator(teamsummary_locators.section_01).click();
  await sleep(2000);
  await page.screenshot({ path: 'test-results/Add_section_02.png' , fullPage: true  });  
});

test('(444855-3)TC-30,Verify whether we can add and remove the Sections-01  ', async ({ page }) => {
  await reportspage.opentsr();
  await reportspage.Add_Sectionbutton();
  await  page.locator(teamsummary_locators.section_01).click();
  await reportspage.remove_section();
});

test('(444855-3)TC-31,Verify whether we can add and remove the Sections-02  ', async ({ page }) => {
  await reportspage.opentsr();
  await page.locator(teamsummary_locators.Add_section_02).click();
  await  page.locator(teamsummary_locators.section_01).click();
  await reportspage.remove_section();
});

test('(444856)TC-32,Verify whether we can change comparison  ', async ({ page }) => {
  await reportspage.opentsr();
  await reportspage.change_comparisons();
});

test('(444862)TC-33,Verify whether we can export powerpoint  ', async ({ page }) => {
  await reportspage.opentsr();
  await reportspage.Export_Powerpoint();
});

test('(444863)TC-34,Verify whether we can export Images  ', async ({ page }) => {
  await reportspage.opentsr();
  await reportspage.Export_Images();
});

test('(444863)TC-35,Verify whether we can export Spreadsheet  ', async ({ page }) => {
  await reportspage.opentsr();
  await reportspage.Export_Spreadsheet();
});

test('(444864)TC-36,Verify whether we can export PDF  ', async ({ page }) => {
  await reportspage.opentsr();
  await reportspage.Export_PDF();
});

test('(444864)TC-37,Verify whether we can save Report  ', async ({ page }) => {
  await reportspage.opentsr();
  await reportspage.save();
});

});



//Group of Test Cases on qa20191108_1 client 

test.describe('Test Cases in qa20191108_1 client', () => {
  test.setTimeout(60000);
  test.beforeEach(async ({ page }) => {
    const homepage = new HomePage(page);
    reportspage = new reportsPage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email2, user.password, user.companyid2);
    await page.click(locators.reports_button);
    //await sleep(5000);
    await page.waitForSelector(locators.adhoc1);
    await reportspage.Program_change();
    //await reportspage.opentsr();
  });

  test('(444832)TC-12,Check Celebrating success ', async ({ page }) => {
    await reportspage.opentsr();
    await page.waitForSelector(teamsummary_locators.celebrating_success);
    await expect(page.locator(teamsummary_locators.celebrating_success)).toBeVisible();
    await page.locator(teamsummary_locators.celebrating_success).screenshot({ path: 'test-results/celebrating_success.png' });
  });

});
