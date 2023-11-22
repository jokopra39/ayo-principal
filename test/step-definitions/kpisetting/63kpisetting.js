import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import KPISettingPage from "../../../src/pageobjects/kpisetting/kpisetting.page";
import FormKPISettingPage from "../../../src/pageobjects/kpisetting/formkpisetting.page";
const dataTest = require("../../testdata/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 63. KPI Setting");
allureReporter.addFeature("KPI Setting");

// Scenario Outline: As a user, I can create, read, update and delete field force
it("I am on KPI Setting page", async () => {
  await KPISettingPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.KPISetting();
  await browser.pause(10000);
  await KPISettingPage.page();
});

it("I click button Buat", async () => {});

it("System should be leading to form Create KPI Setting", async () => {});

it("I am on form Create KPI Setting page", async () => {});

it("I input form and submit", async () => {
  await FormKPISettingPage.createKPI(dataTest.kpiSetting.brand);
  await FormKPISettingPage.submitKPI();
});

it("System should be able to submit form KPI Setting and leading to KPI Setting page", async () => {
  await browser.pause(10000);
});

it("I edit KPI Setting", async () => {
  await KPISettingPage.editKPI();
  await FormKPISettingPage.editKPI();
  await FormKPISettingPage.submitKPI();
  await browser.pause(30000);
  await KPISettingPage.page();
});

it("System should be update KPI Setting", async () => {
  await KPISettingPage.expectNewKPIEdited(dataTest.kpiSetting.statusEdit);
});
