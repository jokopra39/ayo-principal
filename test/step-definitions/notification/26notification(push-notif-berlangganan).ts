import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import notifikasiPage from "../../../src/pageobjects/notification/buat-notifikasi.page";
import createNotifikasiPushLangganan from "../../../src/pageobjects/notification/26push-notif-berlangganan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 26. Push Notifikasi Berlangganan");
allureReporter.addFeature("Create Push Notifikasi Berlangganan");

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
  await createNotifikasiPushLangganan.Page();
});

it("I am on the Buat Notifikasi page", async () => {
  await createNotifikasiPushLangganan.formPage();
});

it("I input Judul Notifikasi (.*)", async (judul_notifkasi) => {
  await createNotifikasiPushLangganan.buatNotifikasiInput(judul_notifkasi);
});

it("System should be input Judul Notifikasi", async () => {
  await createNotifikasiPushLangganan.Page();
});

it("I input Konten Notifikasi (.*)", async (konten_notifikasi) => {
  await createNotifikasiPushLangganan.kontenNotifikasi(konten_notifikasi);
});

it("System should be input Konten Notifikasi", async () => {
  await createNotifikasiPushLangganan.Page();
});

it("I click Customer in Grup Pengguna", async () => {
  await createNotifikasiPushLangganan.grupPengguna();
});

it("System should be click Customer", async () => {
  await createNotifikasiPushLangganan.Page();
});

it("I select time in Jam Terbit", async () => {
  await createNotifikasiPushLangganan.jamTerbit();
});

it("System should be select select Jam Terbit", async () => {
  await createNotifikasiPushLangganan.Page();
});

it("I input Nama Halaman(.*)", async (nama_halaman) => {
  await createNotifikasiPushLangganan.namaHalaman(nama_halaman);
});

it("System should be input Nama Halaman", async () => {
  await createNotifikasiPushLangganan.Page();
});

it("I input Isi Halaman(.*)", async (isi_halaman) => {
  await createNotifikasiPushLangganan.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await createNotifikasiPushLangganan.Page();
});

it("I select Berlangganan only in Filter Pengguna Tipe Berlangganan", async () => {
  await createNotifikasiPushLangganan.tipeBerlangganan();
});

it("System should be select Berlangganan only", async () => {
  await createNotifikasiPushLangganan.Page();
});

it("I click CC in Tipe Konten", async () => {
  await createNotifikasiPushLangganan.tipeKonten();
});

it("System should be click CC", async () => {
  await createNotifikasiPushLangganan.Page();
});

it("I click Semua in Batas Umur", async () => {
  await createNotifikasiPushLangganan.batasUmur();
});

it("System should be click Semua in Batas Umur", async () => {
  await createNotifikasiPushLangganan.Page();
});

it("I click button Simpan", async () => {
  await createNotifikasiPushLangganan.btnSimpan();
});

it("System should be submit data and leading to Daftar Notifikasi page", async () => {
  await notifikasiPage.Page();
});
