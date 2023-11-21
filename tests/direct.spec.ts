import { test, expect, Page } from '@playwright/test';
import { elementSelectors } from '../selectors/elementSelectors';

test.beforeEach(async ({ page }) => {
  await page.goto('/my-organizations');
});

test.skip('has title', async ({ page }) => {
  await page.goto("https://staging.getdirect.io/sign-in");

  await expect(page).toHaveTitle("Direct™ Property Management Software | Hotels and Vacation Rentals");
});

test.skip('Can authenticate', async ({ page }) => {
  // await authenticate(page);
});

test('Message a client', async ({ page }) => {
  await page.goto('https://staging.getdirect.io/my-organizations');
  await page.waitForTimeout(2000); // timeout added for demo purposes

  const timestamp = new Date().toISOString();

  await page.getByRole('link', { name: 'Cabo Rentals By Jane Roesch LLC Active' }).click();
  await page.getByRole('link', { name: 'Inbox' }).click();
  await page.locator('.ProseMirror').fill(timestamp);
  await page.getByRole('button', { name: 'Send' }).click();
  await page.waitForTimeout(2000); // timeout added for demo purposes

  await expect(page.getByText(timestamp)).toBeVisible();
});