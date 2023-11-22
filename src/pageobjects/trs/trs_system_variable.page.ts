import { click, pause, setText } from "../../helper/commands";
import Page from "../page"

class TRSSystemVariablePage extends Page {
    /**
     * TRS System Variable
     */
    private get titlePageTrsSystemVariable() {
        return $("#headerTrsSystemVariable");
    }
    private get fieldMaksTotalNilai() {
        return $('input[formcontrolname="max_transaction"]')
    }
    private get fieldMaksPeriodeTrs() {
        return $('input[formcontrolname="max_period"]')
    }
    private get buttonSimpan() {
        return $('button[mat-raised-button]')
    }
    private get buttonYaLanjutkan() {
        return $('button[class="confirm mat-button"]')
    }

    // ============================================================================================

    async PageTrsSystemVariable() {
        await expect(browser).toHaveUrlContaining("tactical-retail-sales/trs-system-variable");
        await browser.waitUntil(async () => await this.titlePageTrsSystemVariable.isDisplayed(), {
            timeout: 600000,
            timeoutMsg: "expected title page not displayed after 600s",
        });
        await expect(this.titlePageTrsSystemVariable).toHaveText('TRS System Variable')
    }

    async formTrsSystem(maksTotalNilai: number, maksPeriode: number) {
        await setText(this.fieldMaksTotalNilai, maksTotalNilai)
        await pause()
        await setText(this.fieldMaksPeriodeTrs, maksPeriode)
        await pause()
        await click(this.buttonSimpan)
        await pause()
        await click(this.buttonYaLanjutkan)
    }
}

export default new TRSSystemVariablePage();
