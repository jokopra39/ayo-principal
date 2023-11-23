import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import popupPage from "../../../src/pageobjects/notification/popup-notifikasi.page";
import popupNotifReguler from "../../../src/pageobjects/notification/16popup-notifikasi-reguler.page";

describe("[PRINCIPAL] 16. Popup Notifikasi Reguler", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Daftar Popup Notifikasi page", async () => {
    await MainmenuPage.popupNotifikasi();
  });

  it("I click button Buat", async () => {
    await popupPage.tombolBuat();
  });

  it("System should be leading to Buat Popup Notifikasi page", async () => {
    await popupNotifReguler.Page();
  });

  it("I am on the Buat Popup Notifikasi page", async () => {
    await popupNotifReguler.formPage();
  });

  it("I input Judul Popup Notifikasi (.*)", async (judul_popup_notifkasi) => {
    await popupNotifReguler.inputJudul(judul_popup_notifkasi);
  });

  it("System should be input Judul Popup Notifikasi", async () => {
    await popupNotifReguler.Page();
  });

  it("I select time in Buat Notifikasi", async () => {
    await popupNotifReguler.buatNotifikasi();
  });

  it("System should be select Buat Notifikasi", async () => {
    await popupNotifReguler.Page();
  });

  it("I select time in Jam Berakhir", async () => {
    await popupNotifReguler.jamBerakhir();
  });

  it("System should be select Jam Berakhir", async () => {
    await popupNotifReguler.Page();
  });

  it("I input Yes in Positif Button (.*)", async (positif_button) => {
    await popupNotifReguler.positifButton(positif_button);
  });

  it("System should be input in Positif Button", async () => {
    await popupNotifReguler.Page();
  });

  it("I input No in Negatif Button (.*)", async (negatif_button) => {
    await popupNotifReguler.negatifButton(negatif_button);
  });

  it("System should be input in Negatif Button", async () => {
    await popupNotifReguler.Page();
  });

  it("I insert gambar in Tarik Gambar Popup Notifikasi in Gambar Popup Notifikasi", async () => {
    await popupNotifReguler.insertGambar();
  });

  it("System show Gambar Popup Notifikasi", async () => {
    await popupNotifReguler.Page();
  });

  it("I select Customer in Grup Pengguna", async () => {
    await popupNotifReguler.grupPengguna();
  });

  it("System should be select Customer in Grup Pengguna", async () => {
    await popupNotifReguler.Page();
  });

  it("I input Dari in Batasan Umur (.*)", async (input_dari) => {
    await popupNotifReguler.BatasanUmurDari(input_dari);
  });

  it("System should be input Dari in Batasan Umur", async () => {
    await popupNotifReguler.Page();
  });

  it("I input Sampai in Batasan Umur (.*)", async (input_sampai) => {
    await popupNotifReguler.BatasanUmurSampai(input_sampai);
  });

  it("System should be input Sampai in Batasan Umur", async () => {
    await popupNotifReguler.Page();
  });

  it("I select Statistic Page in Tipe Konten", async () => {
    await popupNotifReguler.tipeKonten();
  });

  it("System should be select Statistic Page", async () => {
    await popupNotifReguler.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await popupNotifReguler.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await popupNotifReguler.Page();
  });

  it("I click button Simpan", async () => {
    await popupNotifReguler.btnSimpan();
  });

  it("System should be submit data and leading to Daftar Popup Notifikasi page", async () => {
    await popupPage.Page();
  });
});
