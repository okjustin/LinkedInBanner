const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5501', { waitUntil: 'networkidle2' });

    await page.setViewport({ width: 1584, height: 396 });

    await page.screenshot({ path: 'linkedin-banner.png' });

    await browser.close();
})();
