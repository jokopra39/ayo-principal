import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spinthewheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import ExcludeKategori1 from "../../../src/pageobjects/spinthewheel/72crud-spinthewheel(exclude-kategori-1).page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 72. CRUD Spin the Wheel (Exclude 1 Kategori)"
);
allureReporter.addFeature("CRUD Spin the Wheel (Exclude 1 Kategori)");

//Scenario Outline: As a user, I can create Spin The Wheel exclude kategori 1
it("I am on the Spin The Wheel page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();
});

it("I click button Buat", async () => {
  // await spinthewheelPage.tombolBuat();
});

it("System should be leading to form Buat Spin The Wheel page", async () => {});

it("I am on the Buat Spin The Wheel page", async () => {});

it("I input Nama Program (.*)", async (nama_program) => {
  // await ExcludeKategori1.NamaProgramSTW(nama_program);
});

it("System should be able to input Nama Program", async () => {});

it("I search and select data in Nama Trade Program (.*)", async (nama_trade_program) => {
  // await ExcludeKategori1.namaTradeProgram(nama_trade_program);
});

it("System should be able to search and select data in Nama Trade Program", async () => {});

it("I select date in Tanggal Mulai", async () => {
  // await ExcludeKategori1.tanggalMulai();
});

it("System should be able to select date in Tanggal Mulai", async () => {});

it("I select time in Jam Terbit", async () => {});

it("System should be able to select time in Jam Terbit", async () => {});

it("I select date in Tanggal Berakhir", async () => {});

it("System should be able to select date in Tanggal Berakhir", async () => {});

it("I select time in Jam Berakhir", async () => {});

it("System should be able to select time in Jam Berakhir", async () => {});

it("I click button Simpan in form tab Spin The Wheel", async () => {
  // await ExcludeKategori1.simpanSTW();
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
  // await ExcludeKategori1.tabAudience();
});

it("System should be click tab Audience and leading to form tab Audience", async () => {});

it("I select Fixed Panel", async () => {
  // await ExcludeKategori1.FixedPanel();
});

it("System should be able to select Fixed Panel", async () => {});

it("I click button Import XLSX and submit data", async () => {
  // await ExcludeKategori1.ImportTamplate();
  // await ExcludeKategori1.btnKirim();
});

it("System should be click button Import XLSX and submit data", async () => {});

it("I click button Export Template", async () => {
  // await ExcludeKategori1.ExportTamplate();
});

it("System should be able to download Template", async () => {});

it("I click button check", async () => {
  // await ExcludeKategori1.btnCheck();
});

it("System should be check data and update panel blast", async () => {});

it("I click button Simpan", async () => {
  // await ExcludeKategori1.btnSimpanAudience();
});

it("System should be submit data in tab Audience", async () => {});

it("I click tab pengaturan mekanisme", async () => {
  await ExcludeKategori1.tabPengaturanMekanisme();
});

it("System should be leading to form tab pengaturan mekanisme", async () => {});

it("I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)", async (frekuensi_belanja) => {
  await ExcludeKategori1.frekuensiBelanja(frekuensi_belanja);
});

it("System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan", async () => {});

it("I input Maksimal Frekuensi Reward User per Minggu (.*)", async (maksimal_frekuensi) => {
  await ExcludeKategori1.maksimalFrekuensi(maksimal_frekuensi);
});

it("System should be input Maksimal Frekuensi Reward User per Minggu", async () => {});

it("I select radio button Exclude", async () => {
  await ExcludeKategori1.Exclude();
});

it("System should be select radio button Exclude", async () => {});

it("I select radio button Batasi dengan Kategori", async () => {
  await ExcludeKategori1.batasiDenganKategori();
});

it("System should be select radio button Batasi dengan Kategori", async () => {});

it("I select data in Batasan Berdasarkan Kategori", async () => {
  await ExcludeKategori1.batasanBerdasarkanKategori();
});

it("System should be able to select data in Batasan Berdasarkan Kategori", async () => {});

it("I input minimum nilai transaksi (.*)", async (minimum_nilai_transaksi) => {
  await ExcludeKategori1.minimumNilaiTransaksi(minimum_nilai_transaksi);
});

it("System should be input minimum nilai transaksi", async () => {});

it("I input Limit spin (.*)", async (limit_spin) => {
  await ExcludeKategori1.limitSpin(limit_spin);
});

it("System should be input Limit Spin", async () => {});

it("I input Jumlah Variasi Koin (.*)", async (jumlah_variasi_koin) => {
  await ExcludeKategori1.jumlahVariasiCoin(jumlah_variasi_koin);
});

it("System should be input Jumlah Variasi Koin", async () => {});

it("I click button Reward Non coin", async () => {
  await ExcludeKategori1.btnRewardNonCoin();
});

it("System should be show input form non coin", async () => {});

it("I input coin1 (.*)", async (coin1) => {
  await ExcludeKategori1.Coin1(coin1);
});

it("System should be input coin1", async () => {});

it("I input coin2 (.*)", async (coin2) => {
  await ExcludeKategori1.Coin2(coin2);
});

it("System should be input coin2", async () => {});

it("I input coin3 (.*)", async (coin3) => {
  await ExcludeKategori1.Coin3(coin3);
});

it("System should be input coin3", async () => {});

it("I input non coin (.*)", async (noncoin) => {
  await ExcludeKategori1.nonCoin(noncoin);
});

it("System should be input non coin", async () => {});

it("I input slice1 (.*)", async (slice1) => {
  await ExcludeKategori1.Slice1(slice1);
});

it("System should be input slice1", async () => {});

it("I input slice2 (.*)", async (slice2) => {
  await ExcludeKategori1.Slice2(slice2);
});

it("System should be input slice2", async () => {});

it("I input slice3 (.*)", async (slice3) => {
  await ExcludeKategori1.Slice3(slice3);
});

it("System should be input slice3", async () => {});

it("I input slice4 (.*)", async (slice4) => {
  await ExcludeKategori1.Slice4(slice4);
});

it("System should be input slice4", async () => {});

it("I input probability1 (.*)", async (probability1) => {
  await ExcludeKategori1.Probability1(probability1);
});

it("System should be input probability1", async () => {});

it("I input probability2 (.*)", async (probability2) => {
  await ExcludeKategori1.Probability2(probability2);
});

it("System should be input probability2", async () => {});

it("I input probability3 (.*)", async (probability3) => {
  await ExcludeKategori1.Probability3(probability3);
});

it("System should be input probability3", async () => {});

it("I input probability4 (.*)", async (probability4) => {
  await ExcludeKategori1.Probability4(probability4);
});

it("System should be input probability4", async () => {});

it("I click button Simpan in form tab Pengaturan Mekanisme", async () => {
  await ExcludeKategori1.simpanTabPengaturanMekanisme();
});

it("System should be able to submit data in form tab Pengaturan Mekanisme", async () => {});

it("I click tab Preview", async () => {
  await ExcludeKategori1.tabPreview();
});

it("System should be leading to form tab Preview", async () => {});

it("I insert Floating Icon and input Nama Program in form tab Preview (.*)", async (nama_program) => {
  await ExcludeKategori1.NamaProgramPreview(nama_program);
  await ExcludeKategori1.InsertGambar1();
});

it("System should be insert floating icon and input Nama Program in form tab Preview", async () => {});

it("I click button Simpan and Publish in form tab Preview", async () => {
  await ExcludeKategori1.simpanPreview();
  await ExcludeKategori1.publishTabPreview();
});

it("System should be submit data and leading to Spin The Wheel Page", async () => {});

it("I search and click button Delete in Spin The Wheel Page (.*)", async (nama_program) => {
  await spinthewheelPage.Search(nama_program);
  await spinthewheelPage.Delete();
});

it("System should be able to find and Delete data", async () => {});
