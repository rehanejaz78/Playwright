//this is my first playwright test.

const { test, expect } = require("@playwright/test");

//1st
test("My first playwright test", async ({ page }) => {
  //page.setViewportSize({ width: 800, height: 600 });  to change the size of screen
  page.viewportSize(null);
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("input[id='userEmail']").fill("email3@example.com");

  await page.locator("input[id= 'userPassword']").type("Rehan@1234");

  await page.locator("#login").click();

  console.log("Logged in succewssfully !! ");
  page.close();
});
