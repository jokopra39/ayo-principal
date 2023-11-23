import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TemplateTugasPage from "../../../src/pageobjects/templatetugas/templatetugas.page"
import FormTemplateTugasPage from "../../../src/pageobjects/templatetugas/formtemplatetugas.page"
const dataTest = require("../../data-test/dte.data")

describe('[PRINCIPAL] 46. Template Tugas Planogram', () => {
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
    await FormTemplateTugasPage.selectTemplateIR()
    await FormTemplateTugasPage.selectIRType()
    await FormTemplateTugasPage.inputJudulTugas(
      dataTest.templateTugas.judulPlanogram,
      dataTest.templateTugas.namaLainPlanogram,
      dataTest.templateTugas.deskripsiPlanogram
    )
    await FormTemplateTugasPage.selectKategori(
      dataTest.templateTugas.kategoriPlanogram,
      dataTest.templateTugas.tipePlanogram,
      dataTest.templateTugas.internalKategoriPlanogram,
      dataTest.templateTugas.kategoriMisiPlanogram,
      dataTest.templateTugas.projectPlanogram
    )
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPlanogramIR1(
      dataTest.templateTugas.qstPlanogram1
    )
    await FormTemplateTugasPage.selectQstPlanogramIR2(
      dataTest.templateTugas.qstPlanogram2
    )
    await FormTemplateTugasPage.selectQstPlanogramIR3(
      dataTest.templateTugas.qstPlanogram3
    )
    await FormTemplateTugasPage.addAlasanMenolakPilihan()
    await FormTemplateTugasPage.alasanMenolakPilihan1()
    await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
      dataTest.templateTugas.reasonPlanogram2
    )
    await FormTemplateTugasPage.save()
  })

  it("System should be able to submit template tugas and leading to template tugas page", async () => {
    await browser.pause(10000)
    await TemplateTugasPage.page()
  })
})