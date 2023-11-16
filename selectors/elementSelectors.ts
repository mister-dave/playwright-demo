import { Page } from 'playwright';

export const elementSelectors = {
  // Authentication
  usernameInput: (page: Page) => page.locator('input[name="email"]'),
  passwordInput: (page: Page) => page.locator('input[name="password"]'),
  signInButton: (page: Page) => page.getByRole('button', { name: 'Sign In' }),

  // Message a client
  
};