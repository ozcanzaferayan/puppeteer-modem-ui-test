const puppeteer = require("puppeteer-core");

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 720 });
  await page.goto("http://192.168.1.1/", { waitUntil: "networkidle0" }); // wait until page load
  await page.type("#Frm_Username", "admin");
  await page.type("#Frm_Password", "superonline");
  await page.click("#LoginId");
  await page.waitForNavigation({ waitUntil: "networkidle0" });
  await page.click("#Btn_cancel");
  await page.waitForNavigation({ waitUntil: "networkidle0" });
  await page.screenshot({ path: "example.png" });
  process.exit(1);
}

main();
