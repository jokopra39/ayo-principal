import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spinthewheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import stwBatasanKategori1 from "../../../src/pageobjects/spinthewheel/68crud-spinthewheel(batasan-kategori-1).page";

//Scenario Outline: As a user, I can create Spin The Wheel batasan kategori 1
describe("[PRINCIPAL] 68. CRUD Spin the Wheel (Batasan 1 Kategori)", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Spin The Wheel page", async () => {
    await MainmenuPage.SpinTheWheel();
  });

  it("I click button Buat", async () => {
    await spinthewheelPage.tombolBuat();
  });

  // it("System should be leading to form Buat Spin The Wheel page", async () => {});

  // it("I am on the Buat Spin The Wheel page", async () => {});

  it("I input Nama Program (.*)", async (nama_program) => {
    await stwBatasanKategori1.NamaProgramSTW(nama_program);
  });

  // it("System should be able to input Nama Program", async () => {});

  it("I search and select data in Nama Trade Program (.*)", async (nama_trade_program) => {
    await stwBatasanKategori1.namaTradeProgram(nama_trade_program);
  });

  // it("System should be able to search and select data in Nama Trade Program", async () => {});

  it("I select date in Tanggal Mulai", async () => {
    await stwBatasanKategori1.tanggalMulai();
  });

  // it("System should be able to select date in Tanggal Mulai", async () => {});

  // it("I select time in Jam Terbit", async () => {});

  // it("System should be able to select time in Jam Terbit", async () => {});

  // it("I select date in Tanggal Berakhir", async () => {});

  // it("System should be able to select date in Tanggal Berakhir", async () => {});

  // it("I select time in Jam Berakhir", async () => {});

  // it("System should be able to select time in Jam Berakhir", async () => {});

  it("I click button Simpan in form tab Spin The Wheel", async () => {
    await stwBatasanKategori1.simpanSTW();
  });

  // it("System should be able to submit data and leading to Spin The Wheel Page", async () => {});

  it("I search in Spin The Wheel Page (.*)", async (nama_program) => {
    await spinthewheelPage.Search(nama_program);
  });

  // it("System should be able to search and find data", async () => {});

  it("I click button Edit in Spin The Wheel Page", async () => {
    await spinthewheelPage.Edit();
  });

  // it("System should be click button and leading to form Buat Spin The Wheel page", async () => {});

  it("I click tab Audience", async () => {
    await stwBatasanKategori1.tabAudience();
  });

  // it("System should be click tab Audience and leading to form tab Audience", async () => {});

  it("I select Fixed Panel", async () => {
    await stwBatasanKategori1.FixedPanel();
  });

  // it("System should be able to select Fixed Panel", async () => {});

  it("I click button Import XLSX and submit data", async () => {
    await stwBatasanKategori1.ImportTamplate();
    await stwBatasanKategori1.btnKirim();
  });

  // it("System should be click button Import XLSX and submit data", async () => {});

  it("I click button Export Template", async () => {
    await stwBatasanKategori1.ExportTamplate();
  });

  // it("System should be able to download Template", async () => {});

  it("I click button check", async () => {
    await stwBatasanKategori1.btnCheck();
  });

  // it("System should be check data and update panel blast", async () => {});

  it("I click button Simpan", async () => {
    await stwBatasanKategori1.btnSimpanAudience();
  });

  // it("System should be submit data in tab Audience", async () => {});

  it("I click tab pengaturan mekanisme", async () => {
    await stwBatasanKategori1.tabPengaturanMekanisme();
  });

  // it("System should be leading to form tab pengaturan mekanisme", async () => {});

  it("I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)", async (frekuensi_belanja) => {
    await stwBatasanKategori1.frekuensiBelanja(frekuensi_belanja);
  });

  // it("System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan", async () => {});

  it("I input Maksimal Frekuensi Reward User per Minggu (.*)", async (maksimal_frekuensi) => {
    await stwBatasanKategori1.maksimalFrekuensi(maksimal_frekuensi);
  });

  // it("System should be input Maksimal Frekuensi Reward User per Minggu", async () => {});

  it("I select radio button Pembatasan Produk dan Kategori", async () => {
    await stwBatasanKategori1.pembatasanProdukdanKategori();
  });

  // it("System should be select radio button Pembatasan Produk and Kategori", async () => {});

  it("I select radio button Batasi dengan Kategori", async () => {
    await stwBatasanKategori1.batasiDenganKategori();
  });

  // it("System should be select radio button Batasi dengan Kategori", async () => {});

  it("I click dropdown Batasan Berdasarkan Kategori and select data", async () => {
    await stwBatasanKategori1.BatasanBerdasarkanKategori();
  });

  // it("System should be select data", async () => {});

  it("I input Nilai Transaksi Minimal (.*)", async (nilai_transaksi_minimal) => {
    await stwBatasanKategori1.nilaiTransaksiMinimal(nilai_transaksi_minimal);
  });

  // it("System should be input Nilai Transaksi Minimal", async () => {});

  it("I input minimum nilai transaksi (.*)", async (minimum_nilai_transaksi) => {
    await stwBatasanKategori1.minimumNilaiTransaksi(minimum_nilai_transaksi);
  });

  // it("System should be input minimum nilai transaksi", async () => {});

  it("I input Limit spin (.*)", async (limit_spin) => {
    await stwBatasanKategori1.limitSpin(limit_spin);
  });

  // it("System should be input Limit Spin", async () => {});

  it("I input Jumlah Variasi Koin (.*)", async (jumlah_variasi_koin) => {
    await stwBatasanKategori1.jumlahVariasiCoin(jumlah_variasi_koin);
  });

  // it("System should be input Jumlah Variasi Koin", async () => {});

  it("I click button Reward Non coin", async () => {
    await stwBatasanKategori1.btnRewardNonCoin();
  });

  // it("System should be show input form", async () => {});

  it("I input coin1 (.*)", async (coin1) => {
    await stwBatasanKategori1.Coin1(coin1);
  });

  // it("System should be input coin1", async () => {});

  it("I input coin2 (.*)", async (coin2) => {
    await stwBatasanKategori1.Coin2(coin2);
  });

  // it("System should be input coin2", async () => {});

  it("I input non coin (.*)", async (noncoin) => {
    await stwBatasanKategori1.nonCoin(noncoin);
  });

  // it("System should be input non coin", async () => {});

  it("I input slice1 (.*)", async (slice1) => {
    await stwBatasanKategori1.Slice1(slice1);
  });

  // it("System should be input slice1", async () => {});

  it("I input slice2 (.*)", async (slice2) => {
    await stwBatasanKategori1.Slice2(slice2);
  });

  // it("System should be input slice2", async () => {});

  it("I input slice3 (.*)", async (slice3) => {
    await stwBatasanKategori1.Slice3(slice3);
  });

  // it("System should be input slice3", async () => {});

  it("I input probability1 (.*)", async (probability1) => {
    await stwBatasanKategori1.Probability1(probability1);
  });

  // it("System should be input probability1", async () => {});

  it("I input probability2 (.*)", async (probability2) => {
    await stwBatasanKategori1.Probability2(probability2);
  });

  // it("System should be input probability2", async () => {});

  it("I input probability3 (.*)", async (probability3) => {
    await stwBatasanKategori1.Probability3(probability3);
  });

  // it("System should be input probability3", async () => {});

  it("I click button Simpan in form tab Pengaturan Mekanisme", async () => {
    await stwBatasanKategori1.simpanTabPengaturanMekanisme();
  });

  // it("System should be able to submit data in form tab Pengaturan Mekanisme", async () => {});

  it("I click tab Preview", async () => {
    await stwBatasanKategori1.tabPreview();
  });

  // it("System should be leading to form tab Preview", async () => {});

  it("I insert Floating Icon and input Nama Program in form tab Preview (.*)", async (nama_program) => {
    await stwBatasanKategori1.NamaProgramPreview(nama_program);
    await stwBatasanKategori1.InsertGambar1();
  });

  // it("System should be insert floating icon and input Nama Program in form tab Preview", async () => {});

  it("I click button Simpan and Publish in form tab Preview", async () => {
    await stwBatasanKategori1.simpanPreview();
    await stwBatasanKategori1.publishTabPreview();
  });

  // it("System should be submit data and leading to Spin The Wheel Page", async () => {});

  it("I search and click button Delete in Spin The Wheel Page (.*)", async (nama_program) => {
    await spinthewheelPage.Search(nama_program);
    await spinthewheelPage.Delete();
  });

  // it("System should be able to find and Delete data", async () => {});
});
