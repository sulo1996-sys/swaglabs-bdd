
export class ProductsPage {
  constructor(page){
    this.page = page;
    this.title = page.locator('.title');
    this.addBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cart = page.locator('.shopping_cart_link');
  }

  async waitForTitle(){
    await this.title.waitFor();
  }

  async addBackpack(){
    await this.addBackpackBtn.click();
  }

  async openCart(){
    await this.cart.click();
  }
}
