import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import spinthewheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import STWPushNotif from "../../../src/pageobjects/spinthewheel/76create-push-notif-spinthewheel.page";

//Scenario Outline: As a user, I can edit push notif spin the wheel
describe("[PRINCIPAL] 77. Edit Push Notif Spin the Wheel", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Spin The Wheel page", async () => {
    await MainmenuPage.SpinTheWheel();
  });

  it("I click button Buat Push Notif", async () => {
    await spinthewheelPage.btnBuatPushNotif();
  });

  // it("System should be leading to form Buat Spin The Wheel Notifikasi Page", async () => {});

  it("I input Judul (.*)", async (judul) => {
    await STWPushNotif.Judul(judul);
  });

  // it("System should be input Judul", async () => {});

  it("I click button Simpan", async () => {
    await STWPushNotif.Simpan2();
  });

  // it("System should be submit data and leading to Spin The Wheel Page", async () => {});

  it("I click button Buat Push Notif2", async () => {
    await spinthewheelPage.btnBuatPushNotif();
  });

  // it("System should be leading to form Buat Spin The Wheel Notifikasi Page2", async () => {});
});
