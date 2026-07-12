import { test, expect } from "@playwright/test";

test("Create User", async ({ request })=>{

    const response=await request.post(
        "https://automationexercise.com/api/createAccount",
        {
            form:{
                name:"Aishwarya",
                email:"abc@gmail.com",
                password:"Password123"
            }
        }
    );

    expect(response.status()).toBe(200);

});