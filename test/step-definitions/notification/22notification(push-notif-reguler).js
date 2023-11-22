import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import notifikasiPage from "../../../src/pageobjects/notification/buat-notifikasi.page";
import createNotifikasiPushReguler from "../../../src/pageobjects/notification/22push-notif-reguler.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 22. Push Notifikasi Reguler");
allureReporter.addFeature("Create Push Notifikasi reguler");

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
  await createNotifikasiPushReguler.Page();
});

it("I am on the Buat Notifikasi page", async () => {
  await createNotifikasiPushReguler.formPage();
});

it("I input Judul Notifikasi (.*)", async (judul_notifkasi) => {
  await createNotifikasiPushReguler.buatNotifikasiInput(judul_notifkasi);
});

it("System should be input Judul Notifikasi", async () => {
  await createNotifikasiPushReguler.Page();
});

it("I input Konten Notifikasi (.*)", async (konten_notifikasi) => {
  await createNotifikasiPushReguler.kontenNotifikasi(konten_notifikasi);
});

it("System should be input Konten Notifikasi", async () => {
  await createNotifikasiPushReguler.Page();
});

it("I click Customer in Grup Pengguna", async () => {
  await createNotifikasiPushReguler.grupPengguna();
});

it("System should be click Customer", async () => {
  await createNotifikasiPushReguler.Page();
});

it("I select time in Jam Terbit", async () => {
  await createNotifikasiPushReguler.jamTerbit();
});

it("System should be select select Jam Terbit", async () => {
  await createNotifikasiPushReguler.Page();
});

it("I input Nama Halaman(.*)", async (nama_halaman) => {
  await createNotifikasiPushReguler.namaHalaman(nama_halaman);
});

it("System should be input Nama Halaman", async () => {
  await createNotifikasiPushReguler.Page();
});

it("I input Isi Halaman(.*)", async (isi_halaman) => {
  await createNotifikasiPushReguler.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await createNotifikasiPushReguler.Page();
});

it("I click Semua in Batas Umur", async () => {
  await createNotifikasiPushReguler.batasUmur();
});

it("System should be click Semua in Batas Umur", async () => {
  await createNotifikasiPushReguler.Page();
});

it("I click button Simpan", async () => {
  await createNotifikasiPushReguler.btnSimpan();
});

it("System should be submit data and leading to Daftar Notifikasi page", async () => {
  await notifikasiPage.Page1();
  //await notifikasiPage.PageNotif()
});
