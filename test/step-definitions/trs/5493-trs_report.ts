import { pause } from "../../../src/helper/commands"
import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TRSReport from '../../../src/pageobjects/trs/trs_report.page'

describe('[PRINCIPAL] CDE-5493 : TRS Phase 1 - TRS Report Menu', () => {
    before('Iam login', async () => {
        await LoginPage.open()
        await LoginPage.setLclStorage()
        await MainmenuPage.open()
        await LoginPage.acceptCookie()
    })
    it('TRS Report - Rekonsiliasi Tab', async () => {
        await MainmenuPage.TRS('trs report')
        await pause()
        await TRSReport.PageTrsReport()
        await pause()
        await TRSReport.filterRekonsiliasi('tanggal')
        await TRSReport.filterRekonsiliasi('kode program')
    })

    it('TRS Report - Kunjungan Tab', async () => {
        await TRSReport.clickTab(1) // 1:index = Tab Kunjungan
        await TRSReport.filterKunjungan('daily')
        await TRSReport.filterKunjungan('weekly')
    })

    it('TRS Report - Stock Movement Tab', async () => {
        await TRSReport.clickTab(2) // 2:index = Stock Movement
        await TRSReport.filterStockMovement()
    })
})