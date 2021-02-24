import config from '../define/config.js'
import webdriver from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'

var options   = new chrome.Options();
options.setBrowserName('chrome')
options.addArguments('--headless');

let driver = null;

export const setup = () => {
  try {
    driver = setDriver(config.defaultBrowser);
  } catch (exception) {
    console.log("Error is" + exception.stackTrace);
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
  driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox())
  .build();
  driver.manage().window().maximize()
      .then(() => console.log(""))
      .catch((e) => console.log(e))

  return driver;
}

export const initChromeDriver = () => {
  driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .setChromeOptions(options)
  .build();
  driver.manage().window().maximize()
      .then(() => console.log(""))
      .catch((e) => console.log(e))

  return driver;
}
