import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import AudiencePage from "../../../src/pageobjects/audience/audience.page";
import FormAudiencePage from "../../../src/pageobjects/audience/formaudience.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 52. Import 1000k Audience Non Personalize"
);
allureReporter.addFeature("Import 1000k Audience Non Personalize");

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
  await FormAudiencePage.createImport1000(dataTest.audience.namaGrup1000);
  // await FormAudiencePage.sendImportFile()
});

it("System should be able submit form Audience and leading to Audience page", async () => {
  await AudiencePage.page();
});

it("I am on the Audience list page", async () => {
  await AudiencePage.pageList();
});

it("I search an audience", async () => {
  await AudiencePage.searchAudience(dataTest.audience.namaGrup1000);
});

it("System should be according data Audience based on search keyword", async () => {
  await AudiencePage.searchResult(dataTest.audience.namaGrup1000);
});
