import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import formKoinPotonganBelanjaPage from "../../../src/pageobjects/koinpotonganbelanja/formkoinpotonganbelanja.page";
import koinPotonganBelanjaPage from "../../../src/pageobjects/koinpotonganbelanja/koinpotonganbelanja.page";
const dataTest = require("../../data-test/dte.data");

describe("[PRINCIPAL] 5032. Create Koin Potongan Belanja (Batasan Kategori)", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Koin Potongan Belanja page", async () => {
    await MainmenuPage.DropdownCN();
    await MainmenuPage.KoinPotonganBelanja();
  });

  it("I click button Tambah", async () => {
    await koinPotonganBelanjaPage.Tambah();
  });

  // it("System should be leading to form Buat Koin Potongan Belanja page", async () => {});

  // it("I am on the form Buat Koin Potongan Belanja page", async () => {});

  it("I input form Detail Koin Potongan Belanja and submit", async () => {
    await formKoinPotonganBelanjaPage.createKPK(
      dataTest.coinpotonganbelanja.inputNamaBK,
      dataTest.coinpotonganbelanja.inputCariGTP2
    );
  });

  // it("System should be able to submit and leading to Koin Potongan Belanja page", async () => {});

  it("I search and click button edit Koin Potongan Belanja", async () => {
    await koinPotonganBelanjaPage.search(
      dataTest.coinpotonganbelanja.inputNamaBK
    );
    await koinPotonganBelanjaPage.Edit();
  });

  // it("System should be leading to Ubah Koin Potongan Belanja page", async () => {});

  it("I input form and submit", async () => {
    await formKoinPotonganBelanjaPage.formPanelMitra(
      dataTest.coinpotonganbelanja.inputCariMitra
    );
  });

  // it("System should be able to submit form and leading to Koin Potongan Belanja page", async () => {});
});
