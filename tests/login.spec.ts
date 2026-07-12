import { test, expect } from "@playwright/test";
import users from "../test-data/users.json";

import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";

test("Verify Login", async ({ page }) => {

    const home = new HomePage(page);
    const login = new LoginPage(page);

    await page.goto("/");

    await home.clickLogin();

    await login.loginUser(
        users.validUser.email,
        users.validUser.password
    );

    await expect(login.loggedIn).toBeVisible();

});