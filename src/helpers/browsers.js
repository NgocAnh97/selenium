import config from '../define/config.js'
import webdriver, {Builder} from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome.js'
import chromedriver from 'chromedriver'

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

let driver = null;

export const setup = () => {
    try {
        driver = setDriver(config.defaultBrowser);
    } catch (exception) {
        console.error(exception.stack);
    }

    return driver;
}

export const setDriver = (browserType) => {
    switch (browserType) {
        case "chrome":
            return initChromeDriver();
        case "firefox":
            return initFireFoxDriver();
        default:
            console.error(browserType + " is invalid browser");
            return initChromeDriver();
    }
}

export const initFireFoxDriver = () => {
    driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox())
        .build();
    driver.manage().window().maximize()
        .then(() => console.log(""))
        .catch((e) => console.log(e))

    return driver;
}

export const initChromeDriver = () => {
    driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build();
    driver.manage().window().maximize()
        .then(() => console.log(""))
        .catch((e) => console.log(e))

    return driver;
}
