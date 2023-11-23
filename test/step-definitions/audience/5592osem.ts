import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import OsemPage from "../../../src/pageobjects/audience/osem.page";
import { frameHome, frameForm } from "../../../src/helper/commands";

describe("[PRINCIPAL] 5592. CRUD Audience on OSEM", () => {
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
    await OsemPage.inputNamaGroup("Fixed Panel Retailer tia-09062023");
    await OsemPage.inputSelectBoxSingle(0, "Retailer");
    await OsemPage.inputSelectBoxMultiple(1, ["DTE"]);
    await OsemPage.inputSelectBoxMultiple(2, ["B2B Order Value"]);
    await OsemPage.clickRadioButton("fixed-panel");
    await OsemPage.importCsvFixedPanel();
    //====================================
    await OsemPage.clickButtonCheck();
    await OsemPage.clickButtonExport();
    await OsemPage.clickButtonSimpan();
    // await OsemPage.inputBusinessType("Retailer");
    // await OsemPage.inputAllField(0, ["Semua"]);
    // await OsemPage.inputAllField(1, ["Semua"]);
    // await OsemPage.clickRadioButton("population-blast");
    // await OsemPage.inputAllField(2, ["Semua"]);
    // await OsemPage.inputAllField(3, ["Semua"]);
    // await OsemPage.inputAllField(4, ["Semua"]);
    // await OsemPage.inputAllField(5, ["Semua"]);
    // await OsemPage.inputPanelDataRetailer(0, "Retailer User Profile");
    // await OsemPage.inputPanelDataSrcClassification(1, "SRC Classification");
  });

 // it("I am on form create Audience Baru on Fixed Panel page, input and submit data", async function () {
    // await frameForm();
    // await OsemPage.inputNamaGroup("Fixed Panel Retailer tia-09062023");
    // await OsemPage.inputBusinessType(["Retailer"]);
    // await OsemPage.inputAllField(0, ["DTE Retailer"]);
    // await OsemPage.inputAllField(1, ["B2B Increase"]);
    // await OsemPage.clickRadioButton("fixed-panel");
    // await OsemPage.importCsvFixedPanel();
  //});

});
