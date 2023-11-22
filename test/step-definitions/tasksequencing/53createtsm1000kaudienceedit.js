import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import LoginPage from "../../../src/pageobjects/login/login.page";
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 53. Edit TSM 1jt Audience Edit");
allureReporter.addFeature("Edit TSM 1jt Audience");

//  Scenario Outline: As a user, I can create task sequencing
it("I am on the Task Sequencing page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});

//  Scenario Outline: As a user, I can publish TSM with Pin Up Mission
it("I edit and submit task sequencing", async () => {
  await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp53);
  await FormCreatePage.page();
  await FormCreatePage.pageEdit();
  await FormCreatePage.submitEditTsm();
});

it("System should be update data and leading to Mission Builder page", async () => {
  // await MissionBuilderPage.page()
  await MissionBuilderPage.pageEdit();
});

it("I publish mission builder", async () => {
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});

it("System should be leading to Task Sequencing page and success publish Tsm", async () => {
  await TaskSequencingPage.page();
});

it("I view detail task", async () => {
  await TaskSequencingPage.detailTask(dataTest.taskSequencing.nameWithPinUp53);
  await FormCreatePage.page();
  await FormCreatePage.formDetailPage();
  await FormCreatePage.cekDetail();
});

it("System should be show detail mission", async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageDetail();
});
