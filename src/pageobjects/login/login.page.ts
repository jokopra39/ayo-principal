import { pause } from "../../helper/commands"
import Page from "../page"

//sub page containing specific selectors and methods for a specific page
class LoginPage extends Page {
  //define selectors using getter methods
  get OnetrustAccept() {
    return $("#onetrust-accept-btn-handler")
  }
  get welcomeTitle() {
    return $("#ayoLogin > div > div.lgn-container.text-container")
  }

  get inputEmail() {
    return $("#input-email")
  }
  get inputPassword() {
    return $("#input-password")
  }
  get closeMenu() {
    return $(
      '[class="toggle-button-navbar mat-icon-button"][style="display: block;"]'
    )
  }

  get checkboxRememberMe() {
    return $("#mat-checkbox-1")
  }
  get btnForgotPassword() {
    return $("a.forgot-password")
  }
  get btnMasuk() {
    return $("#btn-masuk-login")
  }

  //a method to encapsule automation code to interact with the page
  async welcome() {
    await expect(browser).toHaveUrlContaining("login")
    await pause()
  }

  async acceptCookie() {
    await this.OnetrustAccept.waitForDisplayed()
    await this.OnetrustAccept.click()
  }

  async closeSideMenu() {
    await this.closeMenu.click()
  }

  async loginInternal(email: string) {
    await this.inputEmail.setValue(email)
    await this.btnMasuk.click()
  }

  async loginExternal(email: string, password: string) {
    await this.inputEmail.setValue(email)
    await browser.pause(2000)
    await this.btnMasuk.click()
    await this.inputPassword.setValue(password)
    await this.btnMasuk.click()
  }

  /*async loginapi () {
        await this.inputEmail.setValue('hanifah.budianto@weekendinc.com')
        await this.btnMasuk.click()
        const response = await UserAPI.login(data.VALID_TOKENLOGIN)
        await assertChai.equal(response.status, 200)
        await assertChai.hasAllKeys(response.data, ["token"])
        await assertChai.isString(response.data.token)
    }*/

  async rememberMe() {
    await this.checkboxRememberMe.click()
  }

  async forgotPassword() {
    await this.btnForgotPassword.click()
  }

  async setLclStorage() {
    await browser.execute(() =>
      window.localStorage.setItem(
        "_dxtqc",
        JSON.stringify(
          "U2FsdGVkX1/Ul4SEr4GH0TzXNZmHB/qhdXqfVnaLpMVGJvn3O+Buq1RWYzqBYkcgNN4pqfkGED3oKtYpaW1hz6KmsonSnGrTRVcVaZ88/i5tvN9JUT6ONqj/Z5H0/gnlDQp+pdeGs5WRM0N0ixjL+b9nw7UGP94yOIYm4hLC5+nlb3/aq9L9eQcdLvFATWdjZoYJl6mzO+alpoC6tmUTlbQwify7UlBzHTg/IgdsdBlYpWJsGWPunE/r1aqWqobztUgslbNk40GrURbWle3fbkkCUO3sU0UMYd3rwTrK4ajhXrpeI+gMkA4tbIh/1TeWtzWNddrWnyVbv7dpYMC6XeM3fMFA2JxxyUryf+O1ANRnJrIF++h5fIGR0ESoLqNiYyRdfP4o8SD7W7ZVIaLdCiqbLL1gljK9nrgUEHFlyhvSv/s+6wk18POmXdZ1F6M7Xj/h14Qj5frljOfqD5BMXxFr221vEo6Z8Ml3Yl1Fd56LYeZ5CqjtpCN1gxxLU5eG+W5R6gPvANJAwSX6DaV4nH3xPBggaTemc5zMsW1tp3neoH7gfJfznvj1/TTQHUVABq/RFvqEKUebL2nHkXNPEs+MdhmcW1L7EabxKKMuWa9lirDrtJQZnWVyVZvv/PBvdZ0bqyYczB9m6tuc9nOGuL6KjMaT5ey+i/A81FBUD9hKh9hHRpkmS4fAnzcu0kSCC0Dq1z3p9o68k7TshCjm7Kvon2b46OdZ3stEsvtqaT4="
        )
      )
    )
    await browser.execute(() =>
      window.localStorage.setItem(
        "_adxtrn",
        JSON.stringify(
          "{\"iv\":\"exTS7cMkrmbmYYZjxmqhUQ==\",\"v\":1,\"iter\":10000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"8bp/2ZaDyKc=\",\"ct\":\"5BcooI+cdwdnGo8YgYIQDvCDP1zNuC53i1DY3tHpeE3IBrfLb3GhYvd2rsSqDnl8ishIYiF7N2rx90ViNF+fO9W79fP7VuM4D0MFbk+GY2gAOyugLSrm0A4Ca4bP3zxuFuGn6bMWpcG+eEigkPXNEacT/cfNup4YNYvBkzvCdPRwXSUdnOzKDNhay4Z3V3BPZnKDHvaVXI0HWabswKq2D50Muj6rDP0va2TKwqR8Q3ivHdzMVlyiyvpEXQGsYsoXqoC1RBdiEr94DxCaLVQH0DcRJUg8eW6gU3Jq2PO44BxRiudnehKNVLlau/KSVXhM8mXuo3ubFurceH2Wcuty0cokqVid7c9abVUOkrKxOe5B73vmJgY93H0J2RQJx4SVadOYGROQK1VrRj4q8uGeNb44VkDU3CQ9thPktmyi3wqyGy3bZ0XAEGVhzkCCkVO6rDxXazERahnP82RWVLgNzDk5MID7R2XpXElJfLbl8YmWz7lB5+uV2OoWuJHE76vzu7nFRlUv\"}"
        )
      )
    )
    await browser.execute(() =>
      window.localStorage.setItem(
        "_prfdxtrn",
        JSON.stringify(
          "{\"iv\":\"UwXIwss2nKu+hZBrY8SyKQ==\",\"v\":1,\"iter\":10000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"8bp/2ZaDyKc=\",\"ct\":\"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\"}"
        )
      )
    )
    await browser.execute(() =>
      window.localStorage.setItem(
        "userData",
        JSON.stringify({ "active": true, "app": { "code": "ayosrc-8lv9mbp2ce6iwr", "id": 5507, "id_str": "5507", "name": "AYOSRC" }, "avatar": { "avatar": { "url": "https://users.api.qa.src.id/img/avatar.png" } }, "avatar_url": "https://users.api.qa.src.id/img/avatar.png", "email": "9902021principalhms", "extras": {}, "id": 1645238643, "id_str": "1645238643", "last_comment_id": 0, "last_comment_id_str": "0", "last_sync_event_id": 0, "pn_android_configured": true, "pn_ios_configured": true, "rtKey": "somestring", "token": "vav8RGpjzTTEmety8Rxj1683268795", "username": "Tia Wicaksono" })
      )
    )
    await browser.execute(() =>
      window.localStorage.setItem("timeRemaining", JSON.stringify(1794))
    )
    await browser.execute(() =>
      window.localStorage.setItem("notif", JSON.stringify(0))
    )
    await browser.execute(() =>
      window.localStorage.setItem(
        "firebase:previous_websocket_failure",
        JSON.stringify(true)
      )
    )
    // await browser.execute(() => window.localStorage.setItem('firebase:host:ayosrc-android-consumer.firebaseio.com', 's-usc1c-nss-372.firebaseio.com'))
    await browser.execute(() =>
      window.localStorage.setItem("sentToServer", JSON.stringify(1))
    )
    await browser.execute(() =>
      window.localStorage.setItem("user_country", "id")
    )

    // await browser.refresh()
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("")
  }
}

export default new LoginPage()
