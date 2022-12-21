import puppeteer from "puppeteer";


const goPage = async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('google.com');
    
}