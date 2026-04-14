import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    await page.goto('http://localhost:4200');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'home_final.png', fullPage: true });

    await page.goto('http://localhost:4200/es/solutions');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'solutions_final.png', fullPage: true });

    console.log('Screenshots captured successfully.');
  } catch (error) {
    console.error('Error capturing screenshots:', error);
  } finally {
    await browser.close();
  }
})();
