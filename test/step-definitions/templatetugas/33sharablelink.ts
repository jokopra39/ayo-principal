import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TemplateTugasPage from "../../../src/pageobjects/templatetugas/templatetugas.page"
import FormTemplateTugasPage from "../../../src/pageobjects/templatetugas/formtemplatetugas.page"
const dataTest = require("../../data-test/dte.data")

describe('[PRINCIPAL] 33. Template Tugas - Sharable Link', () => {
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

  it("I fill form with shareable link and submit", async () => {
    await FormTemplateTugasPage.inputJudulTugas(
      dataTest.templateTugas.judulTugas33,
      dataTest.templateTugas.namaLainMisi33,
      dataTest.templateTugas.deskripsiTugas33
    )
    await FormTemplateTugasPage.selectKategori(
      dataTest.templateTugas.kategoriToolbox29,
      dataTest.templateTugas.tipeMisi29,
      dataTest.templateTugas.internalKategoriMisi29,
      dataTest.templateTugas.kategoriMisi29,
      dataTest.templateTugas.projectMisi29
    )
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.addAlasanMenolakPilihan()
    await FormTemplateTugasPage.alasanMenolakPilihan1()
    await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
      dataTest.templateTugas.reason2
    )
    await FormTemplateTugasPage.addAlasanMenolakPilihan()
    await FormTemplateTugasPage.alasanMenolakPilihan2()
    await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
      dataTest.templateTugas.reason2
    )
    await FormTemplateTugasPage.save()
    await browser.pause(10000)
  })

  it("System should be able to submit template tugas and leading to template tugas page", async () => {
    await TemplateTugasPage.page()
  })
})