import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import PrincipalNotesforRetailerPage from "../../../src/pageobjects/principalnotesforretailer/principalnotesforretailer.page";
import FormPrincipalNotesforRetailerPage from "../../../src/pageobjects/principalnotesforretailer/formprincipalnotesforretailer.page";
const dataTest = require("../../data-test/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 61. CRUD Principal Notes for Retailer");
allureReporter.addFeature(
  "As a user, I can create, read, update and delete Field Force"
);
// Scenario Outline: As a user, I can create, read, update and delete field force
it("I am on Daftar Notes untuk Retailer page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.principalNotesForR();
  await PrincipalNotesforRetailerPage.page();
  await PrincipalNotesforRetailerPage.pageList();
});

it("I click button Tambah", async () => {
  await PrincipalNotesforRetailerPage.createNotesPrincipal();
});

it("System should be leading to form Create Notes", async () => {
  await FormPrincipalNotesforRetailerPage.page();
});

it("I am on form Create Notes page", async () => {
  await FormPrincipalNotesforRetailerPage.pageCreate();
});

it("I input form and submit", async () => {
  await FormPrincipalNotesforRetailerPage.createNotes(
    dataTest.notes.name,
    dataTest.notes.desc
  );
  await FormPrincipalNotesforRetailerPage.submitNotes();
});

it("System should be able to submit form and leading to Daftar Notes untuk Retailer page", async () => {
  await browser.pause(10000);
  await PrincipalNotesforRetailerPage.page();
});

it("I edit and delete Notes untuk Retailer", async () => {
  await PrincipalNotesforRetailerPage.editNotesPrincipal();
  await browser.pause(30000);
  await FormPrincipalNotesforRetailerPage.pageEdit();
  await FormPrincipalNotesforRetailerPage.editNotes();
  await FormPrincipalNotesforRetailerPage.submitNotes();
  await browser.pause(10000);
  await PrincipalNotesforRetailerPage.page();
});

it("System should be delete Notes untuk Retailer", async () => {
  await PrincipalNotesforRetailerPage.deleteNotesPrincipal();
  await browser.pause(3000);
});
