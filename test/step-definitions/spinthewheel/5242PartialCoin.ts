import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import LoginPage from "../../../src/pageobjects/login/login.page";
import SpinTheWheelPage from "../../../src/pageobjects/spinthewheel/spinthewheel.page";
import FormSpinTheWheelPage from "../../../src/pageobjects/spinthewheel/form.page";
import TradeProgramPage from "../../../src/pageobjects/tradeprogram/tradeprogram";
import FormTradeProgramPage from "../../../src/pageobjects/tradeprogram/formtradeprogram.page";
const dataTest = require("../../data-test/dte.data");

// ================================================
// HALAMAN TRADE PROGRAM
describe("[PRINCIPAL] 5242. Create Trade Program and Spin The Wheel", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await LoginPage.acceptCookie();
  });

  it("I am on the Trade Program page", async () => {
    await MainmenuPage.tradeProgram();
  });

  it("I click button Tambah", async () => {
    await TradeProgramPage.createTradeProgram();
  });

  it("I input form and submit trade program", async () => {
    await FormTradeProgramPage.createTP(
      "tia group trade program",
      "tia sub group trade program",
      "tia trade program for spin the wheel 07072023",
      1000
    );
    await FormTradeProgramPage.submit();
  });

  // ================================================
  // HALAMAN SPIN THE WHEEL
  // TRADE PROGRAM TIDAK MENCUKUPI
  it("I am on the Spin The Wheel page for edit trade program tidak mencukupi", async () => {
    await MainmenuPage.SpinTheWheel();
  });

  it("I click button 'Tambah' SPT", async () => {
    await SpinTheWheelPage.createNew();
  });

  it("I input form tab Spin The Wheel and submit", async () => {
    await FormSpinTheWheelPage.name("TIA STW 07072023");
    await FormSpinTheWheelPage.tradeProgram(
      "tia trade program for spin the wheel 07072023"
    );
    await FormSpinTheWheelPage.date();
    await FormSpinTheWheelPage.clickSimpan();
  });

  it("List STW, search, click edit, and input form tab audience", async () => {
    await SpinTheWheelPage.search("TIA STW 07072023");
    await SpinTheWheelPage.editSTW();
    await FormSpinTheWheelPage.viewTabAudience();
    await FormSpinTheWheelPage.fixedPanel();
  });

  it("Click tab Pengaturan Mekanisme and input form", async () => {
    await FormSpinTheWheelPage.viewTabPengaturanMekanisme();
    await FormSpinTheWheelPage.pengaturanSTWFP(
      dataTest.spinTheWheel.frekBelanjaFP,
      dataTest.spinTheWheel.frekRewardFP,
      dataTest.spinTheWheel.minTransaksiFP,
      dataTest.spinTheWheel.limitSpinFP,
      dataTest.spinTheWheel.jmlVarKoinFP,
      dataTest.spinTheWheel.coin1FP,
      dataTest.spinTheWheel.slice1FP,
      dataTest.spinTheWheel.prob1FP,
      dataTest.spinTheWheel.coin2FP,
      dataTest.spinTheWheel.slice2FP,
      dataTest.spinTheWheel.prob2FP
    );
  });

  it("Click tab Preview", async () => {
    await FormSpinTheWheelPage.viewTabPreview();
    await FormSpinTheWheelPage.inputFormPreview(
      dataTest.spinTheWheel.previewFP
    );
    await FormSpinTheWheelPage.clickSimpanPublish();
    await FormSpinTheWheelPage.clickBatalkan();
  });

  // ================================================
  // HALAMAN SPIN THE WHEEL
  // UBAH TRADE PROGRAM AGAR MENCUKUPI
  it("Edit trade program tab spin the wheel", async () => {
    await FormSpinTheWheelPage.viewTabAudience();
    await FormSpinTheWheelPage.tradeProgram("tia trade program");
    await FormSpinTheWheelPage.setEndDateTP();
    await FormSpinTheWheelPage.clickSimpan();
  });

  it("Click tab Preview again", async () => {
    await FormSpinTheWheelPage.viewTabPreview();
    await FormSpinTheWheelPage.inputFormPreview(
      dataTest.spinTheWheel.previewFP
    );
    await FormSpinTheWheelPage.clickSimpanPublish();
  });

  // ================================================
  // HALAMAN SPIN THE WHEEL
  // EDIT PUBLISH DAN TRADE PROGRAM
  it("System should be leading to Spin The Wheel Page", async () => {
    await SpinTheWheelPage.search("TIA STW 07072023");
    await SpinTheWheelPage.editSTW();
    console.log("Maka, Nama Trade Program Disabled");
  });

  // ================================================
  // HALAMAN SPIN THE WHEEL
  // EDIT UNPUBLISH DAN TRADE PROGRAM TIDAK CUKUP
  it("I am on the Spin The Wheel page for edit and check trade program disable", async () => {
    await MainmenuPage.SpinTheWheel();
    await SpinTheWheelPage.search("TIA STW 07072023");
    await SpinTheWheelPage.editSTW0();
  });

  it("I edit trade program in tab Spin The Wheel", async () => {
    await FormSpinTheWheelPage.tradeProgram(
      "tia trade program for spin the wheel 07072023"
    );
    await FormSpinTheWheelPage.setEndDateTP();
    await FormSpinTheWheelPage.clickSimpan();
  });

  it("Click tab Preview and save publish", async () => {
    await FormSpinTheWheelPage.viewTabPreview();
    await FormSpinTheWheelPage.inputFormPreview(
      dataTest.spinTheWheel.previewFP
    );
    await FormSpinTheWheelPage.clickSimpanPublish();
    await FormSpinTheWheelPage.clickBatalkan();
  });

  // ================================================
  // HALAMAN SPIN THE WHEEL
  // EDIT UNPUBLISH DAN TRADE PROGRAM CUKUP
  it("I am on the Spin The Wheel page", async () => {
    await MainmenuPage.SpinTheWheel();
    await SpinTheWheelPage.search("TIA STW 07072023");
    await SpinTheWheelPage.editSTW0();
  });

  it("I input form tab Spin The Wheel and change trade program mencukupi", async () => {
    await FormSpinTheWheelPage.tradeProgram("tia trade program");
    await FormSpinTheWheelPage.setEndDateTP();
    await FormSpinTheWheelPage.clickSimpan();
  });

  it("Click tab Preview and save", async () => {
    await FormSpinTheWheelPage.viewTabPreview();
    await FormSpinTheWheelPage.inputFormPreview(
      dataTest.spinTheWheel.previewFP
    );
    await FormSpinTheWheelPage.clickSimpanPublish();
  });
});
