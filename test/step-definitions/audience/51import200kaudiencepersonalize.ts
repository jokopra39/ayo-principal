import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import AudiencePage from "../../../src/pageobjects/audience/audience.page";
import FormAudiencePage from "../../../src/pageobjects/audience/formaudience.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 51. Import 200k Audience Personalize");
allureReporter.addFeature("Import 200k Audience Personalize");

//  Scenario Outline: As a user, I can create and import Audience
it("I am on the tab Personalize Audience page", async () => {
  await LoginPage.open();
  //await browser.pause(3000)
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.audience();
  await AudiencePage.page();
});

it("I am click button Buat", async () => {
  await AudiencePage.pageList();
  await AudiencePage.goToPersonalize();
  await AudiencePage.createAudience();
});

it("System should be leading to form create Audience", async () => {
  // await FormAudiencePage.page()
});

it("I am on the from create Audience page", async () => {
  await FormAudiencePage.pageCreatePersonalize();
});

it("I input form and also import csv Audience", async () => {
  await FormAudiencePage.createImportPersonalize200(
    dataTest.audience.namaGrupPerso200
  );
});

it("System should be able submit form Audience and leading to Audience page", async () => {
  await AudiencePage.page();
});

it("I am on the Audience list page", async () => {
  await AudiencePage.goToPersonalize();
  await AudiencePage.pageList();
});

it("I search an audience", async () => {
  await AudiencePage.searchAudience(dataTest.audience.namaGrupPerso200);
});

it("System should be according data Audience based on search keyword", async () => {
  await AudiencePage.searchResult(dataTest.audience.namaGrupPerso200);
});
