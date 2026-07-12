import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    commentBox = this.page.locator("textarea[name='message']");

    placeOrder = this.page.locator("text=Place Order");

    async enterComment(comment: string) {

        await this.fill(this.commentBox, comment);

    }

    async clickPlaceOrder() {

        await this.click(this.placeOrder);

    }

}