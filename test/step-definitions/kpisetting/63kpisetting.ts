import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import KPISettingPage from "../../../src/pageobjects/kpisetting/kpisetting.page";
import FormKPISettingPage from "../../../src/pageobjects/kpisetting/formkpisetting.page";
const dataTest = require("../../data-test/dte.data");

// Scenario Outline: As a user, I can create, read, update and delete field force
describe("[PRINCIPAL] 63. KPI Setting", () => {
  before("Iam login", async () => {
    // await LoginPage.open();
    await KPISettingPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on KPI Setting page", async () => {
    await MainmenuPage.KPISetting();
    await browser.pause(10000);
    await KPISettingPage.page();
  });

  // it("I click button Buat", async () => {});

  // it("System should be leading to form Create KPI Setting", async () => {});

  // it("I am on form Create KPI Setting page", async () => {});

  it("I input form and submit", async () => {
    await FormKPISettingPage.createKPI(dataTest.kpiSetting.brand);
    await FormKPISettingPage.submitKPI();
    await browser.pause(10000);
  });

  // it("System should be able to submit form KPI Setting and leading to KPI Setting page", async () => {});

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
});
