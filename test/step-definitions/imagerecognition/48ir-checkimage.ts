import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import LoginPage from "../../../src/pageobjects/login/login.page";
import CheckImagePage from "../../../src/pageobjects/imagerecognition/checkimage.page";
import FormCheckImagePage from "../../../src/pageobjects/imagerecognition/checkimageform.page";
const dataTest = require("../../data-test/dte.data");

// Scenario Outline: As a user, I can create, edit and delete template planogram
describe("[PRINCIPAL] 48. IR - Check Image", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Check Image page", async () => {
    await browser.pause(10000);
    await MainmenuPage.DropdownImageR();
    await MainmenuPage.CheckImagePlanogram();
    await CheckImagePage.page();
  });

  it("I click button Tambah", async () => {
    await CheckImagePage.createNew();
  });

  it("System should be leading to form create Check Image", async () => {
    await FormCheckImagePage.page();
  });

  it("I am on the form create Check Image page", async () => {
    await FormCheckImagePage.pageCreate();
  });

  it("I input form and submit", async () => {
    await FormCheckImagePage.template(dataTest.IR.templateNameCheckImage);
    await FormCheckImagePage.group(dataTest.IR.groupNameCheckImage);
    await FormCheckImagePage.addImage();
    await FormCheckImagePage.submitForm();
    await browser.pause(5000);
  });

  it("System should be able to submit Check Image and leading to Check Image page", async () => {
    await CheckImagePage.pageList();
    await CheckImagePage.expectNewCheckImageRow1(
      dataTest.IR.templateNameCheckImage,
      dataTest.IR.statusReq
    );
    await browser.pause(5000);
  });

  it("status is changed from requesting to done", async () => {
    await CheckImagePage.open();
    await LoginPage.acceptCookie();
    await browser.pause(10000);
    await CheckImagePage.page();
    await CheckImagePage.expectNewCheckImageRow1(
      dataTest.IR.templateNameCheckImage,
      dataTest.IR.statusDone
    );
    await CheckImagePage.clickCheckImageRow1();
  });

  it("System should be show image check result", async () => {
    await FormCheckImagePage.pageDetail();
  });
});
