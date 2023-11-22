import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TradeProgramPage from "../../../src/pageobjects/tradeprogram/tradeprogram";
import FormTradeProgramPage from "../../../src/pageobjects/tradeprogram/formtradeprogram.page";
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 98. Edit Budget Trade Program yang Sedang Berjalan"
);
allureReporter.addFeature("Edit Budget Trade Program yang Sedang Berjalan");

it("I am on the Trade Program page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.tradeProgram();
  await TradeProgramPage.page();
});
it("I click button Tambah", async () => {
  await TradeProgramPage.createTradeProgram();
});
it("System should be leading to Buat Trade Program page", async () => {
  await FormTradeProgramPage.page();
});
it("I am on the Buat Trade Program page", async () => {
  await FormTradeProgramPage.page();
});
it("I input form and submit", async () => {
  await FormTradeProgramPage.createTP(
    dataTest.tradeProgram.namaGTP,
    dataTest.tradeProgram.namaSGPT,
    dataTest.tradeProgram.inputNamaTP,
    dataTest.tradeProgram.inputDANATP
  );
  await FormTradeProgramPage.submit();
});
it("System should be able to submit Trade Program and leading to Trade Program page", async () => {
  await TradeProgramPage.page2();
});

it("I am on the Task Sequencing page", async () => {
  await TaskSequencingPage.open();
  await LoginPage.acceptCookie();
  await TaskSequencingPage.page2();
});
it("I create task sequencing and click button Submit", async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.taskSequencing.nameTSM98,
    dataTest.tradeProgram.inputNamaTP,
    dataTest.audience.audienceToko2
  );
  await FormCreatePage.submitTsm();
});
it("System should be submitted data and leading to Mission Builder page", async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageCreate();
});
it("I add Event Misi", async () => {
  await MissionBuilderPage.createMissionBuilder();
});
it("setting Misi and save mission builder", async () => {
  await MissionBuilderPage.setMission();
  //await MissionBuilderPage.verificationPerQuestion();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName4
  );
  await MissionBuilderPage.setCoin98(
    dataTest.taskSequencing.coinSubmission98,
    dataTest.taskSequencing.coinVerification98
  );
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.simpan();
});
it("System should be leading to Trade Program Page", async () => {
  await TradeProgramPage.open();
  await LoginPage.acceptCookie();
  await TradeProgramPage.page2();
});
it("I search and edit Budget Trade Program", async () => {
  await TradeProgramPage.searchTradeProgram(dataTest.tradeProgram.inputNamaTP);
  await TradeProgramPage.editTP();
  await FormTradeProgramPage.page();
  await FormTradeProgramPage.editDana(dataTest.tradeProgram.editDANATP1);
  await FormTradeProgramPage.submit1();
  await FormTradeProgramPage.editDana(dataTest.tradeProgram.editDANATP2);
  await FormTradeProgramPage.submit1();
});
it("System should be edit Budget Trade Program and leading to trade Program page", async () => {
  await TradeProgramPage.page2();
});
it("I am on the Task Sequencing page2", async () => {
  await TaskSequencingPage.open();
  await LoginPage.acceptCookie();
  await TaskSequencingPage.page2();
});
it("I create task sequencing and click button Submit2", async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.taskSequencing.nameTSM98,
    dataTest.tradeProgram.inputNamaTP,
    dataTest.audience.audienceToko2
  );
  await FormCreatePage.submitTsm();
});
it("System should be submitted data and leading to Mission Builder page2", async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageCreate();
});
it("I add Event Misi2", async () => {
  await MissionBuilderPage.createMissionBuilder();
});
it("setting Misi2", async () => {
  await MissionBuilderPage.setMission();
  //await MissionBuilderPage.verificationPerQuestion();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName4
  );
  await MissionBuilderPage.setCoin98(
    dataTest.taskSequencing.coinSubmission98,
    dataTest.taskSequencing.coinVerification98
  );
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
});
it("I save mission builder2", async () => {
  await MissionBuilderPage.simpan();
});
it("System should be leading to Task Sequencing page and success save new Tsm2", async () => {
  await TaskSequencingPage.page2();
});

it("I edit and submit task sequencing2", async () => {
  await TaskSequencingPage.editTask();
  await FormCreatePage.page();
  await FormCreatePage.pageEdit();
  await FormCreatePage.submitEditTsm();
});
it("System should be update data and leading to Mission Builder page2", async () => {
  await MissionBuilderPage.pageEdit();
});
it("I publish mission builder2", async () => {
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});
it("System should be leading to Task Sequencing page and success publish Tsm", async () => {
  await TaskSequencingPage.page2();
});
