import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//ul[@class='navbar-nav horizontal']//span[normalize-space()='My account']")
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('parimalajcse@gmal.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('ramarajesh@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').press('Control+a');
  await page.getByPlaceholder('Password').fill('Ramarajesh@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').press('Control+a');
  await page.getByPlaceholder('E-Mail Address').fill('parimalajcse@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').press('Control+a');
  await page.getByPlaceholder('Password').fill('ramarajesh@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('parimala');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});