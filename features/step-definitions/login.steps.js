
import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';

Given('I navigate to SwagLabs', async function () {
  await this.page.goto('https://www.saucedemo.com/');
});

When('I login with valid credentials', async function () {
  const login = new LoginPage(this.page);
  await login.login('standard_user', 'secret_sauce');
});

When('I login with invalid credentials', async function () {
  const login = new LoginPage(this.page);
  await login.login('wrong_user', 'wrong_pass');
});

Then('I should see products page', async function () {
  const products = new ProductsPage(this.page);
  await products.waitForTitle();
});

Then('I should see an error message', async function () {
  const login = new LoginPage(this.page);
  await login.verifyError();
});
