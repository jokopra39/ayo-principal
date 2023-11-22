import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import popupPage from "../../../src/pageobjects/notification/popup-notifikasi.page";
import popupNotifCC from "../../../src/pageobjects/notification/17popup-notifikasi-cc.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 17. Popup Notifikasi CC");
allureReporter.addFeature("Create Popup Notifikasi CC");

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
  await popupNotifCC.Page();
});

it("I am on the Buat Popup Notifikasi page", async () => {
  await popupNotifCC.formPage();
});

it("I input Judul Popup Notifikasi (.*)", async (judul_popup_notifkasi) => {
  await popupNotifCC.inputJudul(judul_popup_notifkasi);
});

it("System should be input Judul Popup Notifikasi", async () => {
  await popupNotifCC.Page();
});

it("I select time in Buat Notifikasi", async () => {
  await popupNotifCC.buatNotifikasi();
});

it("System should be select Buat Notifikasi", async () => {
  await popupNotifCC.Page();
});

it("I select time in Jam Berakhir", async () => {
  await popupNotifCC.jamBerakhir();
});

it("System should be select Jam Berakhir", async () => {
  await popupNotifCC.Page();
});

it("I input Yes in Positif Button (.*)", async (positif_button) => {
  await popupNotifCC.positifButton(positif_button);
});

it("System should be input in Positif Button", async () => {
  await popupNotifCC.Page();
});

it("I input No in Negatif Button (.*)", async (negatif_button) => {
  await popupNotifCC.negatifButton(negatif_button);
});

it("System should be input in Negatif Button", async () => {
  await popupNotifCC.Page();
});

it("I insert gambar in Tarik Gambar Popup Notifikasi in Gambar Popup Notifikasi", async () => {
  await popupNotifCC.insertGambar();
});

it("System show Gambar Popup Notifikasi", async () => {
  await popupNotifCC.Page();
});

it("I select Customer in Grup Pengguna", async () => {
  await popupNotifCC.grupPengguna();
});

it("System should be select Customer in Grup Pengguna", async () => {
  await popupNotifCC.Page();
});

it("I click radio button CC in Tipe Konten", async () => {
  await popupNotifCC.tipeKontenCC();
});

it("System should be click radio button CC", async () => {
  await popupNotifCC.Page();
});

it("I input Dari in Batasan Umur (.*)", async (input_dari) => {
  await popupNotifCC.BatasanUmurDari(input_dari);
});

it("System should be input Dari in Batasan Umur", async () => {
  await popupNotifCC.Page();
});

it("I input Sampai in Batasan Umur (.*)", async (input_sampai) => {
  await popupNotifCC.BatasanUmurSampai(input_sampai);
});

it("System should be input Sampai in Batasan Umur", async () => {
  await popupNotifCC.Page();
});

it("I select Statistic Page in Tipe Konten", async () => {
  await popupNotifCC.tipeKonten();
});

it("System should be select Statistic Page", async () => {
  await popupNotifCC.Page();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await popupNotifCC.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  await popupNotifCC.Page();
});

it("I click button Simpan", async () => {
  await popupNotifCC.btnSimpan();
});

it("System should be submit data and leading to Daftar Popup Notifikasi page", async () => {
  await popupPage.Page();
});
