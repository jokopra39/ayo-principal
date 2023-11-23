import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import CoinRedemptionApprovalPage from "../../../src/pageobjects/coinredemptionapproval/coinredemptionapproval.page";
const dataTest = require("../../data-test/dte.data");

//Scenario Outline: As a user, I can approve request approval coin redemption
describe("[PRINCIPAL] 37. Approve Request - Coin Redemption Approval", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
  });

  it("I am on Coin Redemption Approval page", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
    await MainmenuPage.coinRedemptionApproval();
    await CoinRedemptionApprovalPage.page2();
  });

  it("I click button SETUJUI", async () => {
    await CoinRedemptionApprovalPage.searchGTP(
      dataTest.coinRedemptionApproval.GTP
    );
    //await CoinRedemptionApprovalPage.searchResult(dataTest.coinRedemptionApproval.GTP)
    await browser.pause(15000);
    await CoinRedemptionApprovalPage.approveRequest();
  });

  it("System should be able to save and approve request coin redemption", async () => {
    await browser.pause(3000);
    await CoinRedemptionApprovalPage.dialogConfirmApprove();
    await browser.pause(5000);
    //tambahin export detail

    // await CoinRedemptionApprovalPage.getStatusRow1(dataTest.coinRedemptionApproval.statusApproved)
    // await CoinDisbursementPage.open()
    // await LoginPage.acceptCookie()
    // await CoinDisbursementPage.page()
    // await CoinDisbursementPage.openTabDataLog()
    // await browser.pause(5000)
    // await CoinDisbursementPage.viewBtnImport()
  });
});
