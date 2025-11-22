
import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CartPage } from '../pages/CartPage.js';

When('I add backpack to cart', async function () {
  const product = new ProductsPage(this.page);
  await product.addBackpack();
});

Then('It should appear in cart', async function () {
  const product = new ProductsPage(this.page);
  await product.openCart();
  const cart = new CartPage(this.page);
  await cart.verifyItem('Sauce Labs Backpack');
});
