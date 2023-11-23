import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import b2cVoucherPage from "../../../src/pageobjects/voucher/b2c-voucher.page"
import voucherTipePerokokCC from "../../../src/pageobjects/voucher/29tipe-perokok-cc.page"

describe('[PRINCIPAL] 29. Voucher Perokok CC', () => {
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
    // await voucherTipePerokokCC.Page()
  })

  it("I am on the Tambah B2C Voucher page", async () => {
    // await voucherTipePerokokCC.formPage()
  })

  it("I input Nama voucher (.*)", async (nama_voucher) => {
    await voucherTipePerokokCC.namaVoucher(nama_voucher)
  })

  it("System should be input Nama Voucher", async () => {
    // await voucherTipePerokokCC.Page()
  })

  it("I input Nama Lain Voucher(.*)", async (nama_lain_voucher) => {
    await voucherTipePerokokCC.namaLainVoucher(nama_lain_voucher)
  })

  it("System should be input Nama Lain Voucher", async () => {
    // await voucherTipePerokokCC.Page()
  })

  it("I input Nilai Voucher (.*)", async (nilai_voucher) => {
    await voucherTipePerokokCC.nilaiVoucher(nilai_voucher)
  })

  it("System should be input Nilai Voucher", async () => {
    // await voucherTipePerokokCC.Page()
  })

  it("I input Jumlah Voucher per Customer (.*)", async (jumlah_voucher) => {
    await voucherTipePerokokCC.jumlahVoucher(jumlah_voucher)
  })

  it("System should be input Jumlah Voucher per Customer", async () => {
    // await voucherTipePerokokCC.Page()
  })

  it("I select date in Tanggal Awal Program", async () => {
    await voucherTipePerokokCC.tanggalAwalProgram()
  })

  it("System should be select date Tangal Awal Program", async () => {
    // await voucherTipePerokokCC.Page()
  })

  it("I select date in Tanggal Akhir Program", async () => {
    // await voucherTipePerokokCC.tanggalAkhirProgram()
  })

  it("System should be select date Tanggal Akhir Program", async () => {
    // await voucherTipePerokokCC.Page()
  })

  it("I select date in Tanggal Awal Pemakaian Voucher", async () => {
    await voucherTipePerokokCC.tanggalAwalPemakaianVoucher()
  })

  it("System should be select date Tanggal Awal Pemakaian Voucher", async () => {
    // await voucherTipePerokokCC.Page()
  })

  it("I select date in Tanggal Kadaluarsa Voucher", async () => {
    // await voucherTipePerokokCC.tanggalKadaluarsaVoucher()
  })

  it("System should be select date Tanggal Kadaluarsa Voucher", async () => {
    // await voucherTipePerokokCC.Page()
  })

  it("I select Pesan Antar in Pengguna Voucher", async () => {
    await voucherTipePerokokCC.pesanAntar()
  })

  it("System should be select Pesan Antar", async () => {
    // await voucherTipePerokokCC.Page()
  })

  it("I select Langsung ke Toko in Pengguna Voucher", async () => {
    await voucherTipePerokokCC.langsungkeToko()
  })

  it("System should be select Langsung ke Toko", async () => {
    // await voucherTipePerokokCC.Page()
  })

  it("I click button Simpan in Detail Voucher form Page", async () => {
    await voucherTipePerokokCC.tombolSimpan1()
  })

  it("System should be submit data and leading to Panel Retailer Form Page", async () => {
    // await voucherTipePerokokCC.formPage2()
  })

  it("I click button Simpan in Panel Retailer Form Page", async () => {
    await voucherTipePerokokCC.tombolSimpan2()
  })

  it("System should be leading to Panel Customer Form Page", async () => {
    // await voucherTipePerokokCC.formPage3()
  })

  it("I select Perokok CC in Tipe Customer", async () => {
    await voucherTipePerokokCC.tipeCustomer()
  })

  it("System should be select Perokok CC in Tipe Customer", async () => {
    // await voucherTipePerokokCC.formPage3()
  })

  it("I input Dari in Batasan Umur (.*)", async (input_dari) => {
    await voucherTipePerokokCC.batasUmurDari(input_dari)
  })

  it("System should be input Dari", async () => {
    // await voucherTipePerokokCC.formPage3()
  })

  it("I input Sampai in Batasan Umur (.*)", async (input_sampai) => {
    await voucherTipePerokokCC.batasUmurSampai(input_sampai)
  })

  it("System should be input Sampai", async () => {
    // await voucherTipePerokokCC.formPage3()
  })

  it("I select Semua in Jenis Kelamin", async () => {
    await voucherTipePerokokCC.jenisKelamin()
  })

  it("System should be select Semua in Jenis Kelamin", async () => {
    // await voucherTipePerokokCC.formPage3()
  })

  it("I click button Simpan in Panel Customer", async () => {
    await voucherTipePerokokCC.tombolSimpan3()
  })

  it("System should be submit data and leading to Penukaran Voucher Form Page", async () => {
    // await voucherTipePerokokCC.formPage4()
  })

  it("I select Reimbursment in Penukaran Voucher Form Page", async () => {
    await voucherTipePerokokCC.cbReimbursment()
  })

  it("System should be select Reimbursment", async () => {
    // await voucherTipePerokokCC.formpagepenukaranVoucher()
  })

  it("I select date in Tanggal Awal Penukaran Voucher", async () => {
    await voucherTipePerokokCC.tanggalAwalPenukaranVoucher()
  })

  it("System should be select date Tanggal Awal Penukaran Voucher", async () => {
    // await voucherTipePerokokCC.formpagepenukaranVoucher()
  })

  it("I select date in Tanggal Berakhir Penukaran Voucher", async () => {
    // await voucherTipePerokokCC.tanggalBerakhirPenukaranVoucher()
  })

  it("System should be select date Tanggal Berakhir Penukaran Voucher", async () => {
    // await voucherTipePerokokCC.formpagepenukaranVoucher()
  })

  it("I select Voucher B2B in Opsi Penukaran Voucher", async () => {
    await voucherTipePerokokCC.opsiPenukaranVoucher()
  })

  it("System should be select Voucher B2B", async () => {
    // await voucherTipePerokokCC.formpagepenukaranVoucher()
  })

  it("I click button Simpan in Penukaran Voucher", async () => {
    await voucherTipePerokokCC.tombolSimpan4()
  })

  it("System should be submit data and leading to Design Voucher Form Page", async () => {
    // await voucherTipePerokokCC.formPage5()
  })

  it("I insert Voucher in TEMPLATE F", async () => {
    await voucherTipePerokokCC.gambarVoucher()
  })

  it("System show Voucher", async () => {
    // await voucherTipePerokokCC.formPage5()
  })

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await voucherTipePerokokCC.isiHalaman(isi_halaman)
  })

  it("System should be input Isi Halaman", async () => {
    // await voucherTipePerokokCC.formPage5()
  })

  it("I click button Simpan in Design Voucher", async () => {
    await voucherTipePerokokCC.tombolSimpan5()
  })

  it("System should be submit data and leading to Preview Voucher Page1", async () => {
    // await voucherTipePerokokCC.formPage6()
  })

  it("I click button SAVE SETTING", async () => {
    await voucherTipePerokokCC.tombolSaveSetting()
  })

  it("System should be SAVE SETTING", async () => {
    // await voucherTipePerokokCC.formPage6()
  })

  it("I click button PROCESS TO APPROVAL", async () => {
    await voucherTipePerokokCC.tombolProcesstoApproval()
  })

  it("System should be PROCESS TO APPROVAL", async () => {
    // await voucherTipePerokokCC.formPage6()
  })

  it("I click button APPROVE", async () => {
    await voucherTipePerokokCC.tombolApprove()
  })

  it("System should be APPROVE", async () => {
    // await voucherTipePerokokCC.formPage6()
  })

  it("I click button Ya Lanjutkan", async () => {
    await voucherTipePerokokCC.tombolyaLanjutkan()
  })

  it("System should be Ya Lanjutkan", async () => {
    // await voucherTipePerokokCC.formPage6()
  })

  it("I click button Publish1", async () => {
    await voucherTipePerokokCC.tombolPublish1()
  })

  it("System should be Publish", async () => {
    // await voucherTipePerokokCC.formPage6()
  })

  it("I click button Publish2", async () => {
    await voucherTipePerokokCC.tombolPublish2()
  })

  it("System should be Publish and leading to Preview Voucher Page", async () => {
    await b2cVoucherPage.open()
    // await b2cVoucherPage.Page()
  })
})