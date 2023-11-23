import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import EmployeeMappingPage from "../../../src/pageobjects/employeemapping/employeemapping.page";
import FormEmployeeMappingPage from "../../../src/pageobjects/employeemapping/form.page";
const dataTest = require("../../data-test/dte.data");

// Scenario Outline: As a user, I can create, read, update and delete employee - koin potongan belanja
describe("[PRINCIPAL] 94. CRUD Employee Mapping (Koin Potongan Belanja)", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
  });

  it('I am on the Employee Mapping page', async () => {
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
    await MainmenuPage.EmployeeMapping();
    await EmployeeMappingPage.pageList();
  });

  it('I click button Tambah', async () => {
    await EmployeeMappingPage.createNew();
  });

  it('System should be leading to form create Employee Mapping', async () => {
    await FormEmployeeMappingPage.page();
  });

  it('I am on the form create Employee Mapping page', async () => {
    await FormEmployeeMappingPage.pageCreate();
  });

  it("I input form with metode pembayaran 'coin potongan belanja' and submit", async () => {
    await FormEmployeeMappingPage.name(
      dataTest.employeeMapping.searchByNamaEmployee3
    );
    await browser.pause(2000);
    await FormEmployeeMappingPage.metodeKoinPotonganBelanja();
    await browser.pause(2000);
    await FormEmployeeMappingPage.submitForm();
    await browser.pause(5000);
  }
  );

  it('System should be able to submit Employee Mapping and leading to Employee Mapping page', async () => {
    await EmployeeMappingPage.pageList();
  }
  );

  it('I search a employee', async () => {
    await EmployeeMappingPage.search(dataTest.employeeMapping.email2);
  });

  it('System should be display employee data based on search keyword', async () => {
    await EmployeeMappingPage.expectNewEmployeeRowSatu(
      dataTest.employeeMapping.employee2,
      dataTest.employeeMapping.email2,
      dataTest.employeeMapping.area2,
      dataTest.employeeMapping.metodeKoinPotonganBelanja
    );
  }
  );

  it('I edit and delete employee', async () => {
    await EmployeeMappingPage.editTask();
    await browser.pause(10000);
    await FormEmployeeMappingPage.pageEdit();
    await browser.pause(10000);
    await FormEmployeeMappingPage.zone(["ZONENORTHSUM"]);
    await browser.pause(10000);
    await FormEmployeeMappingPage.region(["SLSSW1"]);
    await FormEmployeeMappingPage.submitForm();
    await EmployeeMappingPage.pageList();
    await EmployeeMappingPage.search(dataTest.employeeMapping.email2);
    await EmployeeMappingPage.searchResult(dataTest.employeeMapping.email2);
    await EmployeeMappingPage.editTask();
    await FormEmployeeMappingPage.pageEdit();
    await EmployeeMappingPage.open();
    await LoginPage.acceptCookie();
    await browser.pause(10000);
    await EmployeeMappingPage.page();
    await EmployeeMappingPage.search(dataTest.employeeMapping.email2);
    await EmployeeMappingPage.searchResult(dataTest.employeeMapping.email2);
    await EmployeeMappingPage.deleteTask();
  });

  it('System should be delete employee', async () => {
    await EmployeeMappingPage.search(dataTest.employeeMapping.email2);
    await browser.pause(5000);
  });

});