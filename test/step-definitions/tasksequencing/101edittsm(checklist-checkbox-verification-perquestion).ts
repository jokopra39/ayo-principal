import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page"
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page"
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page"
const dataTest = require("../../data-test/dte.data")

describe('[PRINCIPAL] 101. Edit TSM (Checklist checkbox Verification per question)', () => {
  it("I am on the Task Sequencing page", async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.taskSequencing()
    await TaskSequencingPage.page()
  })
  it("I create task sequencing and click button Submit", async () => {
    await TaskSequencingPage.createTaskSequencing()
    await FormCreatePage.formAddPage()
    await FormCreatePage.createTSM(
      dataTest.taskSequencing.nameTask15,
      dataTest.tradeProgram.namaTP2023,
      dataTest.audience.audienceToko2
    )
    await FormCreatePage.submitTsm()
  })
  it("System should be submitted data and leading to Mission Builder page", async () => {
    await MissionBuilderPage.page()
    await MissionBuilderPage.pageCreate()
  })
  it("I add Event Misi", async () => {
    await MissionBuilderPage.createMissionBuilder()
  })
  it("setting Misi", async () => {
    await MissionBuilderPage.setMission()
    await MissionBuilderPage.settingMissionWithoutPinUp(
      dataTest.templateTugas.searchByName101
    )
    await MissionBuilderPage.setCoin15m1(
      dataTest.taskSequencing.coinSub1,
      dataTest.taskSequencing.coinVer1
    )
    await MissionBuilderPage.simpanSettingMission()
    await MissionBuilderPage.setMission()
    await MissionBuilderPage.simpanSettingMission()
  })
  it("I save mission builder", async () => {
    await MissionBuilderPage.simpan()
  })
  it("System should be leading to Task Sequencing page and success save new Tsm", async () => {
    await TaskSequencingPage.page()
  })
  it("I edit and submit task sequencing", async () => {
    await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp4)
    await FormCreatePage.page()
    await FormCreatePage.pageEdit()
    await FormCreatePage.submitEditTsm()
  })
  it("System should be update data and leading to Mission Builder page", async () => {
    await MissionBuilderPage.pageEdit()
  })
  it("I publish mission builder", async () => {
    await MissionBuilderPage.setMissionEdit()
    await MissionBuilderPage.verificationPerQuestion()
    await MissionBuilderPage.setCoin15m2(
      dataTest.taskSequencing.coinSub1,
      dataTest.taskSequencing.coinVer1,
      dataTest.taskSequencing.XPSubmission1,
      dataTest.taskSequencing.XPVerification1,
      dataTest.taskSequencing.coinSub2,
      dataTest.taskSequencing.coinVer2,
      dataTest.taskSequencing.XPSubmission2,
      dataTest.taskSequencing.XPVerification2,
      dataTest.taskSequencing.coinSub3,
      dataTest.taskSequencing.coinVer3,
      dataTest.taskSequencing.XPSubmission3,
      dataTest.taskSequencing.XPVerification3
    )
    await MissionBuilderPage.reblastOn()
    await MissionBuilderPage.simpanSettingMission()
    await MissionBuilderPage.saveAsDraft()
    await TaskSequencingPage.page2()

    await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp4)
    await FormCreatePage.page()
    await FormCreatePage.submitTsm()
    await MissionBuilderPage.pageEdit()
    await MissionBuilderPage.setMissionEdit()
    await MissionBuilderPage.simpanSettingMission()
    await MissionBuilderPage.publish()
    await MissionBuilderPage.confirmPublish()
  })
  it("System should be leading to Task Sequencing page and success publish Tsm", async () => {
    await TaskSequencingPage.page2()
  })
  it("I request file and export task sequencing", async () => {
    await TaskSequencingPage.searchTaskSequencing(
      dataTest.taskSequencing.nameTask15
    )
    await TaskSequencingPage.reqFile()
  })
  it("System should be request data and export task sequencing", async () => {
    await TaskSequencingPage.open()
    await LoginPage.acceptCookie()
    await TaskSequencingPage.searchTaskSequencing(
      dataTest.taskSequencing.nameTask15
    )
    await TaskSequencingPage.reqFile2()
    await TaskSequencingPage.exportTSM()
  })
})