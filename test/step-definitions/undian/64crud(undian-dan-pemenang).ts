import LoginPage from "../../../src/pageobjects/login/login.page";
import MainmenuPage from "../../../src/pageobjects/mainmenu.page";
import undianPage from "../../../src/pageobjects/undian/undian.page";
import crudPemenangdanUndian from "../../../src/pageobjects/undian/64crud(undian-dan-pemenang).page";

describe('[PRINCIPAL] 64. CRUD Undian dan Upload Pemenang', () => {
  it("I am on the Undian page", async () => {
    await LoginPage.open();
    await LoginPage.setLclStorage();
    await MainmenuPage.open();
    await MainmenuPage.dashboard();
    await LoginPage.acceptCookie();
    await MainmenuPage.DropdownUndian();
    await MainmenuPage.Undian();
  });

  it("I click button Tambah", async () => {
    await undianPage.tombolBuat();
  });

  it("System should be leading to Buat Undian page1", async () => { });

  it("I am on the Buat Undian page", async () => { });

  it("I input nama program kupon undian (.*)", async (nama_program) => {
    await crudPemenangdanUndian.namaProgram(nama_program);
  });

  it("System should be input nama program kupon undian", async () => { });

  it("I input jumlah koin yang dibutuhkan per kupon (.*)", async (jumlah_koin) => {
    await crudPemenangdanUndian.jumlahKoin(jumlah_koin);
  });

  it("System should be input jumlah koin yang dibutuhkan per kupon", async () => { });

  it("I select date in Tanggal awal penukaran kupon undian", async () => {
    await crudPemenangdanUndian.tanggalAwalPenukaranKupon();
  });

  it("System should be input date in Tanggal awal penukaran kupon undian", async () => { });

  it("I select time in Jam Terbit", async () => { });

  it("System should be select time in Jam Terbit", async () => { });

  it("I select date in Tanggal Berakhir Penukaran Kupon Undian", async () => { });

  it("System should be select date in Tanggal Berakhir Penukaran Kupon Undian", async () => { });

  it("I select time in Jam Berakhir", async () => { });

  it("System should be select time in Jam Berakhir", async () => { });

  it("I select date in Tanggal Pengumuman Pemenang Berakhir", async () => {
    await crudPemenangdanUndian.tanggalPengumumanPemenang();
  });

  it("System should be select date in Tanggal Pengumuman Pemenang Berakhir", async () => { });

  it("I select time in Jam Pengumuman Pemenang Berakhir", async () => {
    await crudPemenangdanUndian.jamPengumumanPemenang();
  });

  it("System should be select time in Jam Pengumuman Pemenang Berakhir", async () => { });

  it("I click Sub Group Trade Program", async () => {
    await crudPemenangdanUndian.SubGroupTradeProgram();
  });

  it("System show input search", async () => { });

  it("I input Sub GTP Weekend 2023 in searchbox (.*)", async (input_sgtp) => {
    await crudPemenangdanUndian.inputSubGTP(input_sgtp);
  });

  it("System show Sub GTP Weekend 2023", async () => { });

  it("I select Sub GTP Weekend 2023 in Sub Group Trade Program", async () => {
    await crudPemenangdanUndian.selectSGPT();
  });

  it("System should be select Sub GTP Weekend 2023 in Sub Group Trade Program", async () => { });

  it("I click button Simpan in Tab Undian", async () => {
    await crudPemenangdanUndian.SimpanUndian();
  });

  it("System should be submit data in Tab Undian and leading to Undian Page", async () => { });

  it("I click button Edit (.*)", async (nama_program) => {
    await undianPage.Search(nama_program);
    await undianPage.Edit();
  });

  it("System should be leading to Buat Undian Page2", async () => { });

  it("I click tab Audience", async () => {
    await crudPemenangdanUndian.tabAudience();
  });

  it("System show form in Tab Audience", async () => { });

  it("I click radio button Fixed Panel", async () => {
    await crudPemenangdanUndian.FixedPanel();
  });

  it("System should be click Fixed Panel", async () => { });

  it("I click button Import XLSX", async () => {
    await crudPemenangdanUndian.ImportTamplate();
  });

  it("System show popup Unggah File XLSX", async () => { });

  it("I unggah file XLSX", async () => {
    await crudPemenangdanUndian.InsertFile1();
  });

  it("System show data penjual", async () => { });

  it("I click button Kirim", async () => {
    await crudPemenangdanUndian.btnKirim();
  });

  it("System should be submit data and close popup Unggah File XLSX", async () => { });

  it("I click button Export Template", async () => {
    await crudPemenangdanUndian.ExportTamplate();
  });

  it("System should be able to download Template", async () => { });

  it("I click button check", async () => {
    await crudPemenangdanUndian.btnCheck();
  });

  it("System update panel blast", async () => { });

  it("I click button Simpan in Tab Audience", async () => {
    await crudPemenangdanUndian.btnSimpanAudience();
  });

  it("System should be submit data in Tab Audience", async () => {
    await crudPemenangdanUndian.AudienceTabPage();
  });

  it("I click Tab Preview", async () => {
    await crudPemenangdanUndian.tabPreview();
  });

  it("System show form in Tab Preview", async () => {
    await crudPemenangdanUndian.PreviewTabPage();
  });

  it("I insert Visual Header Kupon Undian", async () => {
    await crudPemenangdanUndian.InsertGambar1();
  });

  it("System show Visual Header Kupon Undian", async () => { });

  it("I insert Visual Header di List Program Kupon Undian", async () => { });

  it("System show Visual Header di List Program Kupon Undian", async () => { });

  it("I input Deskripsi Kupon Undian (.*)", async (deskripsi_kupon) => {
    await crudPemenangdanUndian.deskripsiKuponUndian(deskripsi_kupon);
  });

  it("System should be input Deskripsi Kupon Undian", async () => { });

  it("I click toggle bar Aktifkan", async () => {
    await crudPemenangdanUndian.toggleBar();
  });

  it("System should be click toggle bar Aktifkan", async () => { });

  it("I input Deksripsi T&C (.*)", async (deskripsi_tc) => {
    await crudPemenangdanUndian.deskripsiTC(deskripsi_tc);
  });

  it("System should be input Deksripsi T&C", async () => { });

  it("I click button Simpan in Tab Preview", async () => {
    await crudPemenangdanUndian.simpanPreview();
  });

  it("System submit data in Tab Preview", async () => { });

  it("I click tab List Pemenang", async () => {
    await crudPemenangdanUndian.tabListPemenang();
  });

  it("System show form in Tab List Pemenang", async () => { });

  it("I insert Gambar Visual Header Pemenang Undian", async () => {
    await crudPemenangdanUndian.InsertGambar3();
  });

  it("System show Visual Header Pemenang Undian", async () => { });

  it("I click button download list pemenang", async () => {
    await crudPemenangdanUndian.btnDownloadListPemenang();
  });

  it("System should be download Template list pemenang", async () => { });

  it("I insert file List Pemenang Undian", async () => {
    await crudPemenangdanUndian.InsertFile2();
  });

  it("System show file List Pemenang Undian", async () => { });

  it("I click button simpan in tab List Pemenang", async () => {
    await crudPemenangdanUndian.btnSimpanListPemenang();
  });

  it("System should be submit data List Pemenang", async () => { });

  it("I click button Publish", async () => {
    await crudPemenangdanUndian.btnPublish();
  });

  it("System should be leading to Undian Page3", async () => {
    await undianPage.pageUndian();
  });

  it("I search and click button Delete in Undian Page (.*)", async (nama_program) => {
    await undianPage.Search(nama_program);
    await undianPage.Delete();
  });

  it("System should be able to find and Delete data", async () => {
    await browser.pause(5000);
  });
})