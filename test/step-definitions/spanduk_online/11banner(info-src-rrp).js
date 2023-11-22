import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import infoSrcRrp from "../../../src/pageobjects/spanduk_online/11info-src-rrp.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 11. Info SRC RRP");
allureReporter.addFeature("Create Info SRC RRP");

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
  await infoSrcRrp.Page();
});

it("I am on the Buat Spanduk Online page", async () => {
  await infoSrcRrp.formPage();
});

it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
  await infoSrcRrp.namaSpanduk(nama_spanduk);
});

it("System should be input Nama Spanduk", async () => {
  await infoSrcRrp.Page();
});

it("I select date in Sampai", async () => {
  await infoSrcRrp.dateSampai();
});

it("System should be select date", async () => {
  await infoSrcRrp.Page();
});

it("I insert Banner in TEMPLATE F", async () => {
  await infoSrcRrp.insertGambarBanner();
});

it("System should be insert Banner", async () => {
  await infoSrcRrp.Page();
});

it("I click Customer in Grup Pengguna", async () => {
  await infoSrcRrp.grupPenggunaCustomer();
});

it("System should be click Customer", async () => {
  await infoSrcRrp.Page();
});

it("I click RRP in Tipe Konten", async () => {
  await infoSrcRrp.tipeKontenRrp();
});

it("System should be click RRP", async () => {
  await infoSrcRrp.Page();
});

it("I click Info SRC in Tipe Spanduk", async () => {
  await infoSrcRrp.tipeSpandukInfoSRC();
});

it("System should be click Info SRC", async () => {
  await infoSrcRrp.Page();
});

it("I input Nama Halaman (.*)", async (nama_halaman) => {
  await infoSrcRrp.namaHalaman(nama_halaman);
});

it("System should be input Nama Halaman", async () => {
  await infoSrcRrp.Page();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await infoSrcRrp.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await infoSrcRrp.Page();
});

it("I click Button Simpan", async () => {
  await infoSrcRrp.buttonSimpan();
});

it("System show popup Confirmation", async () => {
  await infoSrcRrp.Page();
});

it("I click Button Ya", async () => {
  await infoSrcRrp.buttonYa();
});

it("System should be submit data and landing to Spanduk Online Page", async () => {
  await spandukOnlinePage.Page();
  await spandukOnlinePage.lihatInfoSRC();
});
