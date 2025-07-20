import { expect } from '@playwright/test';
import { itemsLocators } from '../pom/locatorObjects.js';

export default class CartHelper {
  constructor(page) {
    this.page = page;
  }

  
  /**
   * Adds Sauce Labs Backpack to cart, verifies button changes and cart badge updates
   */
  async addBackpackAndVerify() {
    const addButton = this.page.locator(itemsLocators.bagPackAddToCart);
    const removeButton = this.page.locator(itemsLocators.bagPackRemove);
    const cartBadge = this.page.locator(itemsLocators.afterAddingCartIcon);

    // Click 'Add to cart' button
    await addButton.click();

    // Verify button text changed to 'Remove'
    await expect(removeButton).toBeVisible();
    await expect(removeButton).toHaveText('Remove');

    // Verify cart badge shows '1'
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');
  }

    /**
   * Performs full checkout flow and asserts all required elements and texts.
   */
  async completeCheckoutFlow() {
    const page = this.page;

    // Add item to cart
    await page.click(itemsLocators.bagPackAddToCart);

    // Go to cart
    await page.click(itemsLocators.normalCartIcon);

    // Verify cart page
    const cartPageTitle = page.locator(itemsLocators.cartPage);
    await expect(cartPageTitle).toBeVisible();
    await expect(cartPageTitle).toHaveText('Your Cart');

    // Verify backpack price
    const bagPrice = page.locator(itemsLocators.bagPrice);
    const actualPrice = await bagPrice.textContent();
    expect(actualPrice.trim()).toBe('$29.99');

    // Proceed to checkout
    await page.click(itemsLocators.checkoutButton);

    // Verify checkout info page
    const checkoutTitle = page.locator(itemsLocators.checkoutPage);
    await expect(checkoutTitle).toBeVisible();
    await expect(checkoutTitle).toHaveText('Checkout: Your Information');

    // Fill in user info
    await page.fill(itemsLocators.firstName, 'Talha');
    await page.fill(itemsLocators.lastName, 'Sharif');
    await page.fill(itemsLocators.Zipcode, '00087');
    await page.click(itemsLocators.continueButton);

    // Verify overview page
    const overviewTitle = page.locator(itemsLocators.overviewPage);
    await expect(overviewTitle).toBeVisible();
    await expect(overviewTitle).toHaveText('Checkout: Overview');

    // Finish checkout
    await page.click(itemsLocators.finishButton);

    // Confirm success page elements
    const logo = page.locator(itemsLocators.logo);
    const confirmationHeader = page.locator("//h2[@class='complete-header' and @data-test='complete-header']");
    const confirmationText = page.locator("//div[@class='complete-text' and @data-test='complete-text']");

    await expect(logo).toBeVisible();
    await expect(confirmationHeader).toHaveText('Thank you for your order!');
    await expect(confirmationText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');

    return {
      header: await confirmationHeader.textContent(),
      detail: await confirmationText.textContent()
    };
  }
}
