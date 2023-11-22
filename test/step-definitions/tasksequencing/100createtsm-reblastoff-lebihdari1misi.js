import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 100. Create Task Sequencing Management (reblast off lebih dari 1 misi)"
);
allureReporter.addFeature(
  "Create Task Sequencing Management (reblast off lebih dari 1 misi)"
);

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
    dataTest.taskSequencing.nameTask14,
    dataTest.tradeProgram.namaTP2023,
    dataTest.audience.audienceToko2,
    "weekend",
    "naura"
  );
  await FormCreatePage.submitTsm();
});
it("System should be submitted data and leading to Mission Builder page", async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageCreate();
});
it("I add Event Misi", async () => {
  await MissionBuilderPage.createMissionBuilder2();
});
it("setting Misi", async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.verificationPerQuestion();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName14
  );
  await MissionBuilderPage.setCoin14m1(
    dataTest.taskSequencing.coinSub1,
    dataTest.taskSequencing.coinVer1,
    dataTest.taskSequencing.XPSubmission1,
    dataTest.taskSequencing.XPVerification1,
    dataTest.taskSequencing.coinSub2,
    dataTest.taskSequencing.coinVer2,
    dataTest.taskSequencing.XPSubmission2,
    dataTest.taskSequencing.XPVerification2,
    dataTest.taskSequencing.coinSub3,
    dataTest.taskSequencing.coinVer3,
    dataTest.taskSequencing.XPSubmission3,
    dataTest.taskSequencing.XPVerification3
  );
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.waitingPeriod();
  await MissionBuilderPage.setWaitingPeriod(
    dataTest.taskSequencing.waktuTunggu
  );
  await MissionBuilderPage.setMission2();
  await MissionBuilderPage.verificationPerQuestion();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName142
  );
  await MissionBuilderPage.setCoin14m2(
    dataTest.taskSequencing.coinSub1,
    dataTest.taskSequencing.coinVer1,
    dataTest.taskSequencing.coinSub2,
    dataTest.taskSequencing.coinVer2,
    dataTest.taskSequencing.coinSub3,
    dataTest.taskSequencing.coinVer3
  );
  await MissionBuilderPage.simpanSettingMission();
});
it("I save mission builder", async () => {
  await MissionBuilderPage.simpan();
});
it("System should be leading to Task Sequencing page and success save new Tsm", async () => {
  await TaskSequencingPage.page();
});
it("I edit and submit task sequencing", async () => {
  await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp4);
  await FormCreatePage.page();
  await FormCreatePage.pageEdit();
  await FormCreatePage.submitEditTsm();
});
it("System should be update data and leading to Mission Builder page", async () => {
  await MissionBuilderPage.pageEdit();
});
it("I publish mission builder", async () => {
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});
it("System should be leading to Task Sequencing page and success publish Tsm", async () => {
  await TaskSequencingPage.page2();
});
it("I view detail task", async () => {
  await TaskSequencingPage.page2();
  await TaskSequencingPage.detailTask(dataTest.taskSequencing.nameTask14);
  await FormCreatePage.page();
  await FormCreatePage.formDetailPage();
  await FormCreatePage.cekDetail();
});
it("System should be show detail mission", async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageDetail();
});
