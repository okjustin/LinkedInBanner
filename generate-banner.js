const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5501', { waitUntil: 'networkidle2' });

    await page.setViewport({ width: 1584, height: 396 });

    // I want the above dimensions - 1584x396, but the output image is a little pixelated, so can I increase the pixel density or use a higher resolution with the same aspect ratio?

    // // Set the device scale factor to increase pixel density
    // await page.evaluate(() => {
    //     const meta = document.createElement('meta');
    //     meta.setAttribute('name', 'viewport');
    //     meta.setAttribute('content', 'width=device-width, initial-scale=2.0');
    //     document.head.appendChild(meta);
    // });

    // // Set the viewport to a higher resolution
    // await page.setViewport({ width: 3168, height: 792 });

    await page.screenshot({ path: 'linkedin-banner.png' });

    await browser.close();
})();
