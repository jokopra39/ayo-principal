import { click, pause, setDropdown, setText } from "../../helper/commands";
import Page from "../page"
import { Key } from 'webdriverio'
/**
 * VARIABLE
 */
const tanggalAwal: string = 'September 14, 2022'
const tanggalAkhir: string = 'December 12, 2022'
const kodeProgram: string = 'BOG2211-003'
const kps: string = '202250'
var document: any

class TRSReportPage extends Page {

    private get titlePageTrs() {
        return $("#headerReport");
    }
    private get tabTrsReport() {
        return $$('[role="tab"]')
    }
    private get buttonFilter() {
        return $$('button[class="confirmation-button mat-raised-button"]')
    }
    private get buttonExportXlsx() {
        return $('button[class="mat-raised-button ng-star-inserted"]')
    }
    private get selectBoxRoleOption() {
        return $$('[role="option"]')
    }
    private get fieldFilter() {
        return $$('.is-light')
    }

    /**
     * Tab Rekonsiliasi
     */
    // private get fieldFilterTanggal() {
    //     return $('input[formcontrolname="date_filter"]')
    // }
    private get iconClearDate() {
        return $('button[aria-label="Clear"]')
    }
    private get dropdown() {
        return $('.dropdown')
    }
    private get headerTable() {
        return $$('h2[class="pl-16 ng-star-inserted"]')
    }

    /**
     * Tab Kunjungan
     */
    private get fieldTanggalMulai() {
        return $('input[formcontrolname="from"]')
    }
    private get fieldTanggalAkhir() {
        return $('input[formcontrolname="to"]')
    }
    private get setDaily() {
        return $('#mat-option-2')
    }
    private get setWeekly() {
        return $('#mat-option-3')
    }
    private get rowDataTable() {
        return $$('datatable-row-wrapper[class="datatable-row-wrapper ng-star-inserted"]')
    }
    private get headerDetail() {
        return $('h2[class="pl-16"]')
    }

    /**
     * Tab Stock Movement
     */
    private get setAllType() {
        return $('mat-option[id="mat-option-752"]')
    }
    private get setUnload() {
        return $('mat-option[value="Unload"]')
    }
    private get setYes() {
        return $('mat-option[id="mat-option-760"]')
    }
    private get setNo() {
        return $('mat-option[id="mat-option-761"]')
    }
    // ============================================================================================

    async PageTrsReport() {
        await expect(browser).toHaveUrlContaining("tactical-retail-sales/trs-report");
        await browser.waitUntil(async () => await this.titlePageTrs.isDisplayed(), {
            timeout: 600000,
            timeoutMsg: "expected title page not displayed after 600s",
        });
        await expect(this.titlePageTrs).toHaveText('Report')
    }
    async clickTab(index: number) {
        await click(this.tabTrsReport[index])
        await pause()
    }
    async clickFilter() {
        await click(this.buttonFilter[0])
        await pause(5000)
    }
    async clickExportXlsx() {
        await click(this.buttonExportXlsx)
        await pause()
    }

    /**
     * Tab Rekonsiliasi
     */
    async filterRekonsiliasi(pilihan: string = 'tanggal') {
        if (pilihan == 'tanggal') {
            // await setText(this.fieldFilterTanggal, tanggalAkhir)
            await click(this.iconClearDate)
            await browser.keys(Key.Escape)
        } else {
            await click(this.iconClearDate)
            await browser.keys(Key.Escape)
            await click(this.dropdown)
            await setDropdown(this.selectBoxRoleOption, kodeProgram)
        }
        await this.clickFilter()
        await this.headerTable[1].scrollIntoView()
        await pause()
        await this.tabTrsReport[1].scrollIntoView()
        await pause()
        await this.clickExportXlsx()
    }

    /**
     * Tab Kunjungan
     */
    async filterKunjungan(pilihan: string = 'daily') {
        if (pilihan == 'daily') {
            await click(this.fieldFilter[0])
            await click(this.setDaily)
            await browser.execute(function () {
                document.querySelector('input[formcontrolname = "from"]').removeAttribute('readonly');
            })
            await pause()
            await setText(this.fieldTanggalMulai, tanggalAwal)
            await browser.keys(Key.Escape)
            await pause()
            await browser.execute(function () {
                document.querySelector('input[formcontrolname = "to"]').removeAttribute('readonly');
            })
            await pause()
            await setText(this.fieldTanggalAkhir, tanggalAkhir)
            await browser.keys(Key.Escape)
            await pause()
        } else {
            await click(this.fieldFilter[0]) // Daily Weekly
            await click(this.setWeekly)
            await pause()
            await click(this.fieldFilter[2]) // KPS
            await setDropdown(this.selectBoxRoleOption, kps)
            await pause()
        }
        await this.clickFilter()

        await click(this.rowDataTable[0])
        await pause()
        await this.headerDetail.scrollIntoView()
        await pause()

        await this.buttonFilter[0].scrollIntoView()
        await pause()

        await click(this.rowDataTable[1])
        await pause()
        await this.headerDetail.scrollIntoView()
        await pause()

        await this.buttonFilter[0].scrollIntoView()
        await pause()

        await this.clickExportXlsx()
    }

    /**
     * Tab Stock Movement
     */
    async filterStockMovement() {
        await browser.execute(function () {
            document.querySelector('input[formcontrolname = "from"]').removeAttribute('readonly');
        })
        await pause()
        await setText(this.fieldTanggalMulai, tanggalAwal)
        await browser.keys(Key.Escape)
        await pause()
        await browser.execute(function () {
            document.querySelector('input[formcontrolname = "to"]').removeAttribute('readonly');
        })
        await pause()
        await setText(this.fieldTanggalAkhir, tanggalAkhir)
        await browser.keys(Key.Escape)
        await pause()
        await click(this.buttonFilter)

        await click(this.dropdown)
        await setDropdown(this.selectBoxRoleOption, kodeProgram)
        await click(this.buttonFilter)

        await click(this.rowDataTable[0])
        await pause()
        await this.headerDetail.scrollIntoView()
        await pause()

        await this.buttonFilter[0].scrollIntoView()
        await pause()

        await click(this.rowDataTable[2])
        await pause()
        await this.headerDetail.scrollIntoView()
        await pause()

        // =====================================================
        /**
         * FILTER BAWAH
         */
        await click(this.fieldFilter[3])
        await click(this.setUnload)
        await pause()
        await click(this.buttonFilter[1])
        await pause()
        await click(this.fieldFilter[3])
        await click(this.setAllType)

        await click(this.fieldFilter[4])
        await click(this.setYes)
        await pause()
        await click(this.buttonFilter[1])
        await pause()

        await click(this.fieldFilter[4])
        await click(this.setNo)
        await pause()
        await click(this.buttonFilter[1])
        await pause()

        await click(this.buttonExportXlsx)
    }
}

export default new TRSReportPage();
