import axios from "axios";
import pkg from 'selenium-webdriver';
import config from '../../define/config.js';
import { setup } from '../../helpers/browsers.js';
// import '@testing-library/jest-dom';
// import {expect} from '@testing-library/jest-dom';
import pkg2, { AssertionError } from "chai";
import { reporters } from "mocha";
import { ConsoleReporter } from "jasmine";
const { assert } = pkg2;
const { By, until } = pkg;

describe("~~~Reputa Automation Authentication test suite~~~", () => {
  let driver = null;

  before(() => driver = setup())

  it('should should login successfully and return token', () => {
    try {
      axios.post(`${config.apiCollection.login}`, {
        "username": config.username,
        "password": config.password
      }).then((response) => {
        assert.equal(response.data.code, 10, 'Code should be done');
        // assert
        console.log('Status Text: ' + response.statusText);
        console.log('Message: ' + response.data.message);
      }).catch(e => {
        console.log('Loi: '+ e);
        if(AssertionError){
          console.log("Assert E");
          driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Login Passed!"}}');
          ConsoleReporter("Fail");
        } else {
          driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Login Fail!"}}');
          console.log("Same");
        }
    });
    } catch(e){console.log(e)}
  });

  // it("should login successfully", async () => {
  //   try {
  //     await driver.manage().deleteAllCookies();
  //     await driver.get(config.url);

  //     await driver.findElement(By.xpath("//span[@class='navbar-text']")).click();
  //     await driver.findElement(By.xpath("//input[@type='text']")).sendKeys(config.username);
  //     await driver.findElement(By.xpath("//input[@type='password']")).sendKeys(config.password);
  //     await driver.findElement(By.xpath("//button[@type='submit']")).click();
  // //     function sleep(time) {
  // //       return new Promise((resolve) => {
  // //         setTimeout(resolve, time || 1000);
  // //       });
  // //     }
  // driver.sleep(10000);
  //   driver.findElement(By.xpath('//*[@id="top-nav"]/div[2]/div[4]/div'))
  //   .then(function(searchTK){
  //     searchTK.click();
  //   })
  // // const btnTK = driver.findElement(By.linkText("Thống kê"));
  // //     await driver.wait(until.elementIsVisible(btnTK), 20000);
  // //     await btnTK.getText();

  // //     btnTK.click();
  // //     await sleep(10000);
  // //     // 
  // //     // console.log(btnTK.getText());

  // //     // await driver.wait(until.elementLocated(By.xpath("//div[@class='nav-item alert-header']")), 10000);
  // //     // const btnNoti = driver.findElement(By.xpath("//ul[contains(@class,'right-menu navbar-nav')]/div[1]/a"));
  // //     // await driver.findElement(By.xpath("//ul[contains(@class,'right-menu navbar-nav')]/div[1]/a")).then(async () => {
  // //     //   await driver.findElement(By.xpath("//ul[contains(@class,'right-menu navbar-nav')]/div[1]/a")).click();
  // //     //   await driver.wait(until.elementIsEnabled(btnNoti), 20000);
  // //     //   await driver.findElement(By.xpath("//a[contains(@class,'dropdown-item noti-read-more')]")).click();
  // //     // }).catch((err) => {
  // //     //   console.log(err);
  // //     // })
  //   } catch (e) {
  //     console.log("Loiiiii: " + e.message);
  //     console.log("Stacktrace: " + e.stack);
  //   }
  // })

  // after(async () => driver && driver.quit());
  after(async () => {
    if (driver !== undefined) {
      await driver.quit();
    }
  })
})
