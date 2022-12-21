import puppeteer from "puppeteer";
import path from "node:path";
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const goPage = async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://translate.google.com/');

    const res = await page.waitForSelector('body');

    console.log(res.$());
    await browser.close();
}

console.log();
goPage();