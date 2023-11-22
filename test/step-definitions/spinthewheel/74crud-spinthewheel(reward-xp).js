import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spinthewheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import STWRewardXP from "../../../src/pageobjects/spinthewheel/74crud-spinthewheel(reward-xp).page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 74. CRUD Spin the Wheel (Reward XP)");
allureReporter.addFeature("CRUD Spin the Wheel (Reward XP)");

//Scenario Outline: As a user, I can create Spin The Wheel reward xp
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
  await STWRewardXP.NamaProgramSTW(nama_program);
});

it("System should be able to input Nama Program", async () => {});

it("I search and select data in Nama Trade Program (.*)", async (nama_trade_program) => {
  await STWRewardXP.namaTradeProgram(nama_trade_program);
});

it("System should be able to search and select data in Nama Trade Program", async () => {});

it("I select date in Tanggal Mulai", async () => {
  await STWRewardXP.tanggalMulai();
});

it("System should be able to select date in Tanggal Mulai", async () => {});

it("I select time in Jam Terbit", async () => {});

it("System should be able to select time in Jam Terbit", async () => {});

it("I select date in Tanggal Berakhir", async () => {});

it("System should be able to select date in Tanggal Berakhir", async () => {});

it("I select time in Jam Berakhir", async () => {});

it("System should be able to select time in Jam Berakhir", async () => {});

it("I click button Simpan in form tab Spin The Wheel", async () => {
  await STWRewardXP.simpanSTW();
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
  await STWRewardXP.tabAudience();
});

it("System should be click tab Audience and leading to form tab Audience", async () => {});

it("I select Fixed Panel", async () => {
  await STWRewardXP.FixedPanel();
});

it("System should be able to select Fixed Panel", async () => {});

it("I click button Import XLSX and submit data", async () => {
  await STWRewardXP.ImportTamplate();
  await STWRewardXP.btnKirim();
});

it("System should be click button Import XLSX and submit data", async () => {});

it("I click button Export Template", async () => {
  await STWRewardXP.ExportTamplate();
});

it("System should be able to download Template", async () => {});

it("I click button check", async () => {
  await STWRewardXP.btnCheck();
});

it("System should be check data and update panel blast", async () => {});

it("I click button Simpan", async () => {
  await STWRewardXP.btnSimpanAudience();
});

it("System should be submit data in tab Audience", async () => {});

it("I click tab pengaturan mekanisme", async () => {
  await STWRewardXP.tabPengaturanMekanisme();
});

it("System should be leading to form tab pengaturan mekanisme", async () => {});

it("I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)", async (frekuensi_belanja) => {
  await STWRewardXP.frekuensiBelanja(frekuensi_belanja);
});

it("System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan", async () => {});

it("I input Maksimal Frekuensi Reward User per Minggu (.*)", async (maksimal_frekuensi) => {
  await STWRewardXP.maksimalFrekuensi(maksimal_frekuensi);
});

it("System should be input Maksimal Frekuensi Reward User per Minggu", async () => {});

it("I select radio button Pembatasan Produk dan Kategori", async () => {
  await STWRewardXP.pembatasanProdukdanKategori();
});

it("System should be select radio button Pembatasan Produk and Kategori", async () => {});

it("I select radio button Batasi dengan Produk", async () => {
  await STWRewardXP.batasiDenganProduk();
});

it("System should be select radio button Batasi dengan Produk", async () => {});

it("I search and select data in Batasan Berdasarkan Produk (.*)", async (batasan_berdasarkan_produk) => {
  await STWRewardXP.batasanBerdasarkanProduk(batasan_berdasarkan_produk);
});

it("System should be able to search and select data in Batasan Berdasarkan Produk", async () => {});

it("I input Nilai Transaksi Minimal (.*)", async (nilai_transaksi_minimal) => {
  await STWRewardXP.nilaiTransaksiMinimal(nilai_transaksi_minimal);
});

it("System should be input Nilai Transaksi Minimal", async () => {});

it("I input minimum nilai transaksi (.*)", async (minimum_nilai_transaksi) => {
  await STWRewardXP.minimumNilaiTransaksi(minimum_nilai_transaksi);
});

it("System should be input minimum nilai transaksi", async () => {});

it("I input Limit spin (.*)", async (limit_spin) => {
  await STWRewardXP.limitSpin(limit_spin);
});

it("System should be input Limit Spin", async () => {});

it("I click button Reward Non coin and delete", async () => {
  await STWRewardXP.btnRewardNonCoin();
  await STWRewardXP.Delete1();
});

it("System should be show input form non coin and delete", async () => {});

it("I click button Reward XP and delete", async () => {
  await STWRewardXP.RewardXP();
  await STWRewardXP.Delete1();
});

it("System should be show input form Reward XP and delete", async () => {});

it("I click button Reward XP", async () => {
  await STWRewardXP.RewardXP();
});

it("System should be show input form Reward XP", async () => {});

it("I input XP(.*)", async (xp) => {
  await STWRewardXP.inputXP(xp);
});

it("System should be input XP", async () => {});

it("I input slice (.*)", async (slice) => {
  await STWRewardXP.Slice(slice);
});

it("System should be input slice", async () => {});

it("I input probability (.*)", async (probability) => {
  await STWRewardXP.Probability(probability);
});

it("System should be input probability", async () => {});

it("System should be input probability3", async () => {});

it("I click button Simpan in form tab Pengaturan Mekanisme", async () => {
  await STWRewardXP.simpanTabPengaturanMekanisme();
});

it("System should be able to submit data in form tab Pengaturan Mekanisme", async () => {});

it("I click tab Preview", async () => {
  await STWRewardXP.tabPreview();
});

it("System should be leading to form tab Preview", async () => {});

it("I insert Floating Icon and input Nama Program in form tab Preview (.*)", async (nama_program) => {
  await STWRewardXP.NamaProgramPreview(nama_program);
  await STWRewardXP.InsertGambar1();
});

it("System should be insert floating icon and input Nama Program in form tab Preview", async () => {});

it("I click button Simpan and Publish in form tab Preview", async () => {
  await STWRewardXP.simpanPreview();
  await STWRewardXP.publishTabPreview();
});

it("System should be submit data and leading to Spin The Wheel Page", async () => {});

it("I search and click button Delete in Spin The Wheel Page (.*)", async (nama_program) => {
  await spinthewheelPage.Search(nama_program);
  await spinthewheelPage.Delete();
});

it("System should be able to find and Delete data", async () => {});
