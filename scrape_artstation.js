import puppeteer from 'puppeteer';
import fs from 'fs';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  let artstation = [];
  
  try {
    console.log("Scraping ArtStation...");
    await page.goto('https://www.artstation.com/yespeace', { waitUntil: 'networkidle2' });
    await delay(5000);
    
    // Artstation uses a grid, let's just grab all images from the page
    artstation = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .map(img => img.src)
        .filter(src => src && src.includes('artstation.com'))
        .slice(0, 10);
    });

  } catch (err) {
    console.error(err);
  }

  console.log(JSON.stringify({artstation}, null, 2));
  await browser.close();
})();
