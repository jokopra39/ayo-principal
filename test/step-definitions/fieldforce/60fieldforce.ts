import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import FieldForcePage from "../../../src/pageobjects/fieldforce/fieldforce.page";
import FormFieldForcePage from "../../../src/pageobjects/fieldforce/formfieldforce.page";
const dataTest = require("../../data-test/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 60. CRUD Field Force");
allureReporter.addFeature("CRUD Field Force");
// Scenario Outline: As a user, I can create, read, update and delete field force
it("I am on Field Force page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.fieldForce();
  await browser.pause(30000);
  await FieldForcePage.page();
  await FieldForcePage.pageList();
});

it("I click button Tambah", async () => {
  await FieldForcePage.createFF();
});

it("System should be leading to form create Field Force", async () => {
  await FormFieldForcePage.page();
});

it("I am on form create Field Force page", async () => {
  await FormFieldForcePage.pageCreate();
});

it("I input form and submit", async () => {
  await FormFieldForcePage.createFF(
    dataTest.fieldForce.name,
    dataTest.fieldForce.username
  );
  await FormFieldForcePage.submitFF();
});

it("System should be able to submit form Field Force and leading to Field Force page", async () => {
  await FieldForcePage.page();
  await FieldForcePage.pageList();
  await FieldForcePage.searchFF(dataTest.fieldForce.name);
  await FieldForcePage.expectNewFF(
    dataTest.fieldForce.name
    // dataTest.fieldForce.classification,
    // dataTest.fieldForce.status
  );
});

it("I edit and delete Field Force", async () => {
  await FieldForcePage.open();
  await LoginPage.acceptCookie();
  await browser.pause(10000);
  await FieldForcePage.page();
  await FieldForcePage.pageList();
  await FieldForcePage.searchFF(dataTest.fieldForce.name);
  await FieldForcePage.searchResult(dataTest.fieldForce.name);
  await FieldForcePage.editFF();
  await FormFieldForcePage.page();
  await FormFieldForcePage.pageEdit();
  await FormFieldForcePage.editFF();
  await FormFieldForcePage.submitFF();
  // await FormFieldForcePage.submitFF2()
  await FieldForcePage.page();
  await FieldForcePage.pageList();
  await FieldForcePage.searchFF(dataTest.fieldForce.name);
  await FieldForcePage.expectNewFFEdited(
    dataTest.fieldForce.name
    // dataTest.fieldForce.classificationEdit,
    // dataTest.fieldForce.statusEdit
  );
  await FieldForcePage.deleteFF();
});

it("System should be delete Field Force", async () => {
  await FieldForcePage.searchFF(dataTest.fieldForce.name);
  await browser.pause(5000);
});
