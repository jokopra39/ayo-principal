import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import tokoTerdekatRrp from "../../../src/pageobjects/spanduk_online/10toko-terdekat-rrp.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 10. Toko Terdekat RRP");
allureReporter.addFeature("Create Toko Terdekat RRP");

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
  await tokoTerdekatRrp.Page();
});

it("I am on the Buat Spanduk Online page", async () => {
  await tokoTerdekatRrp.formPage();
});

it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
  await tokoTerdekatRrp.namaSpanduk(nama_spanduk);
});

it("System should be input Nama Spanduk", async () => {
  await tokoTerdekatRrp.Page();
});

it("I select date in Sampai", async () => {
  await tokoTerdekatRrp.dateSampai();
});

it("System should be select date", async () => {
  await tokoTerdekatRrp.Page();
});

it("I insert Banner in TEMPLATE F", async () => {
  await tokoTerdekatRrp.insertGambarBanner();
});

it("System should be insert Banner", async () => {
  await tokoTerdekatRrp.Page();
});

it("I click Customer in Grup Pengguna", async () => {
  await tokoTerdekatRrp.grupPenggunaCustomer();
});

it("System should be click Customer", async () => {
  await tokoTerdekatRrp.Page();
});

it("I click RRP in Tipe Konten", async () => {
  await tokoTerdekatRrp.tipeKontenRrp();
});

it("System should be click RRP", async () => {
  await tokoTerdekatRrp.Page();
});

it("I click Toko Terdekat in Tipe Spanduk", async () => {
  await tokoTerdekatRrp.tipeSpandukTokoTerdekat();
});

it("System should be click Toko Terdekat", async () => {
  await tokoTerdekatRrp.Page();
});

it("I input Nama Halaman (.*)", async (nama_halaman) => {
  await tokoTerdekatRrp.namaHalaman(nama_halaman);
});

it("System should be input Nama Halaman", async () => {
  await tokoTerdekatRrp.Page();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await tokoTerdekatRrp.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await tokoTerdekatRrp.Page();
});

it("I click Button Simpan", async () => {
  await tokoTerdekatRrp.buttonSimpan();
});

it("System show popup Confirmation", async () => {
  await tokoTerdekatRrp.Page();
});

it("I click Button Ya", async () => {
  await tokoTerdekatRrp.buttonYa();
});

it("System should be submit data and landing to Spanduk Online Page", async () => {
  await spandukOnlinePage.Page();
  await spandukOnlinePage.lihatTokoTerdekat();
});
