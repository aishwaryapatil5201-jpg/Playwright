import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { ProductPage } from '../Pages/ProductPage';

test('Add Product To Cart', async ({ page }) => {

    const home = new HomePage(page);
    const product = new ProductPage(page);

    await home.openHomePage();

    await home.clickProducts();

    await product.addFirstProduct();

    await expect(page).toHaveURL(/view_cart/);

});