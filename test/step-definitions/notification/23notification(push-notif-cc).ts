import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import notifikasiPage from "../../../src/pageobjects/notification/buat-notifikasi.page";
import createNotifikasiPushCc from "../../../src/pageobjects/notification/23push-notif-cc.page";

describe("[PRINCIPAL] 23. Push Notifikasi CC", () => {
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
    await createNotifikasiPushCc.Page();
  });

  it("I am on the Buat Notifikasi page", async () => {
    await createNotifikasiPushCc.formPage();
  });

  it("I input Judul Notifikasi (.*)", async (judul_notifkasi) => {
    await createNotifikasiPushCc.buatNotifikasiInput(judul_notifkasi);
  });

  it("System should be input Judul Notifikasi", async () => {
    await createNotifikasiPushCc.Page();
  });

  it("I input Konten Notifikasi (.*)", async (konten_notifikasi) => {
    await createNotifikasiPushCc.kontenNotifikasi(konten_notifikasi);
  });

  it("System should be input Konten Notifikasi", async () => {
    await createNotifikasiPushCc.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await createNotifikasiPushCc.grupPengguna();
  });

  it("System should be click Customer", async () => {
    await createNotifikasiPushCc.Page();
  });

  it("I select time in Jam Terbit", async () => {
    await createNotifikasiPushCc.jamTerbit();
  });

  it("System should be select select Jam Terbit", async () => {
    await createNotifikasiPushCc.Page();
  });

  it("I input Nama Halaman(.*)", async (nama_halaman) => {
    await createNotifikasiPushCc.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await createNotifikasiPushCc.Page();
  });

  it("I input Isi Halaman(.*)", async (isi_halaman) => {
    await createNotifikasiPushCc.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await createNotifikasiPushCc.Page();
  });

  it("I click CC in Tipe Konten", async () => {
    await createNotifikasiPushCc.tipeKonten();
  });

  it("System should be click CC", async () => {
    await createNotifikasiPushCc.Page();
  });

  it("I click Semua in Batas Umur", async () => {
    await createNotifikasiPushCc.batasUmur();
  });

  it("System should be click Semua in Batas Umur", async () => {
    await createNotifikasiPushCc.Page();
  });

  it("I click button Simpan", async () => {
    await createNotifikasiPushCc.btnSimpan();
  });

  it("System should be submit data and leading to Daftar Notifikasi page", async () => {
    await notifikasiPage.Page();
  });
});
