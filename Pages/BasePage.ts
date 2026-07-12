import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await locator.scrollIntoViewIfNeeded();

        await locator.click({
            timeout: 15000
        });
    }

    async fill(locator: Locator, value: string) {
        await locator.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await locator.fill(value);
    }

    async type(locator: Locator, value: string) {
        await locator.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await locator.pressSequentially(value);
    }

    async getText(locator: Locator): Promise<string> {
        return (await locator.textContent()) ?? '';
    }

    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    async waitForPage() {
        await this.page.waitForLoadState('networkidle');
    }

    async takeScreenshot(name: string) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }

    async verifyTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

}