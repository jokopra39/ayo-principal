import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import infoSrcReguler from "../../../src/pageobjects/spanduk_online/03info-src-reguler.page";

describe("[PRINCIPAL] 03. Info SRC Reguler", () => {
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
    await infoSrcReguler.Page();
  });

  it("I am on the Buat Spanduk Online page", async () => {
    await infoSrcReguler.formPage();
  });

  it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
    await infoSrcReguler.namaSpanduk(nama_spanduk);
  });

  it("System should be input Nama Spanduk", async () => {
    await infoSrcReguler.Page();
  });

  it("I select date in Sampai", async () => {
    await infoSrcReguler.dateSampai();
  });

  it("System should be select date", async () => {
    await infoSrcReguler.Page();
  });

  it("I insert Banner in TEMPLATE F", async () => {
    await infoSrcReguler.insertGambarBanner();
  });

  it("System should be insert Banner", async () => {
    await infoSrcReguler.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await infoSrcReguler.grupPenggunaCustomer();
  });

  it("System should be click Customer", async () => {
    await infoSrcReguler.Page();
  });

  it("I click Info SRC in Tipe Spanduk", async () => {
    await infoSrcReguler.tipeSpandukInfoSRC();
  });

  it("System should be click Info SRC", async () => {
    await infoSrcReguler.Page();
  });

  it("I input Nama Halaman (.*)", async (nama_halaman) => {
    await infoSrcReguler.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await infoSrcReguler.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await infoSrcReguler.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await infoSrcReguler.Page();
  });

  it("I click Button Simpan", async () => {
    await infoSrcReguler.buttonSimpan();
  });

  it("System show popup Confirmation", async () => {
    await infoSrcReguler.Page();
  });

  it("I click Button Ya", async () => {
    await infoSrcReguler.buttonYa();
  });

  it("System should be submit data and landing to Spanduk Online Page", async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatInfoSRC();
  });
});
