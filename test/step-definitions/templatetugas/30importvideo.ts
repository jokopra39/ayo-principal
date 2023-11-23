import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TemplateTugasPage from "../../../src/pageobjects/templatetugas/templatetugas.page"
import FormTemplateTugasPage from "../../../src/pageobjects/templatetugas/formtemplatetugas.page"
const dataTest = require("../../data-test/dte.data")

describe('[PRINCIPAL] 30. Template Tugas - Import Video', () => {
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

  it("I am fill form with import video and submit", async () => {
    await FormTemplateTugasPage.inputJudulTugas(
      dataTest.templateTugas.judulTugas30,
      dataTest.templateTugas.namaLainMisi30,
      dataTest.templateTugas.deskripsiTugas30
    )
    await FormTemplateTugasPage.selectKategori(
      dataTest.templateTugas.kategoriToolbox29,
      dataTest.templateTugas.tipeMisi29,
      dataTest.templateTugas.internalKategoriMisi29,
      dataTest.templateTugas.kategoriMisi29,
      dataTest.templateTugas.projectMisi29
    )
    await FormTemplateTugasPage.uploadVideo()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.addAlasanMenolakPilihan()
    await FormTemplateTugasPage.alasanMenolakPilihan1()
    await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
      dataTest.templateTugas.reason30
    )
    await FormTemplateTugasPage.addAlasanMenolakPilihan()
    await FormTemplateTugasPage.alasanMenolakPilihan2()
    await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
      dataTest.templateTugas.reason30
    )
    await FormTemplateTugasPage.save()
    await browser.pause(8000)
  })

  it("System should be able to submit template tugas and leading to template tugas page", async () => {
    await TemplateTugasPage.page()
  })
})