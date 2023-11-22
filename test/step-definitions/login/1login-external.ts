import LoginPage from "../../../src/pageobjects/login/login.page";
import VerifikasiPerangkatPage from "../../../src/pageobjects/login/verifaccount.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 01b");
allureReporter.addFeature("Login external to The Principal SRC website");

it("I am on the login page Ayo SRC", async () => {
  await LoginPage.open();
  await LoginPage.welcome();
  await LoginPage.acceptCookie();
  await browser.pause(5000);
});

it("I login internal with (.*) and (.*)", async (email, password) => {
  await LoginPage.loginExternal(email, password);
  await browser.pause(5000);
});

// it('System will leading to Verification Account page for (.*)', async (email) => {
//     await VerifikasiPerangkatPage.verifAccountPage(email)
// });

// it('I input verification code (.*) and submit', async (code) => {
//     await VerifikasiPerangkatPage.verif(code)
//     await browser.pause(20000)
// });

it("System should be leading to Dashboard page and show Account Name (.*)", async (accountname) => {
  await MainmenuPage.dashboard(accountname);
  await browser.pause(5000);
});
