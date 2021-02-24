import axios from "axios";
import pkg from 'selenium-webdriver';
import config from '../../define/config.js';
import { setup } from '../../helpers/browsers.js';
import pkg2 from "chai";
const { assert } = pkg2;
const { By, until } = pkg;


//"'recaptcha_response' field is empty"
describe("~~~Reputa Automation Sign up test suite~~~", () => {
  let driver = null;

  before(() => driver = setup())

  it('should sign up success', () => {
    var postData = {
      "email": config.email,
      "full_name": config.full_name,
      "industry_id": config.industry_id,
      "location": config.location,
      "organization_name": config.organization_name,
      "password": config.password,
      "phone": config.phone,
      "username": config.username
    }
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36",
        "Accept":"*/*"
      },
    }
    try {
      axios.post(`${config.apiCollection.signup}`, postData, axiosConfig)
        .then((response) => {
          assert.equal(response.data.code, 10, 'Code should be done');
          console.log('Message: ' + response.data.message);
        }).catch(e => {
          // console.log('Loi : ' + e.stack);
          console.log('\nMessage of error: ' + JSON.stringify(e.response.data)+'\n');
      });
    } catch (e) { console.log(e) }
  });

  after(async () => {
    if (driver !== undefined) {
      await driver.quit();
    }
  })
})
