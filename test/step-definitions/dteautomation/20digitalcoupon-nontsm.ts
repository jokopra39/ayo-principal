import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import DteAutomationPage from "../../../src/pageobjects/dteautomation/dteautomation.page";
import FormDTEAutomationPage from "../../../src/pageobjects/dteautomation/form.page";
const dataTest = require("../../data-test/dte.data");

//  Scenario Outline: As a user, I can create DTE Automation digital coupon non tsm
describe("[PRINCIPAL] 20. DTE Automation Digital Coupon (Non TSM)", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
  });

  it("I am on the DTE Automation page", async () => {
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
    await MainmenuPage.dteAutomation();
    await DteAutomationPage.page();
    await DteAutomationPage.pageList();
  });

  it("I select tab Non-TSM and click button Buat Non TSM", async () => {
    await DteAutomationPage.viewTabNonTsm();
    await DteAutomationPage.createNew();
  });

  it("System should be leading to form create DTE Automation", async () => {
    await FormDTEAutomationPage.page();
  });

  it("I am on the form create DTE Automation Non TSM page", async () => {
    await FormDTEAutomationPage.pageCreateNonTsm();
  });

  it("I input form with select Automation Digital Coupon and submit", async () => {
    await FormDTEAutomationPage.automationDigitalCoupon();
    await FormDTEAutomationPage.tradeProgram("TP Kusus Spin The Wheel Sisda");
    await FormDTEAutomationPage.selectDate();
    await FormDTEAutomationPage.kupon(dataTest.dteAutomation.totalKuponNonTsm);
    await FormDTEAutomationPage.fillFrekuensi(
      dataTest.dteAutomation.coinRewardperFrekDCNonTsm,
      dataTest.dteAutomation.frekuensiDCNonTsm
    );
    await FormDTEAutomationPage.judulDeskripsiButton(
      dataTest.dteAutomation.judulTantanganDCNonTSM,
      dataTest.dteAutomation.deskripsiTantanganDCNonTSM,
      dataTest.dteAutomation.teksButton
    );
    await FormDTEAutomationPage.notifTambahanYes();
    await FormDTEAutomationPage.submitForm();
  });

  it("System should be able to submit digital coupon non tsm and leading to DTE Automation page", async () => {
    await DteAutomationPage.page();
    await DteAutomationPage.pageList();
    await DteAutomationPage.expectNewTaskRow1(
      dataTest.dteAutomation.typeDC,
      dataTest.dteAutomation.coinRewardperFrekDCNonTsm,
      dataTest.dteAutomation.frekuensiDCNonTsm,
      dataTest.dteAutomation.statusBerjalan
    );
  });
});
