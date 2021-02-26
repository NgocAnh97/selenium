import axios from "axios";
import pkg from 'selenium-webdriver';
import config from '../../define/config.js';
import { setup } from '../../helpers/browsers.js';
import pkg2 from "chai";
const { assert } = pkg2;
const { By, until, titleContains } = pkg;
import ExcelJS from 'exceljs';
import array from './readExcelFile.js'


describe("~~~Reputa Automation Authentication test suite~~~", () => {
  let driver = null;

  before(() => driver = setup())


  var result;
  const workbook = new ExcelJS.Workbook();
  var worksheet = workbook.getWorksheet("Sheet1");

  it("should login success", async () => {
    for (let index = 0; index < array.length; index++) {
      result = await axios.post(`${config.apiCollection.login}`, {
        username: array[index].username,
        password: array[index].password
      });
      if (result && result.data) {
        console.log(`Message: ${result.data.message}`);
        // try {
        //   assert.equal(result.data.code, 10);
        // } catch (AssertionError) {
        //   assert.equal(result.data.code, 21);
        // }
        var cell = worksheet.getCell(3);
        console.log(cell);
        cell.getRow(index).value = result.data.code;
        cell.commit();
        workbook.xlsx.writeFile("D:/reputa_automation/src/data/loginCase.xlsx");
      }
    }
  })

  // it("Verify the Web heading title text is displayed", async () => {
  //   await driver.manage().deleteAllCookies();
  //   await driver.get(config.url);
  //   driver.getTitle()
  //     .then((title) => {
  //       console.log("Title is: " + title);
  //       assert.equal(titleContains, 'Reputa');
  //     }).catch(e => console.log(e))
  // })

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
