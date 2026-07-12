import { test, expect } from '@playwright/test';
import users from '../test-data/users.json';

import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { ProductPage } from '../Pages/ProductPage';
import { CartPage } from '../Pages/CartPage';
import { CheckoutPage } from '../Pages/CheckoutPage';

test('Checkout Flow', async ({ page }) => {

    const home = new HomePage(page);
    const login = new LoginPage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await home.openHomePage();

    await home.clickLogin();

    await login.loginUser(
        users.validUser.email,
        users.validUser.password
    );

    await expect(login.loggedIn).toBeVisible();

    await home.clickProducts();

    await product.addFirstProduct();

    // ❌ Don't click View Cart again

    await cart.proceedCheckout();

    await checkout.enterComment('Playwright Automation Testing');

    await checkout.clickPlaceOrder();

    await expect(page).toHaveURL(/payment/);

});