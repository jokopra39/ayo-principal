import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spinthewheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import SetupStwMitraPage from "../../../src/pageobjects/spinthewheel/110setup-stwmitra.page";

//Scenario Outline: As a user, I can create Setup STW Mitra
describe("[PRINCIPAL] 110. Setup STW Mitra", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Spin The Wheel page", async () => {
    await MainmenuPage.SpinTheWheel();
  });

  it("I click button Setup STW Mitra", async () => {
    await spinthewheelPage.btnSetupSTW();
  });

  // it("System should be leading to Buat Spin The Wheel Mitra Setup Page", async () => {});

  // it("I am on the Buat Spin The Wheel Mitra Setup Page", async () => {});

  it("I insert image in Floating Icon AYO SRC Toko Home Page", async () => {
    await SetupStwMitraPage.insertFloating();
  });

  // it("System should be insert Floating Icon", async () => {});

  it("I input Judul (.*)", async (judul_setup) => {
    await SetupStwMitraPage.Judul(judul_setup);
  });

  // it("System should be able to input Judul", async () => {});

  it("I input Deskripsi Push Notifikasi (.*)", async (input_deskripsi) => {
    await SetupStwMitraPage.Deskripsi(input_deskripsi);
  });

  // it("System should be able to input Deskripsi Push Notifikasi", async () => {});

  it("I select date in Tanggal Mulai", async () => {
    await SetupStwMitraPage.TanggalMulai();
  });

  // it("System should be able to select date in Tanggal Mulai", async () => {});

  // it("I select date in Tanggal Berakhir", async () => {});

  // it("System should be able to select date in Tanggal Berakhir", async () => {});

  it("I select time in Set Waktu", async () => {
    await SetupStwMitraPage.SetWaktu();
  });

  // it("System should be able to select time in Set Waktu", async () => {});

  it("I select in Interval Program", async () => {
    await SetupStwMitraPage.IntervalProgram();
  });

  // it("System should be able to select in Interval Program", async () => {});

  it("I click button Simpan", async () => {
    await SetupStwMitraPage.Simpan();
  });

  // it("System should be submit data and leading to Spin The Wheel Page", async () => {});

  it("I click button Setup STW Mitra2", async () => {
    await spinthewheelPage.btnSetupSTW();
  });

  // it("System should be leading to Buat Spin The Wheel Mitra Setup Page2", async () => {});

  it("I input Judul2 (.*)", async (judul_setup2) => {
    await SetupStwMitraPage.Judul(judul_setup2);
  });

  // it("System should be able to input Judul2", async () => {});

  it("I input Deskripsi Push Notifikasi2 (.*)", async (input_deskripsi2) => {
    await SetupStwMitraPage.Deskripsi(input_deskripsi2);
  });

  // it("System should be able to input Deskripsi Push Notifikasi2", async () => {});

  it("I select date in Tanggal Mulai2", async () => {
    await SetupStwMitraPage.TanggalMulai();
  });

  // it("System should be able to select date in Tanggal Mulai2", async () => {});

  it("I select date in Tanggal Berakhir2", async () => {
    await SetupStwMitraPage.TanggalBerakhir2();
  });

  // it("System should be able to select date in Tanggal Berakhir2", async () => {});

  it("I select in Interval Program2", async () => {
    await SetupStwMitraPage.IntervalProgram2();
  });

  // it("System should be able to select in Interval Program2", async () => {});

  it("I click button Simpan2", async () => {
    await SetupStwMitraPage.Simpan();
  });

  // it("System should be submit data and leading to Spin The Wheel Page2", async () => {});
});
