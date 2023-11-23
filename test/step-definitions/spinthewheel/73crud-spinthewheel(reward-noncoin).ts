import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spinthewheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import STWRewardNonCoin from "../../../src/pageobjects/spinthewheel/73crud-spinthewheel(reward-noncoin).page";

//Scenario Outline: As a user, I can create Spin The Wheel reward noncoin
describe("[PRINCIPAL] 73. CRUD Spin the Wheel (Reward Non Coin)", () => {
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
    await STWRewardNonCoin.NamaProgramSTW(nama_program);
  });

  // it("System should be able to input Nama Program", async () => {});

  it("I search and select data in Nama Trade Program (.*)", async (nama_trade_program) => {
    await STWRewardNonCoin.namaTradeProgram(nama_trade_program);
  });

  // it("System should be able to search and select data in Nama Trade Program", async () => {});

  it("I select date in Tanggal Mulai", async () => {
    await STWRewardNonCoin.tanggalMulai();
  });

  // it("System should be able to select date in Tanggal Mulai", async () => {});

  // it("I select time in Jam Terbit", async () => {});

  // it("System should be able to select time in Jam Terbit", async () => {});

  // it("I select date in Tanggal Berakhir", async () => {});

  // it("System should be able to select date in Tanggal Berakhir", async () => {});

  // it("I select time in Jam Berakhir", async () => {});

  // it("System should be able to select time in Jam Berakhir", async () => {});

  it("I click button Simpan in form tab Spin The Wheel", async () => {
    await STWRewardNonCoin.simpanSTW();
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
    await STWRewardNonCoin.tabAudience();
  });

  // it("System should be click tab Audience and leading to form tab Audience", async () => {});

  it("I select Fixed Panel", async () => {
    await STWRewardNonCoin.FixedPanel();
  });

  // it("System should be able to select Fixed Panel", async () => {});

  it("I click button Import XLSX and submit data", async () => {
    await STWRewardNonCoin.ImportTamplate();
    await STWRewardNonCoin.btnKirim();
  });

  // it("System should be click button Import XLSX and submit data", async () => {});

  it("I click button Export Template", async () => {
    await STWRewardNonCoin.ExportTamplate();
  });

  // it("System should be able to download Template", async () => {});

  it("I click button check", async () => {
    await STWRewardNonCoin.btnCheck();
  });

  // it("System should be check data and update panel blast", async () => {});

  it("I click button Simpan", async () => {
    await STWRewardNonCoin.btnSimpanAudience();
  });

  // it("System should be submit data in tab Audience", async () => {});

  it("I click tab pengaturan mekanisme", async () => {
    await STWRewardNonCoin.tabPengaturanMekanisme();
  });

  // it("System should be leading to form tab pengaturan mekanisme", async () => {});

  it("I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)", async (frekuensi_belanja) => {
    await STWRewardNonCoin.frekuensiBelanja(frekuensi_belanja);
  });

  // it("System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan", async () => {});

  it("I input Maksimal Frekuensi Reward User per Minggu (.*)", async (maksimal_frekuensi) => {
    await STWRewardNonCoin.maksimalFrekuensi(maksimal_frekuensi);
  });

  // it("System should be input Maksimal Frekuensi Reward User per Minggu", async () => {});

  it("I select radio button Pembatasan Produk dan Kategori", async () => {
    await STWRewardNonCoin.pembatasanProdukdanKategori();
  });

  // it("System should be select radio button Pembatasan Produk and Kategori", async () => {});

  it("I select radio button Batasi dengan Produk", async () => {
    await STWRewardNonCoin.batasiDenganProduk();
  });

  // it("System should be select radio button Batasi dengan Produk", async () => {});

  it("I search and select data in Batasan Berdasarkan Produk (.*)", async (batasan_berdasarkan_produk) => {
    await STWRewardNonCoin.batasanBerdasarkanProduk(batasan_berdasarkan_produk);
  });

  // it("System should be able to search and select data in Batasan Berdasarkan Produk", async () => {});

  it("I input Nilai Transaksi Minimal (.*)", async (nilai_transaksi_minimal) => {
    await STWRewardNonCoin.nilaiTransaksiMinimal(nilai_transaksi_minimal);
  });

  // it("System should be input Nilai Transaksi Minimal", async () => {});

  it("I input minimum nilai transaksi (.*)", async (minimum_nilai_transaksi) => {
    await STWRewardNonCoin.minimumNilaiTransaksi(minimum_nilai_transaksi);
  });

  // it("System should be input minimum nilai transaksi", async () => {});

  it("I input Limit spin (.*)", async (limit_spin) => {
    await STWRewardNonCoin.limitSpin(limit_spin);
  });

  // it("System should be input Limit Spin", async () => {});

  it("I click button Reward Non coin", async () => {
    await STWRewardNonCoin.btnRewardNonCoin();
  });

  // it("System should be show input form non coin", async () => {});

  it("I input non coin (.*)", async (noncoin) => {
    await STWRewardNonCoin.nonCoin(noncoin);
  });

  // it("System should be input non coin", async () => {});

  it("I input slice (.*)", async (slice) => {
    await STWRewardNonCoin.Slice(slice);
  });

  // it("System should be input slice", async () => {});

  it("I input probability (.*)", async (probability) => {
    await STWRewardNonCoin.Probability(probability);
  });

  // it("System should be input probability", async () => {});

  // it("System should be input probability3", async () => {});

  it("I click button Simpan in form tab Pengaturan Mekanisme", async () => {
    await STWRewardNonCoin.simpanTabPengaturanMekanisme();
  });

  // it("System should be able to submit data in form tab Pengaturan Mekanisme", async () => {});

  it("I click tab Preview", async () => {
    await STWRewardNonCoin.tabPreview();
  });

  // it("System should be leading to form tab Preview", async () => {});

  it("I insert Floating Icon and input Nama Program in form tab Preview (.*)", async (nama_program) => {
    await STWRewardNonCoin.NamaProgramPreview(nama_program);
    await STWRewardNonCoin.InsertGambar1();
  });

  // it("System should be insert floating icon and input Nama Program in form tab Preview", async () => {});

  it("I click button Simpan and Publish in form tab Preview", async () => {
    await STWRewardNonCoin.simpanPreview();
    await STWRewardNonCoin.publishTabPreview();
  });

  // it("System should be submit data and leading to Spin The Wheel Page", async () => {});

  it("I search and click button Delete in Spin The Wheel Page (.*)", async (nama_program) => {
    await spinthewheelPage.Search(nama_program);
    await spinthewheelPage.Delete();
  });

  // it("System should be able to find and Delete data", async () => {});
});
