import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import SubGTPPage from "../../../src/pageobjects/subgtp/subgtp.page"
import FormSubGTPPage from "../../../src/pageobjects/subgtp/form.page"
import CoinRedemptionApprovalPage from "../../../src/pageobjects/coinredemptionapproval/coinredemptionapproval.page"
const dataTest = require("../../data-test/dte.data")

//Scenario Outline: As a user, I can edit Sub GTP
describe("[PRINCIPAL] 97. Edit Sub Group Trade Program", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Sub GTP page", async () => {
    await MainmenuPage.SubGroupTradeProgram();
    await LoginPage.closeSideMenu();
    await browser.pause(5000);
    await SubGTPPage.page();
  });

  it("I search and view Sub GPT", async () => {
    await SubGTPPage.search1(dataTest.subGTP.cariByNamaEdit2);
    await SubGTPPage.editSubGTP();
    await browser.pause(10000);
    await FormSubGTPPage.pageEdit();
    await FormSubGTPPage.scApprover();
    await browser.pause(5000);
  });

  it("System should be leading to form Sub GTP page", async () => {
    await FormSubGTPPage.page();
  });

  it("I am on the Coin Redemption Approval Page", async () => {
    await CoinRedemptionApprovalPage.open();
    await LoginPage.acceptCookie();
    await CoinRedemptionApprovalPage.page2();
  });

  it("I search Coin Redemption Approval", async () => {
    await CoinRedemptionApprovalPage.searchGTP(dataTest.subGTP.cariByNamaEdit2);
    await CoinRedemptionApprovalPage.searchResultSGPT(
      dataTest.coinRedemptionApproval.SGTP
    );
  });

  it("System should be display the data based on search keyword", async () => {
    await CoinRedemptionApprovalPage.page2();
  });

  it("I am on the Sub GTP page2", async () => {
    await SubGTPPage.open();
    await LoginPage.acceptCookie();
    await LoginPage.closeSideMenu();
    await browser.pause(5000);
    await SubGTPPage.page();
  });

  it("I search and edit Sub GPT2", async () => {
    await SubGTPPage.search1(dataTest.subGTP.cariByNamaEdit2);
    await SubGTPPage.editSubGTP();
    await browser.pause(10000);
    await FormSubGTPPage.pageEdit();
    await FormSubGTPPage.scApprover();
    await FormSubGTPPage.clearApprover();
    await FormSubGTPPage.approver1(dataTest.subGTP.approverSGPT4);
    await FormSubGTPPage.submitForm();
    await browser.pause(5000);
  });

  it("System should be edit Sub GTP and leading to Sub GTP page2", async () => {
    await SubGTPPage.pageList();
    await SubGTPPage.search1(dataTest.subGTP.cariByNamaEdit2);
  });

  it("I am on the Coin Redemption Approval Page2", async () => {
    await CoinRedemptionApprovalPage.open();
    await LoginPage.acceptCookie();
    await CoinRedemptionApprovalPage.page2();
  });

  it("I search Coin Redemption Approval2", async () => {
    await CoinRedemptionApprovalPage.searchGTP(dataTest.subGTP.cariByNamaEdit2);
  });

  it("System should be display the data based on search keyword2", async () => {
    await CoinRedemptionApprovalPage.page2();
  });
});
