import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import bannerEmployee from "../../../src/pageobjects/spanduk_online/13employee-only.page";

describe("[PRINCIPAL] 13. Employee Only", () => {
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
    await bannerEmployee.Page();
  });

  it("I am on the Buat Spanduk Online page", async () => {
    await bannerEmployee.formPage();
  });

  it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
    await bannerEmployee.namaSpanduk(nama_spanduk);
  });

  it("System should be input Nama Spanduk", async () => {
    await bannerEmployee.Page();
  });

  it("I select date in Sampai", async () => {
    await bannerEmployee.dateSampai();
  });

  it("System should be select date", async () => {
    await bannerEmployee.Page();
  });

  it("I insert Banner in TEMPLATE F", async () => {
    await bannerEmployee.insertGambarBanner();
  });

  it("System should be insert Banner", async () => {
    await bannerEmployee.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await bannerEmployee.grupPenggunaCustomer();
  });

  it("System should be click Customer", async () => {
    await bannerEmployee.Page();
  });

  it("I click Employee Only in Tipe Employee", async () => {
    await bannerEmployee.tipeEmployee();
  });

  it("System should be click Employee Only", async () => {
    await bannerEmployee.Page();
  });

  it("I input Nama Halaman (.*)", async (nama_halaman) => {
    await bannerEmployee.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await bannerEmployee.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await bannerEmployee.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await bannerEmployee.Page();
  });

  it("I click Button Simpan", async () => {
    await bannerEmployee.buttonSimpan();
  });

  it("System show popup Confirmation", async () => {
    await bannerEmployee.Page();
  });

  it("I click Button Ya", async () => {
    await bannerEmployee.buttonYa();
  });

  it("System should be submit data and landing to Spanduk Online Page", async () => {
    await bannerEmployee.Page();
  });
});
