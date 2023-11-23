import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import CoinRedemptionApprovalPage from "../../../src/pageobjects/coinredemptionapproval/coinredemptionapproval.page";
import CoinDisbursementPage from "../../../src/pageobjects/coindisbursement/coindisbursement.page";
import { frameHome, frameForm } from "../../../src/helper/commands";
const dataTest = require("../../data-test/dte.data");

//Scenario Outline: As a user, I can approve request approval coin redemption
describe("[PRINCIPAL] 5206. Approve Request - Coin Redemption Approval", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
  });

  it("I am on Coin Redemption Approval page", async () => {
    // await MainmenuPage.open();
    // await MainmenuPage.dashboard();
    // await LoginPage.acceptCookie();
    // await MainmenuPage.coinRedemptionApproval();
    // await frameHome();
  });

  it("I click button SETUJUI", async () => {
    // await frameForm();
    // await CoinRedemptionApprovalPage.searchGTP("1695025896");
    // console.log("geser kekanan manual");
    // await browser.pause(5000);
    // //APPROVE
    // await CoinRedemptionApprovalPage.approveRequest();
    // await CoinRedemptionApprovalPage.dialogConfirmApprove();
  });

  it("I click menu Coin Disburment", async () => {
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
    await MainmenuPage.coinDisbursement();
    await CoinDisbursementPage.page();
    await CoinDisbursementPage.openTabDataLog();
    await CoinDisbursementPage.search("1695025896");
    console.log("geser kekanan manual");
    await browser.pause(5000);
  });

  it("I logout and login with other account", async () => {
    await MainmenuPage.signOut();
    await LoginPage.welcome();
    await LoginPage.loginExternal(
      "reda.meiningtiyas@weekendinc.com",
      "Reda123456"
    );
    await browser.pause(5000);
    await MainmenuPage.dashboard();
    await MainmenuPage.coinRedemptionApproval();
    await frameHome();
  });

  it("I click button SETUJUI with other account", async () => {
    await frameForm();
    await CoinRedemptionApprovalPage.searchGTP("1695025896");
    console.log("geser kekanan manual");
    await browser.pause(5000);
    // //APPROVE
    await CoinRedemptionApprovalPage.rejectRequest();
    await CoinRedemptionApprovalPage.dialogConfirmApprove();
  });

  it("I click menu Coin Disburment with other account", async () => {
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
    await MainmenuPage.coinDisbursement();
    await CoinDisbursementPage.page();
    await CoinDisbursementPage.openTabDataLog();
    await CoinDisbursementPage.search("1695025896");
    console.log("geser kekanan manual");
    await browser.pause(5000);
  });
});