import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import EmployeeMappingPage from "../../../src/pageobjects/employeemapping/employeemapping.page";
import FormEmployeeMappingPage from "../../../src/pageobjects/employeemapping/form.page";
const dataTest = require("../../data-test/dte.data");
import { frameHome, frameForm } from "../../../src/helper/commands";

// Scenario Outline: As a user, I can create, read, update and delete employee - transfer bank
describe("[PRINCIPAL] 35. CRUD Employee Mapping (Transfer Bank)", () => {
  before("Iam login", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
  });

  it('I am on the Employee Mapping page', async () => {
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
    await MainmenuPage.EmployeeMapping();
    await frameHome();
  });

  it('I click button Tambah', async () => {
    await EmployeeMappingPage.createNew();
  });

  it('System should be leading to form create Employee Mapping', async () => { }
  );

  it('I am on the form create Employee Mapping page', async () => { });

  it("I input form with metode pembayaran 'Transfer Bank' and submit", async () => {
    await frameForm();
    await FormEmployeeMappingPage.name(
      dataTest.employeeMapping.searchByNamaEmployee2
    );
    await FormEmployeeMappingPage.metodeTB("Transfer Bank");
    await FormEmployeeMappingPage.zone(["ZONENORTHSUM"]);
    await FormEmployeeMappingPage.submitForm();
  }
  );

  it('System should be able to submit Employee Mapping and leading to Employee Mapping page', async () => { }
  );

  it('I search a employee', async () => {
    await frameForm();
    await EmployeeMappingPage.search(dataTest.employeeMapping.email);
  });

  it('System should be display employee data based on search keyword', async () => {
    await EmployeeMappingPage.expectNewEmployeeRow1(
      dataTest.employeeMapping.employee,
      dataTest.employeeMapping.email,
      dataTest.employeeMapping.area,
      dataTest.employeeMapping.metodeTB
    );
  }
  );

  it('I edit and delete employee', async () => {
    await EmployeeMappingPage.open();
    await LoginPage.acceptCookie();
    await frameHome();
    await EmployeeMappingPage.search(dataTest.employeeMapping.email);
    await EmployeeMappingPage.searchResult(dataTest.employeeMapping.email);
    await EmployeeMappingPage.editTask();
    await frameForm();
    await FormEmployeeMappingPage.clearName();
    await FormEmployeeMappingPage.name(
      dataTest.employeeMapping.searchByNamaEmployeeEdit
    );
    await FormEmployeeMappingPage.zone(["ZONENORTHSUM"]);
    await FormEmployeeMappingPage.submitForm();
    await frameForm();
    await EmployeeMappingPage.search(dataTest.employeeMapping.emailEdit);
    await EmployeeMappingPage.searchResult(dataTest.employeeMapping.emailEdit);
    await EmployeeMappingPage.deleteTask();
  });

  it('System should be delete employee', async () => {
    await EmployeeMappingPage.search(dataTest.employeeMapping.emailEdit);
    await browser.pause(5000);
  });
});