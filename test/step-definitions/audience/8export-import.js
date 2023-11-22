import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import AudiencePage from "../../../src/pageobjects/audience/audience.page";
import FormAudiencePage from "../../../src/pageobjects/audience/formaudience.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 08. export-import-Audience");
allureReporter.addFeature("Export import Audience");

//  Scenario Outline: As a user, I can create and import Audience
it("I am on the Audience page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.audience();
  await AudiencePage.page();
});
it("I am click button Buat", async () => {
  await AudiencePage.pageList();
  await AudiencePage.createAudience();
});

it("System should be leading to form create Audience", async () => {
  await FormAudiencePage.page();
});

it("I am on the from create Audience page", async () => {
  await FormAudiencePage.pageCreate();
});

it("I input form and also import xls Audience", async () => {
  await FormAudiencePage.createImport(
    dataTest.audience.namaGrup,
    dataTest.audience.minAudience,
    dataTest.audience.maxAudience
  );
  await FormAudiencePage.importAudience();
  await FormAudiencePage.importFile();
  await FormAudiencePage.sendImportFile();
});

it("System should be able submit form Audience and leading to Audience page", async () => {
  await AudiencePage.page();
});

//  Scenario Outline: As a user, I can edit and export Audience
it("I am on the Audience list page", async () => {
  await AudiencePage.pageList();
});

it("I search an audience", async () => {
  await AudiencePage.searchAudience(dataTest.audience.namaGrup);
});
it("System should be according data Audience based on search keyword", async () => {
  await AudiencePage.searchResult(dataTest.audience.namaGrup);
});

it("I click button edit an Audience", async () => {
  await AudiencePage.editAudience();
});

it("System should be leading to form edit Audience page", async () => {
  await FormAudiencePage.page();
  await FormAudiencePage.pageEdit();
});

it("I am click button Export template", async () => {
  await FormAudiencePage.exportFile();
});

it("System should be able to download file export Audience", async () => {
  await FormAudiencePage.page();
  await browser.pause(6000);
});
