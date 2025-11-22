
export class CartPage {
  constructor(page){
    this.page = page;
  }

  async verifyItem(name){
    await this.page.locator('.inventory_item_name', { hasText: name }).waitFor();
  }
}
