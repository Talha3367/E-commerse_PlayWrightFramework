import ActionsHelper from "../Actions/actionHelper.js";
import { loginPageLocators } from "../pom/pageObjects/LoginObjects/locatorsObjects.js";
import { ActionTypes } from "../Utils/actions.js";

/**
 * Login class to handle login actions using reusable action helper.
 */
export default new class Login {
  /**
   * Performs login using provided username and password.
   * @param {import('playwright').Page} page - Playwright page instance.
   * @param {string} username - Username to login.
   * @param {string} password - Password to login.
   */
  async login(page, username, password) {
    const actionHelper = new ActionsHelper(page);

    await actionHelper.actionMethod(ActionTypes.SETTEXT, loginPageLocators.usernameField, username);
    await actionHelper.actionMethod(ActionTypes.SETTEXT, loginPageLocators.passwordField, password);
    await actionHelper.actionMethod(ActionTypes.CLICK, loginPageLocators.loginButton);
  }
}();
