import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import LoginPage from "../../../src/pageobjects/login/login.page";
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 53. Create TSM 1jt Audience");
allureReporter.addFeature("Create TSM 1jt Audience");

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
    dataTest.taskSequencing.nameWithPinUp53,
    dataTest.tradeProgram.namaTP4,
    dataTest.audience.audience53,
    "TPTB-",
    "audience"
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
    dataTest.taskSequencing.coinSubmission53,
    dataTest.taskSequencing.coinVerification53
  );
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.simpan();
  await browser.pause(300000);
  console.log("berhasil create data 1jt audience");
});
