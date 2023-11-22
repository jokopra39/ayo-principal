import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TemplateTugasPage from "../../../src/pageobjects/templatetugas/templatetugas.page";
import FormTemplateTugasPage from "../../../src/pageobjects/templatetugas/formtemplatetugas.page";
import GroupTradeProgramPage from "../../../src/pageobjects/grouptradeprogram/grouptradeprogram.page";
import TradeProgramPage from "../../../src/pageobjects/tradeprogram/tradeprogram";
import AudiencePage from "../../../src/pageobjects/audience/audience.page";
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 17. Create Mission Task Based Response");
allureReporter.addFeature("Success Create Mission Task Based Response");

it("I am on the Template Tugas page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.templateTugas();
  await TemplateTugasPage.page();
});
it("I search a template tugas", async () => {
  await TemplateTugasPage.searchTemplateTugas(
    dataTest.templateTugas.searchByName17
  );
});
it("System should be according data Template Tugas based on search keyword", async () => {
  // await TemplateTugasPage.searchResult(dataTest.templateTugas.searchByName17);
});

it("I view detail template tugas", async () => {
  await TemplateTugasPage.editTemplate();
});

it("System should be show detail template tugas page with type task based response", async () => {
  // await browser.pause(5000)
  await FormTemplateTugasPage.page();
  await FormTemplateTugasPage.pageEdit();
});

//  Scenario Outline: As a user, I can search a group trade program
it("I am on the Group Trade Program page", async () => {
  await MainmenuPage.groupTrade();
  await GroupTradeProgramPage.page();
  await GroupTradeProgramPage.pageList();
});
it("I search a group trade program", async () => {
  await GroupTradeProgramPage.searchGroupTradeProgram(
    dataTest.groupTradeProgram.searchByName2
  );
});
it("System should be according data Group Trade Program based on search keyword", async () => {
  // await GroupTradeProgramPage.searchResult(
  //   dataTest.groupTradeProgram.searchByName2
  // );
});

//  Scenario Outline: As a user, I can create trade program
it("I am on the Trade Program page", async () => {
  await MainmenuPage.tradeProgram();
  await TradeProgramPage.page();
  await TradeProgramPage.pageList();
});
it("I search a Trade Program", async () => {
  await TradeProgramPage.searchTradeProgram(dataTest.tradeProgram.namaTP4);
});
it("System should be according data Trade Program based on search keyword", async () => {
  // await TradeProgramPage.searchResult(dataTest.tradeProgram.namaTP4);
});

// Scenario Outline: As a user, I can search a audience
it("I am on the Audience page", async () => {
  await MainmenuPage.audience();
  await AudiencePage.page();
  await AudiencePage.pageList();
});
it("I search a audience", async () => {
  await AudiencePage.searchAudience(dataTest.audience.audienceToko);
});
it("System should be according data Audience based on search keyword", async () => {
  // await AudiencePage.searchResult(dataTest.audience.audienceToko);
});

//  Scenario Outline: As a user, I can create task sequencing
it("I am on the Task Sequencing page", async () => {
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});
it("I create task sequencing and click button Submit", async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.taskSequencing.nameTask17,
    dataTest.tradeProgram.namaTP4,
    dataTest.audience.audienceToko,
    "TPTB-",
    "HWKND-"
  );
  await FormCreatePage.submitTsm();
});
it("System should be submitted data and leading to Mission Builder page", async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageCreate(dataTest.taskSequencing.nameTask17);
});

//  Scenario Outline: As a user, I can setting Misi without Pin Up Mission
it("I add Event Misi", async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageCreate();
  await MissionBuilderPage.createMissionBuilder();
});
it("setting Misi without Pin Up Mission", async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName17
  );
  await MissionBuilderPage.setCoin(
    dataTest.taskSequencing.coinSubmission17,
    dataTest.taskSequencing.coinVerification17
  );
  await MissionBuilderPage.setXP(
    dataTest.taskSequencing.XPSubmission42,
    dataTest.taskSequencing.XPVerification42
  );
  await MissionBuilderPage.simpanSettingMission();
});
it("I save mission builder", async () => {
  await MissionBuilderPage.simpan();
});
it("System should be leading to Task Sequencing page and success save new Tsm", async () => {
  await TaskSequencingPage.page();
});

//  Scenario Outline: As a user, I can publish mission IR
it("I edit and submit task sequencing", async () => {
  await TaskSequencingPage.page();
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
  // await MissionBuilderPage.page()
  await MissionBuilderPage.pageEdit();
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});
it("System should be leading to Task Sequencing page and success publish Tsm", async () => {
  await TaskSequencingPage.page();
});
