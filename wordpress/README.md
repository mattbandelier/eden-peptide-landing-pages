# WordPress Paste Kit

Use these files when you want a copy/paste handoff for WordPress.

- `wolverine-stack-wordpress-paste.html` → /wolverine-stack-greenwood-village
- `klow-stack-wordpress-paste.html` → /klow-stack-greenwood-village
- `glow-stack-wordpress-paste.html` → /glow-stack-greenwood-village
- `structural-repair-stack-wordpress-paste.html` → /structural-repair-stack-greenwood-village
- `glp-1-support-stack-wordpress-paste.html` → /glp-1-support-stack-greenwood-village
- `peptide-therapy-wordpress-paste.html` → /peptide-therapy-greenwood-village
- `cjc-1295-ipamorelin-wordpress-paste.html` → /cjc-1295-ipamorelin-greenwood-village
- `tesamorelin-wordpress-paste.html` → /tesamorelin-greenwood-village
- `bpc-157-wordpress-paste.html` → /bpc-157-greenwood-village
- `sermorelin-wordpress-paste.html` → /sermorelin-greenwood-village
- `nad-plus-wordpress-paste.html` → /nad-plus-greenwood-village
- `the-skin-and-glow-wordpress-paste.html` → /the-skin-and-glow-greenwood-village
- `the-joint-insurance-wordpress-paste.html` → /the-joint-insurance-greenwood-village
- `the-deep-sleep-reset-wordpress-paste.html` → /the-deep-sleep-reset-greenwood-village
- `gut-repair-ibd-wordpress-paste.html` → /gut-repair-ibd-greenwood-village
- `hormone-optimization-wordpress-paste.html` → /hormone-optimization-greenwood-village
- `glutathione-wordpress-paste.html` → /glutathione-greenwood-village
- `tb-500-wordpress-paste.html` → /tb-500-greenwood-village
- `the-cognitive-edge-wordpress-paste.html` → /the-cognitive-edge-greenwood-village
- `the-morning-spark-wordpress-paste.html` → /the-morning-spark-greenwood-village
- `the-cns-recovery-wordpress-paste.html` → /the-cns-recovery-greenwood-village
- `neuro-recovery-wordpress-paste.html` → /neuro-recovery-greenwood-village
- `semax-wordpress-paste.html` → /semax-greenwood-village
- `delta-sleep-dsip-wordpress-paste.html` → /delta-sleep-dsip-greenwood-village
- `the-telomere-protocol-wordpress-paste.html` → /the-telomere-protocol-greenwood-village
- `epitalon-wordpress-paste.html` → /epitalon-greenwood-village
- `the-social-flow-wordpress-paste.html` → /the-social-flow-greenwood-village
- `insulin-shield-wordpress-paste.html` → /insulin-shield-greenwood-village
- `cortisol-management-wordpress-paste.html` → /cortisol-management-greenwood-village
- `migraine-neuralgia-wordpress-paste.html` → /migraine-neuralgia-greenwood-village
- `post-medication-reset-wordpress-paste.html` → /post-medication-reset-greenwood-village
- `kpv-peptide-wordpress-paste.html` → /kpv-peptide-greenwood-village
- `mots-c-wordpress-paste.html` → /mots-c-greenwood-village
- `wolverine-stack-denver-wordpress-paste.html` → /wolverine-stack-denver
- `klow-stack-denver-wordpress-paste.html` → /klow-stack-denver
- `glow-stack-denver-wordpress-paste.html` → /glow-stack-denver

## How to publish

1. In WordPress, create a new page with the matching slug.
2. Add a `Custom HTML` block, or the equivalent HTML/code widget in the page builder.
3. Paste the full contents of the matching paste-kit HTML file.
4. In GoHighLevel, go to `Settings -> External Tracking` and copy the tracking script.
5. Paste that GHL tracking script into the marked spot in the HTML, or install it globally before `</body>` in WordPress.
6. Publish the page and submit one test lead.
7. In GHL, check `Sites -> Forms -> Submissions -> External Forms`.

Full launch workflow: see `docs/wordpress-ghl-launch-workflow.md`.

## GHL trigger

Use either:

- External form name matching the page: `Wolverine Stack Denver Lead Form`, `KLOW Stack Denver Lead Form`, `GLOW Stack Denver Lead Form`, `Structural Repair Stack Denver Lead Form`, `GLP-1 Support Stack Denver Lead Form`, `Peptide Therapy Denver Lead Form`, `CJC-1295 Ipamorelin Denver Lead Form`, `Tesamorelin Denver Lead Form`, `BPC-157 Denver Lead Form`, `Sermorelin Denver Lead Form`, `NAD+ Denver Lead Form`, `The Skin and Glow Denver Lead Form`, `The Joint Insurance Denver Lead Form`, `The Deep Sleep Reset Denver Lead Form`, `Gut Repair & IBD Denver Lead Form`, `Hormone Optimization Denver Lead Form`, `Glutathione Denver Lead Form`, `TB-500 Denver Lead Form`, `The Cognitive Edge Denver Lead Form`, `The Morning Spark Denver Lead Form`, `The CNS Recovery Denver Lead Form`, `Neuro-Recovery Denver Lead Form`, `Semax Denver Lead Form`, `Delta Sleep / DSIP Denver Lead Form`, `The Telomere Protocol Denver Lead Form`, `Epitalon Denver Lead Form`, `The Social Flow Denver Lead Form`, `Insulin Shield Denver Lead Form`, `Cortisol Management Denver Lead Form`, `Migraine & Neuralgia Denver Lead Form`, `Post-Medication Reset Denver Lead Form`, `KPV Denver Lead Form`, `MOTS-c Denver Lead Form`, `Wolverine Stack Denver Funnel`, `KLOW Stack Denver Funnel`, `GLOW Stack Denver Funnel`
- Page path matching the slug: `/wolverine-stack-greenwood-village`, `/klow-stack-greenwood-village`, `/glow-stack-greenwood-village`, `/structural-repair-stack-greenwood-village`, `/glp-1-support-stack-greenwood-village`, `/peptide-therapy-greenwood-village`, `/cjc-1295-ipamorelin-greenwood-village`, `/tesamorelin-greenwood-village`, `/bpc-157-greenwood-village`, `/sermorelin-greenwood-village`, `/nad-plus-greenwood-village`, `/the-skin-and-glow-greenwood-village`, `/the-joint-insurance-greenwood-village`, `/the-deep-sleep-reset-greenwood-village`, `/gut-repair-ibd-greenwood-village`, `/hormone-optimization-greenwood-village`, `/glutathione-greenwood-village`, `/tb-500-greenwood-village`, `/the-cognitive-edge-greenwood-village`, `/the-morning-spark-greenwood-village`, `/the-cns-recovery-greenwood-village`, `/neuro-recovery-greenwood-village`, `/semax-greenwood-village`, `/delta-sleep-dsip-greenwood-village`, `/the-telomere-protocol-greenwood-village`, `/epitalon-greenwood-village`, `/the-social-flow-greenwood-village`, `/insulin-shield-greenwood-village`, `/cortisol-management-greenwood-village`, `/migraine-neuralgia-greenwood-village`, `/post-medication-reset-greenwood-village`, `/kpv-peptide-greenwood-village`, `/mots-c-greenwood-village`, `/wolverine-stack-denver`, `/klow-stack-denver`, `/glow-stack-denver`

The form also includes UTMs, GCLID, FBCLID, source URL, service, and lead source fields.

Important: the Astro preview uses `/api/ghl-lead`, but WordPress does not have that endpoint by default. For WordPress, use GHL External Tracking as the primary path, or have Billy build a WordPress REST/proxy endpoint before relying on direct webhook delivery.
