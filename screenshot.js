import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(__dirname, 'desktop_screenshot.png'), fullPage: true });

  // Mobile
  await page.setViewport({ width: 390, height: 844 });
  await page.screenshot({ path: path.join(__dirname, 'mobile_screenshot.png'), fullPage: true });

  await browser.close();
  console.log('Screenshots taken successfully.');
})();
