import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    proceedCheckoutButton = this.page.locator('.check_out');

    async proceedCheckout() {
        await this.proceedCheckoutButton.scrollIntoViewIfNeeded();
        await this.proceedCheckoutButton.click();
    }
}