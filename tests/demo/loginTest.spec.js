//https://demo.applitools.com/

const { test, expect } = require("@playwright/test");

test("Login test of Applitools", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  await page.locator("input[type=text]").fill("REHAN");
  await page.locator("input[type=password]").fill("REHAN");

  await page.locator("#log-in").click();

  await expect(page).toHaveURL("https://demo.applitools.com/app.html");

  console.log("logged in successffull !!!");
  page.close();
});
