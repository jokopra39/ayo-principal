import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import popupPage from "../../../src/pageobjects/notification/popup-notifikasi.page";
import popupNotifRRP from "../../../src/pageobjects/notification/18popup-notifikasi-rrp.page";

describe("[PRINCIPAL] 18. Popup Notifikasi RRP", () => {
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
    await popupNotifRRP.Page();
  });

  it("I am on the Buat Popup Notifikasi page", async () => {
    await popupNotifRRP.formPage();
  });

  it("I input Judul Popup Notifikasi (.*)", async (judul_popup_notifkasi) => {
    await popupNotifRRP.inputJudul(judul_popup_notifkasi);
  });

  it("System should be input Judul Popup Notifikasi", async () => {
    await popupNotifRRP.Page();
  });

  it("I select time in Buat Notifikasi", async () => {
    await popupNotifRRP.buatNotifikasi();
  });

  it("System should be select Buat Notifikasi", async () => {
    await popupNotifRRP.Page();
  });

  it("I select time in Jam Berakhir", async () => {
    await popupNotifRRP.jamBerakhir();
  });

  it("System should be select Jam Berakhir", async () => {
    await popupNotifRRP.Page();
  });

  it("I input Yes in Positif Button (.*)", async (positif_button) => {
    await popupNotifRRP.positifButton(positif_button);
  });

  it("System should be input in Positif Button", async () => {
    await popupNotifRRP.Page();
  });

  it("I input No in Negatif Button (.*)", async (negatif_button) => {
    await popupNotifRRP.negatifButton(negatif_button);
  });

  it("System should be input in Negatif Button", async () => {
    await popupNotifRRP.Page();
  });

  it("I insert gambar in Tarik Gambar Popup Notifikasi in Gambar Popup Notifikasi", async () => {
    await popupNotifRRP.insertGambar();
  });

  it("System show Gambar Popup Notifikasi", async () => {
    await popupNotifRRP.Page();
  });

  it("I select Customer in Grup Pengguna", async () => {
    await popupNotifRRP.grupPengguna();
  });

  it("System should be select Customer in Grup Pengguna", async () => {
    await popupNotifRRP.Page();
  });

  it("I click radio button RRP in Tipe Konten", async () => {
    await popupNotifRRP.tipeKontenRRP();
  });

  it("System should be click radio button RRP", async () => {
    await popupNotifRRP.Page();
  });

  it("I input Dari in Batasan Umur (.*)", async (input_dari) => {
    await popupNotifRRP.BatasanUmurDari(input_dari);
  });

  it("System should be input Dari in Batasan Umur", async () => {
    await popupNotifRRP.Page();
  });

  it("I input Sampai in Batasan Umur (.*)", async (input_sampai) => {
    await popupNotifRRP.BatasanUmurSampai(input_sampai);
  });

  it("System should be input Sampai in Batasan Umur", async () => {
    await popupNotifRRP.Page();
  });

  it("I select Statistic Page in Tipe Konten", async () => {
    await popupNotifRRP.tipeKonten();
  });

  it("System should be select Statistic Page", async () => {
    await popupNotifRRP.Page();
  });

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await popupNotifRRP.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await popupNotifRRP.Page();
  });

  it("I click button Simpan", async () => {
    await popupNotifRRP.btnSimpan();
  });

  it("System should be submit data and leading to Daftar Popup Notifikasi page", async () => {
    await popupPage.Page();
  });
});
