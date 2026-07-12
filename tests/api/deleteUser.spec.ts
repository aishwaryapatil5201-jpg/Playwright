import { test, expect } from "@playwright/test";

test("Delete User", async ({ request })=>{

    const response=await request.delete(
        "https://automationexercise.com/api/deleteAccount",
        {
            form:{
                email:"abc@gmail.com",
                password:"Password123"
            }
        }
    );

    expect(response.status()).toBe(200);

});