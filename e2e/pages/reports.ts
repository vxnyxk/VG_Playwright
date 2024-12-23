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


}
