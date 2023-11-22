import LoginPage from "../../../src/pageobjects/login/login.page";
import VerifikasiPerangkatPage from "../../../src/pageobjects/login/verifaccount.page";
import LoginMicrosoftPage from "../../../src/pageobjects/login/microsoft.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 01a");
allureReporter.addFeature("Login internal to The Principal SRC website");

it("I am on the login page Ayo SRC", async () => {
  await LoginPage.open();
  await LoginPage.welcome();
  // await browser.deleteAllCookies()
  // await browser.deleteSession()
  await LoginPage.acceptCookie();
  await browser.pause(5000);
});

it("I login internal with (.*)", async (email) => {
  await LoginPage.loginInternal(email);
});

it("System should be leading to login Microsoft page", async () => {
  await LoginMicrosoftPage.microsoftPage();
  await browser.pause(5000);
});

it("I input (.*) Microsoft and submit", async (pmintlEmail) => {
  await LoginMicrosoftPage.loginMicrosoft(pmintlEmail);
});

it("System shold be leading to Pmiapps page", async () => {
  await LoginMicrosoftPage.pmiappsPage();
});

it("I input (.*) Pmintl", async (password) => {
  await LoginMicrosoftPage.signInPmiapps(password);
  // await browser.pause(15000)
});

it("System sholud be leading to Verification Account", async () => {
  await browser.pause(8000);
  await LoginMicrosoftPage.verifIdentity();
});

it("I click yes then input code (.*)", async (code) => {
  await LoginMicrosoftPage.staySignedInPage();
  await LoginMicrosoftPage.staySinInYes();
  await VerifikasiPerangkatPage.verif(code);
});

it("System should be leading to Dashboard page with (.*)", async (accountname) => {
  await MainmenuPage.dashboard(accountname);
  await browser.pause(5000);
  // await MainmenuPage.signOut()
  // await LoginPage.welcome()
});
