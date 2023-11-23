import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import AudiencePage from "../../../src/pageobjects/audience/audience.page";
import FormAudiencePage from "../../../src/pageobjects/audience/formaudience.page";
const dataTest = require("../../data-test/dte.data");

//  Scenario Outline: As a user, I can create and import Audience
describe("[PRINCIPAL] 57. Create Audience Mitra Non Personalize", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Audience page", async () => {
    await MainmenuPage.dashboard();
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
    await FormAudiencePage.createImportMitra(dataTest.audience.namaGrupMitra);
    // await FormAudiencePage.sendImportFile()
  });

  it("System should be able submit form Audience and leading to Audience page", async () => {
    await AudiencePage.page();
  });

  it("I am on the Audience list page", async () => {
    await AudiencePage.pageList();
  });

  it("I search an audience", async () => {
    await AudiencePage.searchAudience(dataTest.audience.namaGrupMitra);
  });

  it("System should be according data Audience based on search keyword", async () => {
    await AudiencePage.searchResult(dataTest.audience.namaGrupMitra);
  });
});
