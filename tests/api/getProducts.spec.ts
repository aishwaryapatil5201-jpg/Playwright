import { test, expect } from "@playwright/test";

test("Get Products", async ({ request })=>{

    const response=await request.get(
        "https://automationexercise.com/api/productsList"
    );

    expect(response.status()).toBe(200);

});