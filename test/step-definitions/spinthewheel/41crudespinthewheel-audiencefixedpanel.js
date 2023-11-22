import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import LoginPage from "../../../src/pageobjects/login/login.page";
import SpinTheWheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import FormSpinTheWheelPage from "../../../src/pageobjects/spinthewheel/form.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 41. CRUD Spin The Wheel (Audience Fixed Panel) dan Export"
);
allureReporter.addFeature(
  "CRUD Spin The Wheel (Audience Fixed Panel) dan Export"
);

//  Scenario Outline: As a user, I can create and export Spin The Wheel - Audience Fixed Panel
it("I am on the Spin The Wheel page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();
  await SpinTheWheelPage.page();
});

it("I click button Tambah", async () => {
  await SpinTheWheelPage.createNew();
});

it("System should be leading to form create Spin The Wheel", async () => {
  await FormSpinTheWheelPage.page();
});

it("I input form tab Spin The Wheel and submit", async () => {
  await FormSpinTheWheelPage.name(dataTest.spinTheWheel.namaProgramSTHFP);
  await FormSpinTheWheelPage.tradeProgram(dataTest.spinTheWheel.tradeProgramFP);
  await FormSpinTheWheelPage.date();
});

it("System should be leading to tab Audience", async () => {
  await SpinTheWheelPage.search(dataTest.spinTheWheel.namaProgramSTHFP);
  await SpinTheWheelPage.editSTW();
  await FormSpinTheWheelPage.viewTabAudience();
});

it("I input form tab Audience and submit", async () => {
  await FormSpinTheWheelPage.fixedPanel();
});

it("System should be leading to tab Pengaturan Mekanisme", async () => {
  await FormSpinTheWheelPage.viewTabPengaturanMekanisme();
});

it("I input form tab Pengaturan Mekanisme and submit", async () => {
  await FormSpinTheWheelPage.pengaturanSTWFP(
    dataTest.spinTheWheel.frekBelanjaFP,
    dataTest.spinTheWheel.frekRewardFP,
    dataTest.spinTheWheel.minTransaksiFP,
    dataTest.spinTheWheel.limitSpinFP,
    dataTest.spinTheWheel.jmlVarKoinFP,
    dataTest.spinTheWheel.coin1FP,
    dataTest.spinTheWheel.slice1FP,
    dataTest.spinTheWheel.prob1FP,
    dataTest.spinTheWheel.coin2FP,
    dataTest.spinTheWheel.slice2FP,
    dataTest.spinTheWheel.prob2FP
  );
});

it("System should be leading to tab Preview", async () => {
  await FormSpinTheWheelPage.viewTabPreview();
});

it("I click button Publish", async () => {
  await FormSpinTheWheelPage.publish(dataTest.spinTheWheel.previewFP);
});

it("System should be leading to Spin The Wheel page and success publish Spin The Wheel", async () => {
  await SpinTheWheelPage.pageList();
  await SpinTheWheelPage.search(dataTest.spinTheWheel.namaProgramSTHFP);
  await SpinTheWheelPage.exportSTW();
  await browser.pause(7000);
});

it("I delete Spin The Wheel", async () => {
  await SpinTheWheelPage.deleteSTW();
});

it("System should be delete Spin The Wheel", async () => {
  await SpinTheWheelPage.search(dataTest.spinTheWheel.namaProgramSTHFP);
  await browser.pause(10000);
});
