/**
 * Locators used on the Login page for interacting with login elements.
 */
export const loginPageLocators = {

  usernameField: "//input[@data-test='username']",
  passwordField: "//input[@data-test='password']",
  loginButton: "//input[@data-test='login-button']"

};

/**
 * Locators used on the Home page, for verifying page presence
 */
export const homePageLocators = {
 productHeading: "//span[@data-test='title']"
};

/**
 * Locators used on the Policy tab/page for searching and interacting with policies.
 */
export const itemsLocators = {
totalItems: "//div[@data-test='inventory-item-name']",
bagPackAddToCart: "//button[@data-test='add-to-cart-sauce-labs-backpack']",
bagPackRemove: "//button[@data-test='remove-sauce-labs-backpack']",
normalCartIcon: "//a[@data-test='shopping-cart-link']",
afterAddingCartIcon:"//span[@class='shopping_cart_badge' and text()='1']",
cartPage: "//span[@class='title' and @data-test='title' and text()='Your Cart']",
bagPrice: "(//div[contains(@class, 'item_pricebar')]//div[@data-test='inventory-item-price'])[1]",
checkoutButton: "//button[@data-test='checkout' and contains(text(),'Checkout')]",
checkoutPage: "//span[@class='title' and @data-test='title' and contains(text(),'Checkout: Your Information')]",
firstName: "//input[@data-test='firstName' and @placeholder='First Name']",
lastName: "//input[@data-test='lastName' and @placeholder='Last Name']",
Zipcode: "//input[@data-test='postalCode' and @placeholder='Zip/Postal Code']",
continueButton: "//input[@data-test='continue' and @type='submit' and @value='Continue']",
overviewPage: "//span[@class='title' and @data-test='title' and contains(text(),'Checkout: Overview')]",
finishButton:"//button[@data-test='finish' and contains(text(),'Finish')]",
logo: "//div[@id='checkout_complete_container']//img[@alt='Pony Express']",
orderMessage: "//div[@id='checkout_complete_container' and contains(@data-test,'checkout-complete-container')]",


};
