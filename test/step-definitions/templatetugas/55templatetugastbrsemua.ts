import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TemplateTugasPage from "../../../src/pageobjects/templatetugas/templatetugas.page"
import FormTemplateTugasPage from "../../../src/pageobjects/templatetugas/formtemplatetugas.page"
const dataTest = require('../../data-test/dte.data')

describe('[PRINCIPAL] 55. Create Template Tugas TBR Semua Pertanyaan', () => {
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
    await FormTemplateTugasPage.selectResponseType()
    await FormTemplateTugasPage.selectTemplateIR()
    await FormTemplateTugasPage.selectResponseType()
    await FormTemplateTugasPage.selectTemplateIR()
    await FormTemplateTugasPage.selectIRType()
    await FormTemplateTugasPage.inputJudulTugas(
      dataTest.templateTugas.judulTBR,
      dataTest.templateTugas.namaLainPlanogram,
      dataTest.templateTugas.deskripsiTBR
    )
    await FormTemplateTugasPage.selectKategori(
      dataTest.templateTugas.kategoriPlanogram,
      dataTest.templateTugas.tipePlanogram,
      dataTest.templateTugas.internalKategoriPlanogram,
      dataTest.templateTugas.kategoriMisiPlanogram,
      dataTest.templateTugas.projectPlanogram
    )
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPilGan55()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstJwbnSingkat55()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstParagraf55()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPilGanAngka55()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPilGanJwbnSingkat()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPilGanParagraf()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstCheckbox()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstUploadImage()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstAngka()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstSelectDate()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstStockCheck()
    await FormTemplateTugasPage.setStockCheck(
      dataTest.templateTugas.stockCheckNamaProduk32
    )

    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPlanogramIR55()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPUPC55(
      dataTest.templateTugas.code1,
      dataTest.templateTugas.coin1,
      dataTest.templateTugas.fam1
    )

    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstStockCheckIR55()

    await FormTemplateTugasPage.setNextQuestion()
    await FormTemplateTugasPage.setEndQuestion()
    await FormTemplateTugasPage.save()
  })

  it("System should be able to submit template tugas and leading to template tugas page", async () => {
    //await FormTemplateTugasPage.save()
    await browser.pause(10000)
    await TemplateTugasPage.page()
  })
})