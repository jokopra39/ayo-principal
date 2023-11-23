import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import flyingButtonReguler from "../../../src/pageobjects/spanduk_online/04flying-button-reguler.page";

describe("[PRINCIPAL] 04. Flying Button Reguler", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Spanduk Online page", async () => {
    await MainmenuPage.spandukOnline();
  });

  it("I click button Buat", async () => {
    await spandukOnlinePage.tombolBuat();
  });

  it("System should be leading to Buat Spanduk Online page", async () => {
    await flyingButtonReguler.Page();
  });

  it("I am on the Buat Spanduk Online page", async () => {
    await flyingButtonReguler.formPage();
  });

  it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
    await flyingButtonReguler.namaSpanduk(nama_spanduk);
  });

  it("System should be input Nama Spanduk", async () => {
    await flyingButtonReguler.Page();
  });

  it("I select date in Sampai", async () => {
    await flyingButtonReguler.dateSampai();
  });

  it("System should be select date", async () => {
    await flyingButtonReguler.Page();
  });

  it("I insert Banner in TEMPLATE F", async () => {
    await flyingButtonReguler.insertGambarBanner();
  });

  it("System should be insert Banner", async () => {
    await flyingButtonReguler.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await flyingButtonReguler.grupPenggunaCustomer();
  });

  it("System should be click Customer", async () => {
    await flyingButtonReguler.Page();
  });

  it("I click Flying Button in Tipe Spanduk", async () => {
    await flyingButtonReguler.tipeSpandukFlyingButton();
  });

  it("System should be click Flying Button", async () => {
    await flyingButtonReguler.Page();
  });

  it("I input Nama Halaman (.*)", async (nama_halaman) => {
    await flyingButtonReguler.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await flyingButtonReguler.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await flyingButtonReguler.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await flyingButtonReguler.Page();
  });

  it("I click Button Simpan", async () => {
    await flyingButtonReguler.buttonSimpan();
  });

  it("System show popup Confirmation", async () => {
    await flyingButtonReguler.Page();
  });

  it("I click Button Ya", async () => {
    await flyingButtonReguler.buttonYa();
  });

  it("System should be submit data and landing to Spanduk Online Page", async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatFlyingButton();
  });
});
