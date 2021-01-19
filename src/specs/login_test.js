const {By, Builder, Key, until} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");  //download chromerdriver newest
const https = require('https');
// const mocha = require("mocha");
// const describe = require("mocha").describe;
const assert = require('assert');
// mocha.setup('bdd');


// (async () => {
describe("Login Reputa automation test", () => {
  let driver = new Builder().forBrowser('chrome').build();
  it("Test case", async () => {
    try {
      await driver.manage().deleteAllCookies();
      await driver.get("https://reputa.vn/");
      const btnLogin = await driver.findElement(By.xpath("//span[@class='navbar-text']"));
      await btnLogin.click();
      const userName = await driver.findElement(By.xpath("//input[@type='text']"));
      await userName.sendKeys("tesvtel54@yopmail.com");
      await driver.getTitle().then(function (title) {
        console.log("The title is: " + title)
      });

      await driver.findElement(By.xpath("//input[@type='password']")).sendKeys("123456aA@@");
      await driver.findElement(By.xpath("//button[@type='submit']")).click();

      //Promise: then
      await driver.getTitle().then(function (title) {
        console.log("The title of web is: " + title)
      });
      await driver.wait(until.titleIs("Reputa"), 3000);

      await driver.wait(until.elementLocated(By.xpath("//div[@class='nav-item alert-header']")), 10000);
      await driver.findElement(By.xpath("//div[@class='nav-item alert-header']/a")).then(() => {
        console.log("Kiem thay button alert ");
      }).catch((err) => {
        console.log(err);
      });

      // const btnNoti = await driver.findElement(By.xpath("//div[@class='nav-item alert-header/a']")).click();
      const btnTopic = await driver.findElement(By.xpath("//div[@class='top-nav']/div[5]"));
      await btnTopic.click();
      const btnSettingTopic = await driver.findElement(By.xpath("//div[@class='action-part']/div[3]")).click();

    } catch (e) {
      console.log("Error is: " + e);
      // handleFailure(e, driver);
    } finally {
      assert.ok(true);
      await driver.quit();
    }
  })
})

