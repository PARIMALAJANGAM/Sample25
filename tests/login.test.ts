import { chromium, test } from "@playwright/test"

test("Login test demo", async () =>{

const browser = await chromium.launch({
    headless:false
});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://ecommerce-playground.lambdatest.io/");
await page.hover("//ul[@class='navbar-nav horizontal']//span[normalize-space()='My account']")
await page.click("//div[@class='info']//span[normalize-space()='Login']")
// await page.click("'Login'");
await page.locator("input[name='email']").fill("parimalajcse@gmail.com");
await page.waitForTimeout(50);
await page.locator("input[name='password']").fill("ramarajesh@123");
await page.waitForTimeout(50);
// await page.fill("input[name='password']","ramarajesh@123")
await page.locator("input[value='Login']").click();
// await page.waitForTimeout(10000);

const newcontext = await browser.newContext()
const page1 = await newcontext.newPage();
await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
await page.waitForTimeout(500);

// const newcontext = await browser.newContext()
// const newPage = await newcontext.newPage();
// await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");

})