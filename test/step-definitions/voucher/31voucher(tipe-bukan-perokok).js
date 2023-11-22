import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import b2cVoucherPage from "../../../src/pageobjects/voucher/b2c-voucher.page";
import voucherBukanPerokok from "../../../src/pageobjects/voucher/31tipe-bukan-perokok.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 31. Voucher Bukan Perokok");
allureReporter.addFeature("Create Voucher Tipe Bukan Perokok");

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
  // await voucherBukanPerokok.Page();
});

it("I am on the Tambah B2C Voucher page", async () => {
  // await voucherBukanPerokok.formPage();
});

it("I input Nama voucher (.*)", async (nama_voucher) => {
  await voucherBukanPerokok.namaVoucher(nama_voucher);
});

it("System should be input Nama Voucher", async () => {
  // await voucherBukanPerokok.Page()
});

it("I input Nama Lain Voucher(.*)", async (nama_lain_voucher) => {
  await voucherBukanPerokok.namaLainVoucher(nama_lain_voucher);
});

it("System should be input Nama Lain Voucher", async () => {
  // await voucherBukanPerokok.Page()
});

it("I input Nilai Voucher (.*)", async (nilai_voucher) => {
  await voucherBukanPerokok.nilaiVoucher(nilai_voucher);
});

it("System should be input Nilai Voucher", async () => {
  // await voucherBukanPerokok.Page()
});

it("I input Jumlah Voucher per Customer (.*)", async (jumlah_voucher) => {
  await voucherBukanPerokok.jumlahVoucher(jumlah_voucher);
});

it("System should be input Jumlah Voucher per Customer", async () => {
  // await voucherBukanPerokok.Page()
});

it("I select date in Tanggal Awal Program", async () => {
  await voucherBukanPerokok.tanggalAwalProgram();
});

it("System should be select date Tangal Awal Program", async () => {
  // await voucherBukanPerokok.Page()
});

it("I select date in Tanggal Akhir Program", async () => {
  // await voucherBukanPerokok.tanggalAkhirProgram()
});

it("System should be select date Tanggal Akhir Program", async () => {
  // await voucherBukanPerokok.Page()
});

it("I select date in Tanggal Awal Pemakaian Voucher", async () => {
  await voucherBukanPerokok.tanggalAwalPemakaianVoucher();
});

it("System should be select date Tanggal Awal Pemakaian Voucher", async () => {
  // await voucherBukanPerokok.Page();
});

it("I select date in Tanggal Kadaluarsa Voucher", async () => {
  //   await voucherBukanPerokok.tanggalKadaluarsaVoucher();
});

it("System should be select date Tanggal Kadaluarsa Voucher", async () => {
  //   await voucherBukanPerokok.Page();
});

it("I select Pesan Antar in Pengguna Voucher", async () => {
  await voucherBukanPerokok.pesanAntar();
});

it("System should be select Pesan Antar", async () => {
  //   await voucherBukanPerokok.Page();
});

it("I select Langsung ke Toko in Pengguna Voucher", async () => {
  await voucherBukanPerokok.langsungkeToko();
});

it("System should be select Langsung ke Toko", async () => {
  //   await voucherBukanPerokok.Page();
});

it("I click button Simpan in Detail Voucher form Page", async () => {
  await voucherBukanPerokok.tombolSimpan1();
});

it("System should be submit data and leading to Panel Retailer Form Page", async () => {
  // await voucherBukanPerokok.formPage2();
});

it("I click button Simpan in Panel Retailer Form Page", async () => {
  await voucherBukanPerokok.tombolSimpan2();
});

it("System should be leading to Panel Customer Form Page", async () => {
  // await voucherBukanPerokok.formPage3();
});

it("I select Bukan Perokok in Tipe Customer", async () => {
  await voucherBukanPerokok.tipeCustomer();
});

it("System should be select Bukan Perokok in Tipe Customer", async () => {
  //   await voucherBukanPerokok.formPage3();
});

it("I input Dari in Batasan Umur (.*)", async (input_dari) => {
  await voucherBukanPerokok.batasUmurDari(input_dari);
});

it("System should be input Dari", async () => {
  //   await voucherBukanPerokok.formPage3();
});

it("I input Sampai in Batasan Umur (.*)", async (input_sampai) => {
  await voucherBukanPerokok.batasUmurSampai(input_sampai);
});

it("System should be input Sampai", async () => {
  //   await voucherBukanPerokok.formPage3();
});

it("I select Semua in Jenis Kelamin", async () => {
  await voucherBukanPerokok.jenisKelamin();
});

it("System should be select Semua in Jenis Kelamin", async () => {
  //   await voucherBukanPerokok.formPage3();
});

it("I click button Simpan in Panel Customer", async () => {
  await voucherBukanPerokok.tombolSimpan3();
});

it("System should be submit data and leading to Penukaran Voucher Form Page", async () => {
  // await voucherBukanPerokok.formPage4();
});

it("I select Reimbursment in Penukaran Voucher Form Page", async () => {
  await voucherBukanPerokok.cbReimbursment();
});

it("System should be select Reimbursment", async () => {
  // await voucherBukanPerokok.formpagepenukaranVoucher();
});

it("I select date in Tanggal Awal Penukaran Voucher", async () => {
  await voucherBukanPerokok.tanggalAwalPenukaranVoucher();
});

it("System should be select date Tanggal Awal Penukaran Voucher", async () => {
  // await voucherBukanPerokok.formpagepenukaranVoucher();
});

it("I select date in Tanggal Berakhir Penukaran Voucher", async () => {
  //   await voucherBukanPerokok.tanggalBerakhirPenukaranVoucher();
});

it("System should be select date Tanggal Berakhir Penukaran Voucher", async () => {
  // await voucherBukanPerokok.formpagepenukaranVoucher();
});

it("I select Voucher B2B in Opsi Penukaran Voucher", async () => {
  await voucherBukanPerokok.opsiPenukaranVoucher();
});

it("System should be select Voucher B2B", async () => {
  //   await voucherBukanPerokok.formpagepenukaranVoucher();
});

it("I click button Simpan in Penukaran Voucher", async () => {
  await voucherBukanPerokok.tombolSimpan4();
});

it("System should be submit data and leading to Design Voucher Form Page", async () => {
  // await voucherBukanPerokok.formPage5();
});

it("I insert Voucher in TEMPLATE F", async () => {
  await voucherBukanPerokok.gambarVoucher();
});

it("System show Voucher", async () => {
  //   await voucherBukanPerokok.formPage5();
});

it("I input Isi Halaman (.*)", async (isi_halaman) => {
  await voucherBukanPerokok.isiHalaman(isi_halaman);
});

it("System should be input Isi Halaman", async () => {
  //   await voucherBukanPerokok.formPage5();
});

it("I click button Simpan in Design Voucher", async () => {
  await voucherBukanPerokok.tombolSimpan5();
});

it("System should be submit data and leading to Preview Voucher Page1", async () => {
  // await voucherBukanPerokok.formPage6();
});

it("I click button SAVE SETTING", async () => {
  await voucherBukanPerokok.tombolSaveSetting();
});

it("System should be SAVE SETTING", async () => {
  //   await voucherBukanPerokok.formPage6();
});

it("I click button PROCESS TO APPROVAL", async () => {
  await voucherBukanPerokok.tombolProcesstoApproval();
});

it("System should be PROCESS TO APPROVAL", async () => {
  //   await voucherBukanPerokok.formPage6();
});

it("I click button APPROVE", async () => {
  await voucherBukanPerokok.tombolApprove();
});

it("System should be APPROVE", async () => {
  //   await voucherBukanPerokok.formPage6();
});

it("I click button Ya Lanjutkan", async () => {
  await voucherBukanPerokok.tombolyaLanjutkan();
});

it("System should be Ya Lanjutkan", async () => {
  //   await voucherBukanPerokok.formPage6();
});

it("I click button Publish1", async () => {
  await voucherBukanPerokok.tombolPublish1();
});

it("System should be Publish", async () => {
  //   await voucherBukanPerokok.formPage6();
});

it("I click button Publish2", async () => {
  await voucherBukanPerokok.tombolPublish2();
});

it("System should be Publish and leading to Preview Voucher Page", async () => {
  await b2cVoucherPage.open();
  // await b2cVoucherPage.Page();
});
