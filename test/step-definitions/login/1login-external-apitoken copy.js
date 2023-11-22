import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';

import LoginPage from '../../../src/pageobjects/login/login.page';
import VerifikasiPerangkatPage from '../../../src/pageobjects/login/verifaccount.page';
import MainmenuPage from '../../../src/pageobjects/mainmenu.page';

import { assert } from "chai";
import UserAPI from "../../../src/pageobjects/login/user.api.js";
import * as data from "../../testdata/apiuser.data.js";

it('I am on the login page Ayo SRC', async () => {    
    await LoginPage.open()
    await LoginPage.welcome()
    await LoginPage.acceptCookie()
    await browser.pause(5000)
});

it('I login internal with (.*) and (.*)', async (email,password) => {
    await LoginPage.loginExternal(email,password)
    await browser.pause(5000)
});

it('System will leading to Verification Account page for (.*)', async (email) => {
    await VerifikasiPerangkatPage.verifAccountPage(email)
});

it('I input verification code (.*) and submit', async (code) => {
    await VerifikasiPerangkatPage.verif(code)
});

it('System should be leading to Dashboard page and show Account Name (.*)', async (accountname) => {
    await MainmenuPage.dashboard(accountname)
    await browser.pause(8000)
});


describe('As a user, I want to login', () => {
    it('Should success try to login using valid account', async () => {
        const response = await UserAPI.login(data.VALID_TOKENLOGIN);

        assert.equal(response.status, 200);
        assert.hasAllKeys(response.data, ["token"])
        assert.isString(response.data.token)
    });