import test, { expect } from "@playwright/test";

test("", async ({page}) => {
    await page.goto("https://playwright.dev/docs/intro");
    const message = page.locator("//span[text()='Search']");
    message.click();

    await page.locator('').


    //await message.scrollIntoViewIfNeeded();
    console.log(await message.getAttribute("placeholder"));
    //expect(message).toHaveAttribute("placeholder","enter search docs")
    //console.log(await message.inputValue());
   // await message.type("hi");
}) 