// Script Name: {Untitled Test Case}

const puppeteer = require('puppeteer');
const puppeteer1 = require('puppeteer-extra')

const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
puppeteer1.use(
  RecaptchaPlugin({
    provider: {
      id: '2captcha',
      token: 'XXXXXXX' // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
    },
    visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
  })
)

// puppeteer usage as normal
puppeteer1.launch({ headless: true }).then(async browser => {
  const page = await browser.newPage()
  await page.goto('https://www.google.com/recaptcha/api2/demo')

  // That's it, a single line of code to solve reCAPTCHAs 🎉
  await page.solveRecaptchas()

  await Promise.all([
    page.waitForNavigation(),
    page.click(`#recaptcha-demo-submit`)
  ])
  await page.screenshot({ path: 'response.png', fullPage: true })
  await browser.close()
})

(async () => {
const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
const page = await browser.newPage();
let element, formElement, tabs;

await page.goto(`https://suchen.mobile.de/fahrzeuge/search.html?dam=0&isSearchRequest=true&ms=25200;;29&sfmr=false&vc=Car`, { waitUntil: 'networkidle0' });
element = await page.$x(`(.//*[normalize-space(text()) and normalize-space(.)='Gesponsert'])[1]/following::span[1]`);
	await element[0].click();
await browser.close();
})();