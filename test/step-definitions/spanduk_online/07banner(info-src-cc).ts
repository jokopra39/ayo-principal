import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import infoSrcCc from "../../../src/pageobjects/spanduk_online/07info-src-cc.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 07. Info SRC CC");
allureReporter.addFeature("Create Info SRC CC");

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
  await infoSrcCc.Page();
});

it("I am on the Buat Spanduk Online page", async () => {
  await infoSrcCc.formPage();
});

it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
  await infoSrcCc.namaSpanduk(nama_spanduk);
});

it("System should be input Nama Spanduk", async () => {
  await infoSrcCc.Page();
});

it("I select date in Sampai", async () => {
  await infoSrcCc.dateSampai();
});

it("System should be select date", async () => {
  await infoSrcCc.Page();
});

it("I insert Banner in TEMPLATE F", async () => {
  await infoSrcCc.insertGambarBanner();
});

it("System should be insert Banner", async () => {
  await infoSrcCc.Page();
});

it("I click Customer in Grup Pengguna", async () => {
  await infoSrcCc.grupPenggunaCustomer();
});

it("System should be click Customer", async () => {
  await infoSrcCc.Page();
});

it("I click CC in Tipe Konten", async () => {
  await infoSrcCc.tipeKontenCC();
});

it("System should be click CC", async () => {
  await infoSrcCc.Page();
});

it("I click Info SRC in Tipe Spanduk", async () => {
  await infoSrcCc.tipeSpandukInfoSRC();
});

it("System should be click Info SRC", async () => {
  await infoSrcCc.Page();
});

it("I input Nama Halaman (.*)", async (nama_halaman) => {
  await infoSrcCc.namaHalaman(nama_halaman);
});

it("System should be input Nama Halaman", async () => {
  await infoSrcCc.Page();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await infoSrcCc.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await infoSrcCc.Page();
});

it("I click Button Simpan", async () => {
  await infoSrcCc.buttonSimpan();
});

it("System show popup Confirmation", async () => {
  await infoSrcCc.Page();
});

it("I click Button Ya", async () => {
  await infoSrcCc.buttonYa();
});

it("System should be submit data and landing to Spanduk Online Page", async () => {
  await spandukOnlinePage.Page();
  await spandukOnlinePage.lihatInfoSRC();
});
