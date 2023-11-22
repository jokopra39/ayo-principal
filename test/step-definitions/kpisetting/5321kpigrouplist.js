import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import KPISettingPage from "../../../src/pageobjects/kpisetting/kpisetting.page";
import FormSearchKPISettingPage from "../../../src/pageobjects/kpisetting/formsearchkpisetting.page";
const dataTest = require("../../data-test/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 5321. KPI Setting Group List");
allureReporter.addFeature("KPI Setting");

// Scenario Outline: As a user, I can create, read, update and delete field force
it("I am on KPI Setting page", async () => {
  await KPISettingPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.KPISetting();
  await browser.pause(20000);
  await KPISettingPage.page1();
});

it("I input field zone, region for search", async function () {
  await FormSearchKPISettingPage.searchKPI();
});

it("I click header table, for sorting", async function () {
  await browser.pause(5000);
});
