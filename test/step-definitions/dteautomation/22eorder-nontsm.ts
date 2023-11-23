import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import DteAutomationPage from "../../../src/pageobjects/dteautomation/dteautomation.page";
import FormDTEAutomationPage from "../../../src/pageobjects/dteautomation/form.page";
const dataTest = require("../../data-test/dte.data");

describe("[PRINCIPAL] 22. DTE Automation E-Order (Non - TSM)", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
  });

  it('I am on the DTE Automation page', async () => {
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
    await MainmenuPage.dteAutomation();
    await DteAutomationPage.page();
    await DteAutomationPage.pageList();
  });

  it('I select tab Non-TSM and click button Buat Non TSM', async () => {
    await DteAutomationPage.viewTabNonTsm();
    await DteAutomationPage.createNew();
  });

  it('System should be leading to form create DTE Automation', async () => {
    await FormDTEAutomationPage.page();
  });

  it('I am on the form create DTE Automation Non TSM page', async () => {
    await FormDTEAutomationPage.pageCreateNonTsm();
  });

  it("I input form with select Automation 'E - Order' and submit", async () => {
    await FormDTEAutomationPage.automationEOrder();
    await FormDTEAutomationPage.jenisTantanganEOrder(); //Minimum Transaction Frequency
    await FormDTEAutomationPage.tradeProgram(dataTest.dteAutomation.searchTP);
    await FormDTEAutomationPage.dateScroll();
    await FormDTEAutomationPage.selectDate();
    await FormDTEAutomationPage.fillFrekuensi(
      dataTest.dteAutomation.coinRewardperFrekEONonTsm,
      dataTest.dteAutomation.frekuensiEONonTsm
    );
    await FormDTEAutomationPage.skuProduct(dataTest.dteAutomation.barcodeSKU);
    await FormDTEAutomationPage.judulDeskripsiButton(
      dataTest.dteAutomation.judulTantanganEOCNonTSM,
      dataTest.dteAutomation.deskripsiTantanganEOCNonTSM,
      dataTest.dteAutomation.teksButton
    );
    await FormDTEAutomationPage.notifTambahanYes();
    await FormDTEAutomationPage.submitForm();
  });

  it('System should be able to submit E-Order non tsm and leading to DTE Automation page', async () => {
    await DteAutomationPage.page();
    await DteAutomationPage.pageList();
    await DteAutomationPage.expectNewTaskRow1(
      dataTest.dteAutomation.typeEorder,
      dataTest.dteAutomation.coinRewardperFrekEONonTsm,
      dataTest.dteAutomation.frekuensiEONonTsm,
      dataTest.dteAutomation.statusBerjalan
    );
  }
  );
});
