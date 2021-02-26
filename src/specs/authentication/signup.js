import axios from "axios";
import pkg from 'selenium-webdriver';
import config from '../../define/config.js';
import { setup } from '../../helpers/browsers.js';
import pkg2 from "chai";

const { assert } = pkg2;
const { By, until } = pkg;

describe("~~~Reputa Automation Sign up test suite~~~", () => {
  let driver = null;
  var result = null;

  before(() => driver = setup())

  it('should sign up success', async () => {
    let postData = {
      "email": config.emailSignUp,
      "full_name": config.full_name,
      "industry_id": config.industry_id,
      "location": config.location,
      "organization_name": config.organization_name,
      "phone": config.phone,
      "password": config.passwordSignUp,
      "username": config.usernameSignUp
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36",
        "Accept": "*/*"
      },
    }
    result = await axios.post(`${config.apiCollection.signup}`, postData, axiosConfig)

    if (result && assert.equal(result.data.code, 0)) {
      console.log(result)
      console.log(`Message: ${result.data.message}`);
    }
  });

  after(async () => {
    // if (driver !== undefined) {
    //   await driver.quit();
    // }
  })
})
