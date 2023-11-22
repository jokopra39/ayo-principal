import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TemplateTugasPage from "../../../src/pageobjects/templatetugas/templatetugas.page";
import FormTemplateTugasPage from "../../../src/pageobjects/templatetugas/formtemplatetugas.page";
const dataTest = require("../../data-test/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[Principal] 5. Create Template Tugas - Paragraph");
allureReporter.addFeature("Create Template Tugas - Paragraph");

it("I am on the Template Tugas page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.templateTugas();
  await TemplateTugasPage.page();
});
it("I click button Buat", async () => {
  await TemplateTugasPage.createTemplateTugas();
});
it("System should be leading to form create template tugas page", async () => {
  await FormTemplateTugasPage.page();
});
it("I am fill form with select paragraph and submit", async () => {
  /*
    await FormTemplateTugasPage.inputJudulTugas(
    dataTest.templateTugas.judulTugas5,
    dataTest.templateTugas.namaLainMisi5,
    dataTest.templateTugas.deskripsiTugas5
  );
  await FormTemplateTugasPage.selectKategori5(
    dataTest.templateTugas.kategoriToolbox2,
    dataTest.templateTugas.tipeMisi2,
    dataTest.templateTugas.internalKategoriMisi2,
    dataTest.templateTugas.kategoriMisi2,
    dataTest.templateTugas.projectMisi2
  );
 */
  await FormTemplateTugasPage.addNewQuestion();
  await FormTemplateTugasPage.selectQstParagraf1();
  await FormTemplateTugasPage.setNextQuestion1(
    dataTest.templateTugas.addPertanyaan1
  );

  await FormTemplateTugasPage.minCharacter(
    dataTest.templateTugas.inputMinCharacter
  );
  await FormTemplateTugasPage.maxCharacter(
    dataTest.templateTugas.inputMaxCharacter
  );

  await FormTemplateTugasPage.includeNumber();
  await FormTemplateTugasPage.includeSpecialCharacter(
    dataTest.templateTugas.inputSpecialCharacter
  );
  await FormTemplateTugasPage.linkToProfile();
});
it("System should be able to submit template tugas and leading to template tugas page", async () => {
  await TemplateTugasPage.page();
});
