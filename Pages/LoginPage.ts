import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    email = this.page.locator("[data-qa='login-email']");
    password = this.page.locator("[data-qa='login-password']");
    loginButton = this.page.locator("[data-qa='login-button']");
    loggedIn = this.page.locator("a:has-text('Logged in as')");

    async loginUser(username: string, pwd: string) {

    await this.fill(this.email, username);

    await this.fill(this.password, pwd);

    await this.click(this.loginButton);

    await this.page.waitForLoadState("networkidle");

}

    

    

    

    

}