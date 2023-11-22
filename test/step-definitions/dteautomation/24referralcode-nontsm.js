import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../../src/pageobjects/login/login.page';
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import DteAutomationPage from '../../../src/pageobjects/dteautomation/dteautomation.page';
import FormDTEAutomationPage from '../../../src/pageobjects/dteautomation/form.page';
const dataTest = require('../../testdata/dte.data');

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 24. DTE Automation Referral Code (Non - TSM)');
    allureReporter.addFeature('Create DTE Automation Referral Code Non - TSM');

it('I am on the DTE Automation page', async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.dteAutomation()
    await DteAutomationPage.page()
    await DteAutomationPage.pageList()
});

it('I select tab Non-TSM and click button Buat Non TSM', async () => {
    await DteAutomationPage.viewTabNonTsm()
    await DteAutomationPage.createNew()
});

it('System should be leading to form create DTE Automation', async () => {
    await FormDTEAutomationPage.page()
});

it('I am on the form create DTE Automation Non TSM page', async () => {
    await FormDTEAutomationPage.pageCreateNonTsm()
});

it('I input form with select Automation 'Referral Code' and submit', async () => {
    await FormDTEAutomationPage.automationReferralCode()
    await FormDTEAutomationPage.tradeProgram(dataTest.dteAutomation.searchTP)
    await FormDTEAutomationPage.selectDate()
    await FormDTEAutomationPage.fillFrekuensi (dataTest.dteAutomation.coinRewardperFrekTSM, dataTest.dteAutomation.frekuensiTSM)
    await FormDTEAutomationPage.judulDeskripsiButton (dataTest.dteAutomation.judulTantanganRCNonTSM, dataTest.dteAutomation.deskripsiTantanganRCNonTSM, dataTest.dteAutomation.teksButton)
    await FormDTEAutomationPage.notifTambahanYes()
    await FormDTEAutomationPage.submitForm()
});

it('System should be able to submit Referral Code Non TSM and leading to DTE Automation page', async () => {
    await DteAutomationPage.page()
    await DteAutomationPage.pageList()
    await DteAutomationPage.expectNewTaskRow1(dataTest.dteAutomation.typeRC, dataTest.dteAutomation.coinRewardperFrekTSM, dataTest.dteAutomation.frekuensiTSM, dataTest.dteAutomation.statusBerjalan)
});