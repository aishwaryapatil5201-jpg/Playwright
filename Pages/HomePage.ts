import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    productsLink = this.page.locator("a[href='/products']");
    cartLink = this.page.locator("a[href='/view_cart']");
    loginLink = this.page.locator("a[href='/login']");
    contactUs = this.page.locator("a[href='/contact_us']");

    async openHomePage() {
        await this.navigate('/');
    }

    async clickProducts() {
        await this.click(this.productsLink);
    }

    async clickCart() {
        await this.click(this.cartLink);
    }

    async clickLogin() {
        await this.click(this.loginLink);
    }

}