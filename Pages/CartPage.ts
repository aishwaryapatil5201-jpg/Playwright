import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";


export class CartPage extends BasePage {


    constructor(page: Page) {
        super(page);
    }


    proceedCheckoutButton =
        this.page.locator("a.check_out");


    async proceedCheckout() {


        await expect(this.page)
            .toHaveURL(/view_cart/);


        await expect(
            this.proceedCheckoutButton
        ).toBeVisible({
            timeout:30000
        });


        await this.proceedCheckoutButton.click();

    }

}