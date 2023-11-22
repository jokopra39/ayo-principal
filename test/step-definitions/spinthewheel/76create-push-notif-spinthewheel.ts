import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spinthewheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import STWPushNotif from "../../../src/pageobjects/spinthewheel/76create-push-notif-spinthewheel.page";

//Scenario Outline: As a user, I can create push notif spin the wheel
describe("[PRINCIPAL] 76. Create Push Notif Spin the Wheel", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Spin The Wheel page", async () => {
    await MainmenuPage.SpinTheWheel();

    //await spinthewheelPage.pageList()
  });

  it("I click button Buat Push Notif", async () => {
    await spinthewheelPage.btnBuatPushNotif();
  });

  // it("System should be leading to form Buat Spin The Wheel Notifikasi Page", async () => {});

  it("I input Judul (.*)", async (judul) => {
    await STWPushNotif.Judul(judul);
  });

  // it("System should be input Judul", async () => {});

  it("I input Deskripsi Push Notifikasi (.*)", async (deskripsi) => {
    await STWPushNotif.Deskripsi(deskripsi);
  });

  // it("System should be input Deskripsi Push Notifikasi", async () => {});

  it("I select date in Tanggal Mulai", async () => {
    await STWPushNotif.TanggalMulai();
  });

  // it("System should be select date in Tanggal Mulai", async () => {});

  // it("I select date in Tanggal Berakhir", async () => {});

  // it("System should be select date in Tanggal Berakhir", async () => {});

  it("I select time in Set Waktu", async () => {
    await STWPushNotif.SetWaktu();
  });

  // it("System should be select time in Set Waktu", async () => {});

  it("I select day in Interval Pengiriman", async () => {
    await STWPushNotif.IntervalPengiriman();
  });

  // it("System should be select day in Interval Pengiriman", async () => {});

  it("I click button Simpan", async () => {
    await STWPushNotif.Simpan();
  });

  // it("System should be submit data and leading to Spin The Wheel Page", async () => {});
});
