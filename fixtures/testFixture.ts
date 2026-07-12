import { test as base, expect } from "@playwright/test";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";

type MyFixtures = {
  home: HomePage;
  login: LoginPage;
};

export const test = base.extend<MyFixtures>({
  home: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  login: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };