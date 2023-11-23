import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TemplateTugasPage from "../../../src/pageobjects/templatetugas/templatetugas.page"
import FormTemplateTugasPage from "../../../src/pageobjects/templatetugas/formtemplatetugas.page"
import TaskSequencingPage from "../../../src/pageobjects/tasksequencing/tsm.page"
import FormCreatePage from "../../../src/pageobjects/tasksequencing/formcreate.page"
import MissionBuilderPage from "../../../src/pageobjects/tasksequencing/missionbuilder.page"
const dataTest = require("../../data-test/dte.data")

describe('[PRINCIPAL] 49. Template Tugas - Create TSM UPC', () => {
  it("I am on the Template Tugas page", async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.templateTugas()
    await TemplateTugasPage.page()
  })

  it("I click button Buat", async () => {
    await TemplateTugasPage.createTemplateTugas()
  })

  it("System should be leading to form create template tugas page", async () => {
    await FormTemplateTugasPage.page()
  })

  it("I fill form and submit", async () => {
    await FormTemplateTugasPage.inputJudulTugas(
      dataTest.templateTugas.judulUPC,
      dataTest.templateTugas.namaLainUPC,
      dataTest.templateTugas.deskripsiUPC
    )
    await FormTemplateTugasPage.selectKategori(
      dataTest.templateTugas.kategoriUPC,
      dataTest.templateTugas.tipeUPC,
      dataTest.templateTugas.internalKategoriUPC,
      dataTest.templateTugas.kategoriMisiUPC,
      dataTest.templateTugas.projectUPC
    )
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstUPC1(
      dataTest.templateTugas.qstPlanogram1,
      dataTest.templateTugas.code1,
      dataTest.templateTugas.coin1,
      dataTest.templateTugas.fam1
    )
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstUPC2(
      dataTest.templateTugas.qstPlanogram2,
      dataTest.templateTugas.code2,
      dataTest.templateTugas.coin2,
      dataTest.templateTugas.fam2
    )
    await FormTemplateTugasPage.addAlasanMenolakPilihan()
    await FormTemplateTugasPage.alasanMenolakPilihan1()
    await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
      dataTest.templateTugas.reasonPlanogram2
    )
    // await FormTemplateTugasPage.alasanMenolakPilihan2()
    // await FormTemplateTugasPage.searchAlasanMenolakPilihan(dataTest.templateTugas.reasonPlanogram2)
    await FormTemplateTugasPage.save()
  })

  it("System should be able to submit template tugas and leading to template tugas page", async () => {
    await browser.pause(10000)
    await TemplateTugasPage.page()
  })

  it("I go to Task Sequencing page", async () => {
    await TaskSequencingPage.open()
    await LoginPage.acceptCookie()
  })

  it("System should be leading to Task Sequencing page", async () => {
    //   await TaskSequencingPage.page()
  })

  it("I create task sequencing and click button Submit", async () => {
    await TaskSequencingPage.createTaskSequencing()
    await FormCreatePage.formAddPage()
    await FormCreatePage.createTSM(
      dataTest.taskSequencing.nameUPC,
      dataTest.tradeProgram.namaTP4,
      dataTest.audience.audienceToko
    )
    await FormCreatePage.submitTsm()
  })

  it("System should be submitted data and leading to Mission Builder page", async () => {
    await MissionBuilderPage.page()
    await MissionBuilderPage.pageCreate()
  })

  //  Scenario Outline: As a user, I can setting Misi with Pin Up Mission
  it("I add Event Misi", async () => {
    await MissionBuilderPage.createMissionBuilder()
  })

  it("setting Misi with Pin Up Mission", async () => {
    await MissionBuilderPage.setMission()
    await MissionBuilderPage.settingMissionWithoutPinUp(
      dataTest.templateTugas.searchByName49
    )
    await MissionBuilderPage.setVerifikasiManual()
    await MissionBuilderPage.setCoin(
      dataTest.taskSequencing.coinSubmission4,
      dataTest.taskSequencing.coinVerification4
    )
    await MissionBuilderPage.simpanSettingMission()
  })

  it("I save mission builder", async () => {
    await MissionBuilderPage.simpan()
  })

  it("System should be leading to Task Sequencing page and success save new Tsm", async () => {
    await TaskSequencingPage.page()
  })

  //  Scenario Outline: As a user, I can publish TSM with Pin Up Mission
  it("I edit and submit task sequencing", async () => {
    await TaskSequencingPage.editTask(dataTest.taskSequencing.nameUPC)
    await FormCreatePage.page()
    await FormCreatePage.pageEdit()
    await FormCreatePage.submitEditTsm()
  })

  it("System should be update data and leading to Mission Builder page", async () => {
    // await MissionBuilderPage.page()
    await MissionBuilderPage.pageEdit()
  })

  it("I publish mission builder", async () => {
    await MissionBuilderPage.setMissionEdit()
    await MissionBuilderPage.simpanSettingMission()
    await MissionBuilderPage.publish()
    await MissionBuilderPage.confirmPublish()
  })

  it("System should be leading to Task Sequencing page and success publish Tsm", async () => {
    await TaskSequencingPage.page()
  })

  it("I view detail task", async () => {
    await TaskSequencingPage.detailTask(dataTest.taskSequencing.nameUPC)
    await FormCreatePage.page()
    await FormCreatePage.formDetailPage()
    await FormCreatePage.cekDetail()
  })
  it("System should be show detail mission", async () => {
    await MissionBuilderPage.page()
    await MissionBuilderPage.pageDetail()
  })
})