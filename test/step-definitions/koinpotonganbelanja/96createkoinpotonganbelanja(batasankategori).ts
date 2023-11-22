import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import formKoinPotonganBelanjaPage from "../../../src/pageobjects/koinpotonganbelanja/formkoinpotonganbelanja.page";
import koinPotonganBelanjaPage from "../../../src/pageobjects/koinpotonganbelanja/koinpotonganbelanja.page";
const dataTest = require("../../data-test/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 96. Create Koin Potongan Belanja (Batasan Kategori)"
);
allureReporter.addFeature("Create Koin Potongan Belanja (Batasan Kategori)");

it('I am on the Koin Potongan Belanja page', async function () {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await LoginPage.acceptCookie();
  await MainmenuPage.DropdownCN();
  await MainmenuPage.KoinPotonganBelanja();
});

it('I click button Tambah', async function () {
  await koinPotonganBelanjaPage.Tambah();
});

it('System should be leading to form Buat Koin Potongan Belanja page', async function () {}
);

Given(
  /^I am on the form Buat Koin Potongan Belanja page', async function () {}
);

it('I input form Detail Koin Potongan Belanja and submit', async function () {
    await formKoinPotonganBelanjaPage.createKPK(
      dataTest.coinpotonganbelanja.inputNamaBK,
      dataTest.coinpotonganbelanja.inputCariGTP2
    );
  }
);

it('System should be able to submit and leading to Koin Potongan Belanja page', async function () {}
);

it('I search and click button edit Koin Potongan Belanja', async function () {
    await koinPotonganBelanjaPage.search(
      dataTest.coinpotonganbelanja.inputNamaBK
    );
    await koinPotonganBelanjaPage.Edit();
  }
);

it('System should be leading to Ubah Koin Potongan Belanja page', async function () {}
);

it('I input form and submit', async function () {
  await formKoinPotonganBelanjaPage.formPanelMitra(
    dataTest.coinpotonganbelanja.inputCariMitra
  );
});

it('System should be able to submit form and leading to Koin Potongan Belanja page', async function () {}
);