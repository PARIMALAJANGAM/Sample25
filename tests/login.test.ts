import { chromium, test } from "@playwright/test"

test("Login test demo", async () =>{

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://ecommerce-playground.lambdatest.io/");
console.log("browser launched");
console.log("prac");
})