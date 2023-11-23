import LoginPage from '../../../src/pageobjects/login/login.page';
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import DteAutomationPage from '../../../src/pageobjects/dteautomation/dteautomation.page';
import FormDTEAutomationPage from '../../../src/pageobjects/dteautomation/form.page';
const dataTest = require('../../data-test/dte.data');

describe("[PRINCIPAL] 25. DTE Automation Referral Code (TSM)", () => {
    before("Iam login", async () => {
        await LoginPage.open();
        await LoginPage.setLclStorage();
        await MainmenuPage.open();
    });

    it('I am on the DTE Automation page', async () => {
        await MainmenuPage.dashboard()
        await LoginPage.acceptCookie()
        await MainmenuPage.dteAutomation()
        await DteAutomationPage.page()
        await DteAutomationPage.pageList()
    });

    it('I select tab TSM and click button Buat TSM', async () => {
        await DteAutomationPage.viewTabTsm()
        await DteAutomationPage.createNew()
    });

    it('System should be leading to form create DTE Automation', async () => {
        await FormDTEAutomationPage.page()
    });

    it('I am on the form create DTE Automation TSM page', async () => {
        await FormDTEAutomationPage.pageCreateTsm()
    });

    it("I input form with select Automation 'Referral Code' and submit", async () => {
        await FormDTEAutomationPage.automationReferralCode()
        await FormDTEAutomationPage.tradeProgram(dataTest.dteAutomation.searchTP)
        await FormDTEAutomationPage.selectDate()
        await FormDTEAutomationPage.fillFrekuensi(dataTest.dteAutomation.coinRewardperFrekTSM, dataTest.dteAutomation.frekuensiTSM)
        await FormDTEAutomationPage.judulDeskripsiButton(dataTest.dteAutomation.judulTantanganRCTSM, dataTest.dteAutomation.deskripsiTantanganRCTSM, dataTest.dteAutomation.teksButton)
        await FormDTEAutomationPage.notifTambahanYes()
        await FormDTEAutomationPage.submitForm()
    });

    it('System should be able to submit Referral Code TSM and leading to DTE Automation page', async () => {
        await DteAutomationPage.page()
        await DteAutomationPage.pageList()
        await DteAutomationPage.viewTabTsm()
        await DteAutomationPage.expectNewTaskRow1(dataTest.dteAutomation.typeRC, dataTest.dteAutomation.coinRewardperFrekTSM, dataTest.dteAutomation.frekuensiTSM, dataTest.dteAutomation.statusBerjalan)
    });
});