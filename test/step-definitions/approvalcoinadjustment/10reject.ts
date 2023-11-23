import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import ApprovalCoinAdjPage from "../../../src/pageobjects/approvalcoinadjustment/approvalcoinadj.page";
import FormApprovalCoinAdjPage from "../../../src/pageobjects/approvalcoinadjustment/formapprovalcoinadj.page";
const dataTest = require("../../data-test/dte.data");

describe("[PRINCIPAL] 10. Approval Coin Adjustment - Reject Request Approval", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on Approval Coin Adjustment page", async () => {
    await MainmenuPage.dashboard();
    await MainmenuPage.approvalCoinAdjustment();
    await ApprovalCoinAdjPage.page();
  });

  it("I filter status with Pending", async () => {
    await ApprovalCoinAdjPage.tabMenuTsm();
    await browser.pause(5000);
    await ApprovalCoinAdjPage.filterPendingTsm();
    await browser.pause(5000);
    await ApprovalCoinAdjPage.filterApproverName(dataTest.login.accountname);
    await browser.pause(5000);
    await ApprovalCoinAdjPage.filter();
  });

  it("I search a Task Sequencing Management", async () => {
    await ApprovalCoinAdjPage.search(dataTest.taskSequencing.nameWithoutPinUp5);
  });

  it("System should be according data task sequencing based on search keyword", async () => {
    await ApprovalCoinAdjPage.searchResult(
      dataTest.taskSequencing.nameWithoutPinUp5
    );
    await ApprovalCoinAdjPage.getStatusRow1(
      dataTest.approvalCoinAdjustment.statusPending
    );
  });

  it("I click button Lihat a Pending TSM approval coin adjustment", async () => {
    await ApprovalCoinAdjPage.detailTsm();
  });

  it("System should be leading to form detail Approval Coin adjustment", async () => {
    await FormApprovalCoinAdjPage.page();
  });

  it("I click button Reject", async () => {
    await FormApprovalCoinAdjPage.reject(); //
    await FormApprovalCoinAdjPage.confirmApproveReject(
      dataTest.approvalCoinAdjustment.headerPopUpConfirmRejected
    );
  });

  it("System should be able to save and reject request coin adjustment", async () => {
    // await FormApprovalCoinAdjPage.page()
    await FormApprovalCoinAdjPage.successReject();
    // await browser.back()
    // await FormApprovalCoinAdjPage.backToApprovalCoinAdj()
    await ApprovalCoinAdjPage.open();
    // await ApprovalCoinAdjPage.page()
    await LoginPage.acceptCookie();
    await browser.pause(5000);
    await ApprovalCoinAdjPage.tabMenuTsm();
    await browser.pause(5000);
    await ApprovalCoinAdjPage.filterRejectedTsm();
    await browser.pause(5000);
    await ApprovalCoinAdjPage.filter();
    await browser.pause(5000);
    await ApprovalCoinAdjPage.search(dataTest.taskSequencing.nameWithoutPinUp5);
    await ApprovalCoinAdjPage.searchResult(
      dataTest.taskSequencing.nameWithoutPinUp5
    );
    await ApprovalCoinAdjPage.getStatusRow1(
      dataTest.approvalCoinAdjustment.statusRejected
    );
    await browser.pause(6000);
  });
});
