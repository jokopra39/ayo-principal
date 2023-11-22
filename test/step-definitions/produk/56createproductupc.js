import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../../src/pageobjects/login/login.page";
import ProdukPage from "../../../src/pageobjects/produk/produk.page";
import FormProdukPage from "../../../src/pageobjects/produk/formproduk.page";
import TemplateTugasPage from "../../../src/pageobjects/templatetugas/templatetugas.page";
import FormTemplateTugasPage from "../../../src/pageobjects/templatetugas/formtemplatetugas.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 56. Create Product UPC");
allureReporter.addFeature("Create Product UPC");

//  Scenario Outline: As a user, I can create product upc
it("I am on the Produk page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.produk();
  await ProdukPage.page();
  await ProdukPage.pageList();
});

it("I am click button Tambah Produk", async () => {
  await ProdukPage.createProduct();
});

it("System should be leading to form Tambah Produk", async () => {
  await FormProdukPage.page();
});

it("I am on the from Tambah Produk", async () => {
  await FormProdukPage.pageCreate();
});

it("I input and submit form", async () => {
  await FormProdukPage.addProduct(
    dataTest.produk.namaProduk,
    dataTest.produk.perusahaan,
    dataTest.produk.namaLainProduk,
    dataTest.produk.kategoriProduk,
    dataTest.produk.deskripsiProduk,
    dataTest.produk.WMSDeskripsiProduk
  );
  await FormProdukPage.submitProduct();
});

it("System should be able to submit form and leading to Produk page", async () => {
  await ProdukPage.page();
  await ProdukPage.pageList();
});

it("I search new produk", async () => {
  await ProdukPage.searchProduct(dataTest.produk.namaProduk);
});

it("System should be according data Produk based on search keyword", async () => {
  await ProdukPage.searchResult(dataTest.produk.namaProduk);
  await ProdukPage.editProduct();
  await FormProdukPage.editProduct(dataTest.produk.kodeFamily);
  await FormProdukPage.submitProduct();
});

it("I go to Template Tugas page", async () => {
  // await LoginPage.open()
  // await LoginPage.setLclStorage()
  await MainmenuPage.templateTugas();
  // await LoginPage.acceptCookie()
});

it("System should be leading to Template Tugas page", async () => {
  await TemplateTugasPage.page();
});

it("I check UPC Family Brand", async () => {
  await TemplateTugasPage.createTemplateTugas();
});

it("System should be according data UPC based on search keyword (.*)", async (fam) => {
  await FormTemplateTugasPage.page();
  await FormTemplateTugasPage.addNewQuestion();
  await FormTemplateTugasPage.checkUPC(fam);
});
