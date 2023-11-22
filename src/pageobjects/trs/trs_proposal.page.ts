import { click, pause, setDate, setText, setDropdown } from "../../helper/commands";
import Page from "../page";
import { Key } from 'webdriverio'
const path = require("path")
var document: any

class TRSProposalPage extends Page {
    /**
     * Setup TRS Proposal
    */
    private get titlePageTrProposal() {
        return $("#headerTrsProposal");
    }
    private get buttonTambah() {
        return $('button[class="mat-raised-button ng-star-inserted"]');
    }
    get selectBox() {
        return $$(".mat-select-trigger");
    }
    get liSingleSelect() {
        return $$('[role="option"]');
    }
    private get fieldTanggalAwalProgram() {
        return $('input[formcontrolname="startDate"]')
    }
    private get fieldTanggalAkhirProgram() {
        return $('input[formcontrolname="endDate"]')
    }
    private get fieldJumlahMaksExecutor() {
        return $('input[formcontrolname="maxExecutor"]')
    }
    private get fieldExecutor() {
        return $('input[formcontrolname="executor"]')
    }
    private get fieldKecamatan() {
        return $('input[formcontrolname="kecamatan"]')
    }
    private get fieldProduct() {
        return $('input[formcontrolname="product"]')
    }
    private get checkboxDialog() {
        return $$('div[class="mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"]')
    }
    private get buttonSimpanDialog() {
        return $('button[class="mat-raised-button mat-primary"]')
    }
    private get fieldKodePelanggan1() {
        return $('input[formcontrolname="custCode1"]')
    }
    private get fieldKodePelanggan2() {
        return $('input[formcontrolname="custCode2"]')
    }
    private get fieldNomorFlowingly() {
        return $('input[formcontrolname="flowingly"]')
    }
    private get fieldLatarBelakang() {
        return $('textarea[formcontrolname="background"]')
    }
    private get fieldObjektif() {
        return $('textarea[formcontrolname="objective"]')
    }
    private get uploadFile() {
        return $('input[type="file"]')
    }
    private get dataTableHeaderDibuatOleh() {
        return $('datatable-header-cell[title="Dibuat oleh"]')
    }
    private get buttonDetail() {
        return $$("datatable-body-cell:nth-child(9) > div > div > button:nth-child(1)");
    }
    private get buttonEdit() {
        return $$("datatable-body-cell:nth-child(9) > div > div > button:nth-child(2)");
    }
    private get buttonSimpanTRS() {
        return $('.confirmation-button')
    }
    private get buttonKembaliTRS() {
        return $('.cancel-button')
    }
    private get fieldCari() {
        return $('input[class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored"]')
    }
    private get fieldSearchTanggalAwal() {
        return $('input[formcontrolname="date_start"]')
    }
    private get buttonKirimTRS() {
        return $('.submit-button')
    }
    // private get buttonBatalkanTRS() {
    //     return $('.warning-button')
    // }
    // ============================================================================================

    async PageSetupTrsProposal() {
        await expect(browser).toHaveUrlContaining("tactical-retail-sales/trs-proposal");
        await browser.waitUntil(async () => await this.titlePageTrProposal.isDisplayed(), {
            timeout: 600000,
            timeoutMsg: "expected title page not displayed after 600s",
        });
        await expect(this.titlePageTrProposal).toHaveText('TRS Proposal')
        await pause(5000)
    }

    async add() {
        await click(this.buttonTambah)
    }

    async clickHeaderDataTable() {
        await click(this.dataTableHeaderDibuatOleh)
        await pause(5000)
        await click(this.dataTableHeaderDibuatOleh)
        await pause(5000)
    }

    async detail() {
        // await this.setFieldCariTanggalAwal()
        await this.clickHeaderDataTable()
        await this.buttonDetail[0].click()
        await pause()
        await this.buttonKembaliTRS.scrollIntoView()
        await pause()
        await click(this.buttonKembaliTRS)
        await pause()
    }

    async edit() {
        // await this.setFieldCariTanggalAwal()
        await this.clickHeaderDataTable()
        await this.buttonEdit[0].click()
    }

    async formTrsSupport(tambahOrEdit: string) {
        await browser.waitUntil(
            async () => await this.selectBox[1].isDisplayed(),
            {
                timeout: 60000,
                timeoutMsg: "area and salespoint not displayed after 1 minute",
            }
        )
        if (tambahOrEdit == 'tambah') {
            await pause()
            await click(this.selectBox[1])
            await pause()
            await setDropdown(this.liSingleSelect, 'SAMI')
            await pause()

            await setText(this.fieldTanggalAwalProgram, await setDate({ AwalOrAkhir: 'AWAL', ProposalOrNot: 'PROPOSAL' }))
            await browser.keys(Key.Escape)
            await pause()

            await setText(this.fieldTanggalAkhirProgram, await setDate({ AwalOrAkhir: 'AKHIR', ProposalOrNot: 'PROPOSAL' }))
            await browser.keys(Key.Escape)
            await pause()

            await setText(this.fieldJumlahMaksExecutor, 2)
            await pause(10000)


            await click(this.fieldExecutor)
            await pause()
            await setText(this.fieldCari, 'tia')
            await pause()
            // await this.checkboxDialog[10].scrollIntoView()
            await this.clickCheckboxDialog([0, 3])
            await pause()
            await click(this.buttonSimpanDialog)
            await pause()

            await click(this.fieldKecamatan)
            await pause()
            await this.clickCheckboxDialog([2, 3, 4])
            await pause()
            await click(this.buttonSimpanDialog)
            await pause()

            await this.fieldProduct.scrollIntoView()
            await pause(5000)
            await click(this.fieldProduct)
            await pause()
            await this.clickCheckboxDialog([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
            await pause()
            await click(this.buttonSimpanDialog)
            await pause()

            await setText(this.fieldKodePelanggan1, 'AMI0028066')
            await pause()
            await setText(this.fieldKodePelanggan2, 'AMI0028067')
            await pause()
            await setText(this.fieldNomorFlowingly, 'ASDF12345')
            await pause()
            await this.fieldLatarBelakang.scrollIntoView()
            await pause()
            await setText(this.fieldLatarBelakang, 'LATAR BELAKANG')
            await pause()
            await this.fieldObjektif.scrollIntoView()
            await pause()
            await setText(this.fieldObjektif, 'OBJEKTIF')
            await pause()


            const filePath = path.join(__dirname, '../../files-to-upload/2misibackground.jpeg')
            // const remoteFilePath = await browser.uploadFile(filePath)
            var document: any
            await browser.execute(function () {
                document.querySelector(".rectangle-16 > label").style = "visibility:visible; overflow:visible;";
            })
            await pause()
            await this.uploadFile.setValue(filePath)
            await pause(5000)
        }
        await this.buttonSimpanTRS.scrollIntoView()
        await pause()

        if (tambahOrEdit == 'tambah') {
            await click(this.buttonSimpanTRS)
        } else {
            await click(this.buttonKirimTRS)
        }
        await pause(10000)

    }

    async clickCheckboxDialog(indexArr: number[]) {
        for (var val of indexArr) {
            click(this.checkboxDialog[val])
        }
    }

    async setFieldCariTanggalAwal() {
        await browser.execute(function () {
            document.querySelector('input[formcontrolname = "date_start"]').removeAttribute('readonly');
        })
        await pause(5000)
        await setText(this.fieldSearchTanggalAwal, await setDate({ AwalOrAkhir: 'AWAL', ProposalOrNot: 'PROPOSAL' }))
        await pause(5000)
        await browser.keys(Key.Escape)
        await pause(10000)
    }
}

export default new TRSProposalPage();
