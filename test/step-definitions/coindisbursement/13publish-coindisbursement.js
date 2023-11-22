import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import CoinDisbursementPage from "../../../src/pageobjects/coindisbursement/coindisbursement.page";
import FormCoinDisbursementPage from "../../../src/pageobjects/coindisbursement/formcoindisbursement.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 13. Coin Disbursement - Publish Coin Disbursement"
);
allureReporter.addFeature("Publish Coin Disbursement");

it('I am in Coin Disbursement page', async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.coinDisbursement();
  await CoinDisbursementPage.page();
});

it('I search a coin disbursement', async () => {
  await CoinDisbursementPage.search(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

it('I click button edit a unpublished coin disbursement', async () => {
  await CoinDisbursementPage.editATask(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

it('I click button 'Simpan' on tab Target Penerima', async () => {
  await FormCoinDisbursementPage.viewTabTargetPenerima();
  await FormCoinDisbursementPage.saveTP();
});

it('I am in the Coin Disbursement page', async () => {
  await CoinDisbursementPage.pageList();
});

it('I search name a coin disbursement', async () => {
  await CoinDisbursementPage.search(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

it('I click button edit a draft coin disbursement', async () => {
  await CoinDisbursementPage.editATask(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

it('I click button 'Simpan' Target Penerima', async () => {
  await FormCoinDisbursementPage.viewTabTargetPenerima();
  await FormCoinDisbursementPage.saveTP();
});

it('System should be able to save and publish draft coin disbursement', async () => {
    await CoinDisbursementPage.page();
    await CoinDisbursementPage.pageList();
  }
);
