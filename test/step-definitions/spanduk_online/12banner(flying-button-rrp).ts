import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import flyingButtonRrp from "../../../src/pageobjects/spanduk_online/12flying-button-rrp.page";

describe("[PRINCIPAL] 12. Flying Button RRP", () => {
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
    await flyingButtonRrp.Page();
  });

  it("I am on the Buat Spanduk Online page", async () => {
    await flyingButtonRrp.formPage();
  });

  it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
    await flyingButtonRrp.namaSpanduk(nama_spanduk);
  });

  it("System should be input Nama Spanduk", async () => {
    await flyingButtonRrp.Page();
  });

  it("I select date in Sampai", async () => {
    await flyingButtonRrp.dateSampai();
  });

  it("System should be select date", async () => {
    await flyingButtonRrp.Page();
  });

  it("I insert Banner in TEMPLATE F", async () => {
    await flyingButtonRrp.insertGambarBanner();
  });

  it("System should be insert Banner", async () => {
    await flyingButtonRrp.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await flyingButtonRrp.grupPenggunaCustomer();
  });

  it("System should be click Customer", async () => {
    await flyingButtonRrp.Page();
  });

  it("I click RRP in Tipe Konten", async () => {
    await flyingButtonRrp.tipeKontenRrp();
  });

  it("System should be click RRP", async () => {
    await flyingButtonRrp.Page();
  });

  it("I click Flying Button in Tipe Spanduk", async () => {
    await flyingButtonRrp.tipeSpandukFlyingButton();
  });

  it("System should be click Flying Button", async () => {
    await flyingButtonRrp.Page();
  });

  it("I input Nama Halaman (.*)", async (nama_halaman) => {
    await flyingButtonRrp.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await flyingButtonRrp.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await flyingButtonRrp.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await flyingButtonRrp.Page();
  });

  it("I click Button Simpan", async () => {
    await flyingButtonRrp.buttonSimpan();
  });

  it("System show popup Confirmation", async () => {
    await flyingButtonRrp.Page();
  });

  it("I click Button Ya", async () => {
    await flyingButtonRrp.buttonYa();
  });

  it("System should be submit data and landing to Spanduk Online Page", async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatFlyingButton();
  });
});
