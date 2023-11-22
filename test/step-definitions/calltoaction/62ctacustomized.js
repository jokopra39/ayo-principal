import LoginPage from "../../../src/pageobjects/login/login.page";
import CallToActionPage from "../../../src/pageobjects/calltoaction/cta.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
const dataTest = require("../../data-test/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 62. CTA Customized");
allureReporter.addFeature("CTA Customized");

// Scenario Outline: As a user, I can create, read, update and delete CTA
it("I am on Call To Action page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.cta();
  await browser.pause(10000);
  await CallToActionPage.page();
});

it("I click tab Customized and import CTA", async () => {
  await CallToActionPage.openTabCustomized();
  await CallToActionPage.importCustomized();
});

it("System should be able submit file", async () => {
  await CallToActionPage.importCustomized();
  await browser.pause(5000);
  await CallToActionPage.deleteCTA();
});
