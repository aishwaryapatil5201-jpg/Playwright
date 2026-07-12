import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PaymentPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    name = this.page.locator("[data-qa='name-on-card']");
    card = this.page.locator("[data-qa='card-number']");
    cvc = this.page.locator("[data-qa='cvc']");
    month = this.page.locator("[data-qa='expiry-month']");
    year = this.page.locator("[data-qa='expiry-year']");
    payButton = this.page.locator("[data-qa='pay-button']");

    async pay(details: {
        name: string;
        card: string;
        cvc: string;
        month: string;
        year: string;
    }) {

        await this.fill(this.name, details.name);
        await this.fill(this.card, details.card);
        await this.fill(this.cvc, details.cvc);
        await this.fill(this.month, details.month);
        await this.fill(this.year, details.year);

        await this.click(this.payButton);

    }

}