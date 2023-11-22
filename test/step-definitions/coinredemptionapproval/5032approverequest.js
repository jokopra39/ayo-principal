import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import CoinRedemptionApprovalPage from "../../../src/pageobjects/coinredemptionapproval/coinredemptionapproval.page";
import CoinDisbursementPage from "../../../src/pageobjects/coindisbursement/coindisbursement.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 5032. Approve Request - Coin Redemption Approval"
);
allureReporter.addFeature("Approve Request - Coin Redemption Approval");

//Scenario Outline: As a user, I can approve request approval coin redemption
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
  await CoinRedemptionApprovalPage.searchResult(
    dataTest.coinRedemptionApproval.GTP
  );
  console.log("geser kekanan manual");
  await browser.pause(12000);
  await VerificationAssignmentPage.exportFile();
  await browser.pause(150000);
  await CoinRedemptionApprovalPage.approveRequest();
});

it("System should be able to save and approve request coin redemption", async () => {
  await browser.pause(3000);
  await CoinRedemptionApprovalPage.dialogConfirmApprove();
  await browser.pause(5000);
});
