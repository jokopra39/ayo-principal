import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import notifikasiPage from "../../../src/pageobjects/notification/buat-notifikasi.page";
import createNotifikasiPushTdkLangganan from "../../../src/pageobjects/notification/27push-notif-tidak-berlangganan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 27. Push Notifikasi Tidak Berlangganan");
allureReporter.addFeature("Create Push Notifikasi Tidak Berlangganan");

it("I am on the Daftar Notifikasi page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.buatNotifikasi();
});

it("I click button Buat", async () => {
  await notifikasiPage.tombolBuat();
});

it("System should be leading to Buat Notifikasi page", async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

it("I am on the Buat Notifikasi page", async () => {
  await createNotifikasiPushTdkLangganan.formPage();
});

it("I input Judul Notifikasi (.*)", async (judul_notifkasi) => {
  await createNotifikasiPushTdkLangganan.buatNotifikasiInput(judul_notifkasi);
});

it("System should be input Judul Notifikasi", async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

it("I input Konten Notifikasi (.*)", async (konten_notifikasi) => {
  await createNotifikasiPushTdkLangganan.kontenNotifikasi(konten_notifikasi);
});

it("System should be input Konten Notifikasi", async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

it("I click Customer in Grup Pengguna", async () => {
  await createNotifikasiPushTdkLangganan.grupPengguna();
});

it("System should be click Customer", async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

it("I select time in Jam Terbit", async () => {
  await createNotifikasiPushTdkLangganan.jamTerbit();
});

it("System should be select select Jam Terbit", async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

it("I input Nama Halaman(.*)", async (nama_halaman) => {
  await createNotifikasiPushTdkLangganan.namaHalaman(nama_halaman);
});

it("System should be input Nama Halaman", async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

it("I input Isi Halaman(.*)", async (isi_halaman) => {
  await createNotifikasiPushTdkLangganan.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

it("I select Tidak Berlangganan only in Filter Pengguna Tipe Berlangganan", async () => {
  await createNotifikasiPushTdkLangganan.tipeTdkBerlangganan();
});

it("System should be select Tidak Berlangganan only", async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

it("I click CC in Tipe Konten", async () => {
  await createNotifikasiPushTdkLangganan.tipeKonten();
});

it("System should be click CC", async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

it("I click Semua in Batas Umur", async () => {
  await createNotifikasiPushTdkLangganan.batasUmur();
});

it("System should be click Semua in Batas Umur", async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

it("I click button Simpan", async () => {
  await createNotifikasiPushTdkLangganan.btnSimpan();
});

it("System should be submit data and leading to Daftar Notifikasi page", async () => {
  await notifikasiPage.Page();
});
