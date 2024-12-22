import type { Page } from 'playwright';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(email: string, password: string, companyid: string) {
        await this.page.getByPlaceholder('Enter your email address').fill(email);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.getByPlaceholder('Enter company ID').fill(companyid);
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.getByPlaceholder('Enter your password').fill(password);
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }
}
