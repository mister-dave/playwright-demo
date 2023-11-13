import { Page } from 'playwright';

export const elementSelectors = {
  usernameInput: (page: Page) => page.locator('input[name="email"]'),
  passwordInput: (page: Page) => page.locator('input[name="password"]'),
  signInButton: (page: Page) => page.getByRole('button', { name: 'Sign In' }),
};