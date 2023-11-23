import LoginPage from "../../../src/pageobjects/login/login.page";
import CallToActionPage from "../../../src/pageobjects/calltoaction/cta.page";
import FormCTAPage from "../../../src/pageobjects/calltoaction/formcta.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
const dataTest = require("../../data-test/dte.data");

// Scenario Outline: As a user, I can create, read, update and delete CTA
describe("[PRINCIPAL] 59. CRUD CTA", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
  });

  it("I am on Call To Action page", async () => {
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
    await MainmenuPage.cta();
    await browser.pause(10000);
    await CallToActionPage.page();
  });

  it("I click button Tambah", async () => {
    await CallToActionPage.createCTA();
  });

  it("System should be leading to form create Call To Action", async () => {
    await FormCTAPage.page();
  });

  it("I am on form create Call To Action page", async () => {
    await FormCTAPage.pageCreate();
  });

  it("I input form and submit", async () => {
    await FormCTAPage.createCTA(
      dataTest.cta.nama,
      dataTest.cta.deskripsi,
      dataTest.cta.mulai,
      dataTest.cta.selesai
    );
    await FormCTAPage.selectZone(["ZONENORTHSUM"]);
    await FormCTAPage.selectTargetAudience();
    await FormCTAPage.switchStatus();
    await FormCTAPage.submitCTA();
  });

  it("System should be able to submit form Call To Action and leading to Call To Action page", async () => {
    await CallToActionPage.pageList();
    await CallToActionPage.expectNewCTA(dataTest.cta.nama);
  });

  it("I edit and delete CTA", async () => {
    await CallToActionPage.searchCTA(dataTest.cta.nama);
    await browser.pause(5000);
    await CallToActionPage.editCTA();
    await FormCTAPage.page();
    await FormCTAPage.pageEdit();
    await FormCTAPage.editCTA(dataTest.cta.namaEdit);
    await FormCTAPage.submitCTA();
    await browser.pause(5000);
    await CallToActionPage.pageList();
    await CallToActionPage.expectNewCTAEdited(dataTest.cta.namaEdit,"status");
    await CallToActionPage.searchCTA(dataTest.cta.namaEdit);
    await browser.pause(6000);
    await CallToActionPage.deleteCTA();
  });

  it("System should be delete CTA", async () => {
    await CallToActionPage.searchCTA(dataTest.cta.namaEdit);
    await browser.pause(5000);
  });
});
