import axios from "axios";
import pkg from 'selenium-webdriver';
import config from '../../define/config.js';
import { setup } from '../../helpers/browsers.js';
import pkg2 from "chai";
const { assert } = pkg2;
const { By, until, titleContains } = pkg;
import ExcelJS from 'exceljs';
import array from './readExcelFile.js';


describe("~~~Reputa Automation Authentication test suite~~~", () => {
  let driver = null;

  before(() => driver = setup())


  var result;
  const workbook = new ExcelJS.Workbook();
  var worksheet = workbook.getWorksheet("Sheet1");
  //
  it("should login success", async () => {
    for (let index = 0; index < array.length; index++) {
      result = await axios.post(`${config.apiCollection.login}`, {
        username: array[index].username,
        password: array[index].password
      });
      if (result && result.data) {
        console.log(`Message: ${result.data.message}`);
        try {
          assert.equal(result.data.code, 10);
        } catch (AssertionError) {
          assert.equal(result.data.code, 21);
        }
      }
    }
    for (var i = 2; i <= worksheet.rowCount; i++) { 
      var cell = worksheet.getCell(3);
      console.log(cell);
      cell.getRow(i).value = result.data.code;
      cell.commit();
      workbook.xlsx.writeFile("D:/reputa_automation/src/data/loginCase.xlsx");
    }
  })

  // })

  // it("Verify the Web heading title text is displayed", async () => {
  //   await driver.manage().deleteAllCookies();
  //   await driver.get(config.url);
  //   driver.getTitle()
  //     .then((title) => {
  //       console.log("Title is: " + title);
  //       assert.equal(titleContains, 'Reputa');
  //     }).catch(e => console.log(e))
  // })

  // after(async () => driver && driver.quit());
  after(async () => {
    if (driver !== undefined) {
      await driver.quit();
    }
  })

})
