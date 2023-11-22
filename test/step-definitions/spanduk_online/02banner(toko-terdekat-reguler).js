import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import tokoTerdekatReguler from "../../../src/pageobjects/spanduk_online/02toko-terdekat-reguler.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 02. Toko Terdekat Reguler");
allureReporter.addFeature("Create Toko Terdekat Reguler");

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
  await tokoTerdekatReguler.Page();
});

it("I am on the Buat Spanduk Online page", async () => {
  await tokoTerdekatReguler.formPage();
});

it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
  await tokoTerdekatReguler.namaSpanduk(nama_spanduk);
});

it("System should be input Nama Spanduk", async () => {
  await tokoTerdekatReguler.Page();
});

it("I select date in Sampai", async () => {
  await tokoTerdekatReguler.dateSampai();
});

it("System should be select date", async () => {
  await tokoTerdekatReguler.Page();
});

it("I insert Banner in TEMPLATE F", async () => {
  await tokoTerdekatReguler.insertGambarBanner();
});

it("System should be insert Banner", async () => {
  await tokoTerdekatReguler.Page();
});

it("I click Customer in Grup Pengguna", async () => {
  await tokoTerdekatReguler.grupPenggunaCustomer();
});

it("System should be click Customer", async () => {
  await tokoTerdekatReguler.Page();
});

it("I click Toko Terdekat in Tipe Spanduk", async () => {
  await tokoTerdekatReguler.tipeSpandukTokoTerdekat();
});

it("System should be click Toko Terdekat", async () => {
  await tokoTerdekatReguler.Page();
});

it("I input Nama Halaman (.*)", async (nama_halaman) => {
  await tokoTerdekatReguler.namaHalaman(nama_halaman);
});

it("System should be input Nama Halaman", async () => {
  await tokoTerdekatReguler.Page();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await tokoTerdekatReguler.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await tokoTerdekatReguler.Page();
});

it("I click Button Simpan", async () => {
  await tokoTerdekatReguler.buttonSimpan();
});

it("System show popup Confirmation", async () => {
  await tokoTerdekatReguler.Page();
});

it("I click Button Ya", async () => {
  await tokoTerdekatReguler.buttonYa();
});

it("System should be submit data and landing to Spanduk Online Page", async () => {
  await spandukOnlinePage.Page();
  await spandukOnlinePage.lihatTokoTerdekat();
});
