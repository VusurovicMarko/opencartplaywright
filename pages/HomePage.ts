import { Page, expect, Locator } from "@playwright/test";

export class HomePage {
  private readonly page: Page;
  // locators
  private readonly linkMyAccount: Locator;
  private readonly linkRegister: Locator;
  private readonly linkLogin: Locator;
  private readonly txtSearchBox: Locator;
  private readonly btnSearch: Locator;

  // constructor

  constructor(page: Page) {
    this.page = page;
    this.linkMyAccount = this.page.locator("span:has-text('My Account')");
    this.linkRegister = this.page.locator("a:has-text('Register')");
    this.linkLogin = this.page.locator("a:has-text('Login')");
    this.txtSearchBox = this.page.locator("input[placeholder='Search']");
    this.btnSearch = this.page.locator("#search button[type='button']");
  }

  // actions/methods

  // Check if HomePage exists
  async isHomePageExists() {
    let title = await this.page.title();
    if (title) {
      return true;
    }
    return false;
  }

  //Click "My Account" link
  async clickMyAccount() {
    try {
      await this.linkMyAccount.click();
    } catch (error) {
      console.log(`Exception occured while clicking 'My Account':${error}`);
      throw error;
    }
  }

  //Click "Register" link

  async clickRegister() {
    try {
      await this.linkRegister.click();
    } catch (error) {
      console.log(`Exception ocurred while clicking 'Register': ${error}`);
      throw error;
    }
  }

  //Click "Login" link
  async clickLogin() {
    try {
      await this.linkLogin.click();
    } catch (error) {
      console.log(`Exception ocurred while clicking Login: ${error}`);
      throw error;
    }
  }

  //Enter product name in the search box
  async enterProductName(pName: string) {
    try {
      await this.txtSearchBox.fill(pName);
    } catch (error) {
      console.log(`Exception occured while entering product name:${error}`);
      throw error;
    }
  }

  //Click the Search button
  async clickSearch() {
    try {
      await this.btnSearch.click();
    } catch (error) {
      console.log(`Exception occured while clicking 'Search': ${error} `);
      throw error;
    }
  }
}
