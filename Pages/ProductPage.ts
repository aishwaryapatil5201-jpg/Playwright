import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {

    searchBox: Locator;
    searchButton: Locator;
    productList: Locator;
    firstProduct: Locator;
    addToCart: Locator;
    viewCart: Locator;

    constructor(page: Page) {
        super(page);

        this.searchBox = page.locator("#search_product");
        this.searchButton = page.locator("#submit_search");

        this.productList = page.locator(".product-image-wrapper");

        this.firstProduct = page.locator(".product-image-wrapper").first();

        this.addToCart = page.locator(".product-overlay .add-to-cart").first();

        this.viewCart = page.locator("#cartModal a[href='/view_cart']");
    }

    async searchProduct(productName: string) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async verifyProduct(productName: string) {
        await expect(
            this.page.locator(`.productinfo p:text-is("${productName}")`)
        ).toBeVisible();
    }

    async addFirstProduct() {

        await this.firstProduct.scrollIntoViewIfNeeded();

        await this.firstProduct.hover();

        await this.page.waitForTimeout(1000);

        await this.addToCart.click();

        await expect(this.page.locator("#cartModal")).toBeVisible();

        await this.viewCart.click();
    }
}