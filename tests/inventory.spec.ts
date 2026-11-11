import { test, expect } from '@playwright/test';

test.describe('Tests using saved login session', () => {
  test('products page opens without login', async ({ page }) => {
    await page.goto('/inventory.html');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('user can add an item to the cart', async ({ page }) => {
    await page.goto('/inventory.html');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  });

  test('cart page opens without login', async ({ page }) => {
    await page.goto('/cart.html');

    await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');
  });
});