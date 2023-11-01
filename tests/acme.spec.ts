import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("https://demo.applitools.com/index.html");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("ACME Demo App by Applitools");
});