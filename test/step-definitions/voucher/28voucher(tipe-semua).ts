import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import b2cVoucherPage from "../../../src/pageobjects/voucher/b2c-voucher.page"
import voucherTipeSemua from "../../../src/pageobjects/voucher/28tipe-semua.page"

describe('[PRINCIPAL] 28. Voucher All User', () => {
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
    // await voucherTipeSemua.Page()
  })

  it("I am on the Tambah B2C Voucher page", async () => {
    // await voucherTipeSemua.formPage()
  })

  it("I input Nama voucher (.*)", async (nama_voucher) => {
    await voucherTipeSemua.namaVoucher(nama_voucher)
  })

  it("System should be input Nama Voucher", async () => {
    //   await voucherTipeSemua.Page()
  })

  it("I input Nama Lain Voucher(.*)", async (nama_lain_voucher) => {
    await voucherTipeSemua.namaLainVoucher(nama_lain_voucher)
  })

  it("System should be input Nama Lain Voucher", async () => {
    //   await voucherTipeSemua.Page()
  })

  it("I input Nilai Voucher (.*)", async (nilai_voucher) => {
    await voucherTipeSemua.nilaiVoucher(nilai_voucher)
  })

  it("System should be input Nilai Voucher", async () => {
    //   await voucherTipeSemua.Page()
  })

  it("I input Jumlah Voucher per Customer (.*)", async (jumlah_voucher) => {
    await voucherTipeSemua.jumlahVoucher(jumlah_voucher)
  })

  it("System should be input Jumlah Voucher per Customer", async () => {
    //   await voucherTipeSemua.Page()
  })

  it("I select date in Tanggal Awal Program", async () => {
    await voucherTipeSemua.tanggalAwalProgram()
  })

  it("System should be select date Tangal Awal Program", async () => {
    //   await voucherTipeSemua.Page()
  })

  it("I select date in Tanggal Akhir Program", async () => {
    //   await voucherTipeSemua.tanggalAkhirProgram()
  })

  it("System should be select date Tanggal Akhir Program", async () => {
    //   await voucherTipeSemua.Page()
  })

  it("I select date in Tanggal Awal Pemakaian Voucher", async () => {
    await voucherTipeSemua.tanggalAwalPemakaianVoucher()
  })

  it("System should be select date Tanggal Awal Pemakaian Voucher", async () => {
    // await voucherTipeSemua.Page()
  })

  it("I select date in Tanggal Kadaluarsa Voucher", async () => {
    //   await voucherTipeSemua.tanggalKadaluarsaVoucher()
  })

  it("System should be select date Tanggal Kadaluarsa Voucher", async () => {
    //   await voucherTipeSemua.Page()
  })

  it("I select Pesan Antar in Pengguna Voucher", async () => {
    await voucherTipeSemua.pesanAntar()
  })

  it("System should be select Pesan Antar", async () => {
    // await voucherTipeSemua.Page()
  })

  it("I select Langsung ke Toko in Pengguna Voucher", async () => {
    await voucherTipeSemua.langsungkeToko()
  })

  it("System should be select Langsung ke Toko", async () => {
    // await voucherTipeSemua.Page()
  })

  it("I click button Simpan in Detail Voucher form Page", async () => {
    await voucherTipeSemua.tombolSimpan1()
  })

  it("System should be submit data and leading to Panel Retailer Form Page", async () => {
    // await voucherTipeSemua.formPage2()
  })

  it("I click button Simpan in Panel Retailer Form Page", async () => {
    await voucherTipeSemua.tombolSimpan2()
  })

  it("System should be leading to Panel Customer Form Page", async () => {
    // await voucherTipeSemua.formPage3()
  })

  it("I select Semua in Tipe Customer", async () => {
    await voucherTipeSemua.tipeCustomer()
  })

  it("System should be select Semua in Tipe Customer", async () => {
    // await voucherTipeSemua.formPage3()
  })

  it("I input Dari in Batasan Umur (.*)", async (input_dari) => {
    await voucherTipeSemua.batasUmurDari(input_dari)
  })

  it("System should be input Dari", async () => {
    // await voucherTipeSemua.formPage3()
  })

  it("I input Sampai in Batasan Umur (.*)", async (input_sampai) => {
    await voucherTipeSemua.batasUmurSampai(input_sampai)
  })

  it("System should be input Sampai", async () => {
    // await voucherTipeSemua.formPage3()
  })

  it("I select Semua in Jenis Kelamin", async () => {
    await voucherTipeSemua.jenisKelamin()
  })

  it("System should be select Semua in Jenis Kelamin", async () => {
    // await voucherTipeSemua.formPage3()
  })

  it("I click button Simpan in Panel Customer", async () => {
    await voucherTipeSemua.tombolSimpan3()
  })

  it("System should be submit data and leading to Penukaran Voucher Form Page", async () => {
    // await voucherTipeSemua.formPage4()
  })

  it("I select Reimbursment in Penukaran Voucher Form Page", async () => {
    await voucherTipeSemua.cbReimbursment()
  })

  it("System should be select Reimbursment", async () => {
    //await voucherTipeSemua.Page()
    // await voucherTipeSemua.formpagepenukaranVoucher()
  })

  it("I select date in Tanggal Awal Penukaran Voucher", async () => {
    await voucherTipeSemua.tanggalAwalPenukaranVoucher()
  })

  it("System should be select date Tanggal Awal Penukaran Voucher", async () => {
    // await voucherTipeSemua.formpagepenukaranVoucher()
  })

  it("I select date in Tanggal Berakhir Penukaran Voucher", async () => {
    //   await voucherTipeSemua.tanggalBerakhirPenukaranVoucher()
  })

  it("System should be select date Tanggal Berakhir Penukaran Voucher", async () => {
    // await voucherTipeSemua.formpagepenukaranVoucher()
  })

  it("I select Voucher B2B in Opsi Penukaran Voucher", async () => {
    await voucherTipeSemua.opsiPenukaranVoucher()
  })

  it("System should be select Voucher B2B", async () => {
    //   await voucherTipeSemua.formpagepenukaranVoucher()
  })

  it("I click button Simpan in Penukaran Voucher", async () => {
    await voucherTipeSemua.tombolSimpan4()
  })

  it("System should be submit data and leading to Design Voucher Form Page", async () => {
    // await voucherTipeSemua.formPage5()
  })

  it("I insert Voucher in TEMPLATE F", async () => {
    await voucherTipeSemua.gambarVoucher()
  })

  it("System show Voucher", async () => {
    //   await voucherTipeSemua.formPage5()
  })

  it("I input Isi Halaman (.*)", async (isi_halaman) => {
    await voucherTipeSemua.isiHalaman(isi_halaman)
  })

  it("System should be input Isi Halaman", async () => {
    //   await voucherTipeSemua.formPage5()
  })

  it("I click button Simpan in Design Voucher", async () => {
    await voucherTipeSemua.tombolSimpan5()
  })

  it("System should be submit data and leading to Preview Voucher Page1", async () => {
    // await voucherTipeSemua.formPage6()
  })

  it("I click button SAVE SETTING", async () => {
    await voucherTipeSemua.tombolSaveSetting()
  })

  it("System should be SAVE SETTING", async () => {
    //   await voucherTipeSemua.formPage6()
  })

  it("I click button PROCESS TO APPROVAL", async () => {
    await voucherTipeSemua.tombolProcesstoApproval()
  })

  it("System should be PROCESS TO APPROVAL", async () => {
    //   await voucherTipeSemua.formPage6()
  })

  it("I click button APPROVE", async () => {
    await voucherTipeSemua.tombolApprove()
  })

  it("System should be APPROVE", async () => {
    //   await voucherTipeSemua.formPage6()
  })

  it("I click button Ya Lanjutkan", async () => {
    await voucherTipeSemua.tombolyaLanjutkan()
  })

  it("System should be Ya Lanjutkan", async () => {
    //   await voucherTipeSemua.formPage6()
  })

  it("I click button Publish1", async () => {
    await voucherTipeSemua.tombolPublish1()
  })

  it("System should be Publish", async () => {
    //   await voucherTipeSemua.formPage6()
  })

  it("I click button Publish2", async () => {
    await voucherTipeSemua.tombolPublish2()
  })

  it("System should be Publish and leading to Preview Voucher Page", async () => {
    await b2cVoucherPage.open()
    // await b2cVoucherPage.Page()
  })
})