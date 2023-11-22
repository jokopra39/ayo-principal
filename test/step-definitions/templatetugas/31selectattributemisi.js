import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import TemplateTugasPage from "../../../src/pageobjects/templatetugas/templatetugas.page";
import FormTemplateTugasPage from "../../../src/pageobjects/templatetugas/formtemplatetugas.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 31. Template Tugas - Select Attribute Misi"
);
allureReporter.addFeature("Create Template Tugas with select attribute misi");

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

it("I fill form with select attribute misi and submit", async () => {
  await FormTemplateTugasPage.inputJudulTugas(
    dataTest.templateTugas.judulTugas31,
    dataTest.templateTugas.namaLainMisi31,
    dataTest.templateTugas.deskripsiTugas31
  );
  await FormTemplateTugasPage.selectKategori(
    dataTest.templateTugas.kategoriToolbox2,
    dataTest.templateTugas.tipeMisi2,
    dataTest.templateTugas.internalKategoriMisi2,
    dataTest.templateTugas.kategoriMisi2,
    dataTest.templateTugas.projectMisi2
  );
  await FormTemplateTugasPage.addNewQuestion();
  await FormTemplateTugasPage.addAlasanMenolakPilihan();
  await FormTemplateTugasPage.alasanMenolakPilihan1();
  await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
    dataTest.templateTugas.reason2
  );
  await FormTemplateTugasPage.addAlasanMenolakPilihan();
  await FormTemplateTugasPage.alasanMenolakPilihan2();
  await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
    dataTest.templateTugas.reason2
  );
  await FormTemplateTugasPage.save();
  await browser.pause(10000);
});

it("System should be able to submit template tugas and leading to template tugas page", async () => {
  await TemplateTugasPage.page();
});
