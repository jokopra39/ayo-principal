import { pause } from "../../../src/helper/commands"
import LoginPage from "../../../src/pageobjects/login/login.page"
import MainmenuPage from "../../../src/pageobjects/mainmenu.page"
import TRSSystemVariable from '../../../src/pageobjects/trs/trs_system_variable.page'
import TRSSetupProposal from '../../../src/pageobjects/trs/trs_proposal.page'

describe('[PRINCIPAL] CDE-5159 : TRS Phase 1 - TRS System Varible Menu', () => {
    before('Iam login', async () => {
        await LoginPage.open()
        await LoginPage.setLclStorage()
        await MainmenuPage.open()
        await LoginPage.acceptCookie()
    })
    it('trs system varible page', async () => {
        await MainmenuPage.TRS('trs system variable')
        await pause()
        await TRSSystemVariable.PageTrsSystemVariable()
        await pause()
        await TRSSystemVariable.formTrsSystem(5000, 80)
        await pause(5000)
    })
    it('trs setup trs proposal - tambah', async () => {
        await MainmenuPage.TRS('setup trs proposal')
        await pause()
        await TRSSetupProposal.PageSetupTrsProposal()
        await pause()
        await TRSSetupProposal.add()
        await TRSSetupProposal.formTrsSupport('tambah')
    })
    it('trs setup trs proposal - detail', async () => {
        await MainmenuPage.TRS('setup trs proposal')
        await pause()
        await TRSSetupProposal.PageSetupTrsProposal()
        await TRSSetupProposal.detail()
    })
    it('trs setup trs proposal - edit', async () => {
        await MainmenuPage.TRS('setup trs proposal')
        await pause()
        await TRSSetupProposal.PageSetupTrsProposal()
        await TRSSetupProposal.edit()
        await TRSSetupProposal.formTrsSupport('edit')
    })
})