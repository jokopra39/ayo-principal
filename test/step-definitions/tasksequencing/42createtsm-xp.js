import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 42. Create Task Sequencing XP");
allureReporter.addFeature("Create Task Sequencing XP");

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

it("I create task sequencing and click button Submit", async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.taskSequencing.nameWithPinUp42,
    dataTest.tradeProgram.namaTP4,
    dataTest.audience.audienceToko,
    "TPTB-",
    "HWKND-"
  );
  await FormCreatePage.submitTsm();
});

it("System should be submitted data and leading to Mission Builder page", async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageCreate();
});

//  Scenario Outline: As a user, I can setting Misi with Pin Up Mission
it("I add Event Misi", async () => {
  await MissionBuilderPage.createMissionBuilder();
});

it("setting Misi and save mission builder", async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName42
  );
  await MissionBuilderPage.setVerifikasiManual();
  await MissionBuilderPage.setCoin(
    dataTest.taskSequencing.coinSubmission42,
    dataTest.taskSequencing.coinVerification42
  );
  await MissionBuilderPage.setXP(
    dataTest.taskSequencing.XPSubmission42,
    dataTest.taskSequencing.XPVerification42
  );
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.simpan();
});

it("System should be leading to Task Sequencing page and success save new Tsm", async () => {
  await TaskSequencingPage.page();
});

//  Scenario Outline: As a user, I can publish TSM with Pin Up Mission
it("I edit and submit task sequencing", async () => {
  await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp4);
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
  await TaskSequencingPage.detailTask(dataTest.taskSequencing.nameWithPinUp42);
  await FormCreatePage.page();
  await FormCreatePage.formDetailPage();
  await FormCreatePage.cekDetail();
});
it("System should be show detail mission", async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageDetail();
});
