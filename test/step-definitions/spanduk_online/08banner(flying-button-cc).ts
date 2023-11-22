import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import flyingButtonCc from "../../../src/pageobjects/spanduk_online/08flying-button-cc.page";

describe("[PRINCIPAL] 08. Flying Button CC", () => {
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
    await flyingButtonCc.Page();
  });

  it("I am on the Buat Spanduk Online page", async () => {
    await flyingButtonCc.formPage();
  });

  it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
    await flyingButtonCc.namaSpanduk(nama_spanduk);
  });

  it("System should be input Nama Spanduk", async () => {
    await flyingButtonCc.Page();
  });

  it("I select date in Sampai", async () => {
    await flyingButtonCc.dateSampai();
  });

  it("System should be select date", async () => {
    await flyingButtonCc.Page();
  });

  it("I insert Banner in TEMPLATE F", async () => {
    await flyingButtonCc.insertGambarBanner();
  });

  it("System should be insert Banner", async () => {
    await flyingButtonCc.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await flyingButtonCc.grupPenggunaCustomer();
  });

  it("System should be click Customer", async () => {
    await flyingButtonCc.Page();
  });

  it("I click CC in Tipe Konten", async () => {
    await flyingButtonCc.tipeKontenCC();
  });

  it("System should be click CC", async () => {
    await flyingButtonCc.Page();
  });

  it("I click Flying Button in Tipe Spanduk", async () => {
    await flyingButtonCc.tipeSpandukFlyingButton();
  });

  it("System should be click Flying Button", async () => {
    await flyingButtonCc.Page();
  });

  it("I input Nama Halaman (.*)", async (nama_halaman) => {
    await flyingButtonCc.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await flyingButtonCc.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await flyingButtonCc.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await flyingButtonCc.Page();
  });

  it("I click Button Simpan", async () => {
    await flyingButtonCc.buttonSimpan();
  });

  it("System show popup Confirmation", async () => {
    await flyingButtonCc.Page();
  });

  it("I click Button Ya", async () => {
    await flyingButtonCc.buttonYa();
  });

  it("System should be submit data and landing to Spanduk Online Page", async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatFlyingButton();
  });
});
