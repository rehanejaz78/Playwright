//this is my first playwright test.

const { test, expect } = require("@playwright/test");

test("My first playwright test", async ({ page }) => {
  await page.goto("https:www.google.com");

  await expect(page).toHaveTitle("Google");
});
