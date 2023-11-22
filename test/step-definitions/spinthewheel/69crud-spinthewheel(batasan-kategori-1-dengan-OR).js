import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spinthewheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import stwBatasanKategori1OR from "../../../src/pageobjects/spinthewheel/69crud-spinthewheel(batasan-kategori-1-dengan-OR).page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 69. CRUD Spin the Wheel (Batasan > 1 Kategori dengan OR)"
);
allureReporter.addFeature(
  "CRUD Spin the Wheel (Batasan > 1 Kategori dengan OR)"
);

//Scenario Outline: As a user, I can create Spin The Wheel batasan kategori 1 dengan OR
it("I am on the Spin The Wheel page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();
});

it("I click button Buat", async () => {
  await spinthewheelPage.tombolBuat();
});

it("System should be leading to form Buat Spin The Wheel page", async () => {});

it("I am on the Buat Spin The Wheel page", async () => {});

it("I input Nama Program (.*)", async (nama_program) => {
  await stwBatasanKategori1OR.NamaProgramSTW(nama_program);
});

it("System should be able to input Nama Program", async () => {});

it("I search and select data in Nama Trade Program (.*)", async (nama_trade_program) => {
  await stwBatasanKategori1OR.namaTradeProgram(nama_trade_program);
});

it("System should be able to search and select data in Nama Trade Program", async () => {});

it("I select date in Tanggal Mulai", async () => {
  await stwBatasanKategori1OR.tanggalMulai();
});

it("System should be able to select date in Tanggal Mulai", async () => {});

it("I select time in Jam Terbit", async () => {});

it("System should be able to select time in Jam Terbit", async () => {});

it("I select date in Tanggal Berakhir", async () => {});

it("System should be able to select date in Tanggal Berakhir", async () => {});

it("I select time in Jam Berakhir", async () => {});

it("System should be able to select time in Jam Berakhir", async () => {});

it("I click button Simpan in form tab Spin The Wheel", async () => {
  await stwBatasanKategori1OR.simpanSTW();
});

it("System should be able to submit data and leading to Spin The Wheel Page", async () => {});

it("I search in Spin The Wheel Page (.*)", async (nama_program) => {
  await spinthewheelPage.Search(nama_program);
});

it("System should be able to search and find data", async () => {});

it("I click button Edit in Spin The Wheel Page", async () => {
  await spinthewheelPage.Edit();
});

it("System should be click button and leading to form Buat Spin The Wheel page", async () => {});

it("I click tab Audience", async () => {
  await stwBatasanKategori1OR.tabAudience();
});

it("System should be click tab Audience and leading to form tab Audience", async () => {});

it("I select Fixed Panel", async () => {
  await stwBatasanKategori1OR.FixedPanel();
});

it("System should be able to select Fixed Panel", async () => {});

it("I click button Import XLSX and submit data", async () => {
  await stwBatasanKategori1OR.ImportTamplate();
  await stwBatasanKategori1OR.btnKirim();
});

it("System should be click button Import XLSX and submit data", async () => {});

it("I click button Export Template", async () => {
  await stwBatasanKategori1OR.ExportTamplate();
});

it("System should be able to download Template", async () => {});

it("I click button check", async () => {
  await stwBatasanKategori1OR.btnCheck();
});

it("System should be check data and update panel blast", async () => {});

it("I click button Simpan", async () => {
  await stwBatasanKategori1OR.btnSimpanAudience();
});

it("System should be submit data in tab Audience", async () => {});

it("I click tab pengaturan mekanisme", async () => {
  await stwBatasanKategori1OR.tabPengaturanMekanisme();
});

it("System should be leading to form tab pengaturan mekanisme", async () => {});

it("I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)", async (frekuensi_belanja) => {
  await stwBatasanKategori1OR.frekuensiBelanja(frekuensi_belanja);
});

it("System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan", async () => {});

it("I input Maksimal Frekuensi Reward User per Minggu (.*)", async (maksimal_frekuensi) => {
  await stwBatasanKategori1OR.maksimalFrekuensi(maksimal_frekuensi);
});

it("System should be input Maksimal Frekuensi Reward User per Minggu", async () => {});

it("I select radio button Pembatasan Produk dan Kategori", async () => {
  await stwBatasanKategori1OR.pembatasanProdukdanKategori();
});

it("System should be select radio button Pembatasan Produk and Kategori", async () => {});

it("I select radio button Batasi dengan Kategori", async () => {
  await stwBatasanKategori1OR.batasiDenganKategori();
});

it("System should be select radio button Batasi dengan Kategori", async () => {});

it("I click dropdown Batasan Berdasarkan Kategori and select data", async () => {
  await stwBatasanKategori1OR.BatasanBerdasarkanKategori();
});

it("System should be select data", async () => {});

it("I input Nilai Transaksi Minimal1 (.*)", async (nilai_transaksi_minimal1) => {
  await stwBatasanKategori1OR.nilaiTransaksiMinimal1(nilai_transaksi_minimal1);
});

it("System should be input Nilai Transaksi Minimal1", async () => {});

it("I input Nilai Transaksi Minimal2 (.*)", async (nilai_transaksi_minimal2) => {
  await stwBatasanKategori1OR.nilaiTransaksiMinimal2(nilai_transaksi_minimal2);
});

it("System should be input Nilai Transaksi Minimal2", async () => {});

it("I select radio button OR in Kombinasi Pembatasan Produk Kategori", async () => {
  await stwBatasanKategori1OR.OR();
});

it("System should be select radio button OR", async () => {});

it("I input minimum nilai transaksi (.*)", async (minimum_nilai_transaksi) => {
  await stwBatasanKategori1OR.minimumNilaiTransaksi(minimum_nilai_transaksi);
});

it("System should be input minimum nilai transaksi", async () => {});

it("I input Limit spin (.*)", async (limit_spin) => {
  await stwBatasanKategori1OR.limitSpin(limit_spin);
});

it("System should be input Limit Spin", async () => {});

it("I click button Reward Non coin1", async () => {
  await stwBatasanKategori1OR.btnRewardNonCoin();
});

it("System should be show input form1", async () => {});

it("I input non coin1 (.*)", async (noncoin1) => {
  await stwBatasanKategori1OR.nonCoin1(noncoin1);
});

it("System should be input non coin1", async () => {});

it("I click button Reward Non coin2", async () => {
  await stwBatasanKategori1OR.btnRewardNonCoin();
});

it("System should be show input form2", async () => {});

it("I input non coin2 (.*)", async (noncoin2) => {
  await stwBatasanKategori1OR.nonCoin2(noncoin2);
});

it("System should be input non coin2", async () => {});

it("I input slice1 (.*)", async (slice1) => {
  await stwBatasanKategori1OR.Slice1(slice1);
});

it("System should be input slice1", async () => {});

it("I input slice2 (.*)", async (slice2) => {
  await stwBatasanKategori1OR.Slice2(slice2);
});

it("System should be input slice2", async () => {});

it("I input probability1 (.*)", async (probability1) => {
  await stwBatasanKategori1OR.Probability1(probability1);
});

it("System should be input probability1", async () => {});

it("I input probability2 (.*)", async (probability2) => {
  await stwBatasanKategori1OR.Probability2(probability2);
});

it("System should be input probability2", async () => {});

it("I click button Simpan in form tab Pengaturan Mekanisme", async () => {
  await stwBatasanKategori1OR.simpanTabPengaturanMekanisme();
});

it("System should be able to submit data in form tab Pengaturan Mekanisme", async () => {});

it("I click tab Preview", async () => {
  await stwBatasanKategori1OR.tabPreview();
});

it("System should be leading to form tab Preview", async () => {});

it("I insert Floating Icon and input Nama Program in form tab Preview (.*)", async (nama_program) => {
  await stwBatasanKategori1OR.NamaProgramPreview(nama_program);
  await stwBatasanKategori1OR.InsertGambar1();
});

it("System should be insert floating icon and input Nama Program in form tab Preview", async () => {});

it("I click button Simpan and Publish in form tab Preview", async () => {
  await stwBatasanKategori1OR.simpanPreview();
  await stwBatasanKategori1OR.publishTabPreview();
});

it("System should be submit data and leading to Spin The Wheel Page", async () => {});

it("I search and click button Delete in Spin The Wheel Page (.*)", async (nama_program) => {
  await spinthewheelPage.Search(nama_program);
  await spinthewheelPage.Delete();
});

it("System should be able to find and Delete data", async () => {});
