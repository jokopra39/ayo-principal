import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import notifikasiPage from "../../../src/pageobjects/notification/buat-notifikasi.page";
import createNotifikasiPushRrp from "../../../src/pageobjects/notification/24push-notif-rrp.page";

describe("[PRINCIPAL] 24. Push Notifikasi RRP", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Daftar Notifikasi page", async () => {
    await MainmenuPage.buatNotifikasi();
  });

  it("I click button Buat", async () => {
    await notifikasiPage.tombolBuat();
  });

  it("System should be leading to Buat Notifikasi page", async () => {
    await createNotifikasiPushRrp.Page();
  });

  // it("I am on the Buat Notifikasi page", async () => {
  //   await createNotifikasiPushRrp.formPage();
  // });

  it("I input Judul Notifikasi (.*)", async (judul_notifkasi) => {
    await createNotifikasiPushRrp.buatNotifikasiInput(judul_notifkasi);
  });

  it("System should be input Judul Notifikasi", async () => {
    await createNotifikasiPushRrp.Page();
  });

  it("I input Konten Notifikasi (.*)", async (konten_notifikasi) => {
    await createNotifikasiPushRrp.kontenNotifikasi(konten_notifikasi);
  });

  it("System should be input Konten Notifikasi", async () => {
    await createNotifikasiPushRrp.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await createNotifikasiPushRrp.grupPengguna();
  });

  it("System should be click Customer", async () => {
    await createNotifikasiPushRrp.Page();
  });

  it("I select time in Jam Terbit", async () => {
    await createNotifikasiPushRrp.jamTerbit();
  });

  it("System should be select select Jam Terbit", async () => {
    await createNotifikasiPushRrp.Page();
  });

  it("I input Nama Halaman(.*)", async (nama_halaman) => {
    await createNotifikasiPushRrp.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await createNotifikasiPushRrp.Page();
  });

  it("I input Isi Halaman(.*)", async (isi_halaman) => {
    await createNotifikasiPushRrp.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await createNotifikasiPushRrp.Page();
  });

  it("I click RRP in Tipe Konten", async () => {
    await createNotifikasiPushRrp.tipeKonten();
  });

  it("System should be click RRP", async () => {
    await createNotifikasiPushRrp.Page();
  });

  it("I click Semua in Batas Umur", async () => {
    await createNotifikasiPushRrp.batasUmur();
  });

  it("System should be click Semua in Batas Umur", async () => {
    await createNotifikasiPushRrp.Page();
  });

  it("I click button Simpan", async () => {
    await createNotifikasiPushRrp.btnSimpan();
  });

  it("System should be submit data and leading to Daftar Notifikasi page", async () => {
    await notifikasiPage.Page();
  });
});
