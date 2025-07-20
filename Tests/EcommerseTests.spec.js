import { test, expect } from '../Basic/baseTest.js';
import { itemsLocators } from '../pom/locatorObjects.js';
import CartHelper from '../Helper/cartHelper.js';

test('TC-001: Verify total item count is 6 after login @smoke', async ({ loggedIn: page }) => {
const items = page.locator(itemsLocators.totalItems);
await expect(items).toHaveCount(6);
});

test('TC-002: Add Sauce Labs Backpack to cart and verify cart updates @Regression', async ({ loggedIn: page }) => {
  const cartHelper = new CartHelper(page);
  await cartHelper.addBackpackAndVerify();
});

test('TC-003: Complete checkout flow and verify all steps @regression', async ({ loggedIn: page }) => {
  const cartHelper = new CartHelper(page);
  const confirmation = await cartHelper.completeCheckoutFlow();
})