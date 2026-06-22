import { fitnessPages } from "@/data/fitness-pages";
import { landingPages } from "@/data/landing-pages";

export const siteUrl = "https://landing.edenhealthclubs.com";
export const indexNowKey = "4a313a619e6f39e1d34d8f64353401d4";

export const staticSlugs = [
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

export function loc(path: string) {
  if (!path) return new URL("/", siteUrl).toString();
  const suffix = path.includes(".") ? `/${path}` : `/${path}/`;
  return new URL(suffix, siteUrl).toString();
}

export function getIndexableUrls() {
  return [
    ...staticSlugs.map((slug) => loc(slug)),
    loc("llms.txt"),
    loc(`${indexNowKey}.txt`),
    ...landingPages.map((page) => loc(`lp/${page.slug}`)),
    ...fitnessPages.map((page) => loc(page.slug))
  ];
}

export function getIndexableUrlEntries() {
  return [
    ...staticSlugs.map((slug) => ({ url: loc(slug), priority: slug ? "0.80" : "1.00" })),
    { url: loc("llms.txt"), priority: "0.50" },
    { url: loc(`${indexNowKey}.txt`), priority: "0.30" },
    ...landingPages.map((page) => ({ url: loc(`lp/${page.slug}`), priority: "0.70" })),
    ...fitnessPages.map((page) => ({ url: loc(page.slug), priority: "0.90" }))
  ];
}
