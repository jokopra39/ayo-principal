import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spinthewheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import RewardCoinNoncoinXP from "../../../src/pageobjects/spinthewheel/75crud-spinthewheel(reward-coin-noncoin-dan-xp).page";
const dataTest = require("../../data-test/dte.data");

//Scenario Outline: As a user, I can create Spin The Wheel reward coin, non coin, dan xp
describe("[PRINCIPAL] 75. CRUD Spin the Wheel (Reward Coin, Non Coin dan XP)", () => {
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

  it("I input Nama Program", async () => {
    await RewardCoinNoncoinXP.NamaProgramSTW(
      dataTest.spinTheWheel.namaProgramSTW75
    );
  });

  // it("System should be able to input Nama Program", async () => {});

  it("I search and select data in Nama Trade Program", async () => {
    await RewardCoinNoncoinXP.namaTradeProgram(
      dataTest.spinTheWheel.tradeProgram75
    );
  });

  // it("System should be able to search and select data in Nama Trade Program", async () => {});

  it("I select date in Tanggal Mulai", async () => {
    await RewardCoinNoncoinXP.tanggalMulai();
  });

  // it("System should be able to select date in Tanggal Mulai", async () => {});

  // it("I select time in Jam Terbit", async () => {});

  // it("System should be able to select time in Jam Terbit", async () => {});

  // it("I select date in Tanggal Berakhir", async () => {});

  // it("System should be able to select date in Tanggal Berakhir", async () => {});

  // it("I select time in Jam Berakhir", async () => {});

  // it("System should be able to select time in Jam Berakhir", async () => {});

  it("I click button Simpan in form tab Spin The Wheel", async () => {
    await RewardCoinNoncoinXP.simpanSTW();
  });

  // it("System should be able to submit data and leading to Spin The Wheel Page", async () => {});

  it("I search in Spin The Wheel Page", async () => {
    await spinthewheelPage.Search(dataTest.spinTheWheel.namaProgramSTW75);
  });

  // it("System should be able to search and find data", async () => {});

  it("I click button Edit in Spin The Wheel Page", async () => {
    await spinthewheelPage.Edit();
  });

  // it("System should be click button and leading to form Buat Spin The Wheel page", async () => {});

  it("I click tab Audience", async () => {
    await RewardCoinNoncoinXP.tabAudience();
  });

  // it("System should be click tab Audience and leading to form tab Audience", async () => {});

  it("I select Fixed Panel", async () => {
    await RewardCoinNoncoinXP.FixedPanel();
  });

  // it("System should be able to select Fixed Panel", async () => {});

  it("I click button Import XLSX and submit data", async () => {
    await RewardCoinNoncoinXP.ImportTamplate();
    await RewardCoinNoncoinXP.btnKirim();
  });

  // it("System should be click button Import XLSX and submit data", async () => {});

  it("I click button Export Template", async () => {
    await RewardCoinNoncoinXP.ExportTamplate();
  });

  // it("System should be able to download Template", async () => {});

  it("I click button check", async () => {
    await RewardCoinNoncoinXP.btnCheck();
  });

  // it("System should be check data and update panel blast", async () => {});

  it("I click button Simpan", async () => {
    await RewardCoinNoncoinXP.btnSimpanAudience();
  });

  // it("System should be submit data in tab Audience", async () => {});

  it("I click tab pengaturan mekanisme", async () => {
    await RewardCoinNoncoinXP.tabPengaturanMekanisme();
  });

  // it("System should be leading to form tab pengaturan mekanisme", async () => {});

  it("I input frekuensi belanja B2C Mingguan yang Dibutuhkan", async () => {
    await RewardCoinNoncoinXP.frekuensiBelanja(
      dataTest.spinTheWheel.FBelanja75
    );
  });

  // it("System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan", async () => {});

  it("I input Maksimal Frekuensi Reward User per Minggu", async () => {
    await RewardCoinNoncoinXP.maksimalFrekuensi(
      dataTest.spinTheWheel.FReward75
    );
  });

  // it("System should be input Maksimal Frekuensi Reward User per Minggu", async () => {});

  it("I click button tambah in Tier 1", async () => {
    await RewardCoinNoncoinXP.TambahTier();
  });

  // it("System should be show Tier 2", async () => {});

  it("I input data in Tier 1", async () => {
    await RewardCoinNoncoinXP.minimumNilaiTransaksiT1(
      dataTest.spinTheWheel.minTransaksiT1
    );
    await RewardCoinNoncoinXP.maksimumNilaiTransaksiT1(
      dataTest.spinTheWheel.makTransaksiT1
    );
    await RewardCoinNoncoinXP.limitSpinT1(dataTest.spinTheWheel.limitSpinT1);
    await RewardCoinNoncoinXP.jumlahVariasiCoinT1(
      dataTest.spinTheWheel.jlmVarCoinT1
    );
    await RewardCoinNoncoinXP.Coin1T1(dataTest.spinTheWheel.coin1T1);
    await RewardCoinNoncoinXP.Coin2T1(dataTest.spinTheWheel.coin1T2);
    await RewardCoinNoncoinXP.Coin3T1(dataTest.spinTheWheel.coin3T1);
    await RewardCoinNoncoinXP.RewardXP1T1();
    await RewardCoinNoncoinXP.XP1T1(dataTest.spinTheWheel.xp1T1);
    await RewardCoinNoncoinXP.RewardXP1T1();
    await RewardCoinNoncoinXP.XP2T1(dataTest.spinTheWheel.xp2T1);
    await RewardCoinNoncoinXP.Slice1T1(dataTest.spinTheWheel.slice1T1);
    await RewardCoinNoncoinXP.Slice2T1(dataTest.spinTheWheel.slice2T1);
    await RewardCoinNoncoinXP.Slice3T1(dataTest.spinTheWheel.slice3T1);
    await RewardCoinNoncoinXP.Slice4T1(dataTest.spinTheWheel.slice4T1);
    await RewardCoinNoncoinXP.Slice5T1(dataTest.spinTheWheel.slice5T1);
    await RewardCoinNoncoinXP.Probability1T1(dataTest.spinTheWheel.prob1T1);
    await RewardCoinNoncoinXP.Probability2T1(dataTest.spinTheWheel.prob2T1);
    await RewardCoinNoncoinXP.Probability3T1(dataTest.spinTheWheel.prob3T1);
    await RewardCoinNoncoinXP.Probability4T1(dataTest.spinTheWheel.prob4T1);
    await RewardCoinNoncoinXP.Probability5T1(dataTest.spinTheWheel.prob5T1);
  });

  // it("System should be input in Tier 1", async () => {});

  it("I input data in Tier 2", async () => {
    await RewardCoinNoncoinXP.limitSpinT2(dataTest.spinTheWheel.limitSpinT2);
    await RewardCoinNoncoinXP.jumlahVariasiCoinT2(
      dataTest.spinTheWheel.jlmVarCoinT2
    );
    await RewardCoinNoncoinXP.btnRewardNonCoinT2();
    await RewardCoinNoncoinXP.Coin1T2(dataTest.spinTheWheel.coin1T2);
    await RewardCoinNoncoinXP.Coin2T2(dataTest.spinTheWheel.coin2T2);
    await RewardCoinNoncoinXP.nonCoinT2(dataTest.spinTheWheel.noncoinT2);
    await RewardCoinNoncoinXP.RewardXPT2();
    await RewardCoinNoncoinXP.XP1T2(dataTest.spinTheWheel.xpT2);
    await RewardCoinNoncoinXP.Slice1T2(dataTest.spinTheWheel.slice1T2);
    await RewardCoinNoncoinXP.Slice2T2(dataTest.spinTheWheel.slice2T2);
    await RewardCoinNoncoinXP.Slice3T2(dataTest.spinTheWheel.slice3T2);
    await RewardCoinNoncoinXP.Slice4T2(dataTest.spinTheWheel.slice4T2);
    await RewardCoinNoncoinXP.Probability1T2(dataTest.spinTheWheel.prob1T2);
    await RewardCoinNoncoinXP.Probability2T2(dataTest.spinTheWheel.prob2T2);
    await RewardCoinNoncoinXP.Probability3T2(dataTest.spinTheWheel.prob3T2);
    await RewardCoinNoncoinXP.Probability4T2(dataTest.spinTheWheel.prob4T2);
  });

  // it("System should be input in Tier 2", async () => {});

  it("I click button Simpan in form tab Pengaturan Mekanisme", async () => {
    await RewardCoinNoncoinXP.simpanTabPengaturanMekanisme();
  });

  // it("System should be able to submit data in form tab Pengaturan Mekanisme", async () => {});

  it("I click tab Preview", async () => {
    await RewardCoinNoncoinXP.tabPreview();
  });

  // it("System should be leading to form tab Preview", async () => {});

  it("I insert Floating Icon and input Nama Program in form tab Preview", async () => {
    await RewardCoinNoncoinXP.NamaProgramPreview(
      dataTest.spinTheWheel.namaProgramSTW75
    );
    await RewardCoinNoncoinXP.InsertGambar1();
  });

  // it("System should be insert floating icon and input Nama Program in form tab Preview", async () => {});

  it("I click button Simpan and Publish in form tab Preview", async () => {
    await RewardCoinNoncoinXP.simpanPreview();
    await RewardCoinNoncoinXP.publishTabPreview();
  });

  // it("System should be submit data and leading to Spin The Wheel Page", async () => {});

  it("I search and click button Delete in Spin The Wheel Page", async () => {
    await spinthewheelPage.Search(dataTest.spinTheWheel.namaProgramSTW75);
    await spinthewheelPage.Delete();
  });

  // it("System should be able to find and Delete data", async () => {});
});
