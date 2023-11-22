import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import SpinTheWheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import FormSpinTheWheelPage from "../../../src/pageobjects/spinthewheel/form.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 41. CRUD Spin the Wheel (Audience Population Blast)"
);
allureReporter.addFeature("CRUD Spin the Wheel (Audience Population Blast)");

//  Scenario Outline: As a user, I can create Spin The Wheel - Audience Population Blast
it("I am on the Spin The Wheel page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();
});

it("I click button Tambah", async () => {
  await SpinTheWheelPage.createNew();
});

it("System should be leading to form create Spin The Wheel", async () => {
  await FormSpinTheWheelPage.page();
});

it("I input form tab Spin The Wheel and submit", async () => {
  await FormSpinTheWheelPage.name(dataTest.spinTheWheel.namaProgramSTHPB);
  await FormSpinTheWheelPage.tradeProgram(dataTest.spinTheWheel.tradeProgramPB);
  await FormSpinTheWheelPage.date();
});

it("System should be leading to tab Audience", async () => {
  await SpinTheWheelPage.pageList();
  await SpinTheWheelPage.search(dataTest.spinTheWheel.namaProgramSTHPB);
  await SpinTheWheelPage.editSTW();
  await FormSpinTheWheelPage.viewTabAudience();
});

it("I input form tab Audience and submit", async () => {
  await FormSpinTheWheelPage.populationBlast();
});

it("System should be leading to tab Pengaturan Mekanisme", async () => {
  await FormSpinTheWheelPage.viewTabPengaturanMekanisme();
});

it("I input form tab Pengaturan Mekanisme and submit", async () => {
  await FormSpinTheWheelPage.pengaturanSTWPB(
    dataTest.spinTheWheel.frekBelanjaPB,
    dataTest.spinTheWheel.frekRewardPB,
    dataTest.spinTheWheel.minTransaksiPB,
    dataTest.spinTheWheel.limitSpinPB,
    dataTest.spinTheWheel.jmlVarKoinPB,
    dataTest.spinTheWheel.coin1PB,
    dataTest.spinTheWheel.slice1PB,
    dataTest.spinTheWheel.prob1PB,
    dataTest.spinTheWheel.coin2PB,
    dataTest.spinTheWheel.slice2PB,
    dataTest.spinTheWheel.prob2PB,
    dataTest.spinTheWheel.coin3PB,
    dataTest.spinTheWheel.slice3PB,
    dataTest.spinTheWheel.prob3PB
  );
});

it("System should be leading to tab Preview", async () => {
  await FormSpinTheWheelPage.viewTabPreview();
});

it("I click button Publish", async () => {
  await FormSpinTheWheelPage.publish(dataTest.spinTheWheel.previewPB);
});

it("System should be leading to Spin The Wheel page and success publish Spin The Wheel", async () => {
  await SpinTheWheelPage.pageList();
  await SpinTheWheelPage.search(dataTest.spinTheWheel.namaProgramSTHPB);
  await SpinTheWheelPage.exportSTW();
  await browser.pause(7000);
});

it("I delete Spin The Wheel", async () => {
  await SpinTheWheelPage.deleteSTW();
});

it("System should be delete Spin The Wheel", async () => {
  await SpinTheWheelPage.search(dataTest.spinTheWheel.namaProgramSTHPB);
  await browser.pause(10000);
});
