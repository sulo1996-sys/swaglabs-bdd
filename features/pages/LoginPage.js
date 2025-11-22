
export class LoginPage {
  constructor(page){
    this.page = page;
    this.user = page.locator('#user-name');
    this.pass = page.locator('#password');
    this.btn = page.locator('#login-button');
    this.error = page.locator('[data-test="error"]');
  }

  async login(u,p){
    await this.user.fill(u);
    await this.pass.fill(p);
    await this.btn.click();
  }

  async verifyError() {
    await this.error.waitFor({ state:'visible' });
  }
}
