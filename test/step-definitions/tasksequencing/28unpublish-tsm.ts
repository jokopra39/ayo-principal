import { Given, When, Then, And } from "@cucumber/cucumber";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page";
const dteData = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 28. Unpublish TSM");
allureReporter.addFeature("Unpublish TSM");

//  Scenario Outline: As a user, I can unpublish TSM
it("I am on the Task Sequencing page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});
it("I search a Task Sequencing", async () => {
  await browser.pause(10000);
  await TaskSequencingPage.searchTaskSequencing(
    dteData.taskSequencing.searchByName28
  );
});
it("System should be according data based on search keyword", async () => {
  await TaskSequencingPage.searchResult(dteData.taskSequencing.searchByName28);
});

it("I edit a TSM with status Aktif and submit task sequencing", async () => {
  await TaskSequencingPage.editStatus(dteData.taskSequencing.statusAktif);
  await FormCreatePage.page();
  await FormCreatePage.pageEdit();
  await FormCreatePage.submitEditTsm();
});
it("System should be leading to Mission Builder page", async () => {
  await MissionBuilderPage.pageEdit();
});

it("I click button Unpublish mission builder", async () => {
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});

it("System should be able to unpublish TSM, and leading to Task Sequencing page with status changed to Tidak Aktif", async () => {
  await TaskSequencingPage.page();
});
