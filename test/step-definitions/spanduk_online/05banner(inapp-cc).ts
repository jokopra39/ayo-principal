import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import inappCc from "../../../src/pageobjects/spanduk_online/05inapp-banner-cc.page";

describe("[PRINCIPAL] 05. In-App Banner CC", () => {
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
    await inappCc.Page();
  });

  it("I am on the Buat Spanduk Online page", async () => {
    await inappCc.formPage();
  });

  it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
    await inappCc.namaSpanduk(nama_spanduk);
  });

  it("System should be input Nama Spanduk", async () => {
    await inappCc.Page();
  });

  it("I select date in Sampai", async () => {
    await inappCc.dateSampai();
  });

  it("System should be select date", async () => {
    await inappCc.Page();
  });

  it("I insert Banner in TEMPLATE F", async () => {
    await inappCc.insertGambarBanner();
  });

  it("System should be insert Banner", async () => {
    await inappCc.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await inappCc.grupPenggunaCustomer();
  });

  it("System should be click Customer", async () => {
    await inappCc.Page();
  });

  it("I click CC in Tipe Konten", async () => {
    await inappCc.tipeKontenCC();
  });

  it("System should be click CC", async () => {
    await inappCc.Page();
  });

  it("I input Nama Halaman (.*)", async (nama_halaman) => {
    await inappCc.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await inappCc.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await inappCc.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await inappCc.Page();
  });

  it("I click Button Simpan", async () => {
    await inappCc.buttonSimpan();
  });

  it("System show popup Confirmation", async () => {
    await inappCc.Page();
  });

  it("I click Button Ya", async () => {
    await inappCc.buttonYa();
  });

  it("System should be submit data and landing to Spanduk Online Page", async () => {
    await inappCc.Page();
  });
});
