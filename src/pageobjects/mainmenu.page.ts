import { pause } from "../helper/commands"
import Page from "./page"

//sub page containing specific selectors and methods for a specific page
class MainmenuPage extends Page {
  //define selectors using getter methods
  get titleDashboard() {
    return $("#dashboard-title")
  }
  get accountName() {
    return $("#account-name")
  }
  get btnAccount() {
    return $('button[class="user-button mat-button"]')
  }
  get btnSignOut() {
    return $("#cdk-overlay-0 > div > div > button:nth-child(2)")
  }

  get navigationSearch() {
    return $("#navigation-search")
  }
  get titleGroupMenu() {
    return $$('[class="group-title ng-star-inserted"]')
  }
  get pertanyaanVerifAgentMenu() {
    return $("#menu-273 > span")
  }

  get fieldForceMenu() {
    return $("#menu-300")
  }
  get produkMenu() {
    return $("#menu-324")
  } //produk manajemen barang
  get templateTugasMenu() {
    return $("#menu-330")
  }

  get GroupTradeProgramMenu() {
    return $("#menu-331")
  }
  get SubGroupTradeProgramMenu() {
    return $("#menu-332")
  }
  get groupTradeMenu() {
    return $("#menu-331")
  }
  get tradeProgramMenu() {
    return $("#menu-333")
  }
  get pengaturJadwalProgramMenu() {
    return $("#menu-334")
  }
  get approvalCoinAdjustmentMenu() {
    return $("#menu-335")
  }
  get audienceMenu() {
    return $("#menu-336")
  }
  get dteAutomationMenu() {
    return $("#menu-338")
  }
  get taskVerificationMenu() {
    return $("#menu-342")
  }
  get taskVerificationMenu2() {
    return $("#menu-352")
  }
  get taskSequencingMenu() {
    return $("#menu-339")
  }
  get pengaturanAttributeMisiMenu() {
    return $("#menu-329")
  }
  get coinDisbursementMenu() {
    return $("#menu-343")
  }
  get coinRedemptionApprovalMenu() {
    return $("#menu-344")
  }
  get callToActionMenu() {
    return $("#menu-302")
  }

  get dropdownIklanDalamAplikasi() {
    return $('[class="nav-link mat-ripple ng-tns-c24-14 ng-star-inserted"]')
  }
  get buatNotifikasiMenu() {
    return $("#menu-367")
  }
  get popupNotifikasiMenu() {
    return $("#menu-368")
  }
  get spandukOnlineMenu() {
    return $("#menu-369")
  }

  get dropdownCNReward() {
    return $('[class="nav-link mat-ripple ng-tns-c24-20 ng-star-inserted"]')
  }
  get b2cVoucherMenu() {
    return $("#menu-394")
  }
  get koinPotonganBelanjaMenu() {
    return $("#menu-396")
  }

  get dropdownUndianMenu() {
    return $('[class="nav-link mat-ripple ng-tns-c24-11 ng-star-inserted"]')
  }
  get undianMenu() {
    return $("#menu-361")
  } //pengaturan undian

  get SpinTheWheelMenu() {
    return $("#menu-351")
  }

  get principalNotesForRMenu() {
    return $("#menu-304")
  }
  get dropdownImageRecognition() {
    return $('[class="nav-link mat-ripple ng-tns-c24-12 ng-star-inserted"]')
  }
  get MasterBrandGroupMenu() {
    return $("#menu-356")
  }
  get MasterBrandMenu() {
    return $("#menu-357")
  }
  get TamplatePlanogramMenu() {
    return $("#menu-359")
  }
  get CheckImagePlanogramMenu() {
    return $("#menu-360")
  }

  get EmployeeMappingMenu() {
    return $("#menu-349")
  }

  get xpMenu() {
    return $("#menu-340")
  }
  //kpi setting
  get KPISettingMenu() {
    return $("#menu-305")
  }

  get dropdownTaskVerification2() {
    return $('[class="nav-link mat-ripple ng-tns-c24-13 ng-star-inserted"]')
  }
  get verificationAssignmentMenu() {
    return $("#menu-354")
  }

  get flushCoinMenu() {
    return $("#menu-362")
  }

  get osemAudienceMenu() {
    return $("#menu-436")
  }

  get trsSystemVariableMenu() {
    return $('#menu-378')
  }

  get trsMenu() {
    return $('#menu-379')
  }

  get trsReportMenu() {
    return $('#menu-380')
  }

  //a method to encapsule automation code to interact with the page
  async dashboard() {
    await pause(10000)
    await expect(browser).toHaveUrlContaining("dashboard")
    await browser.pause(5000)
  }

  async signOut() {
    await this.btnAccount.click()
    await this.btnSignOut.click()
  }

  async templateTugas() {
    await this.templateTugasMenu.scrollIntoView()
    await pause()
    await this.templateTugasMenu.click()
  }

  async fieldForce() {
    await this.fieldForceMenu.scrollIntoView()
    await pause()
    await this.fieldForceMenu.click()
  }

  async produk() {
    await this.produkMenu.scrollIntoView()
    await pause()
    await this.produkMenu.click()
  }

  async groupTrade() {
    await this.groupTradeMenu.scrollIntoView()
    await pause()
    await this.groupTradeMenu.click()
  }

  async cta() {
    await this.callToActionMenu.scrollIntoView()
    await pause()
    await this.callToActionMenu.click()
  }

  async tradeProgram() {
    await this.tradeProgramMenu.scrollIntoView()
    await pause()
    await this.tradeProgramMenu.click()
  }

  async pengaturJadwalProgram() {
    await this.pengaturJadwalProgramMenu.click()
  }

  async approvalCoinAdjustment() {
    await this.approvalCoinAdjustmentMenu.scrollIntoView()
    await pause()
    await this.approvalCoinAdjustmentMenu.click()
  }

  async audience() {
    await this.audienceMenu.scrollIntoView()
    await pause()
    await this.audienceMenu.click()
  }

  async dteAutomation() {
    await this.dteAutomationMenu.scrollIntoView()
    await pause()
    await this.dteAutomationMenu.click()
  }

  async taskVerification() {
    await this.taskVerificationMenu.scrollIntoView()
    await pause()
    await this.taskVerificationMenu.click()
  }

  async taskSequencing() {
    await this.taskSequencingMenu.scrollIntoView()
    await pause()
    await this.taskSequencingMenu.click()
  }

  async pengaturanAttributeMisi() {
    await this.pengaturanAttributeMisiMenu.scrollIntoView()
    await pause()
    await this.pengaturanAttributeMisiMenu.click()
  }

  async coinDisbursement() {
    await this.coinDisbursementMenu.scrollIntoView()
    await pause()
    await this.coinDisbursementMenu.click()
  }

  async buatNotifikasi() {
    await this.dropdownIklanDalamAplikasi.scrollIntoView()
    await pause()
    await this.dropdownIklanDalamAplikasi.click()
    await this.buatNotifikasiMenu.scrollIntoView()
    await pause()
    await this.buatNotifikasiMenu.click()
  }

  async popupNotifikasi() {
    await this.dropdownIklanDalamAplikasi.scrollIntoView()
    await this.dropdownIklanDalamAplikasi.click()
    await this.popupNotifikasiMenu.scrollIntoView()
    await pause()
    await this.popupNotifikasiMenu.click()
  }

  async spandukOnline() {
    await this.dropdownIklanDalamAplikasi.scrollIntoView()
    await pause()
    await this.dropdownIklanDalamAplikasi.click()
    await this.spandukOnlineMenu.scrollIntoView()
    await pause()
    await this.spandukOnlineMenu.click()
  }

  async DropdownCN() {
    await this.navigationSearch.addValue('CN Reward')
    await pause()
    await this.dropdownCNReward.scrollIntoView()
    await pause()
    await this.dropdownCNReward.click()
  }

  async b2cVocher() {
    await this.navigationSearch.addValue("B2C Voucher")
    await pause()
    await this.b2cVoucherMenu.scrollIntoView()
    await pause()
    await this.b2cVoucherMenu.click()
  }

  async KoinPotonganBelanja() {
    await this.navigationSearch.addValue('Koin Potongan Belanja')
    await pause()
    await this.koinPotonganBelanjaMenu.scrollIntoView()
    await pause()
    await this.koinPotonganBelanjaMenu.click()
  }

  async DropdownUndian() {
    await this.dropdownUndianMenu.scrollIntoView()
    await pause()
    await this.dropdownUndianMenu.click()
  }

  async Undian() {
    await this.undianMenu.scrollIntoView()
    await pause()
    await this.undianMenu.click()
  }

  async SpinTheWheel() {
    await this.SpinTheWheelMenu.scrollIntoView()
    await pause()
    await this.SpinTheWheelMenu.click()
  }

  async GroupTradeProgram() {
    await this.GroupTradeProgramMenu.scrollIntoView()
    await pause()
    await this.GroupTradeProgramMenu.click()
  }

  async SubGroupTradeProgram() {
    await this.SubGroupTradeProgramMenu.scrollIntoView()
    await pause()
    await this.SubGroupTradeProgramMenu.click()
  }

  async DropdownImageR() {
    await this.dropdownImageRecognition.scrollIntoView()
    await pause()
    await this.dropdownImageRecognition.click()
  }

  async MasterBrandGroup() {
    await this.MasterBrandGroupMenu.scrollIntoView()
    await pause()
    await this.MasterBrandGroupMenu.click()
  }

  async CheckImagePlanogram() {
    await this.CheckImagePlanogramMenu.scrollIntoView()
    await pause()
    await this.CheckImagePlanogramMenu.click()
  }

  async KPISetting() {
    await this.KPISettingMenu.scrollIntoView()
    await pause()
    await this.KPISettingMenu.click()
  }

  async coinRedemptionApproval() {
    await this.coinRedemptionApprovalMenu.scrollIntoView()
    await pause()
    await this.coinRedemptionApprovalMenu.click()
  }

  async EmployeeMapping() {
    await this.EmployeeMappingMenu.scrollIntoView()
    await pause()
    await this.EmployeeMappingMenu.click()
  }

  async verificationAssignment() {
    await this.verificationAssignmentMenu.scrollIntoView()
    await pause()
    await this.verificationAssignmentMenu.click()
  }

  async XP() {
    await this.xpMenu.scrollIntoView()
    await pause()
    await this.xpMenu.click()
  }

  async principalNotesForR() {
    await this.principalNotesForRMenu.scrollIntoView()
    await pause()
    await this.principalNotesForRMenu.click()
  }

  async DropTaskVerif2() {
    await this.dropdownTaskVerification2.scrollIntoView()
    await pause()
    await this.dropdownTaskVerification2.click()
  }

  async TaskVerification2() {
    await this.navigationSearch.addValue('task verification')
    await pause()
    await this.taskVerificationMenu2.scrollIntoView()
    await pause()
    await this.taskVerificationMenu2.click()
  }

  async FlushCoin() {
    await this.flushCoinMenu.scrollIntoView()
    await pause()
    await this.flushCoinMenu.click()
  }

  async OsemAudience() {
    await this.osemAudienceMenu.scrollIntoView()
    await pause()
    await this.osemAudienceMenu.click()
  }

  async TRS(pilihan: string) {
    switch (pilihan) {
      case 'trs system variable':
        await this.navigationSearch.addValue('trs')
        await pause()
        await this.trsSystemVariableMenu.click()
        break;
      case 'setup trs proposal':
        await this.trsMenu.click()
        break;
      case 'trs report':
        await this.trsReportMenu.click()
        break;

      default:
        await this.trsMenu.click()
        break;
    }
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dashboard")
  }
}

export default new MainmenuPage()
