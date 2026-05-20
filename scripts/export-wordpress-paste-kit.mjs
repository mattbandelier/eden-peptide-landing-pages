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
  },
  {
    name: "GLOW Stack Denver LP",
    slug: "glow-stack-greenwood-village",
    formName: "GLOW Stack Denver Lead Form",
    outputFile: "glow-stack-wordpress-paste.html"
  },
  {
    name: "Structural Repair Stack Denver LP",
    slug: "structural-repair-stack-greenwood-village",
    formName: "Structural Repair Stack Denver Lead Form",
    outputFile: "structural-repair-stack-wordpress-paste.html"
  },
  {
    name: "GLP-1 Support Stack Denver LP",
    slug: "glp-1-support-stack-greenwood-village",
    formName: "GLP-1 Support Stack Denver Lead Form",
    outputFile: "glp-1-support-stack-wordpress-paste.html"
  },
  {
    name: "Peptide Therapy Hub Denver LP",
    slug: "peptide-therapy-greenwood-village",
    formName: "Peptide Therapy Denver Lead Form",
    outputFile: "peptide-therapy-wordpress-paste.html"
  },
  {
    name: "CJC-1295 Ipamorelin Denver LP",
    slug: "cjc-1295-ipamorelin-greenwood-village",
    formName: "CJC-1295 Ipamorelin Denver Lead Form",
    outputFile: "cjc-1295-ipamorelin-wordpress-paste.html"
  },
  {
    name: "Tesamorelin Denver LP",
    slug: "tesamorelin-greenwood-village",
    formName: "Tesamorelin Denver Lead Form",
    outputFile: "tesamorelin-wordpress-paste.html"
  },
  {
    name: "BPC-157 Denver LP",
    slug: "bpc-157-greenwood-village",
    formName: "BPC-157 Denver Lead Form",
    outputFile: "bpc-157-wordpress-paste.html"
  },
  {
    name: "Sermorelin Denver LP",
    slug: "sermorelin-greenwood-village",
    formName: "Sermorelin Denver Lead Form",
    outputFile: "sermorelin-wordpress-paste.html"
  },
  {
    name: "NAD+ Denver LP",
    slug: "nad-plus-greenwood-village",
    formName: "NAD+ Denver Lead Form",
    outputFile: "nad-plus-wordpress-paste.html"
  },
  {
    name: "The Skin & Glow Denver LP",
    slug: "the-skin-and-glow-greenwood-village",
    formName: "The Skin and Glow Denver Lead Form",
    outputFile: "the-skin-and-glow-wordpress-paste.html"
  },
  {
    name: "The Joint Insurance Denver LP",
    slug: "the-joint-insurance-greenwood-village",
    formName: "The Joint Insurance Denver Lead Form",
    outputFile: "the-joint-insurance-wordpress-paste.html"
  },
  {
    name: "The Deep Sleep Reset Denver LP",
    slug: "the-deep-sleep-reset-greenwood-village",
    formName: "The Deep Sleep Reset Denver Lead Form",
    outputFile: "the-deep-sleep-reset-wordpress-paste.html"
  },
  {
    name: "Gut Repair IBD Denver LP",
    slug: "gut-repair-ibd-greenwood-village",
    formName: "Gut Repair & IBD Denver Lead Form",
    outputFile: "gut-repair-ibd-wordpress-paste.html"
  },
  {
    name: "Hormone Optimization Denver LP",
    slug: "hormone-optimization-greenwood-village",
    formName: "Hormone Optimization Denver Lead Form",
    outputFile: "hormone-optimization-wordpress-paste.html"
  },
  {
    name: "Glutathione Denver LP",
    slug: "glutathione-greenwood-village",
    formName: "Glutathione Denver Lead Form",
    outputFile: "glutathione-wordpress-paste.html"
  },
  {
    name: "TB-500 Denver LP",
    slug: "tb-500-greenwood-village",
    formName: "TB-500 Denver Lead Form",
    outputFile: "tb-500-wordpress-paste.html"
  },
  {
    name: "The Cognitive Edge Denver LP",
    slug: "the-cognitive-edge-greenwood-village",
    formName: "The Cognitive Edge Denver Lead Form",
    outputFile: "the-cognitive-edge-wordpress-paste.html"
  },
  {
    name: "The Morning Spark Denver LP",
    slug: "the-morning-spark-greenwood-village",
    formName: "The Morning Spark Denver Lead Form",
    outputFile: "the-morning-spark-wordpress-paste.html"
  },
  {
    name: "The CNS Recovery Denver LP",
    slug: "the-cns-recovery-greenwood-village",
    formName: "The CNS Recovery Denver Lead Form",
    outputFile: "the-cns-recovery-wordpress-paste.html"
  },
  {
    name: "Neuro-Recovery Denver LP",
    slug: "neuro-recovery-greenwood-village",
    formName: "Neuro-Recovery Denver Lead Form",
    outputFile: "neuro-recovery-wordpress-paste.html"
  },
  {
    name: "Semax Denver LP",
    slug: "semax-greenwood-village",
    formName: "Semax Denver Lead Form",
    outputFile: "semax-wordpress-paste.html"
  },
  {
    name: "Delta Sleep DSIP Denver LP",
    slug: "delta-sleep-dsip-greenwood-village",
    formName: "Delta Sleep / DSIP Denver Lead Form",
    outputFile: "delta-sleep-dsip-wordpress-paste.html"
  },
  {
    name: "The Telomere Protocol Denver LP",
    slug: "the-telomere-protocol-greenwood-village",
    formName: "The Telomere Protocol Denver Lead Form",
    outputFile: "the-telomere-protocol-wordpress-paste.html"
  },
  {
    name: "Epitalon Denver LP",
    slug: "epitalon-greenwood-village",
    formName: "Epitalon Denver Lead Form",
    outputFile: "epitalon-wordpress-paste.html"
  },
  {
    name: "The Social Flow Denver LP",
    slug: "the-social-flow-greenwood-village",
    formName: "The Social Flow Denver Lead Form",
    outputFile: "the-social-flow-wordpress-paste.html"
  },
  {
    name: "Insulin Shield Denver LP",
    slug: "insulin-shield-greenwood-village",
    formName: "Insulin Shield Denver Lead Form",
    outputFile: "insulin-shield-wordpress-paste.html"
  },
  {
    name: "Cortisol Management Denver LP",
    slug: "cortisol-management-greenwood-village",
    formName: "Cortisol Management Denver Lead Form",
    outputFile: "cortisol-management-wordpress-paste.html"
  },
  {
    name: "Migraine Neuralgia Denver LP",
    slug: "migraine-neuralgia-greenwood-village",
    formName: "Migraine & Neuralgia Denver Lead Form",
    outputFile: "migraine-neuralgia-wordpress-paste.html"
  },
  {
    name: "Post-Medication Reset Denver LP",
    slug: "post-medication-reset-greenwood-village",
    formName: "Post-Medication Reset Denver Lead Form",
    outputFile: "post-medication-reset-wordpress-paste.html"
  },
  {
    name: "KPV Denver LP",
    slug: "kpv-peptide-greenwood-village",
    formName: "KPV Denver Lead Form",
    outputFile: "kpv-peptide-wordpress-paste.html"
  },
  {
    name: "MOTS-c Denver LP",
    slug: "mots-c-greenwood-village",
    formName: "MOTS-c Denver Lead Form",
    outputFile: "mots-c-wordpress-paste.html"
  },
  {
    name: "Wolverine Stack Denver Funnel",
    slug: "wolverine-stack-denver",
    formName: "Wolverine Stack Denver Funnel",
    outputFile: "wolverine-stack-denver-wordpress-paste.html"
  },
  {
    name: "KLOW Stack Denver Funnel",
    slug: "klow-stack-denver",
    formName: "KLOW Stack Denver Funnel",
    outputFile: "klow-stack-denver-wordpress-paste.html"
  },
  {
    name: "GLOW Stack Denver Funnel",
    slug: "glow-stack-denver",
    formName: "GLOW Stack Denver Funnel",
    outputFile: "glow-stack-denver-wordpress-paste.html"
  }
];

const [css, logo] = await Promise.all([
  readFile(cssPath, "utf8"),
  readFile(logoPath)
]);

const logoDataUri = `data:image/png;base64,${logo.toString("base64")}`;

const fileList = pages.map((page) => `- ` + "`" + page.outputFile + "`" + ` → /${page.slug}`).join("\n");
const formList = pages.map((page) => "`" + page.formName + "`").join(", ");
const pathList = pages.map((page) => "`/" + page.slug + "`").join(", ");

const readme = `# WordPress Paste Kit

Use these files when you want a copy/paste handoff for WordPress.

${fileList}

## How to publish

1. In WordPress, create a new page with the matching slug.
2. Add a \`Custom HTML\` block, or the equivalent HTML/code widget in the page builder.
3. Paste the full contents of the matching paste-kit HTML file.
4. In GoHighLevel, go to \`Settings -> External Tracking\` and copy the tracking script.
5. Paste that GHL tracking script into the marked spot in the HTML, or install it globally before \`</body>\` in WordPress.
6. Publish the page and submit one test lead.
7. In GHL, check \`Sites -> Forms -> Submissions -> External Forms\`.

Full launch workflow: see \`docs/wordpress-ghl-launch-workflow.md\`.

## GHL trigger

Use either:

- External form name matching the page: ${formList}
- Page path matching the slug: ${pathList}

The form also includes UTMs, GCLID, FBCLID, source URL, service, and lead source fields.

Important: the Astro preview uses \`/api/ghl-lead\`, but WordPress does not have that endpoint by default. For WordPress, use GHL External Tracking as the primary path, or have Billy build a WordPress REST/proxy endpoint before relying on direct webhook delivery.
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
  const clientScripts = await getClientScriptTags(html);
  const schemaScripts = getSchemaScriptTags(html);
  const pageStyles = await getStyleTags(html);
  let main = matchOrThrow(html, /<main[^>]*class="lp-detail"[^>]*>([\s\S]*?)<\/main>/, "main content");
  main = main.replaceAll('src="/assets/eden-health-club-logo-transparent.png"', `src="${logoDataUri}"`);

  const pasteHtml = `<!-- Eden Health Club: ${page.name} paste kit
Paste this into a WordPress Custom HTML block or page-builder HTML widget.
Also add the HighLevel External Tracking script from GHL Settings -> External Tracking.
GHL form trigger: ${page.formName}
-->
<style>
${css}
</style>
${pageStyles}

${schemaScripts}

<main class="lp-detail">${main}</main>

<!-- Paste the HighLevel External Tracking script under this comment when available.
Example:
<script src="https://link.yourdomain.com/js/external-tracking.js" data-tracking-id="tk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"></script>
-->

${clientScripts}
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

function getSchemaScriptTags(html) {
  const scripts = [
    ...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/g)
  ].map(([script]) => script);
  return scripts.join("\n");
}

async function getStyleTags(html) {
  const inlineStyles = [...html.matchAll(/<style[^>]*>[\s\S]*?<\/style>/g)].map(([style]) => style);
  const linkedStyles = await Promise.all(
    [...html.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/g)].map(
      async ([, href]) => {
        const stylePath = resolve(root, "dist", href.replace(/^\//, ""));
        return `<style>\n${await readFile(stylePath, "utf8")}\n</style>`;
      }
    )
  );
  return [...inlineStyles, ...linkedStyles].join("\n");
}

async function getClientScriptTags(html) {
  const scripts = [];

  const inlineMatch = html.match(/<script type="module">([\s\S]*?)<\/script>/);
  if (inlineMatch?.[1]) {
    scripts.push(`<script type="module">\n${await inlineModuleImports(inlineMatch[1])}\n</script>`);
  }

  const srcMatch = html.match(/<script type="module" src="([^"]+)"><\/script>/);
  if (srcMatch?.[1]) {
    const scriptPath = resolve(root, "dist", srcMatch[1].replace(/^\//, ""));
    scripts.push(`<script type="module">\n${await inlineModuleImports(await readFile(scriptPath, "utf8"))}\n</script>`);
  }

  const classicScripts = [
    ...html.matchAll(/<script(?![^>]*type=["']application\/ld\+json["'])(?![^>]*type=["']module["'])(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)
  ];
  classicScripts.forEach(([, script]) => {
    if (script.trim()) {
      scripts.push(`<script>\n${script.trim()}\n</script>`);
    }
  });

  return scripts.join("\n");
}

async function inlineModuleImports(script) {
  const importPattern = /import\s*["']([^"']+)["'];?/g;
  const imports = [...script.matchAll(importPattern)];
  if (!imports.length) {
    return script;
  }

  const importedScripts = await Promise.all(
    imports.map(async ([, importPath]) => {
      const chunkPath = resolve(root, "dist/_astro", importPath.replace(/^\.\//, ""));
      return inlineModuleImports(await readFile(chunkPath, "utf8"));
    })
  );

  return `${importedScripts.join("\n")}\n${script.replace(importPattern, "").trim()}`;
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
