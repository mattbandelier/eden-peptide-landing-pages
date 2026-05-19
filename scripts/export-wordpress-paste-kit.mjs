import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const cssPath = await findCssPath();
const logoPath = resolve(root, "public/assets/eden-health-club-logo-transparent.png");
const readmePath = resolve(root, "wordpress/README.md");

const pages = [
  {
    name: "Wolverine Stack Denver LP",
    slug: "wolverine-stack-greenwood-village",
    formName: "Wolverine Stack Denver Lead Form",
    outputFile: "wolverine-stack-wordpress-paste.html"
  },
  {
    name: "KLOW Stack Denver LP",
    slug: "klow-stack-greenwood-village",
    formName: "KLOW Stack Denver Lead Form",
    outputFile: "klow-stack-wordpress-paste.html"
  }
];

const [css, logo] = await Promise.all([
  readFile(cssPath, "utf8"),
  readFile(logoPath)
]);

const logoDataUri = `data:image/png;base64,${logo.toString("base64")}`;

const readme = `# WordPress Paste Kit

Use these files when you want a copy/paste handoff for WordPress:

- \`wolverine-stack-wordpress-paste.html\`
- \`klow-stack-wordpress-paste.html\`

## How to publish

1. In WordPress, create a new page with the matching slug.
2. Add a \`Custom HTML\` block, or the equivalent HTML/code widget in the page builder.
3. Paste the full contents of the matching paste-kit HTML file.
4. In GoHighLevel, go to \`Settings -> External Tracking\` and copy the tracking script.
5. Paste that GHL tracking script into the marked spot in the HTML, or install it globally before \`</body>\` in WordPress.
6. Publish the page and submit one test lead.
7. In GHL, check \`Sites -> Forms -> Submissions -> External Forms\`.

## GHL trigger

Use either:

- External form name matching the page, such as \`Wolverine Stack Denver Lead Form\` or \`KLOW Stack Denver Lead Form\`
- Page path matching the slug, such as \`/wolverine-stack-greenwood-village\` or \`/klow-stack-greenwood-village\`

The form also includes UTMs, GCLID, FBCLID, source URL, service, and lead source fields.
`;

await mkdir(resolve(root, "wordpress"), { recursive: true });
await Promise.all([
  ...pages.map((page) => writePasteKit(page)),
  writeFile(readmePath, readme, "utf8")
]);

console.log(`Wrote ${readmePath}`);

async function writePasteKit(page) {
  const htmlPath = resolve(root, `dist/${page.slug}/index.html`);
  const outputPath = resolve(root, `wordpress/${page.outputFile}`);
  const html = await readFile(htmlPath, "utf8");
  const moduleScript = await getModuleScript(html);
  const schemaScript = matchOrThrow(
    html,
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    "schema script"
  );
  let main = matchOrThrow(html, /<main class="lp-detail">([\s\S]*?)<\/main>/, "main content");
  main = main.replaceAll('src="/assets/eden-health-club-logo-transparent.png"', `src="${logoDataUri}"`);

  const pasteHtml = `<!-- Eden Health Club: ${page.name} paste kit
Paste this into a WordPress Custom HTML block or page-builder HTML widget.
Also add the HighLevel External Tracking script from GHL Settings -> External Tracking.
GHL form trigger: ${page.formName}
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

  await writeFile(outputPath, pasteHtml, "utf8");
  console.log(`Wrote ${outputPath}`);
}

function matchOrThrow(source, pattern, label) {
  const match = source.match(pattern);
  if (!match?.[1]) {
    throw new Error(`Could not find ${label}`);
  }
  return match[1];
}

async function getModuleScript(html) {
  const inlineMatch = html.match(/<script type="module">([\s\S]*?)<\/script>/);
  if (inlineMatch?.[1]) {
    return inlineMatch[1];
  }

  const srcMatch = html.match(/<script type="module" src="([^"]+)"><\/script>/);
  if (srcMatch?.[1]) {
    const scriptPath = resolve(root, "dist", srcMatch[1].replace(/^\//, ""));
    return readFile(scriptPath, "utf8");
  }

  throw new Error("Could not find module script");
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
