import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";

it("I am on the login page Ayo SRC", async () => {
  await LoginPage.open();
  await LoginPage.welcome();
  await LoginPage.acceptCookie();
  await browser.pause(5000);
});

it("I login internal", async () => {
  await LoginPage.loginapi();
});

it("I input verification code (.*) and submit", async (code) => {
  await VerifikasiPerangkatPage.verif(code);
});

it("System should be leading to Dashboard page and show Account Name (.*)", async (accountname) => {
  await MainmenuPage.dashboard(accountname);
  await browser.pause(8000);
});
