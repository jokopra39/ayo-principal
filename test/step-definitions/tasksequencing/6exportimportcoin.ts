import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page"
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page"
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page"
const dataTest = require("../../data-test/dte.data")

describe('[PRINCIPAL] 6. export-import-coin', () => {
  it("I am on the Task Sequencing page", async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.taskSequencing()
    await TaskSequencingPage.page()
  })

  it("I search a task sequencing for import", async () => {
    await browser.pause(10000)
    await TaskSequencingPage.searchTaskSequencing(
      dataTest.taskSequencing.nameWithPinUp4
    )
  })

  it("System should be according data task sequencing based on search keyword", async () => { })

  // Scenario Outline: As a user, I can edit Tsm
  it("I click button edit a TSM", async () => {
    await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp4)
  })

  it("System should be leading to form Task Sequencing page", async () => { })

  // Scenario Outline: As a user, I can export and import coin TSM
  it("I am on the form edit Task Sequencing page", async () => { })

  it("I export coin", async () => {
    await browser.pause(10000)
    await FormCreatePage.exportFile()
    await FormCreatePage.downloadExportFile()
  })

  it("I import coin and confirm", async () => {
    await FormCreatePage.importFile()
    await FormCreatePage.uploadImportFile()
    await FormCreatePage.closePopUpImport()
    await FormCreatePage.importFile()
    await browser.pause(2000)
    await FormCreatePage.userPenerimaCoinAdj(
      dataTest.taskSequencing.reasonImportCoin,
      dataTest.login.accountname
    )
    await FormCreatePage.sendImportFile()
    await FormCreatePage.confirmImport()
  })

  it("System should be able to import coin TSM", async () => {
    // await browser.pause(60000)
    await FormCreatePage.successImportFile()
  })

  //Scenario Outline: As a user, I can view and publish setting mission builder
  it("I am on the Mission Builder page", async () => {
    await FormCreatePage.submitEditTsm()
    await MissionBuilderPage.pageEdit()
  })

  it("I view setting mission builder and publish TSM", async () => {
    await MissionBuilderPage.setMissionEdit()
    await MissionBuilderPage.simpanSettingMission()
    await MissionBuilderPage.publish()
    await MissionBuilderPage.confirmPublish()
  })

  it("System should be leading to Task Sequencing page", async () => {
    await TaskSequencingPage.page()
    await browser.pause(6000)
  })
})