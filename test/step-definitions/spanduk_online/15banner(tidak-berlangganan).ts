import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spandukOnlinePage from "../../../src/pageobjects/spanduk_online/spanduk-online.page";
import bannerTidakBerlangganan from "../../../src/pageobjects/spanduk_online/15tidak-berlangganan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 15. Tidak Berlangganan");
allureReporter.addFeature("Create InApp Banner Tidak Berlangganan");

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
  await bannerTidakBerlangganan.Page();
});

it("I am on the Buat Spanduk Online page", async () => {
  await bannerTidakBerlangganan.formPage();
});

it("I input Nama Spanduk (.*)", async (nama_spanduk) => {
  await bannerTidakBerlangganan.namaSpanduk(nama_spanduk);
});

it("System should be input Nama Spanduk", async () => {
  await bannerTidakBerlangganan.Page();
});

it("I select date in Sampai", async () => {
  await bannerTidakBerlangganan.dateSampai();
});

it("System should be select date", async () => {
  await bannerTidakBerlangganan.Page();
});

it("I insert Banner in TEMPLATE F", async () => {
  await bannerTidakBerlangganan.insertGambarBanner();
});

it("System should be insert Banner", async () => {
  await bannerTidakBerlangganan.Page();
});

it("I click Customer in Grup Pengguna", async () => {
  await bannerTidakBerlangganan.grupPenggunaCustomer();
});

it("System should be click Customer", async () => {
  await bannerTidakBerlangganan.Page();
});

it("I click CC in Tipe Konten", async () => {
  await bannerTidakBerlangganan.tipeKontenCC();
});

it("System should be click CC", async () => {
  await bannerTidakBerlangganan.Page();
});

it("I click Tidak Berlangganan in Status Berlangganan", async () => {
  await bannerTidakBerlangganan.tipeBerlangganan();
});

it("System should be click Tidak Berlangganan", async () => {
  await bannerTidakBerlangganan.Page();
});

it("I input Nama Halaman (.*)", async (nama_halaman) => {
  await bannerTidakBerlangganan.namaHalaman(nama_halaman);
});

it("System should be input Nama Halaman", async () => {
  await bannerTidakBerlangganan.Page();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await bannerTidakBerlangganan.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await bannerTidakBerlangganan.Page();
});

it("I click Button Simpan", async () => {
  await bannerTidakBerlangganan.buttonSimpan();
});

it("System show popup Confirmation", async () => {
  await bannerTidakBerlangganan.Page();
});

it("I click Button Ya", async () => {
  await bannerTidakBerlangganan.buttonYa();
});

it("System should be submit data and landing to Spanduk Online Page", async () => {
  await bannerTidakBerlangganan.Page();
});
