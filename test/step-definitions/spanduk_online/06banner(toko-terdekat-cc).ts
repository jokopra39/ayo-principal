import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import tokoTerdekatCC from "../../../src/pageobjects/spanduk_online/06toko-terdekat-cc.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 06. Toko Terdekat CC");
allureReporter.addFeature("Create Toko Terdekat CC");

it("I am on the Spanduk Online page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.spandukOnline();
});

it("I click button Buat", async () => {
  await spandukOnlinePage.tombolBuat();
});

it("System should be leading to Buat Spanduk Online page", async () => {
  await tokoTerdekatCC.Page();
});

it("I am on the Buat Spanduk Online page", async () => {
  await tokoTerdekatCC.formPage();
});

it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
  await tokoTerdekatCC.namaSpanduk(nama_spanduk);
});

it("System should be input Nama Spanduk", async () => {
  await tokoTerdekatCC.Page();
});

it("I select date in Sampai", async () => {
  await tokoTerdekatCC.dateSampai();
});

it("System should be select date", async () => {
  await tokoTerdekatCC.Page();
});

it("I insert Banner in TEMPLATE F", async () => {
  await tokoTerdekatCC.insertGambarBanner();
});

it("System should be insert Banner", async () => {
  await tokoTerdekatCC.Page();
});

it("I click Customer in Grup Pengguna", async () => {
  await tokoTerdekatCC.grupPenggunaCustomer();
});

it("System should be click Customer", async () => {
  await tokoTerdekatCC.Page();
});

it("I click CC in Tipe Konten", async () => {
  await tokoTerdekatCC.tipeKontenCC();
});

it("System should be click CC", async () => {
  await tokoTerdekatCC.Page();
});

it("I click Toko Terdekat in Tipe Spanduk", async () => {
  await tokoTerdekatCC.tipeSpandukTokoTerdekat();
});

it("System should be click Toko Terdekat", async () => {
  await tokoTerdekatCC.Page();
});

it("I input Nama Halaman (.*)", async (nama_halaman) => {
  await tokoTerdekatCC.namaHalaman(nama_halaman);
});

it("System should be input Nama Halaman", async () => {
  await tokoTerdekatCC.Page();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await tokoTerdekatCC.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await tokoTerdekatCC.Page();
});

it("I click Button Simpan", async () => {
  await tokoTerdekatCC.buttonSimpan();
});

it("System show popup Confirmation", async () => {
  await tokoTerdekatCC.Page();
});

it("I click Button Ya", async () => {
  await tokoTerdekatCC.buttonYa();
});

it("System should be submit data and landing to Spanduk Online Page", async () => {
  await spandukOnlinePage.Page();
  await spandukOnlinePage.lihatTokoTerdekat();
});
