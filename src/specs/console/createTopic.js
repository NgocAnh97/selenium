import axios from "axios";
import pkg from 'selenium-webdriver';
import config from '../../define/config.js';
import { setup } from '../../helpers/browsers.js';
import pkg2 from "chai";

const { assert } = pkg2;
const { By, until } = pkg;

describe("~~~Reputa Automation create topic test suite~~~", () => {
  let driver = null;
  var result = null;

  before(() => driver = setup())

  it('should create topic success', async () => {
    let postData = {
      "included_keywords": config.included_keywords,
      "topic_name": config.topic_name,
      "topic_source": config.topic_source,
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36",
        "Accept": "*/*",
        "Authorization": "VTCCSSO eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN2dGVsODZAeW9wbWFpbC5jb20iLCJpYXQiOjE2MTQyMzYwMzQsImV4cCI6MTYyMjAxMjAzNCwidHRsIjo3Nzc2MDAwMDAwLCJlbWFpbCI6InRlc3Z0ZWw4NkB5b3BtYWlsLmNvbSIsInBlcnNvbi1uYW1lIjoidGVzdnRlbDg2IiwidXNlci1pZCI6IjEwMDg4In0.hnXAKehHQ8jcDvER3Ye3GfNb3i84KXXPG-W0be9yeE0"
      },
    }
    result = await axios.post(`${config.apiCollection.createTopic}`, postData, axiosConfig)

    if (result && result.data.code === 0) {
      console.log(result)
      console.log(`Message: ${result.data.message}`);
    //   assert.equal(result.data.code, 0);
    } else {
      console.log(result)
    }
  });

  after(async () => {
    // if (driver !== undefined) {
    //   await driver.quit();
    // }
  })
})
