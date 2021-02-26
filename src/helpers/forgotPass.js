import axios from "axios";
import pkg from 'selenium-webdriver';
import config from '../../define/config.js';
import { setup } from '../../helpers/browsers.js';
import pkg2 from "chai";
const { assert } = pkg2;
const { By, until } = pkg;


//"'recaptcha_response' field is empty"
describe("~~~Reputa Automation Forgot pass test suite~~~", () => {
  let driver = null;

  before(() => driver = setup())

  it('should forgot password success', () => {
    try {
      axios.post(`${config.apiCollection.forgotPassword}`, {
        "email": config.emailForgot
      }).then((response) => {
        assert.equal(response.data.code, 10, 'Code should be done');
        console.log('Message: ' + response.data.message);
      }).catch(e => console.log('Loi: '+ e));
    } catch(e){console.log(e)}
  });

  after(async () => {
    if (driver !== undefined) {
      await driver.quit();
    }
  })
})
