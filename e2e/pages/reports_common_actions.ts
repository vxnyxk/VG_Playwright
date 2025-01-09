import type { Page } from 'playwright';
import { isVisible } from '../../framework/common-actions';
import { locators } from '../fixtures/dashboard_locators';
import { teamsummary_locators } from '../fixtures/tsr_locators';


export class reportsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async opentsr() {
        await this.page.click(locators.teamsummary_button);
    }

    async click_comments(){
        await this.page.locator(teamsummary_locators.view_comments).click();
    }

    async Program_change() {
    
        await this.page.locator(locators.adhoc1).click();
    
    }

    async dismiss()
    {
        await this.page.locator(teamsummary_locators.dismiss_button).click();
    }

    async Add_Sectionbutton()
    {
        //await this.page.getByRole('button', { name: '... More' }).click();
        await this.page.locator(teamsummary_locators.more_button).click();
        await this.page.locator(teamsummary_locators.Add_section_01).click();
    }

    async remove_section()
    {
        await this.page.locator(teamsummary_locators.three_dots).click();
        await this.page.locator(teamsummary_locators.remove_button).click();
    }

    async change_comparisons()  
    {
        await   this.page.locator(locators.Settings_button).click();
        await   this.page.getByLabel('My Teams').check();
        await   this.page.getByRole('button',{ name :' Done '}).click();
    }

    async Export_Powerpoint()
    {
        await this.page.locator(locators.Export_button).click();
        await  this.page.locator(locators.Export_Powerpoint).click();
    }

    async Export_PDF()
    {
        await this.page.locator(locators.Export_button).click();
        await this.page.locator(locators.Export_PDF).click();
        await this.page.getByRole('button',{ name :' Generate PDF '}).click();
        //await this.page.getByRole('button',{ name :' Save '}).click();
    }

    async Export_Images()
    {
        await this.page.locator(locators.Export_button).click();
        await  this.page.locator(locators.Export_Images).click();
    }

    async Export_Spreadsheet()
    {
        await this.page.locator(locators.Export_button).click();
        await  this.page.locator(locators.Export_Spreadsheet).click();
    }

    async save()
    {
        await this.page.locator(locators.Export_button).click();
        await this.page.locator(locators.Save_report).click();
        await this.page.locator(locators.Save_dialog_input).fill('Automation TSR Playwright');
        await this.page.getByRole('button',{ name :' Save '}).click();
    }

}
