import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 27. Task Sequencing - Request Approval Coin Adjustment"
);
allureReporter.addFeature("Request approval coin adjustment TSM");

//  Scenario Outline: As a user, I can search task sequencing
it("I am on the Task Sequencing page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});

it("I search a task sequencing for import", async () => {
  await TaskSequencingPage.searchTaskSequencing(
    dataTest.taskSequencing.nameWithoutPinUp5
  );
});

it("System should be according data task sequencing based on search keyword", async () => {
  await TaskSequencingPage.searchResult(
    dataTest.taskSequencing.nameWithoutPinUp5
  );
});

// Scenario Outline: As a user, I can edit Tsm
it("I click button edit a TSM", async () => {
  await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp4);
});

it("System should be leading to form Task Sequencing page", async () => {
  await FormCreatePage.page();
});

// Scenario Outline: As a user, I can export and import coin TSM
it("I am on the form edit Task Sequencing page", async () => {
  await FormCreatePage.pageEdit();
});

it("I import coin and confirm", async () => {
  await FormCreatePage.importFile();
  await FormCreatePage.uploadImportFile();
  await FormCreatePage.closePopUpImport();
  await FormCreatePage.importFile();
  await browser.pause(2000);
  await FormCreatePage.userPenerimaCoinAdj(
    dataTest.taskSequencing.reasonImportCoin,
    dataTest.login.accountname
  );
  await FormCreatePage.sendImportFile();
  await FormCreatePage.confirmImport();
});

it("System should be able to import coin TSM", async () => {
  // await browser.pause(60000)
  await FormCreatePage.successImportFile();
});

//Scenario Outline: As a user, I can view and publish setting mission builder
it("I am on the Mission Builder page", async () => {
  await FormCreatePage.submitEditTsm();
  await MissionBuilderPage.pageEdit();
});

it("I view setting mission builder and publish TSM", async () => {
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});

it("System should be leading to Task Sequencing page", async () => {
  await TaskSequencingPage.page();
});
