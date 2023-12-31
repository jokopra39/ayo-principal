import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import CoinDisbursementPage from "../../../src/pageobjects/coindisbursement/coindisbursement.page";
import FormCoinDisbursementPage from "../../../src/pageobjects/coindisbursement/formcoindisbursement.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 38. Upload Result Payment (Datalog - Coin Disbursement)"
);
allureReporter.addFeature(
  "Upload Result Payment (Datalog - Coin Disbursement)"
);

//  Scenario Outline: As a user, I can create and import Coin Disbursement
it("I am in tab Data Log - Coin Disbursement page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.coinDisbursement();
  await CoinDisbursementPage.page();
});

it("I am edit and import xls payment result", async () => {
  await CoinDisbursementPage.openTabDataLog();
  // await CoinDisbursementPage.getStatusRow1(dataTest.coinDisbursement.statusRequested)
  await CoinDisbursementPage.importFile();
});

it("System should be able to import xls payment result and change budget approval status to approved", async () => {
  await CoinDisbursementPage.open();
  await LoginPage.acceptCookie();
  // await CoinDisbursementPage.page()
  // await CoinDisbursementPage.getStatusRow1(dataTest.coinDisbursement.statusApproved)
  await CoinDisbursementPage.openTabDataLog();
  await CoinDisbursementPage.viewBtnImport();
});

// it('I am in tab List Penukaran Koin - Ubah Coin Disbursement page', async () => {
//     await CoinDisbursementPage.openTabCoinDisbursement()
//     // await CoinDisbursementPage.editATask(dataTest.coinDisbursement.namaProgramPenukaranKoin38)
//     await CoinDisbursementPage.search(dataTest.coinDisbursement.vcCRE)
//     await CoinDisbursementPage.searchResult(dataTest.coinDisbursement.vcCRE)
//     await CoinDisbursementPage.editTask()
// });

// it('I am edit and import xls', async () => {
//     await FormCoinDisbursementPage.pageEdit()
//     await FormCoinDisbursementPage.viewTabListPenukaranCoin()
//     await FormCoinDisbursementPage.exportListRedeemLPC()
//     await browser.pause(60000)
//     await FormCoinDisbursementPage.importLPC(dataTest.coinDisbursement.namaProgramPenukaranKoin38)
// });

// it('System should be able to import xls', async () => {
//     await FormCoinDisbursementPage.kirimImportLPC()
// });
