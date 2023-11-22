import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import popupPage from "../../../src/pageobjects/notification/popup-notifikasi.page";
import popupNotifBerlangganan from "../../../src/pageobjects/notification/20popup-notifikasi-berlangganan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 20. Popup Notifikasi Berlangganan");
allureReporter.addFeature("Create Popup Notifikasi Berlangganan");

it("I am on the Daftar Popup Notifikasi page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.popupNotifikasi();
});

it("I click button Buat", async () => {
  await popupPage.tombolBuat();
});

it("System should be leading to Buat Popup Notifikasi page", async () => {
  await popupNotifBerlangganan.Page();
});

it("I am on the Buat Popup Notifikasi page", async () => {
  await popupNotifBerlangganan.formPage();
});

it("I input Judul Popup Notifikasi (.*)", async (judul_popup_notifkasi) => {
  await popupNotifBerlangganan.inputJudul(judul_popup_notifkasi);
});

it("System should be input Judul Popup Notifikasi", async () => {
  await popupNotifBerlangganan.Page();
});

it("I select time in Buat Notifikasi", async () => {
  await popupNotifBerlangganan.buatNotifikasi();
});

it("System should be select Buat Notifikasi", async () => {
  await popupNotifBerlangganan.Page();
});

it("I select time in Jam Berakhir", async () => {
  await popupNotifBerlangganan.jamBerakhir();
});

it("System should be select Jam Berakhir", async () => {
  await popupNotifBerlangganan.Page();
});

it("I input Yes in Positif Button (.*)", async (positif_button) => {
  await popupNotifBerlangganan.positifButton(positif_button);
});

it("System should be input in Positif Button", async () => {
  await popupNotifBerlangganan.Page();
});

it("I input No in Negatif Button (.*)", async (negatif_button) => {
  await popupNotifBerlangganan.negatifButton(negatif_button);
});

it("System should be input in Negatif Button", async () => {
  await popupNotifBerlangganan.Page();
});

it("I insert gambar in Tarik Gambar Popup Notifikasi in Gambar Popup Notifikasi", async () => {
  await popupNotifBerlangganan.insertGambar();
});

it("System show Gambar Popup Notifikasi", async () => {
  await popupNotifBerlangganan.Page();
});

it("I select Customer in Grup Pengguna", async () => {
  await popupNotifBerlangganan.grupPengguna();
});

it("System should be select Customer in Grup Pengguna", async () => {
  await popupNotifBerlangganan.Page();
});

it("I select Berlangganan in Status Berlangganan", async () => {
  await popupNotifBerlangganan.tipeBerlangganan();
});

it("System should be select Berlangganan", async () => {
  await popupNotifBerlangganan.Page();
});

it("I click radio button CC in Tipe Konten", async () => {
  await popupNotifBerlangganan.tipeKontenCC();
});

it("System should be select radio button CC", async () => {
  await popupNotifBerlangganan.Page();
});

it("I input Dari in Batasan Umur (.*)", async (input_dari) => {
  await popupNotifBerlangganan.BatasanUmurDari(input_dari);
});

it("System should be input Dari in Batasan Umur", async () => {
  await popupNotifBerlangganan.Page();
});

it("I input Sampai in Batasan Umur (.*)", async (input_sampai) => {
  await popupNotifBerlangganan.BatasanUmurSampai(input_sampai);
});

it("System should be input Sampai in Batasan Umur", async () => {
  await popupNotifBerlangganan.Page();
});

it("I select Statistic Page in Tipe Konten", async () => {
  await popupNotifBerlangganan.tipeKonten();
});

it("System should be select Statistic Page", async () => {
  await popupNotifBerlangganan.Page();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await popupNotifBerlangganan.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await popupNotifBerlangganan.Page();
});

it("I click button Simpan", async () => {
  await popupNotifBerlangganan.btnSimpan();
});

it("System should be submit data and leading to Daftar Popup Notifikasi page", async () => {
  await popupPage.Page();
});
