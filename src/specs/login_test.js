const {By, Builder, Key, until} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");  //download chromerdriver newest
const https = require('https');
// const mocha = require("mocha");
// const describe = require("mocha").describe;
const assert = require('assert');
// mocha.setup('bdd');


// (async () => {
describe("Login Reputa automation test", () => {

    // it('should complete this test', function(done) {
    //     return new Promise(function(resolve) {
    //         resolve();
    //     }).then(done);
    // });
    // beforeEach(async (done)=>{
    //     // return true;
    //     let driver = await new Builder().forBrowser('chrome').build();
    // })
    let driver = new Builder().forBrowser('chrome').build();
    it("Test case", async () => {
        try {
            driver.manage().deleteAllCookies();
            await driver.get("https://reputa.vn/");
            const btnLogin = await driver.findElement(By.xpath("//span[@class='navbar-text']"));
            await btnLogin.click();
            const userName = await driver.findElement(By.xpath("//input[@type='text']"));
            await userName.sendKeys("tesvtel54@yopmail.com");
            await driver.getTitle().then(function (title) {
                console.log("The title is: " + title)
            });
            const password = await driver.findElement(By.xpath("//input[@type='password']")).sendKeys("123456aA@@");
            const btnNext = await driver.findElement(By.xpath("//button[@type='submit']")).click();

            // await assert(driver.getTitle,' Đăng nhập - Reputa');

            //Promise: then
            await driver.getTitle().then(function (title) {
                console.log("The title of web is: " + title)
            });
            await driver.wait(until.titleIs("Reputa"), 3000);

            await driver.findElement(By.xpath("//div[@class='nav-item alert-header/a']")).then(function (done) {
                console.log("Kiem thay button alert");
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

