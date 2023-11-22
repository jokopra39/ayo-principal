import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TaskVerificationPage from "../../../src/pageobjects/taskverification/taskverification";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 07. task verify");
allureReporter.addFeature("Verify Task Verification");

//  Scenario Outline: As a user, I can verify Task Verification
it("I am on the Task Verification page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.taskVerification();
  await TaskVerificationPage.page();
  await TaskVerificationPage.viewTabTsm();
});
it("I search a Task Verification", async () => {
  await TaskVerificationPage.searchTaskVerif(
    dataTest.taskVerification.searchByTsmName7
  );
});

it("System should be according data Task Verification based on search keyword", async () => {
  await TaskVerificationPage.searchResult(
    dataTest.taskVerification.searchByTsmName7
  );
});

it("I click button verify a TSM Task Verification", async () => {
  await TaskVerificationPage.verifTsm();
  await TaskVerificationPage.verifDialog();
  await TaskVerificationPage.saveVerif();
});

it("I click button release coin", async () => {
  await TaskVerificationPage.releaseTsm();
  await TaskVerificationPage.dialogRelease();
  await TaskVerificationPage.saveRelease();
});

it("System should be release coin and status will be changed to Sudah Dikirim", async () => {
  await TaskVerificationPage.successRelease();
});
