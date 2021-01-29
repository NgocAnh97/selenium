import pkg from 'selenium-webdriver'
import { setup } from '../../helpers/browsers.js'
import config from '../../define/config.js'

const { By, until } = pkg

describe("Reputa Automation Authentication test suite", () => {
  let driver = null;

  before(() => driver = setup())

  it("should login successfully", async () => {
    try {
      await driver.manage().deleteAllCookies();
      await driver.get(config.url);

      await driver.findElement(By.xpath("//span[@class='navbar-text']")).click();
      await driver.findElement(By.xpath("//input[@type='text']")).sendKeys("tesvtel@gmail.com");
      await driver.findElement(By.xpath("//input[@type='password']")).sendKeys("123456aA@@");
      await driver.findElement(By.xpath("//button[@type='submit']")).click();

      await driver.getTitle().then(function (title) {
        console.log("The title of web is: " + title)
      });

      await driver.wait(until.elementLocated(By.xpath("//div[@class='nav-item alert-header']")), 10000);
      const btnNoti = driver.findElement(By.xpath("//ul[contains(@class,'right-menu navbar-nav')]/div[1]/a"));
      await driver.findElement(By.xpath("//ul[contains(@class,'right-menu navbar-nav')]/div[1]/a")).then(async () => {
        await driver.findElement(By.xpath("//ul[contains(@class,'right-menu navbar-nav')]/div[1]/a")).click();
        await driver.wait(until.elementIsEnabled(btnNoti), 20000);
        await driver.findElement(By.xpath("//a[contains(@class,'dropdown-item noti-read-more')]")).click();
      }).catch((err) => {
        console.log(err);
      })
    } catch (e) {
      console.log("Error: " + e.message);
      console.log("Stacktrace: " + e.stack);
    }
  })

  after(async () => {
    if (driver !== undefined) {
      await driver.quit();
    }
  })
})

