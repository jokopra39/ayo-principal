import LoginPage from "../../../src/pageobjects/login/login.page";
import MasterGroupPage from "../../../src/pageobjects/imagerecognition/mastergroup.page";
import FormMBGPage from "../../../src/pageobjects/imagerecognition/mastergroupform.page";
import MasterBrandPage from "../../../src/pageobjects/imagerecognition/masterbrand.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import FormMasterBrandPage from "../../../src/pageobjects/imagerecognition/masterbrandform.page";
import TemplatePlanogramPage from "../../../src/pageobjects/imagerecognition/templateplanogram.page";
import FormTemplatePlanogramPage from "../../../src/pageobjects/imagerecognition/templateplanogramform.page";
import loginPage from "../../../src/pageobjects/login/login.page";
const dataTest = require("../../testdata/dte.data");
import { frameHome, frameForm } from "../../helper/commands";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 45. IR - Template Planogram");
allureReporter.addFeature("IR - Template Planogram");

// Scenario Outline: As a user, I can create, edit and delete template planogram
it("I am on the Master Group page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await browser.pause(10000);
  await MainmenuPage.DropdownImageR();
  await MainmenuPage.MasterBrandGroup();
  await frameHome();
});

it("I input form Master Group and submit", async () => {
  await MasterGroupPage.createNew();
  await frameForm();
  await FormMBGPage.group(dataTest.IR.groupName);
  await FormMBGPage.modelGroup(dataTest.IR.modelGroupName);
  await FormMBGPage.model(dataTest.IR.modelName);
  await FormMBGPage.status();
  await FormMBGPage.submitForm();
});

it("System should be able to submit Master Group and leading to Master Group page", async () => {
  await frameForm();
  await MasterGroupPage.expectNewMasterGroupRow1(dataTest.IR.groupName);
});

it("I am on the Master Brand page", async () => {
  await MasterBrandPage.open();
  await LoginPage.acceptCookie();
  await frameForm();
});

it("I input form Master Brand and submit", async () => {
  await MasterBrandPage.createNew();
  await frameForm();
  await FormMasterBrandPage.SKU(dataTest.IR.SKUName1);
  await FormMasterBrandPage.group(dataTest.IR.groupName);
  await FormMasterBrandPage.uploadImage();
  await FormMasterBrandPage.status();
  await FormMasterBrandPage.submitForm();
  await frameForm();
  await MasterBrandPage.expectNewSKURow1(
    dataTest.IR.groupName,
    dataTest.IR.SKUName1
  );

  await MasterBrandPage.createNew();
  await frameForm();
  await FormMasterBrandPage.SKU(dataTest.IR.SKUName2);
  await FormMasterBrandPage.group(dataTest.IR.groupName);
  await FormMasterBrandPage.uploadImage();
  await FormMasterBrandPage.status();
  await FormMasterBrandPage.submitForm();
  await frameForm();
  await MasterBrandPage.expectNewSKURow1(
    dataTest.IR.groupName,
    dataTest.IR.SKUName2
  );
});

it("System should be able to submit Master Brand and leading to Master Brand page", async () => {
  await MasterBrandPage.createNew();
  await frameForm();
  await FormMasterBrandPage.SKU(dataTest.IR.SKUName3);
  await FormMasterBrandPage.group(dataTest.IR.groupName);
  await FormMasterBrandPage.uploadImage();
  await FormMasterBrandPage.status();
  await FormMasterBrandPage.submitForm();
  await frameForm();
  await MasterBrandPage.expectNewSKURow1(
    dataTest.IR.groupName,
    dataTest.IR.SKUName3
  );
});

it("I am on the Template Planogram page", async () => {
  await TemplatePlanogramPage.open();
  await LoginPage.acceptCookie();
  await loginPage.closeSideMenu();
  await frameHome();
});

it("I input form Template Planogram and submit", async () => {
  await TemplatePlanogramPage.createNew();
  await frameForm();
  await FormTemplatePlanogramPage.template(dataTest.IR.templateName);
  await FormTemplatePlanogramPage.group(dataTest.IR.groupName);
  await FormTemplatePlanogramPage.rowxColumn(
    dataTest.IR.row,
    dataTest.IR.column
  );
  await FormTemplatePlanogramPage.addImage();
  await FormTemplatePlanogramPage.competitorBrand(dataTest.IR.competitor);
  await FormTemplatePlanogramPage.status();
  await FormTemplatePlanogramPage.submitForm();
});

it("System should be able to submit Template Planogram and leading to Template Planogram page", async () => {
  await frameForm();
  await TemplatePlanogramPage.expectNewTemplatePlanogramRow1(
    dataTest.IR.templateName
  );
});

it("I edit and delete Template Planogram", async () => {
  await TemplatePlanogramPage.editTemplatePlanogram();
  await FormTemplatePlanogramPage.pageEdit();
  await FormTemplatePlanogramPage.templateEdit(dataTest.IR.templateNameEdit);
  await FormTemplatePlanogramPage.status();
  await FormTemplatePlanogramPage.submitForm();
});

it("System should be delete Template Planogram", async () => {
  await frameForm();
  await TemplatePlanogramPage.deleteTemplatePlanogram();
  await browser.pause(5000);
});

it("I edit and delete Master Brand", async () => {
  await MasterBrandPage.open();
  await LoginPage.acceptCookie();
  await loginPage.closeSideMenu();
  await browser.pause(10000);
  await frameForm();
  await MasterBrandPage.editSKU();
  await FormMasterBrandPage.pageEdit();
  await FormMasterBrandPage.status();
  await FormMasterBrandPage.submitForm();
  await frameForm();
  await MasterBrandPage.deleteSKU();
  await browser.pause(5000);

  await MasterBrandPage.editSKU();
  await FormMasterBrandPage.pageEdit();
  await FormMasterBrandPage.status();
  await FormMasterBrandPage.submitForm();
  await frameForm();
  await MasterBrandPage.deleteSKU();
  await browser.pause(5000);

  await MasterBrandPage.editSKU();
  await FormMasterBrandPage.pageEdit();
  await FormMasterBrandPage.status();
  await FormMasterBrandPage.submitForm();
});

it("System should be delete Master Brand", async () => {
  await frameForm();
  await MasterBrandPage.deleteSKU();
  await browser.pause(5000);
});

it("I edit and delete Master Group", async () => {
  await MasterGroupPage.open();
  await LoginPage.acceptCookie();
  await loginPage.closeSideMenu();
  await browser.pause(10000);
  await frameForm();
  await MasterGroupPage.editMasterGroup();
  await frameForm();
  await FormMBGPage.status();
  await FormMBGPage.submitForm();
});

it("System should be delete Master Group", async () => {
  await frameForm();
  await MasterGroupPage.deleteMasterGroup();
  await browser.pause(5000);
});
