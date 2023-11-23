import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import OsemPage from "../../../src/pageobjects/audience/osem.page";
import { frameHome, frameForm } from "../../../src/helper/commands";

describe("[PRINCIPAL] 5592. Create Population Blast Retailer - Fixed panel", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
  });
  it("I am on Audience Baru on osem page", async function () {
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
    await MainmenuPage.OsemAudience();
    await frameHome();
  });

  it("I click button Tambah", async function () {
    await OsemPage.buttonBuat();
  });

  it("I am on form create Audience Baru on Population Blast page, input and submit data", async function () {
    await frameForm();
    await OsemPage.inputNamaGroup("Fixed Panel Retailer tia-082023");
    await OsemPage.inputSelectBoxSingle(0, "Retailer");
    await OsemPage.inputSelectBoxMultiple(1, ["DTE"]);
    await OsemPage.inputSelectBoxMultiple(2, ["B2B Order Value"]);
    await OsemPage.clickRadioButton("fixed-panel");
    await OsemPage.importCsvFixedPanel();
    //====================================
    await OsemPage.clickButtonCheck();
    await OsemPage.clickButtonExport();
    await OsemPage.clickButtonSimpan();
  });
});