const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF(inputFile, outputFile) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const fileUrl = `file://${path.resolve(inputFile)}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: outputFile,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await browser.close();
  console.log(`Generated: ${outputFile}`);
}

(async () => {
  await generatePDF('public/cv-ats.html', 'public/cv-ats.pdf');
  await generatePDF('public/cv-modern.html', 'public/cv-modern.pdf');
})();
