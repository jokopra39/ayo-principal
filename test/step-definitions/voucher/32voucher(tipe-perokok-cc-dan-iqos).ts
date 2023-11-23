import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import b2cVoucherPage from "../../../src/pageobjects/voucher/b2c-voucher.page"
import voucherTipePerokokCCdanIQOS from "../../../src/pageobjects/voucher/32tipe-perokok-cc-dan-iqos.page"

describe('[PRINCIPAL] 32. Voucher Perokok CC dan Pengguna IQOS', () => {
  it("I am on the B2C Voucher page", async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.b2cVocher()
  })

  it("I click button Tambah", async () => {
    await b2cVoucherPage.tombolTambah()
  })

  it("System should be leading to Create B2C Voucher page", async () => {
    // await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I am on the Tambah B2C Voucher page", async () => {
    // await voucherTipePerokokCCdanIQOS.formPage()
  })

  it("I input Nama voucher (.*)", async (nama_voucher) => {
    await voucherTipePerokokCCdanIQOS.namaVoucher(nama_voucher)
  })

  it("System should be input Nama Voucher", async () => {
    // await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I input Nama Lain Voucher(.*)", async (nama_lain_voucher) => {
    await voucherTipePerokokCCdanIQOS.namaLainVoucher(nama_lain_voucher)
  })

  it("System should be input Nama Lain Voucher", async () => {
    // await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I input Nilai Voucher (.*)", async (nilai_voucher) => {
    await voucherTipePerokokCCdanIQOS.nilaiVoucher(nilai_voucher)
  })

  it("System should be input Nilai Voucher", async () => {
    // await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I input Jumlah Voucher per Customer (.*)", async (jumlah_voucher) => {
    await voucherTipePerokokCCdanIQOS.jumlahVoucher(jumlah_voucher)
  })

  it("System should be input Jumlah Voucher per Customer", async () => {
    // await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I select date in Tanggal Awal Program", async () => {
    await voucherTipePerokokCCdanIQOS.tanggalAwalProgram()
  })

  it("System should be select date Tangal Awal Program", async () => {
    // await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I select date in Tanggal Akhir Program", async () => {
    //   await voucherTipePerokokCCdanIQOS.tanggalAkhirProgram()
  })

  it("System should be select date Tanggal Akhir Program", async () => {
    //   await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I select date in Tanggal Awal Pemakaian Voucher", async () => {
    await voucherTipePerokokCCdanIQOS.tanggalAwalPemakaianVoucher()
  })

  it("System should be select date Tanggal Awal Pemakaian Voucher", async () => {
    // await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I select date in Tanggal Kadaluarsa Voucher", async () => {
    //   await voucherTipePerokokCCdanIQOS.tanggalKadaluarsaVoucher()
  })

  it("System should be select date Tanggal Kadaluarsa Voucher", async () => {
    //   await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I select Pesan Antar in Pengguna Voucher", async () => {
    await voucherTipePerokokCCdanIQOS.pesanAntar()
  })

  it("System should be select Pesan Antar", async () => {
    //   await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I select Langsung ke Toko in Pengguna Voucher", async () => {
    await voucherTipePerokokCCdanIQOS.langsungkeToko()
  })

  it("System should be select Langsung ke Toko", async () => {
    //   await voucherTipePerokokCCdanIQOS.Page()
  })

  it("I click button Simpan in Detail Voucher form Page", async () => {
    await voucherTipePerokokCCdanIQOS.tombolSimpan1()
  })

  it("System should be submit data and leading to Panel Retailer Form Page", async () => {
    // await voucherTipePerokokCCdanIQOS.formPage2()
  })

  it("I click button Simpan in Panel Retailer Form Page", async () => {
    await voucherTipePerokokCCdanIQOS.tombolSimpan2()
  })

  it("System should be leading to Panel Customer Form Page", async () => {
    // await voucherTipePerokokCCdanIQOS.formPage3()
  })

  it("I select Perokok CC in Tipe Customer", async () => {
    await voucherTipePerokokCCdanIQOS.tipeCustomerCC()
  })

  it("System should be select Perokok CC in Tipe Customer", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage3()
  })

  it("I select Pengguna IQOS in Tipe Customer", async () => {
    await voucherTipePerokokCCdanIQOS.tipeCustomerIQOS()
  })

  it("System should be select Pengguna IQOS in Tipe Customer", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage3()
  })

  it("I input Dari in Batasan Umur (.*)", async (input_dari) => {
    await voucherTipePerokokCCdanIQOS.batasUmurDari(input_dari)
  })

  it("System should be input Dari", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage3()
  })

  it("I input Sampai in Batasan Umur (.*)", async (input_sampai) => {
    await voucherTipePerokokCCdanIQOS.batasUmurSampai(input_sampai)
  })

  it("System should be input Sampai", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage3()
  })

  it("I select Semua in Jenis Kelamin", async () => {
    await voucherTipePerokokCCdanIQOS.jenisKelamin()
  })

  it("System should be select Semua in Jenis Kelamin", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage3()
  })

  it("I click button Simpan in Panel Customer", async () => {
    await voucherTipePerokokCCdanIQOS.tombolSimpan3()
  })

  it("System should be submit data and leading to Penukaran Voucher Form Page", async () => {
    // await voucherTipePerokokCCdanIQOS.formPage4()
  })

  it("I select Reimbursment in Penukaran Voucher Form Page", async () => {
    await voucherTipePerokokCCdanIQOS.cbReimbursment()
  })

  it("System should be select Reimbursment", async () => {
    // await voucherTipePerokokCCdanIQOS.formpagepenukaranVoucher()
  })

  it("I select date in Tanggal Awal Penukaran Voucher", async () => {
    await voucherTipePerokokCCdanIQOS.tanggalAwalPenukaranVoucher()
  })

  it("System should be select date Tanggal Awal Penukaran Voucher", async () => {
    // await voucherTipePerokokCCdanIQOS.formpagepenukaranVoucher()
  })

  it("I select date in Tanggal Berakhir Penukaran Voucher", async () => {
    //   await voucherTipePerokokCCdanIQOS.tanggalBerakhirPenukaranVoucher()
  })

  it("System should be select date Tanggal Berakhir Penukaran Voucher", async () => {
    // await voucherTipePerokokCCdanIQOS.formpagepenukaranVoucher()
  })

  it("I select Voucher B2B in Opsi Penukaran Voucher", async () => {
    await voucherTipePerokokCCdanIQOS.opsiPenukaranVoucher()
  })

  it("System should be select Voucher B2B", async () => {
    //   await voucherTipePerokokCCdanIQOS.formpagepenukaranVoucher()
  })

  it("I click button Simpan in Penukaran Voucher", async () => {
    await voucherTipePerokokCCdanIQOS.tombolSimpan4()
  })

  it("System should be submit data and leading to Design Voucher Form Page", async () => {
    // await voucherTipePerokokCCdanIQOS.formPage5()
  })

  it("I insert Voucher in TEMPLATE F", async () => {
    await voucherTipePerokokCCdanIQOS.gambarVoucher()
  })

  it("System show Voucher", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage5()
  })

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await voucherTipePerokokCCdanIQOS.isiHalaman(isi_halaman)
  })

  it("System should be input Isi Halaman", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage5()
  })

  it("I click button Simpan in Design Voucher", async () => {
    await voucherTipePerokokCCdanIQOS.tombolSimpan5()
  })

  it("System should be submit data and leading to Preview Voucher Page1", async () => {
    // await voucherTipePerokokCCdanIQOS.formPage6()
  })

  it("I click button SAVE SETTING", async () => {
    await voucherTipePerokokCCdanIQOS.tombolSaveSetting()
  })

  it("System should be SAVE SETTING", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage6()
  })

  it("I click button PROCESS TO APPROVAL", async () => {
    await voucherTipePerokokCCdanIQOS.tombolProcesstoApproval()
  })

  it("System should be PROCESS TO APPROVAL", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage6()
  })

  it("I click button APPROVE", async () => {
    await voucherTipePerokokCCdanIQOS.tombolApprove()
  })

  it("System should be APPROVE", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage6()
  })

  it("I click button Ya Lanjutkan", async () => {
    await voucherTipePerokokCCdanIQOS.tombolyaLanjutkan()
  })

  it("System should be Ya Lanjutkan", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage6()
  })

  it("I click button Publish1", async () => {
    await voucherTipePerokokCCdanIQOS.tombolPublish1()
  })

  it("System should be Publish", async () => {
    //   await voucherTipePerokokCCdanIQOS.formPage6()
  })

  it("I click button Publish2", async () => {
    await voucherTipePerokokCCdanIQOS.tombolPublish2()
  })

  it("System should be Publish and leading to Preview Voucher Page", async () => {
    await b2cVoucherPage.open()
    // await b2cVoucherPage.Page()
  })
})