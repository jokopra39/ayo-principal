import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import KPISettingPage from "../../../src/pageobjects/kpisetting/kpisetting.page";
import FormSearchKPISettingPage from "../../../src/pageobjects/kpisetting/formsearchkpisetting.page";
// const dataTest = require("../../data-test/dte.data");

// Scenario Outline: As a user, I can create, read, update and delete field force
describe("[PRINCIPAL] 5321. KPI Setting Group List", () => {
  before("Iam login", async () => {
    // await LoginPage.open();
    await KPISettingPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on KPI Setting page", async () => {
    await MainmenuPage.KPISetting();
    await browser.pause(20000);
    await KPISettingPage.page1();
  });

  it("I input field zone, region for search", async () => {
    await FormSearchKPISettingPage.searchKPI();
  });

  it("I click header table, for sorting", async () => {
    await browser.pause(5000);
  });
});
