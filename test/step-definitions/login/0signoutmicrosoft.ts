import LoginMicrosoftPage from "../../../src/pageobjects/login/microsoft.page";

describe("[PRINCIPAL] 0b - Sign out from microsoft account", () => {
  it("I am on the microsoft page", async () => {
    await LoginMicrosoftPage.open();
    await LoginMicrosoftPage.microsoftPage();
    await browser.pause(8000);
  });

  it("I sign out account", async () => {
    await LoginMicrosoftPage.signOutMicrosoft();
    await browser.pause(8000);
  });

  it("System will leading to home page office", async () => {
    await LoginMicrosoftPage.officeSignoutPage();
    await browser.pause(5000);
  });
});
