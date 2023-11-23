import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import FlushCoinPage from "../../../src/pageobjects/flushcoin/flushcoin.page";
import { frameHome, frameForm } from "../../../src/helper/commands";

describe("[PRINCIPAL] 5205. CRUD Flush Coin", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
  });

  it('I am on Flush Coin page', async function () {
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
    await MainmenuPage.DropdownUndian();
    await MainmenuPage.FlushCoin();
    await frameHome();
  });

  it('I click button Tambah', async function () {
    await FlushCoinPage.buttonBuat();
  });

  it('I am on form create Flush Coin page, input and submit data', async function () {
    await frameForm;
    await FlushCoinPage.inputLotteryprogram("Program Undian Jadi Lebih Baik");
    await FlushCoinPage.inputFieldTabSetupFlushCoin(0, [
      "131221 Trade Program PBO",
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.inputFieldTabSetupFlushCoin(1, [
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.inputFieldTabSetupFlushCoin(2, [
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.simpan();
  }
  );

  it('Click tab Audience, input and execute data', async function () {
    await frameForm();
    await FlushCoinPage.tabAudience();
    await FlushCoinPage.backToListGrid();
  });

  it('I am on list data, and click edit', async function () {
    await frameHome();
    console.log("waktunya geser kekanan");
    await FlushCoinPage.searchData("Program Undian Jadi Lebih Baik");
    await FlushCoinPage.edit();
    await frameForm();
    await FlushCoinPage.tabAudience();
    await FlushCoinPage.inputFieldTabAudience(1, ["ZONENORTHSUM"]);
    await FlushCoinPage.inputFieldTabAudience(2, ["SLSSW1"]);
    await FlushCoinPage.inputFieldTabAudience(3, ["SLSPPW"]);
    await FlushCoinPage.prosesAudience();
  });

  /**
   * Buat lagi, tetapi audience-nya pakai fixed panel
   */

  it("I click button 'Tambah' again", async function () {
    console.log("Buat lagi, tetapi audience-nya pakai fixed panel");
    await frameHome();
    await FlushCoinPage.buttonBuat();
  });

  it('I am on form create Flush Coin page, input and submit data again', async function () {
    await frameForm();
    await FlushCoinPage.inputLotteryprogram("Program Undian Jadi Lebih Baik");
    await FlushCoinPage.inputFieldTabSetupFlushCoin(0, [
      "131221 Trade Program PBO",
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.inputFieldTabSetupFlushCoin(1, [
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.inputFieldTabSetupFlushCoin(2, [
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.simpan();
  }
  );

  it('Click tab Audience, click fixed panel, input and execute data', async function () {
    await frameForm();
    await FlushCoinPage.tabAudience();
    await FlushCoinPage.clickFixedPanel("fixed-panel");
    await FlushCoinPage.importCsvFixedPanel();
    await FlushCoinPage.prosesAudience();
  });

});
