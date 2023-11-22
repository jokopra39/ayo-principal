import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import b2cVoucherPage from "../../../src/pageobjects/voucher/b2c-voucher.page";
import voucherTipeIQOS from "../../../src/pageobjects/voucher/30tipe-pengguna-iqos.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 30. Voucher Pengguna IQOS");
allureReporter.addFeature("Create Voucher Tipe Pengguna IQOS");

it("I am on the B2C Voucher page", async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.b2cVocher();
});

it("I click button Tambah", async () => {
  await b2cVoucherPage.tombolTambah();
});

it("System should be leading to Create B2C Voucher page", async () => {
  // await voucherTipeIQOS.Page();
});

it("I am on the Tambah B2C Voucher page", async () => {
  // await voucherTipeIQOS.formPage();
});

it("I input Nama voucher (.*)", async (nama_voucher) => {
  await voucherTipeIQOS.namaVoucher(nama_voucher);
});

it("System should be input Nama Voucher", async () => {
  // await voucherTipeIQOS.Page()
});

it("I input Nama Lain Voucher(.*)", async (nama_lain_voucher) => {
  await voucherTipeIQOS.namaLainVoucher(nama_lain_voucher);
});

it("System should be input Nama Lain Voucher", async () => {
  // await voucherTipeIQOS.Page()
});

it("I input Nilai Voucher (.*)", async (nilai_voucher) => {
  await voucherTipeIQOS.nilaiVoucher(nilai_voucher);
});

it("System should be input Nilai Voucher", async () => {
  // await voucherTipeIQOS.Page()
});

it("I input Jumlah Voucher per Customer (.*)", async (jumlah_voucher) => {
  await voucherTipeIQOS.jumlahVoucher(jumlah_voucher);
});

it("System should be input Jumlah Voucher per Customer", async () => {
  // await voucherTipeIQOS.Page()
});

it("I select date in Tanggal Awal Program", async () => {
  await voucherTipeIQOS.tanggalAwalProgram();
});

it("System should be select date Tangal Awal Program", async () => {
  // await voucherTipeIQOS.Page()
});

it("I select date in Tanggal Akhir Program", async () => {
  // await voucherTipeIQOS.tanggalAkhirProgram()
});

it("System should be select date Tanggal Akhir Program", async () => {
  // await voucherTipeIQOS.Page()
});

it("I select date in Tanggal Awal Pemakaian Voucher", async () => {
  await voucherTipeIQOS.tanggalAwalPemakaianVoucher();
});

it("System should be select date Tanggal Awal Pemakaian Voucher", async () => {
  // await voucherTipeIQOS.Page()
});

it("I select date in Tanggal Kadaluarsa Voucher", async () => {
  // await voucherTipeIQOS.tanggalKadaluarsaVoucher()
});

it("System should be select date Tanggal Kadaluarsa Voucher", async () => {
  // await voucherTipeIQOS.Page()
});

it("I select Pesan Antar in Pengguna Voucher", async () => {
  await voucherTipeIQOS.pesanAntar();
});

it("System should be select Pesan Antar", async () => {
  // await voucherTipeIQOS.Page()
});

it("I select Langsung ke Toko in Pengguna Voucher", async () => {
  await voucherTipeIQOS.langsungkeToko();
});

it("System should be select Langsung ke Toko", async () => {
  // await voucherTipeIQOS.Page()
});

it("I click button Simpan in Detail Voucher form Page", async () => {
  await voucherTipeIQOS.tombolSimpan1();
});

it("System should be submit data and leading to Panel Retailer Form Page", async () => {
  // await voucherTipeIQOS.formPage2();
});

it("I click button Simpan in Panel Retailer Form Page", async () => {
  await voucherTipeIQOS.tombolSimpan2();
});

it("System should be leading to Panel Customer Form Page", async () => {
  // await voucherTipeIQOS.formPage3();
});

it("I select Pengguna IQOS in Tipe Customer", async () => {
  await voucherTipeIQOS.tipeCustomer();
});

it("System should be select Pengguna IQOS in Tipe Customer", async () => {
  //   await voucherTipeIQOS.formPage3();
});

it("I input Dari in Batasan Umur (.*)", async (input_dari) => {
  await voucherTipeIQOS.batasUmurDari(input_dari);
});

it("System should be input Dari", async () => {
  //   await voucherTipeIQOS.formPage3();
});

it("I input Sampai in Batasan Umur (.*)", async (input_sampai) => {
  await voucherTipeIQOS.batasUmurSampai(input_sampai);
});

it("System should be input Sampai", async () => {
  //   await voucherTipeIQOS.formPage3();
});

it("I select Semua in Jenis Kelamin", async () => {
  await voucherTipeIQOS.jenisKelamin();
});

it("System should be select Semua in Jenis Kelamin", async () => {
  //   await voucherTipeIQOS.formPage3();
});

it("I click button Simpan in Panel Customer", async () => {
  await voucherTipeIQOS.tombolSimpan3();
});

it("System should be submit data and leading to Penukaran Voucher Form Page", async () => {
  // await voucherTipeIQOS.formPage4();
});

it("I select Reimbursment in Penukaran Voucher Form Page", async () => {
  await voucherTipeIQOS.cbReimbursment();
});

it("System should be select Reimbursment", async () => {
  // await voucherTipeIQOS.formpagepenukaranVoucher();
});

it("I select date in Tanggal Awal Penukaran Voucher", async () => {
  await voucherTipeIQOS.tanggalAwalPenukaranVoucher();
});

it("System should be select date Tanggal Awal Penukaran Voucher", async () => {
  // await voucherTipeIQOS.formpagepenukaranVoucher();
});

it("I select date in Tanggal Berakhir Penukaran Voucher", async () => {
  //   await voucherTipeIQOS.tanggalBerakhirPenukaranVoucher();
});

it("System should be select date Tanggal Berakhir Penukaran Voucher", async () => {
  // await voucherTipeIQOS.formpagepenukaranVoucher();
});

it("I select Voucher B2B in Opsi Penukaran Voucher", async () => {
  await voucherTipeIQOS.opsiPenukaranVoucher();
});

it("System should be select Voucher B2B", async () => {
  //   await voucherTipeIQOS.formpagepenukaranVoucher();
});

it("I click button Simpan in Penukaran Voucher", async () => {
  await voucherTipeIQOS.tombolSimpan4();
});

it("System should be submit data and leading to Design Voucher Form Page", async () => {
  // await voucherTipeIQOS.formPage5();
});

it("I insert Voucher in TEMPLATE F", async () => {
  await voucherTipeIQOS.gambarVoucher();
});

it("System show Voucher", async () => {
  //   await voucherTipeIQOS.formPage5();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await voucherTipeIQOS.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  //   await voucherTipeIQOS.formPage5();
});

it("I click button Simpan in Design Voucher", async () => {
  await voucherTipeIQOS.tombolSimpan5();
});

it("System should be submit data and leading to Preview Voucher Page1", async () => {
  // await voucherTipeIQOS.formPage6();
});

it("I click button SAVE SETTING", async () => {
  await voucherTipeIQOS.tombolSaveSetting();
});

it("System should be SAVE SETTING", async () => {
  //   await voucherTipeIQOS.formPage6();
});

it("I click button PROCESS TO APPROVAL", async () => {
  await voucherTipeIQOS.tombolProcesstoApproval();
});

it("System should be PROCESS TO APPROVAL", async () => {
  //   await voucherTipeIQOS.formPage6();
});

it("I click button APPROVE", async () => {
  await voucherTipeIQOS.tombolApprove();
});

it("System should be APPROVE", async () => {
  //   await voucherTipeIQOS.formPage6();
});

it("I click button Ya Lanjutkan", async () => {
  await voucherTipeIQOS.tombolyaLanjutkan();
});

it("System should be Ya Lanjutkan", async () => {
  //   await voucherTipeIQOS.formPage6();
});

it("I click button Publish1", async () => {
  await voucherTipeIQOS.tombolPublish1();
});

it("System should be Publish", async () => {
  //   await voucherTipeIQOS.formPage6();
});

it("I click button Publish2", async () => {
  await voucherTipeIQOS.tombolPublish2();
});

it("System should be Publish and leading to Preview Voucher Page", async () => {
  await b2cVoucherPage.open();
  // await b2cVoucherPage.Page();
});
