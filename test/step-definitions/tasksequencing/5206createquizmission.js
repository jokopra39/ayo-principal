import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 5206. Create Quiz Mission");
allureReporter.addFeature("Success Create TSM Quiz Mission");

/**
 * Go to Task Sequencing Menu
 */
it("I am on the Task Sequencing page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});

it("I create task sequencing and click button Submit", async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.data5206.tsmNama,
    dataTest.data5206.tpNama,
    dataTest.data5206.tsmAudience,
    "",
    ""
  );
  await FormCreatePage.submitTsm();
});

//add misi
it("I add Event Misi", async () => {
  await MissionBuilderPage.createMissionBuilder();
});

it("Setting Misi and save mission builder", async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.data5206.tsmMisi
  );
  await MissionBuilderPage.setVerifikasiManual();
  await MissionBuilderPage.setCoin(1000, 1000);
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.simpan();
});

//edit
it("System should be leading to Task Sequencing page and success save new Tsm", async () => {
  await TaskSequencingPage.page();
});

it("I edit and submit task sequencing", async () => {
  await TaskSequencingPage.editTask(dataTest.data5206.tsmNama);
  await FormCreatePage.submitEditTsm();
});

it("I publish mission builder", async () => {
  // await MissionBuilderPage.setMissionEdit();
  // await MissionBuilderPage.simpanSettingMission();
  await browser.pause(3000);
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});

// ========================================

it("I create task sequencing and click button Submit 2", async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.data5206.tsmNama2,
    dataTest.data5206.tpNama2,
    dataTest.data5206.tsmAudience,
    "",
    ""
  );
  await FormCreatePage.submitTsm();
});

//add misi
it("I add Event Misi 2", async () => {
  await MissionBuilderPage.createMissionBuilder();
});

it("Setting Misi and save mission builder 2", async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.data5206.tsmMisi
  );
  await MissionBuilderPage.setVerifikasiManual();
  await MissionBuilderPage.setCoin(1000, 1000);
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.simpan();
});

//edit
it("System should be leading to Task Sequencing page and success save new Tsm 2", async () => {
  await TaskSequencingPage.page();
});

it("I edit and submit task sequencing 2", async () => {
  await TaskSequencingPage.editTask(dataTest.data5206.tsmNama2);
  await FormCreatePage.submitEditTsm();
});

it("I publish mission builder 2", async () => {
  // await MissionBuilderPage.setMissionEdit();
  // await MissionBuilderPage.simpanSettingMission();
  await browser.pause(3000);
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
  await browser.pause(7000);
});
