import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import CoinDisbursementPage from "../../../src/pageobjects/coindisbursement/coindisbursement.page";
import FormCoinDisbursementPage from "../../../src/pageobjects/coindisbursement/formcoindisbursement.page";
import SubGTPPage from "../../../src/pageobjects/subgtp/subgtp.page";
const dataTest = require("../../data-test/dte.data");

describe("[PRINCIPAL] 14. Coin Disbursement - Setup program penukaran coin", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
  });

  it("I am in Coin Disbursement page", async () => {
    //await SubGTPPage.open()
    //await SubGTPPage.page()
    //await SubGTPPage.pageSGPT()
    //await SubGTPPage.pageList()
    await MainmenuPage.open();
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
    await MainmenuPage.SubGroupTradeProgram();
    await SubGTPPage.pageList();
    await SubGTPPage.search(dataTest.subGroupTradeProgram.searchByName);
    await SubGTPPage.searchResult(dataTest.subGroupTradeProgram.searchByName);
    await browser.pause(5000);
    // await SubGTPPage.viewDetailATask(dataTest.subGroupTradeProgram.searchByName)
    await CoinDisbursementPage.open();
    await LoginPage.acceptCookie();
    // await CoinDisbursementPage.page()
    await CoinDisbursementPage.pageList();
  });

  it("I click button Buat", async () => {
    await CoinDisbursementPage.createNew();
  });

  it("System should be leading to form create Coin Disbursement", async () => {
    await FormCoinDisbursementPage.page();
  });

  it("I am in the Coin Disbursement page", async () => {
    await FormCoinDisbursementPage.pageCreate();
    await browser.pause(24000);
  });

  it("I input form", async () => {
    await FormCoinDisbursementPage.createNew(
      dataTest.coinDisbursement.namaProgramPenukaranKoin14,
      dataTest.coinDisbursement.coinValution14
    );
    await FormCoinDisbursementPage.selectOpsiPenukaranSPBB();
  });

  it("I click button submit", async () => {
    await FormCoinDisbursementPage.submitForm();
    await FormCoinDisbursementPage.saveTP();
  });

  it("System should be able submit program coin disbursement", async () => {
    await CoinDisbursementPage.page();
  });

  it("I am on the Coin Disbursement page", async () => {
    await CoinDisbursementPage.pageList();
  });

  it("I search a coin disbursement", async () => {
    await CoinDisbursementPage.search(
      dataTest.coinDisbursement.namaProgramPenukaranKoin14
    );
  });

  it("System should be according data coin disbursement based on search keyword", async () => {
    await CoinDisbursementPage.searchResult(
      dataTest.coinDisbursement.namaProgramPenukaranKoin14
    );
  });
});
