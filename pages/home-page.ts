import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://app.vgqa.glint.cloud.dev.microsoft/session/auth');
    }

    

    async userIsLoggedIn(): Promise<boolean> {
        return await isVisible(this.page, 'a[routerlink="/editor"]');
    } 
    /*
    async goToSettings() {
        await this.page.click('a[routerlink="/settings"]');
    }*/
}
