
import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

class CustomWorld {
  async launchBrowser() {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }
  async closeBrowser() {
    await this.browser.close();
  }
}
setWorldConstructor(CustomWorld);
