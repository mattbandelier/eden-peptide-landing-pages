import { createRequire } from "node:module";
import { writeFile } from "node:fs/promises";

const require = createRequire(import.meta.url);
const { chromium } = require("/Users/mattbandelier/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
});

const targetPath = process.argv[2] || "/klow-stack-greenwood-village/";
const targetUrl = targetPath.startsWith("http")
  ? targetPath
  : `http://127.0.0.1:4321${targetPath.startsWith("/") ? targetPath : `/${targetPath}`}`;
const screenshotSlug = targetUrl.replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");

const viewports = [
  { name: "iPhone 17-ish / 15 Pro", width: 393, height: 852, dpr: 3 },
  { name: "iPhone SE narrow", width: 375, height: 667, dpr: 2 },
  { name: "Large iPhone Pro Max", width: 430, height: 932, dpr: 3 }
];

const results = [];

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: vp.dpr,
    isMobile: true,
    hasTouch: true
  });
  const page = await context.newPage();
  await page.route("**/*", (route) => {
    const resourceType = route.request().resourceType();
    if (["media", "font"].includes(resourceType)) {
      route.abort();
      return;
    }
    route.continue();
  });
  await page.goto(targetUrl, {
    waitUntil: "domcontentloaded"
  });
  await page.waitForTimeout(300);

  const metrics = await page.evaluate(() => {
    const doc = document.documentElement;
    const hero = document.querySelector(".hero");
    const proof = document.querySelector(".proof-band");
    const action = document.querySelector(".eden-action-bar");
    const heroRect = hero?.getBoundingClientRect();
    const proofRect = proof?.getBoundingClientRect();
    const actionRect = action?.getBoundingClientRect();
    const smallTargets = [...document.querySelectorAll("a,button,input,textarea,summary")]
      .map((el) => {
        const r = el.getBoundingClientRect();
        return {
          tag: el.tagName,
          text: (el.innerText || el.value || el.getAttribute("aria-label") || "").slice(0, 60),
          w: Math.round(r.width),
          h: Math.round(r.height),
          x: Math.round(r.x),
          y: Math.round(r.y)
        };
      })
      .filter((item) => item.w > 0 && item.h > 0 && (item.w < 44 || item.h < 44));
    const overflowEls = [...document.querySelectorAll("body *")]
      .map((el) => {
        const r = el.getBoundingClientRect();
        return {
          tag: el.tagName,
          cls: typeof el.className === "string" ? el.className : "",
          text: (el.innerText || "").replace(/\s+/g, " ").slice(0, 80),
          right: Math.round(r.right),
          left: Math.round(r.left),
          width: Math.round(r.width)
        };
      })
      .filter((item) => item.right > window.innerWidth + 1 || item.left < -1);

    return {
      viewport: [window.innerWidth, window.innerHeight],
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      hasHorizontalOverflow: doc.scrollWidth > doc.clientWidth + 1,
      heroHeight: Math.round(heroRect?.height || 0),
      heroBottom: Math.round(heroRect?.bottom || 0),
      proofTop: Math.round(proofRect?.top || 0),
      proofPeekAtFold: proofRect ? proofRect.top < window.innerHeight : false,
      actionHeight: Math.round(actionRect?.height || 0),
      smallTargets: smallTargets.slice(0, 20),
      overflowEls: overflowEls.slice(0, 20),
      h1Rect: (() => {
        const r = document.querySelector("h1")?.getBoundingClientRect();
        return r && {
          w: Math.round(r.width),
          h: Math.round(r.height),
          top: Math.round(r.top),
          bottom: Math.round(r.bottom)
        };
      })()
    };
  });

  await page.screenshot({ path: `/private/tmp/${screenshotSlug}-${vp.width}.png`, fullPage: false });
  results.push({ name: vp.name, ...metrics });
  await context.close();
}

await browser.close();
await writeFile(`/private/tmp/${screenshotSlug}-mobile-audit.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
