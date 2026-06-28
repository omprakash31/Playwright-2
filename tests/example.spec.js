// @ts-check
import { test, expect } from '@playwright/test';

test('has title @smoke', async ({ page },testInfo) => {

  console.log(testInfo.project.use.baseURL);
  await page.goto('/');
  console.log("smoke test running")
  // await page.goto(`${testInfo.project.use.baseURL}`);
  // await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

test('get started link @regression', async ({ page },testInfo) => {
  // await page.goto(`${testInfo.project.use.baseURL}`);
  await page.goto('/');
  console.log("regression test running")
  
  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();
  
  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('get started link @critical', async ({ page },testInfo) => {
  // await page.goto(`${testInfo.project.use.baseURL}`);
  console.log("critical test running")
  await page.goto('/');

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});