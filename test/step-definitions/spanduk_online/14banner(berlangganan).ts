import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import bannerBerlangganan from "../../../src/pageobjects/spanduk_online/14berlangganan.page";

describe("[PRINCIPAL] 14. Berlangganan", () => {
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
    await bannerBerlangganan.Page();
  });

  it("I am on the Buat Spanduk Online page", async () => {
    await bannerBerlangganan.formPage();
  });

  it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
    await bannerBerlangganan.namaSpanduk(nama_spanduk);
  });

  it("System should be input Nama Spanduk", async () => {
    await bannerBerlangganan.Page();
  });

  it("I select date in Sampai", async () => {
    await bannerBerlangganan.dateSampai();
  });

  it("System should be select date", async () => {
    await bannerBerlangganan.Page();
  });

  it("I insert Banner in TEMPLATE F", async () => {
    await bannerBerlangganan.insertGambarBanner();
  });

  it("System should be insert Banner", async () => {
    await bannerBerlangganan.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await bannerBerlangganan.grupPenggunaCustomer();
  });

  it("System should be click Customer", async () => {
    await bannerBerlangganan.Page();
  });

  it("I click CC in Tipe Konten", async () => {
    await bannerBerlangganan.tipeKontenCC();
  });

  it("System should be click CC", async () => {
    await bannerBerlangganan.Page();
  });

  it("I click Berlangganan in Status Berlangganan", async () => {
    await bannerBerlangganan.tipeBerlangganan();
  });

  it("System should be click Berlangganan", async () => {
    await bannerBerlangganan.Page();
  });

  it("I input Nama Halaman (.*)", async (nama_halaman) => {
    await bannerBerlangganan.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await bannerBerlangganan.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await bannerBerlangganan.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await bannerBerlangganan.Page();
  });

  it("I click Button Simpan", async () => {
    await bannerBerlangganan.buttonSimpan();
  });

  it("System show popup Confirmation", async () => {
    await bannerBerlangganan.Page();
  });

  it("I click Button Ya", async () => {
    await bannerBerlangganan.buttonYa();
  });

  it("System should be submit data and landing to Spanduk Online Page", async () => {
    await bannerBerlangganan.Page();
  });
});
