import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page"
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page"
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page"
const dataTest = require("../../data-test/dte.data")

describe('[PRINCIPAL] 99. Create Task Sequencing Management (semua tipe kecuali UPC dan IR)', () => {
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
      dataTest.taskSequencing.nameTask13,
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
    await MissionBuilderPage.verificationPerQuestion()
    await MissionBuilderPage.settingMissionWithoutPinUp(
      dataTest.templateTugas.searchByName13
    )
    await MissionBuilderPage.setCoin13(
      dataTest.taskSequencing.coinSub1,
      dataTest.taskSequencing.coinVer1,
      dataTest.taskSequencing.coinSub2,
      dataTest.taskSequencing.coinVer2,
      dataTest.taskSequencing.coinSub3,
      dataTest.taskSequencing.coinVer3,
      dataTest.taskSequencing.coinSub4,
      dataTest.taskSequencing.coinVer4,
      dataTest.taskSequencing.coinSub5,
      dataTest.taskSequencing.coinVer5,
      dataTest.taskSequencing.coinSub6,
      dataTest.taskSequencing.coinVer6,
      dataTest.taskSequencing.coinSub7,
      dataTest.taskSequencing.coinVer7,
      dataTest.taskSequencing.coinSub8,
      dataTest.taskSequencing.coinVer8,
      dataTest.taskSequencing.coinSub9,
      dataTest.taskSequencing.coinVer9,
      dataTest.taskSequencing.coinSub10,
      dataTest.taskSequencing.coinVer10,
      dataTest.taskSequencing.coinSub11,
      dataTest.taskSequencing.coinVer11,
      dataTest.taskSequencing.coinSub12,
      dataTest.taskSequencing.coinVer12,
      dataTest.taskSequencing.coinSub13,
      dataTest.taskSequencing.coinVer13,
      dataTest.taskSequencing.coinSub14,
      dataTest.taskSequencing.coinVer14
    )
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
    await MissionBuilderPage.simpanSettingMission()
    await MissionBuilderPage.publish()
    await MissionBuilderPage.confirmPublish()
  })
  it("System should be leading to Task Sequencing page and success publish Tsm", async () => {
    await TaskSequencingPage.page2()
  })
  it("I view detail task", async () => {
    await TaskSequencingPage.page()
    await TaskSequencingPage.detailTask(dataTest.taskSequencing.nameTask13)
    await FormCreatePage.page()
    await FormCreatePage.formDetailPage()
    await FormCreatePage.cekDetail()
  })
  it("System should be show detail mission", async () => {
    await MissionBuilderPage.page()
    await MissionBuilderPage.pageDetail()
  })
})