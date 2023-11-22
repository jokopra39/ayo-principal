import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import CoinDisbursementPage from "../../../src/pageobjects/coindisbursement/coindisbursement.page";
import FormCoinDisbursementPage from "../../../src/pageobjects/coindisbursement/formcoindisbursement.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 15. Coin Disbursement - Unpublish Coin Disbursement"
);
allureReporter.addFeature("Unpublish Coin Disbursement");

it('I am on the Coin Disbursement page', async () => {
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
it('System should be according data coin disbursement based on search keyword', async () => {
    await CoinDisbursementPage.searchResult(
      dataTest.coinDisbursement.namaProgramPenukaranKoin1315
    );
  }
);

it('I click button edit a published coin disbursement', async () => {
  // await CoinDisbursementPage.checkStatus(dataTest.coinDisbursement.statusDraft)
  await CoinDisbursementPage.editATask(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

it('System should be leading to form edit Coin Disbursement', async () => {
  await FormCoinDisbursementPage.pageEdit(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

it('I click button 'Unpublish' on tab Target Penerima', async () => {
  await FormCoinDisbursementPage.viewTabTargetPenerima();
  await FormCoinDisbursementPage.saveTP();
});

it('System should be able to save and unpublish draft coin disbursement', async () => {
    // await CoinDisbursementPage.checkStatus(dataTest.coinDisbursement.statusUnpublish)
    await CoinDisbursementPage.page();
    await CoinDisbursementPage.pageList();
  }
);
