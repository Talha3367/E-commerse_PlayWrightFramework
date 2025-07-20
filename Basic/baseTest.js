import { test as base, expect } from '@playwright/test';
import WebActions from '../Utils/WebActions.js';
import { ActionTypes, AssertionType } from '../Utils/actions.js';
import { loginPageLocators, homePageLocators } from '../pom/locatorObjects.js';
import ActionsHelper from '../Actions/actionHelper.js';
import VerifyActions from '../Actions/verifyActions.js';
import { AppConfig } from '../config.js';

/**
 * Extend Playwright's base test with custom fixtures/helpers to be used across all tests.
 * These fixtures provide reusable helpers like actionHelper, verification, webAction,
 * and a loggedIn fixture that handles login flow and provides an authenticated page context.
 */
export const test = base.extend({
  /**
   * Fixture providing the ActionsHelper instance for UI interactions on the current page.
   * Usage: test('example', async ({ actionHelper }) => { ... });
   */
  actionHelper: async ({ page }, use) => {
    const helper = new ActionsHelper(page);
    await use(helper); // Make the helper available in tests
  },

  /**
   * Fixture providing VerifyActions instance for assertion and verification utilities.
   */
  verification: async ({ page }, use) => {
    const verify = new VerifyActions(page);
    await use(verify);
  },

  /**
   * Fixture providing WebActions instance for common web interactions.
   */
  webAction: async ({ page }, use) => {
    const wa = new WebActions(page);
    await use(wa);
  },

  /**
   * Fixture that handles user login and yields a logged-in page context for tests.
   * It navigates to the base URL, performs the login steps, and verifies successful login.
   */
  loggedIn: async ({ page }, use) => {
    // Instantiate helpers for this fixture
    const webAction = new WebActions(page);
    const actionHelper = new ActionsHelper(page);
    const verifyHelper = new VerifyActions(page);

    // Navigate browser to the base URL from configuration
    await webAction.navigateToURL(AppConfig.BaseURL);

    // Wait for username field and enter username from environment or config
    await page.waitForSelector(loginPageLocators.usernameField);
    await actionHelper.actionMethod(
      ActionTypes.SETTEXT,
      loginPageLocators.usernameField,
      process.env.email || AppConfig.UserName
    );

    // Wait for password field and enter password from environment or config
    await page.waitForSelector(loginPageLocators.passwordField);
    await actionHelper.actionMethod(
      ActionTypes.SETTEXT,
      loginPageLocators.passwordField,
      process.env.email || AppConfig.Password
    );

  // 4. Click the login button
    await page.waitForSelector(loginPageLocators.loginButton);
    await actionHelper.actionMethod(
      ActionTypes.CLICK,
      loginPageLocators.loginButton
    );

    // Verify home page title is visible and has text "Products"
    await page.waitForSelector(homePageLocators.productHeading);
    const headingText = await page.textContent(homePageLocators.productHeading);

    expect(headingText?.trim()).toBe('Products'); // Confirm exact text

    // Pass the logged-in page to the tests
    await use(page);
  }
});

// Export Playwright's expect for assertions in tests
export { expect };
