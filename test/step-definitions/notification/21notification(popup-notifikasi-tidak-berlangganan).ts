import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import popupPage from "../../../src/pageobjects/notification/popup-notifikasi.page";
import popupNotifTidakBerlangganan from "../../../src/pageobjects/notification/21popup-notifikasi-tidak-berlangganan.page";

describe("[PRINCIPAL] 21. Popup Notifikasi Tidak Berlangganan", () => {
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
    await popupNotifTidakBerlangganan.Page();
  });

  it("I am on the Buat Popup Notifikasi page", async () => {
    await popupNotifTidakBerlangganan.formPage();
  });

  it("I input Judul Popup Notifikasi (.*)", async (judul_popup_notifkasi) => {
    await popupNotifTidakBerlangganan.inputJudul(judul_popup_notifkasi);
  });

  it("System should be input Judul Popup Notifikasi", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I select time in Buat Notifikasi", async () => {
    await popupNotifTidakBerlangganan.buatNotifikasi();
  });

  it("System should be select Buat Notifikasi", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I select time in Jam Berakhir", async () => {
    await popupNotifTidakBerlangganan.jamBerakhir();
  });

  it("System should be select Jam Berakhir", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I input Yes in Positif Button (.*)", async (positif_button) => {
    await popupNotifTidakBerlangganan.positifButton(positif_button);
  });

  it("System should be input in Positif Button", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I input No in Negatif Button (.*)", async (negatif_button) => {
    await popupNotifTidakBerlangganan.negatifButton(negatif_button);
  });

  it("System should be input in Negatif Button", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I insert gambar in Tarik Gambar Popup Notifikasi in Gambar Popup Notifikasi", async () => {
    await popupNotifTidakBerlangganan.insertGambar();
  });

  it("System show Gambar Popup Notifikasi", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I select Customer in Grup Pengguna", async () => {
    await popupNotifTidakBerlangganan.grupPengguna();
  });

  it("System should be select Customer in Grup Pengguna", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I select Tidak Berlangganan in Status Berlangganan", async () => {
    await popupNotifTidakBerlangganan.tipeBerlangganan();
  });

  it("System should be select Tidak Berlangganan", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I click radio button CC in Tipe Konten", async () => {
    await popupNotifTidakBerlangganan.tipeKontenCC();
  });

  it("System should be select radio button CC", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I input Dari in Batasan Umur (.*)", async (input_dari) => {
    await popupNotifTidakBerlangganan.BatasanUmurDari(input_dari);
  });

  it("System should be input Dari in Batasan Umur", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I input Sampai in Batasan Umur (.*)", async (input_sampai) => {
    await popupNotifTidakBerlangganan.BatasanUmurSampai(input_sampai);
  });

  it("System should be input Sampai in Batasan Umur", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I select Statistic Page in Tipe Konten", async () => {
    await popupNotifTidakBerlangganan.tipeKonten();
  });

  it("System should be select Statistic Page", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await popupNotifTidakBerlangganan.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await popupNotifTidakBerlangganan.Page();
  });

  it("I click button Simpan", async () => {
    await popupNotifTidakBerlangganan.btnSimpan();
  });

  it("System should be submit data and leading to Daftar Popup Notifikasi page", async () => {
    await popupPage.Page();
  });
});
