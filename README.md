# Eden Peptide Landing Pages

Astro source and WordPress paste exports for Eden Health Clubs peptide landing pages.

The Wolverine Stack, KLOW Stack, and current Phase 2 pages are the source-of-truth templates for design, mobile behavior, background media, sticky CTA, lead form flow, local Denver/Greenwood Village positioning, FAQ, structured data, compliance language, SEO/GEO, and AI-search optimization.

## Developer Handoff

Billy/dev team can edit this two ways:

1. **Source edits:** update the Astro files in `src/pages`, `src/components`, and `src/styles`, then run `npm run build`.
2. **WordPress/WP Engine publishing:** use the paste-kit files in `wordpress/` and paste them into a WordPress Custom HTML block or code widget.

The paste-kit files are editable HTML/CSS/JS handoff files. They are not locked images or screenshots.

Start here for launch:

- `wordpress/README.md` lists every WordPress paste file and matching slug.
- `docs/ghl-lead-capture.md` explains the GoHighLevel workflow and lead routing.
- `docs/wordpress-ghl-launch-workflow.md` is the step-by-step publishing checklist.

## Quick Start

```bash
npm install
npm run dev
```

Then open:

```text
http://127.0.0.1:4321/wolverine-stack-greenwood-village/
http://127.0.0.1:4321/klow-stack-greenwood-village/
http://127.0.0.1:4321/glow-stack-greenwood-village/
http://127.0.0.1:4321/structural-repair-stack-greenwood-village/
http://127.0.0.1:4321/glp-1-support-stack-greenwood-village/
```

## Credentials

Copy `.env.example` to `.env` when you are ready to connect WordPress. Keep `.env` private.

```bash
WORDPRESS_MODE=mock
WORDPRESS_SITE_URL=https://example.com
WORDPRESS_USERNAME=placeholder_user
WORDPRESS_APPLICATION_PASSWORD=placeholder_password
```

Use `WORDPRESS_MODE=live` only after read-only API access has been tested.

## Workflow

1. Build landing pages from reusable Astro components.
2. Use the Wolverine/KLOW pages as the conversion/design template.
3. Export WordPress-ready HTML paste files when needed.
4. Keep publishing actions draft-first and explicit.
5. Run the mobile audit before handoff:

```bash
/Users/mattbandelier/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/mobile-audit.mjs
```

## Current Pages

- `/` shows the LP system dashboard.
- `/wolverine-stack-greenwood-village/` is the Wolverine Stack LP.
- `/klow-stack-greenwood-village/` is the KLOW Stack LP.
- `/glow-stack-greenwood-village/` is the GLOW Stack LP.
- `/structural-repair-stack-greenwood-village/` is the Structural Repair Stack LP.
- `/glp-1-support-stack-greenwood-village/` is the GLP-1 Support Stack LP.
- `/gut-repair-ibd-greenwood-village/` is the Gut Repair & IBD LP.
- `/hormone-optimization-greenwood-village/` is the Hormone Optimization LP.
- `/neuro-recovery-greenwood-village/` is the Neuro-Recovery LP.
- `/migraine-neuralgia-greenwood-village/` is the Migraine & Neuralgia LP.
- Additional individual and stack pages are in `src/pages/` and `wordpress/`.
- Fitness SEO expansion pages are generated from `src/data/fitness-pages.ts` through `src/pages/[slug].astro`, including `/strength-training-greenwood-village/`, `/performance-training-greenwood-village/`, `/longevity-training-greenwood-village/`, `/anti-aging-strength-training-greenwood-village/`, `/glp-1-strength-training-greenwood-village/`, `/body-composition-training-greenwood-village/`, `/recovery-performance-greenwood-village/`, `/executive-fitness-greenwood-village/`, `/semi-private-personal-training-greenwood-village/`, `/group-fitness-classes-greenwood-village/`, `/barre-classes-greenwood-village/`, `/yoga-classes-greenwood-village/`, and `/pilates-strength-training-greenwood-village/`.

## WordPress Export

The WordPress-ready paste files are in `wordpress/`. Key files include:

```text
wordpress/wolverine-stack-wordpress-paste.html
wordpress/klow-stack-wordpress-paste.html
wordpress/glow-stack-wordpress-paste.html
wordpress/structural-repair-stack-wordpress-paste.html
wordpress/glp-1-support-stack-wordpress-paste.html
wordpress/gut-repair-ibd-wordpress-paste.html
wordpress/hormone-optimization-wordpress-paste.html
wordpress/neuro-recovery-wordpress-paste.html
wordpress/migraine-neuralgia-wordpress-paste.html
```

Create a WordPress page with the matching slug, add a Custom HTML block, and paste the full file contents.

Recommended slugs:

- `wolverine-stack-greenwood-village`
- `klow-stack-greenwood-village`
- `glow-stack-greenwood-village`
- `structural-repair-stack-greenwood-village`
- `glp-1-support-stack-greenwood-village`
- `gut-repair-ibd-greenwood-village`
- `hormone-optimization-greenwood-village`
- `neuro-recovery-greenwood-village`
- `migraine-neuralgia-greenwood-village`
