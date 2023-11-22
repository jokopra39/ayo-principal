import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TaskVerificationPage from "../../../src/pageobjects/taskverification2.0/taskverification.page";
import AssignmentCartPage from "../../../src/pageobjects/taskverification2.0/assignmentcart.page";
import VerificationAssignmentPage from "../../../src/pageobjects/taskverification2.0/verificationassignment.page";
import DetailVerificationAssignmentPage from "../../../src/pageobjects/taskverification2.0/detailverificationassignment.page";
import VerificationApprovalPage from "../../../src/pageobjects/taskverification2.0/verificationapproval.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 112. Verification Approval - export dan approve hasil verifikasi misi perbaikan - 2"
);
allureReporter.addFeature(
  "Verification Approval - export dan approve hasil verifikasi misi perbaikan"
);

it("I am on the Task Verification page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.DropTaskVerif2();
  await MainmenuPage.TaskVerification2();
  await TaskVerificationPage.pageList2();
});
it("I search a Task Verification", async () => {
  await TaskVerificationPage.searchTaskVerif(
    dataTest.taskVerification.searchByTsmName101
  );
});
it("System should be according data Task Verification based on search keyword", async () => {
  await browser.pause(5000);
});

it("I generate sampling, click button assign, then go to Assignment Cart page", async () => {
  await TaskVerificationPage.generateSampling(
    dataTest.taskVerification.samplingAmount
  );
  await TaskVerificationPage.dialogConfirm();
  await AssignmentCartPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(5000);
});
it("System should be leading to Assignment Cart page", async () => {
  await AssignmentCartPage.page();
});

it("I add assignment then go to Verification Assignment page", async () => {
  await AssignmentCartPage.searchTaskVerif2(
    dataTest.taskVerification.searchByTsmName101
  );
  await browser.pause(5000);
  await AssignmentCartPage.addAssignment(
    dataTest.taskVerification.approverName2,
    dataTest.taskVerification.missionAmount,
    dataTest.taskVerification.deadline2
  );
  await AssignmentCartPage.kirim();
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(5000);
});
it("System should be leading to Verification Assignment page", async () => {
  await VerificationAssignmentPage.page();
});

it("I click button Export Summary Data", async () => {
  await AssignmentCartPage.searchTaskVerif(
    dataTest.taskVerification.searchByTsmName101
  );
  await browser.pause(5000);
  await VerificationAssignmentPage.exportFile();
});
it("System should be able to download file export", async () => {
  await browser.pause(60000);
});

it("I view detail task then import xls file", async () => {
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(5000);
  await VerificationAssignmentPage.page();
  await VerificationAssignmentPage.viewATask();
  await browser.pause(5000);
  await DetailVerificationAssignmentPage.page();
  await DetailVerificationAssignmentPage.importData2(
    dataTest.taskVerification.approverName2
  );
});
it("System should be able submit form and leading to Verification Approval page", async () => {
  await VerificationApprovalPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(5000);
});

it("I am on the Verification Approval page", async () => {
  await VerificationApprovalPage.pageList2();
});
it("I view detail Task Verification Approval", async () => {
  await VerificationApprovalPage.assignmentUC();
  await VerificationApprovalPage.pageList2();
  await VerificationApprovalPage.summaryData2();
});
it("System should be able to view detail Task Verification Approval", async () => {
  await VerificationApprovalPage.pageList2();
});
it("I click button verify a TSM Task Verification", async () => {
  await VerificationApprovalPage.detailApprove();
  await VerificationApprovalPage.dialogConfirm();
});
it("System should be able to approve TSM Task Verification and status will be changed to approved", async () => {
  await VerificationApprovalPage.pageList2();
});
