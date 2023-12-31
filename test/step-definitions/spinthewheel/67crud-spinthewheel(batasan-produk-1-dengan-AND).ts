import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spinthewheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import stwBatasanProduk1AND from "../../../src/pageobjects/spinthewheel/67crud-spinthewheel(batasan-produk-1-dengan-AND).page";

//Scenario Outline: As a user, I can create Spin The Wheel batasan produk 1 dengan AND
describe("[PRINCIPAL] 67. CRUD Spin the Wheel (Batasan > 1 Produk dengan AND)", () => {
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
    // await spinthewheelPage.tombolBuat();
  });

  // it("System should be leading to form Buat Spin The Wheel page", async () => {});

  // it("I am on the Buat Spin The Wheel page", async () => {});

  // it("I input Nama Program (.*)", async (nama_program) => {
  //   // await stwBatasanProduk1AND.NamaProgramSTW(nama_program);
  // });

  // it("System should be able to input Nama Program", async () => {});

  // it("I search and select data in Nama Trade Program (.*)", async (nama_trade_program) => {
  //   // await stwBatasanProduk1AND.namaTradeProgram(nama_trade_program);
  // });

  // it("System should be able to search and select data in Nama Trade Program", async () => {});

  // it("I select date in Tanggal Mulai", async () => {
  //   // await stwBatasanProduk1AND.tanggalMulai();
  // });

  // it("System should be able to select date in Tanggal Mulai", async () => {});

  // it("I select time in Jam Terbit", async () => {});

  // it("System should be able to select time in Jam Terbit", async () => {});

  // it("I select date in Tanggal Berakhir", async () => {});

  // it("System should be able to select date in Tanggal Berakhir", async () => {});

  // it("I select time in Jam Berakhir", async () => {});

  // it("System should be able to select time in Jam Berakhir", async () => {});

  // it("I click button Simpan in form tab Spin The Wheel", async () => {
  //   // await stwBatasanProduk1AND.simpanSTW();
  // });

  // it("System should be able to submit data and leading to Spin The Wheel Page", async () => {});

  it("I search in Spin The Wheel Page (.*)", async (nama_program) => {
    await spinthewheelPage.Search(nama_program);
  });

  // it("System should be able to search and find data", async () => {});

  it("I click button Edit in Spin The Wheel Page", async () => {
    await spinthewheelPage.Edit();
  });

  // it("System should be click button and leading to form Buat Spin The Wheel page", async () => {});

  // it("I click tab Audience", async () => {
  //   // await stwBatasanProduk1AND.tabAudience();
  // });

  // it("System should be click tab Audience and leading to form tab Audience", async () => {});

  // it("I select Fixed Panel", async () => {
  //   // await stwBatasanProduk1AND.FixedPanel();
  // });

  // it("System should be able to select Fixed Panel", async () => {});

  // it("I click button Import XLSX and submit data", async () => {
  //   // await stwBatasanProduk1AND.ImportTamplate();
  //   // await stwBatasanProduk1AND.btnKirim();
  // });

  // it("System should be click button Import XLSX and submit data", async () => {});

  // it("I click button Export Template", async () => {
  //   // await stwBatasanProduk1AND.ExportTamplate();
  // });

  // it("System should be able to download Template", async () => {});

  // it("I click button check", async () => {
  //   // await stwBatasanProduk1AND.btnCheck();
  // });

  // it("System should be check data and update panel blast", async () => {});

  // it("I click button Simpan", async () => {
  //   // await stwBatasanProduk1AND.btnSimpanAudience();
  // });

  // it("System should be submit data in tab Audience", async () => {});

  // it("I click tab pengaturan mekanisme", async () => {
  //   // await stwBatasanProduk1AND.tabPengaturanMekanisme();
  // });

  // it("System should be leading to form tab pengaturan mekanisme", async () => {});

  // it("I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)", async (frekuensi_belanja) => {
  //   // await stwBatasanProduk1AND.frekuensiBelanja(frekuensi_belanja);
  // });

  // it("System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan", async () => {});

  // it("I input Maksimal Frekuensi Reward User per Minggu (.*)", async (maksimal_frekuensi) => {
  //   // await stwBatasanProduk1AND.maksimalFrekuensi(maksimal_frekuensi);
  // });

  // it("System should be input Maksimal Frekuensi Reward User per Minggu", async () => {});

  // it("I select radio button Pembatasan Produk dan Kategori", async () => {
  //   // await stwBatasanProduk1AND.pembatasanProdukdanKategori();
  // });

  // it("System should be select radio button Pembatasan Produk and Kategori", async () => {});

  // it("I select radio button Batasi dengan Produk", async () => {
  //   // await stwBatasanProduk1AND.batasiDenganProduk();
  // });

  // it("System should be select radio button Batasi dengan Produk", async () => {});

  // it("I search and select data in Batasan Berdasarkan Produk1 (.*)", async (batasan_berdasarkan_produk1) => {
  //   // await stwBatasanProduk1AND.batasanBerdasarkanProduk1(
  //   //   batasan_berdasarkan_produk1
  //   // );
  // });

  // it("System should be able to search and select data in Batasan Berdasarkan Produk1", async () => {});

  // it("I search and select data in Batasan Berdasarkan Produk2 (.*)", async (batasan_berdasarkan_produk2) => {
  //   // await stwBatasanProduk1AND.batasanBerdasarkanProduk2(
  //   //   batasan_berdasarkan_produk2
  //   // );
  // });

  // it("System should be able to search and select data in Batasan Berdasarkan Produk2", async () => {});

  // it("I input Nilai Transaksi Minimal1 (.*)", async (nilai_transaksi_minimal1) => {
  //   // await stwBatasanProduk1AND.nilaiTransaksiMinimal1(nilai_transaksi_minimal1);
  // });

  // it("System should be input Nilai Transaksi Minimal1", async () => {});

  // it("I input Nilai Transaksi Minimal2 (.*)", async (nilai_transaksi_minimal2) => {
  //   // await stwBatasanProduk1AND.nilaiTransaksiMinimal2(nilai_transaksi_minimal2);
  // });

  // it("System should be input Nilai Transaksi Minimal2", async () => {});

  // it("I input minimum nilai transaksi (.*)", async (minimum_nilai_transaksi) => {
  //   // await stwBatasanProduk1AND.minimumNilaiTransaksi(minimum_nilai_transaksi);
  // });

  // it("System should be input minimum nilai transaksi", async () => {});

  // it("I input Limit spin (.*)", async (limit_spin) => {
  //   // await stwBatasanProduk1AND.limitSpin(limit_spin);
  // });

  // it("System should be input Limit Spin", async () => {});

  // it("I click button RewardXP1", async () => {
  //   // await stwBatasanProduk1AND.RewardXP1();
  // });

  // it("System should be show input form1", async () => {});

  // it("I input xp1 (.*)", async (xp1) => {
  //   // await stwBatasanProduk1AND.InputXP1(xp1);
  // });

  // it("System should be input xp1", async () => {});

  // it("I input slice1 (.*)", async (slice1) => {
  //   // await stwBatasanProduk1AND.Slice1(slice1);
  // });

  // it("System should be input slice1", async () => {});

  // it("I input probability1 (.*)", async (probability1) => {
  //   // await stwBatasanProduk1AND.Probability1(probability1);
  // });

  // it("System should be input probability1", async () => {});

  // it("I click button RewardXP2", async () => {
  //   // await stwBatasanProduk1AND.RewardXP2();
  // });

  // it("System should be show input form2", async () => {});

  // it("I input xp2 (.*)", async (xp2) => {
  //   // await stwBatasanProduk1AND.InputXP2(xp2);
  // });

  // it("System should be input xp2", async () => {});

  // it("I input slice2 (.*)", async (slice2) => {
  //   // await stwBatasanProduk1AND.Slice2(slice2);
  // });

  // it("System should be input slice2", async () => {});

  // it("I input probability2 (.*)", async (probability2) => {
  //   // await stwBatasanProduk1AND.Probability2(probability2);
  // });

  // it("System should be input probability2", async () => {});

  // it("I click button RewardXP3", async () => {
  //   // await stwBatasanProduk1AND.RewardXP3();
  // });

  // it("System should be show input form3", async () => {});

  // it("I input xp3(.*)", async (xp3) => {
  //   // await stwBatasanProduk1AND.InputXP3(xp3);
  // });

  // it("System should be input xp3", async () => {});

  // it("I input slice3 (.*)", async (slice3) => {
  //   // await stwBatasanProduk1AND.Slice3(slice3);
  // });

  // it("System should be input slice3", async () => {});

  // it("I input probability3 (.*)", async (probability3) => {
  //   // await stwBatasanProduk1AND.Probability3(probability3);
  // });

  // it("System should be input probability3", async () => {});

  // it("I click button Simpan in form tab Pengaturan Mekanisme", async () => {
  //   // await stwBatasanProduk1AND.simpanTabPengaturanMekanisme();
  // });

  // it("System should be able to submit data in form tab Pengaturan Mekanisme", async () => {});

  it("I click tab Preview", async () => {
    await stwBatasanProduk1AND.tabPreview();
  });

  // it("System should be leading to form tab Preview", async () => {});

  it("I insert Floating Icon and input Nama Program in form tab Preview (.*)", async (nama_program) => {
    await stwBatasanProduk1AND.NamaProgramPreview(nama_program);
    await stwBatasanProduk1AND.InsertGambar1();
  });

  // it("System should be insert floating icon and input Nama Program in form tab Preview", async () => {});

  it("I click button Simpan and Publish in form tab Preview", async () => {
    await stwBatasanProduk1AND.simpanPreview();
    await stwBatasanProduk1AND.publishTabPreview();
  });

  // it("System should be submit data and leading to Spin The Wheel Page", async () => {});

  it("I search and click button Delete in Spin The Wheel Page (.*)", async (nama_program) => {
    await spinthewheelPage.Search(nama_program);
    await spinthewheelPage.Delete();
  });

  // it("System should be able to find and Delete data", async () => {});
});
