import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const htmlPath = resolve(root, "dist/wolverine-stack-greenwood-village/index.html");
const cssPath = await findCssPath();
const logoPath = resolve(root, "public/assets/eden-health-club-logo-transparent.png");
const outputPath = resolve(root, "wordpress/wolverine-stack-wordpress-paste.html");
const readmePath = resolve(root, "wordpress/README.md");

const [html, css, logo] = await Promise.all([
  readFile(htmlPath, "utf8"),
  readFile(cssPath, "utf8"),
  readFile(logoPath)
]);

const moduleScript = matchOrThrow(html, /<script type="module">([\s\S]*?)<\/script>/, "module script");
const schemaScript = matchOrThrow(
  html,
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  "schema script"
);
let main = matchOrThrow(html, /<main class="lp-detail">([\s\S]*?)<\/main>/, "main content");

const logoDataUri = `data:image/png;base64,${logo.toString("base64")}`;
main = main.replaceAll('src="/assets/eden-health-club-logo-transparent.png"', `src="${logoDataUri}"`);

const pasteHtml = `<!-- Eden Health Club: Wolverine Stack Denver LP paste kit
Paste this into a WordPress Custom HTML block or page-builder HTML widget.
Also add the HighLevel External Tracking script from GHL Settings -> External Tracking.
-->
<style>
${css}
</style>

<script type="application/ld+json">${schemaScript}</script>

<main class="lp-detail">${main}</main>

<!-- Paste the HighLevel External Tracking script under this comment when available.
Example:
<script src="https://link.yourdomain.com/js/external-tracking.js" data-tracking-id="tk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"></script>
-->

<script type="module">
${moduleScript}
</script>
`;

const readme = `# WordPress Paste Kit

Use \`wolverine-stack-wordpress-paste.html\` when you want the Wolverine Stack page to be a copy/paste handoff for WordPress.

## How to publish

1. In WordPress, create a new page with slug \`wolverine-stack-greenwood-village\`.
2. Add a \`Custom HTML\` block, or the equivalent HTML/code widget in the page builder.
3. Paste the full contents of \`wolverine-stack-wordpress-paste.html\`.
4. In GoHighLevel, go to \`Settings -> External Tracking\` and copy the tracking script.
5. Paste that GHL tracking script into the marked spot in the HTML, or install it globally before \`</body>\` in WordPress.
6. Publish the page and submit one test lead.
7. In GHL, check \`Sites -> Forms -> Submissions -> External Forms\`.

## GHL trigger

Use either:

- External form name: \`Wolverine Stack Denver Lead Form\`
- Page path: \`/wolverine-stack-greenwood-village\`

The form also includes UTMs, GCLID, FBCLID, source URL, service, and lead source fields.
`;

await mkdir(dirname(outputPath), { recursive: true });
await Promise.all([writeFile(outputPath, pasteHtml, "utf8"), writeFile(readmePath, readme, "utf8")]);

console.log(`Wrote ${outputPath}`);
console.log(`Wrote ${readmePath}`);

function matchOrThrow(source, pattern, label) {
  const match = source.match(pattern);
  if (!match?.[1]) {
    throw new Error(`Could not find ${label}`);
  }
  return match[1];
}

async function findCssPath() {
  const assetDir = resolve(root, "dist/_astro");
  const files = await readdir(assetDir);
  const cssFile = files.find((file) => file.endsWith(".css"));
  if (!cssFile) {
    throw new Error(`Could not find built CSS file in ${assetDir}`);
  }
  return resolve(assetDir, cssFile);
}
