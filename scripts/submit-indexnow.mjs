const site = "https://landing.edenhealthclubs.com";
const host = "landing.edenhealthclubs.com";
const key = "4a313a619e6f39e1d34d8f64353401d4";
const keyLocation = `${site}/${key}.txt`;
const sitemapUrl = `${site}/sitemap.xml`;

const endpoints = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow"
];

const isDryRun = process.argv.includes("--dry-run");

async function getSitemapUrls() {
  const response = await fetch(sitemapUrl, {
    headers: {
      "User-Agent": "EdenHealthClub-IndexNow/1.0"
    }
  });

  if (!response.ok) {
    throw new Error(`Could not fetch sitemap: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());
  const uniqueUrls = [...new Set(urls)].filter((url) => url.startsWith(site));

  if (!uniqueUrls.length) {
    throw new Error("No URLs found in sitemap.");
  }

  return uniqueUrls;
}

async function submit(endpoint, urlList) {
  const payload = {
    host,
    key,
    keyLocation,
    urlList
  };

  if (isDryRun) {
    console.log(`[dry-run] ${endpoint}`);
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(payload)
  });

  console.log(`${endpoint}: ${response.status} ${response.statusText}`);

  if ([200, 202].includes(response.status)) {
    return { endpoint, ok: true, status: response.status };
  }

  const text = await response.text();
  console.warn(`IndexNow warning for ${endpoint}: ${text}`);
  return { endpoint, ok: false, status: response.status, text };
}

const urls = await getSitemapUrls();

console.log(`Submitting ${urls.length} URLs from ${sitemapUrl}`);
console.log(`Key file: ${keyLocation}`);

const results = [];

for (const endpoint of endpoints) {
  results.push(await submit(endpoint, urls));
}

if (!results.some((result) => result.ok)) {
  throw new Error("All IndexNow endpoints rejected the submission.");
}
