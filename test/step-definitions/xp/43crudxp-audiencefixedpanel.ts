import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import XPPage from "../../../src/pageobjects/xp/xp.page"
import FormXPPage from "../../../src/pageobjects/xp/form.page"
import { frameForm, frameHome } from "../../../src/helper/commands"
const dataTest = require("../../data-test/dte.data")

describe('[PRINCIPAL] 43. CRUD XP (Audience Fixed Panel)', () => {
  it("I am on the XP page", async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.XP()
    await frameHome()
  })

  it("I click button Tambah", async () => {
    await XPPage.createNew()
    await browser.pause(3000)
    await browser.keys("Enter")
  })

  it("System should be leading to form create XP", async () => { })

  it("I input form tab XP and submit", async () => {
    await frameForm()
    await FormXPPage.name(dataTest.XP.namaProgramXPFP)
    await FormXPPage.date(
      dataTest.XP.startDate,
      dataTest.XP.endDate,
      dataTest.XP.endAtDate
    )
    await FormXPPage.levelFP(
      dataTest.XP.jumlahLevelFP,
      dataTest.XP.level1FP,
      dataTest.XP.batas1FP,
      dataTest.XP.level2FP,
      dataTest.XP.batas2FP,
      dataTest.XP.level3FP,
      dataTest.XP.batas3FP
    )
    await FormXPPage.EditLevel1(dataTest.XP.inputLevel1)
    await FormXPPage.EditLevel2(dataTest.XP.inputLevel2)
    await FormXPPage.EditLevel3(dataTest.XP.inputLevel3)
    await FormXPPage.appVer(dataTest.XP.minVersionFP)
    await FormXPPage.submitForm()
  })

  it("System should be leading to tab Audience", async () => {
    await frameForm()
    await FormXPPage.viewTabAudience()
  })

  it("I input form tab Audience and submit", async () => {
    await browser.pause(5000)
    await FormXPPage.fixedPanel()
  })

  it("System should be leading to tab Pengaturan XP", async () => {
    await browser.pause(5000)
    await FormXPPage.viewTabPengaturanXP()
  })

  it("I input form tab Pengaturan XP and submit", async () => {
    await browser.pause(5000)
    await FormXPPage.progressBarFP(
      dataTest.XP.progressBarFP1,
      dataTest.XP.progressBarFP2,
      dataTest.XP.progressBarFP3,
      dataTest.XP.progressBarFP4,
      dataTest.XP.progressBarFP5,
      dataTest.XP.progressBarFP6,
      dataTest.XP.progressBarFP7
    )
    await FormXPPage.fullBarFP(dataTest.XP.fullBarFP1, dataTest.XP.fullBarFP2)
    await FormXPPage.snkFP(
      dataTest.XP.SnK1,
      dataTest.XP.SnK2,
      dataTest.XP.SnK3,
      dataTest.XP.SnK4
    )
    await FormXPPage.cwBarFP(
      dataTest.XP.emptyTopPB,
      dataTest.XP.emptyBottomPB,
      dataTest.XP.fullTopPB,
      dataTest.XP.fullBottomPB
    )
  })

  it("System should be leading to tab Preview", async () => {
    await browser.pause(5000)
    await FormXPPage.viewTabPreview()
  })

  it("I click button Publish", async () => {
    await browser.pause(5000)
    await FormXPPage.publishFP()
  })

  it("System should be leading to XP page and success publish XP", async () => {
    await frameHome()
    await XPPage.search(dataTest.XP.namaProgramXPFP)
    await browser.pause(10000)
  })

  it("I edit and delete XP", async () => {
    await XPPage.editXP()
    await frameForm()
    await FormXPPage.name(dataTest.XP.namaProgramXPFPedit)
    await FormXPPage.submitForm()
    await frameForm()
    await XPPage.deleteXP()
  })

  it("System should be delete XP", async () => {
    await XPPage.search(dataTest.XP.namaProgramXPFPedit)
    await browser.pause(5000)
  })
})