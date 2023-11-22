import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import inappReguler from "../../../src/pageobjects/spanduk_online/01inapp-banner-reguler.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 01. In-App Banner Reguler");
allureReporter.addFeature("Create InApp Banner Reguler");

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
  await inappReguler.Page();
});

it("I am on the Buat Spanduk Online page", async () => {
  await inappReguler.formPage();
});

it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
  await inappReguler.namaSpanduk(nama_spanduk);
});

it("System should be input Nama Spanduk", async () => {
  await inappReguler.Page();
});

it("I select date in Sampai", async () => {
  await inappReguler.dateSampai();
});

it("System should be select date", async () => {
  await inappReguler.Page();
});

it("I insert Banner in TEMPLATE F", async () => {
  await inappReguler.insertGambarBanner();
});

it("System should be insert Banner", async () => {
  await inappReguler.Page();
});

it("I click Customer in Grup Pengguna", async () => {
  await inappReguler.grupPenggunaCustomer();
});

it("System should be click Customer", async () => {
  await inappReguler.Page();
});

it("I input Nama Halaman (.*)", async (nama_halaman) => {
  await inappReguler.namaHalaman(nama_halaman);
});

it("System should be input Nama Halaman", async () => {
  await inappReguler.Page();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await inappReguler.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await inappReguler.Page();
});

it("I click Button Simpan", async () => {
  await inappReguler.buttonSimpan();
});

it("System show popup Confirmation", async () => {
  await inappReguler.Page();
});

it("I click Button Ya", async () => {
  await inappReguler.buttonYa();
});

it("System should be submit data and landing to Spanduk Online Page", async () => {
  await inappReguler.Page();
});
