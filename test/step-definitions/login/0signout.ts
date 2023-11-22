import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";

describe("[PRINCIPAL] 0a - Success sign out from The Principal SRC website", () => {
  it("I am on The Principal Ayo SRC website", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
  });

  it("I sign out from The Principal Ayo Src website", async () => {
    await MainmenuPage.signOut();
  });

  it("System should be leading to Home page Ayo Src", async () => {
    await LoginPage.welcome();
  });
});
