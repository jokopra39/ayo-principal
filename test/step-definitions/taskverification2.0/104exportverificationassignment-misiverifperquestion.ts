import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TaskVerificationPage from "../../../src/pageobjects/taskverification2.0/taskverification.page";
import AssignmentCartPage from "../../../src/pageobjects/taskverification2.0/assignmentcart.page";
import VerificationAssignmentPage from "../../../src/pageobjects/taskverification2.0/verificationassignment.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 104. Export file verification assignment misi verifikasi per question"
);
allureReporter.addFeature(
  "Export file verification assignment misi verifikasi per question"
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
    dataTest.taskVerification.searchByTsmName104
  );
  console.log("geser kekanan manual");
});

it("System should be according data Task Verification based on search keyword", async () => {
  await browser.pause(5000);
});

it("I generate sampling, click button assign, then go to Assignment Cart page", async () => {
  await browser.pause(10000);
  await TaskVerificationPage.generateSampling(
    dataTest.taskVerification.samplingAmount
  );
  await TaskVerificationPage.dialogConfirm();
  await AssignmentCartPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(10000);
});

it("System should be leading to Assignment Cart page", async () => {
  await AssignmentCartPage.page();
});

it("I add assignment then go to Verification Assignment page", async () => {
  await AssignmentCartPage.searchTaskVerif2(
    dataTest.taskVerification.searchByTsmName104
  );
  console.log("geser kekanan manual");
  await browser.pause(5000);
  await AssignmentCartPage.addAssignment(
    dataTest.taskVerification.approverName2,
    dataTest.taskVerification.missionAmount,
    dataTest.taskVerification.deadline2
  );
  await AssignmentCartPage.kirim();
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(10000);
});

it("System should be leading to Verification Assignment page", async () => {
  await VerificationAssignmentPage.page();
});

it("I click button Export Summary Data", async () => {
  await AssignmentCartPage.searchTaskVerif(
    dataTest.taskVerification.searchByTsmName104
  );
  console.log("geser kekanan manual");
  await browser.pause(12000);
  await VerificationAssignmentPage.exportFile();
});

it("System should be able to download file export", async () => {
  await browser.pause(10000);
});
