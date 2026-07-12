import { test, expect } from "@playwright/test";
import fs from "fs";

test("Register New User", async ({ page }) => {

    const email = `user${Date.now()}@gmail.com`;

    await page.goto("/login");

    await page.locator("[data-qa='signup-name']")
        .fill("Automation Tester");

    await page.locator("[data-qa='signup-email']")
        .fill(email);

    await page.locator("[data-qa='signup-button']")
        .click();

    await page.locator("#password").fill("Password123");

    await page.selectOption("#days", "10");
    await page.selectOption("#months", "5");
    await page.selectOption("#years", "1999");

    await page.locator("#first_name").fill("Automation");
    await page.locator("#last_name").fill("Tester");
    await page.locator("#address1").fill("Bangalore");
    await page.selectOption("#country", "India");
    await page.locator("#state").fill("Karnataka");
    await page.locator("#city").fill("Bangalore");
    await page.locator("#zipcode").fill("560001");
    await page.locator("#mobile_number").fill("9999999999");

    await page.locator("[data-qa='create-account']").click();

    await expect(page.locator("[data-qa='account-created']")).toHaveText("Account Created!");

    fs.writeFileSync(
        "./test-data/users.json",
        JSON.stringify({
            validUser: {
                email,
                password: "Password123"
            }
        }, null, 4)
    );

});