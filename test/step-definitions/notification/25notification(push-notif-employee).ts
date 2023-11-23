import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import notifikasiPage from "../../../src/pageobjects/notification/buat-notifikasi.page";
import createNotifikasiEmployee from "../../../src/pageobjects/notification/25push-notif-employee.page";

describe("[PRINCIPAL] 25. Push Notifikasi Employee Only", () => {
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
    await createNotifikasiEmployee.Page();
  });

  it("I am on the Buat Notifikasi page", async () => {
    await createNotifikasiEmployee.formPage();
  });

  it("I input Judul Notifikasi (.*)", async (judul_notifkasi) => {
    await createNotifikasiEmployee.buatNotifikasiInput(judul_notifkasi);
  });

  it("System should be input Judul Notifikasi", async () => {
    await createNotifikasiEmployee.Page();
  });

  it("I input Konten Notifikasi (.*)", async (konten_notifikasi) => {
    await createNotifikasiEmployee.kontenNotifikasi(konten_notifikasi);
  });

  it("System should be input Konten Notifikasi", async () => {
    await createNotifikasiEmployee.Page();
  });

  it("I click Customer in Grup Pengguna", async () => {
    await createNotifikasiEmployee.grupPengguna();
  });

  it("System should be click Customer", async () => {
    await createNotifikasiEmployee.Page();
  });

  it("I select time in Jam Terbit", async () => {
    await createNotifikasiEmployee.jamTerbit();
  });

  it("System should be select select Jam Terbit", async () => {
    await createNotifikasiEmployee.Page();
  });

  it("I input Nama Halaman(.*)", async (nama_halaman) => {
    await createNotifikasiEmployee.namaHalaman(nama_halaman);
  });

  it("System should be input Nama Halaman", async () => {
    await createNotifikasiEmployee.Page();
  });

  it("I input Isi Halaman(.*)", async (isi_halaman) => {
    await createNotifikasiEmployee.isiHalaman(isi_halaman);
  });

  it("System should be input Isi Halaman", async () => {
    await createNotifikasiEmployee.Page();
  });

  it("I select Employee only in Filter Pengguna Tipe Employee", async () => {
    await createNotifikasiEmployee.tipeEmployee();
  });

  it("System should be select Employee only", async () => {
    await createNotifikasiEmployee.Page();
  });

  it("I click CC in Tipe Konten", async () => {
    await createNotifikasiEmployee.tipeKonten();
  });

  it("System should be click CC", async () => {
    await createNotifikasiEmployee.Page();
  });

  it("I click Semua in Batas Umur", async () => {
    await createNotifikasiEmployee.batasUmur();
  });

  it("System should be click Semua in Batas Umur", async () => {
    await createNotifikasiEmployee.Page();
  });

  it("I click button Simpan", async () => {
    await createNotifikasiEmployee.btnSimpan();
  });

  it("System should be submit data and leading to Daftar Notifikasi page", async () => {
    await notifikasiPage.Page();
  });
});
