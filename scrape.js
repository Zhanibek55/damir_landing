import puppeteer from 'puppeteer';
import fs from 'fs';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  console.log("Starting browser...");
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const results = {
    artstation: [],
    youtube: [],
    instagram: [],
    gumroad: []
  };

  try {
    // 1. ArtStation
    console.log("Scraping ArtStation...");
    await page.goto('https://www.artstation.com/yespeace', { waitUntil: 'networkidle2' });
    await delay(3000);
    results.artstation = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .map(img => img.src)
        .filter(src => src.match(/\.(jpg|jpeg|png|webp)/i) && src.includes('artstation'))
        .slice(0, 5);
    });
    
    // 2. YouTube
    console.log("Scraping YouTube...");
    await page.goto('https://youtube.com/@yespeace/videos', { waitUntil: 'networkidle2' });
    await delay(3000);
    results.youtube = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .map(img => img.src)
        .filter(src => src.includes('i.ytimg.com/vi/'))
        .slice(0, 5);
    });

    // 3. Instagram
    console.log("Scraping Instagram...");
    await page.goto('https://www.instagram.com/yespeaceful/', { waitUntil: 'networkidle2' });
    await delay(3000); // wait for images
    results.instagram = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .map(img => img.src)
        .filter(src => src.match(/scontent/i))
        .slice(0, 5);
    });

    // 4. Gumroad
    console.log("Scraping Gumroad...");
    await page.goto('https://yespeace.gumroad.com/', { waitUntil: 'networkidle2' });
    await delay(3000); // wait for images
    results.gumroad = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .map(img => img.src)
        .filter(src => src.includes('public-files.gumroad.com'))
        .slice(0, 5);
    });

  } catch (err) {
    console.error(err);
  }

  console.log(JSON.stringify(results, null, 2));
  fs.writeFileSync('scraped_images.json', JSON.stringify(results, null, 2));
  await browser.close();
})();
