import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TradeProgramPage from "../../../src/pageobjects/tradeprogram/tradeprogram"
import FormTradeProgramPage from "../../../src/pageobjects/tradeprogram/formtradeprogram.page"
const dataTest = require("../../data-test/dte.data")

describe('[PRINCIPAL] 5206. Trade Program', () => {
  it('I am on the Trade Program page', async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.tradeProgram()
    await TradeProgramPage.page()
  })
  it('I click button Tambah', async () => {
    await TradeProgramPage.createTradeProgram()
    await FormTradeProgramPage.page()
  })
  it('I input form and submit', async () => {
    await FormTradeProgramPage.createTP(
      dataTest.data5206.gtpNama,
      dataTest.data5206.sgtpNamaEdit,
      dataTest.data5206.tpNama,
      dataTest.data5206.tpDana
    )
    await FormTradeProgramPage.submit()
    await TradeProgramPage.page2()
  })

  it('I click button Tambah 2', async () => {
    await TradeProgramPage.createTradeProgram()
    await FormTradeProgramPage.page()
  })
  it('I input form and submit 2', async () => {
    await FormTradeProgramPage.createTP(
      dataTest.data5206.gtpNama,
      dataTest.data5206.sgtpNamaEdit2,
      dataTest.data5206.tpNama2,
      dataTest.data5206.tpDana
    )
    await FormTradeProgramPage.submit()
    await TradeProgramPage.page2()
  })
})