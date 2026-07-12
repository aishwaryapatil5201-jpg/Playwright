import { test } from "@playwright/test";
import { HomePage } from "../Pages/HomePage";
import { ProductPage } from "../Pages/ProductPage";

test("Search Product", async ({ page }) => {

    const home = new HomePage(page);

    const product = new ProductPage(page);

    await home.openHomePage();

    await home.clickProducts();

    await product.searchProduct("Blue Top");

    await product.verifyProduct("Blue Top");

});