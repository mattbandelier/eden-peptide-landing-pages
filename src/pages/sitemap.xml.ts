import type { APIRoute } from "astro";
import { fitnessPages } from "@/data/fitness-pages";
import { landingPages } from "@/data/landing-pages";

const siteUrl = "https://landing.edenhealthclubs.com";

const staticSlugs = [
  "",
  "bpc-157-greenwood-village",
  "cjc-1295-ipamorelin-greenwood-village",
  "cortisol-management-greenwood-village",
  "delta-sleep-dsip-greenwood-village",
  "epitalon-greenwood-village",
  "glow-stack-denver",
  "glow-stack-greenwood-village",
  "glp-1-support-stack-greenwood-village",
  "glutathione-greenwood-village",
  "gut-repair-ibd-greenwood-village",
  "hormone-optimization-greenwood-village",
  "insulin-shield-greenwood-village",
  "klow-stack-denver",
  "klow-stack-greenwood-village",
  "kpv-peptide-greenwood-village",
  "migraine-neuralgia-greenwood-village",
  "mots-c-greenwood-village",
  "nad-plus-greenwood-village",
  "neuro-recovery-greenwood-village",
  "peptide-therapy-greenwood-village",
  "post-medication-reset-greenwood-village",
  "semax-greenwood-village",
  "sermorelin-greenwood-village",
  "structural-repair-stack-greenwood-village",
  "tb-500-greenwood-village",
  "tesamorelin-greenwood-village",
  "the-cns-recovery-greenwood-village",
  "the-cognitive-edge-greenwood-village",
  "the-deep-sleep-reset-greenwood-village",
  "the-joint-insurance-greenwood-village",
  "the-morning-spark-greenwood-village",
  "the-skin-and-glow-greenwood-village",
  "the-social-flow-greenwood-village",
  "the-telomere-protocol-greenwood-village",
  "wolverine-stack-denver",
  "wolverine-stack-greenwood-village"
];

function loc(path: string) {
  if (!path) return new URL("/", siteUrl).toString();
  const suffix = path.includes(".") ? `/${path}` : `/${path}/`;
  return new URL(suffix, siteUrl).toString();
}

function urlEntry(path: string, priority: string) {
  return [
    "  <url>",
    `    <loc>${loc(path)}</loc>`,
    "    <changefreq>weekly</changefreq>",
    `    <priority>${priority}</priority>`,
    "  </url>"
  ].join("\n");
}

export const GET: APIRoute = async () => {
  const urls = [
    ...staticSlugs.map((slug) => urlEntry(slug, slug ? "0.80" : "1.00")),
    urlEntry("llms.txt", "0.50"),
    ...landingPages.map((page) => urlEntry(`lp/${page.slug}`, "0.70")),
    ...fitnessPages.map((page) => urlEntry(page.slug, "0.90"))
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>"
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
