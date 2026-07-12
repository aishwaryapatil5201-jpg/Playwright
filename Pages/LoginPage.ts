import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage {


    constructor(page:Page){
        super(page);
    }


    email =
        this.page.locator("[data-qa='login-email']");


    password =
        this.page.locator("[data-qa='login-password']");


    loginButton =
        this.page.locator("[data-qa='login-button']");


    loggedIn =
        this.page.locator("a:has-text('Logged in as')");



    async loginUser(username:string,password:string){


        await this.email.fill(username);


        await this.password.fill(password);


        await this.loginButton.click();


        await expect(
            this.loggedIn
        ).toBeVisible({
            timeout:30000
        });


    }

}