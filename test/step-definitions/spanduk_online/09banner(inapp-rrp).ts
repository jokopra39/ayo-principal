import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import inappRrp from "../../../src/pageobjects/spanduk_online/09inapp-banner-rrp.page";

describe("[PRINCIPAL] 09. In-App Banner RRP", () => {
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
    await inappRrp.Page();
  });

  it("I am on the Buat Spanduk Online page", async () => {
    await inappRrp.formPage();
  });

  it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
    await inappRrp.namaSpanduk(nama_spanduk);
  });

  it("System should be input Nama Spanduk", async () => {
    await inappRrp.Page();
  });

  it("I select date in Sampai", async () => {
    await inappRrp.dateSampai();
  });

  it("System should be select date", async () => {
    await inappRrp.Page();
  });

  it("I insert Banner in TEMPLATE F", async () => {
    await inappRrp.insertGambarBanner();
  });

  it("System should be insert Banner", async () => {
    await inappRrp.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await inappRrp.grupPenggunaCustomer();
  });

  it("System should be click Customer", async () => {
    await inappRrp.Page();
  });

  it("I click RRP in Tipe Konten", async () => {
    await inappRrp.tipeKontenRrp();
  });

  it("System should be click RRP", async () => {
    await inappRrp.Page();
  });

  it("I input Nama Halaman (.*)", async (nama_halaman) => {
    await inappRrp.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await inappRrp.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await inappRrp.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await inappRrp.Page();
  });

  it("I click Button Simpan", async () => {
    await inappRrp.buttonSimpan();
  });

  it("System show popup Confirmation", async () => {
    await inappRrp.Page();
  });

  it("I click Button Ya", async () => {
    await inappRrp.buttonYa();
  });

  it("System should be submit data and landing to Spanduk Online Page", async () => {
    await inappRrp.Page();
  });
});
