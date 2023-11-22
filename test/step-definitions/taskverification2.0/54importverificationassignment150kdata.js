import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import VerificationAssignmentPage from "../../../src/pageobjects/taskverification2.0/verificationassignment.page";
import DetailVerificationAssignmentPage from "../../../src/pageobjects/taskverification2.0/detailverificationassignment.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 54. Import Verification Assignment 150k Data"
);
allureReporter.addFeature("Import Verification Assignment 150k Data");

//  Scenario Outline: As a user, I can import Verification Assignment 150k data
it("I am on the Task Verification page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.DropTaskVerif2();
  await MainmenuPage.verificationAssignment();
  await VerificationAssignmentPage.pageList2();
});

it("I view detail task then import xls file", async () => {
  await VerificationAssignmentPage.viewATask();
  await browser.pause(10000);
  await DetailVerificationAssignmentPage.page();
});

it("System should be able submit form", async () => {
  await DetailVerificationAssignmentPage.importData150(
    dataTest.taskVerification.approverName
  );
});
