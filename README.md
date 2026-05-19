# Eden Peptide Landing Pages

Astro source and WordPress paste exports for Eden Health Clubs peptide landing pages.

The Wolverine Stack and KLOW Stack pages are the source-of-truth templates for design, mobile behavior, background media, sticky CTA, lead form flow, local Denver/Greenwood Village positioning, FAQ, structured data, compliance language, SEO/GEO, and AI-search optimization.

## Developer Handoff

Billy/dev team can edit this two ways:

1. **Source edits:** update the Astro files in `src/pages`, `src/components`, and `src/styles`, then run `npm run build`.
2. **WordPress/WP Engine publishing:** use the paste-kit files in `wordpress/` and paste them into a WordPress Custom HTML block or code widget.

The paste-kit files are editable HTML/CSS/JS handoff files. They are not locked images or screenshots.

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

## WordPress Export

The WordPress-ready paste files are:

```text
wordpress/wolverine-stack-wordpress-paste.html
wordpress/klow-stack-wordpress-paste.html
wordpress/glow-stack-wordpress-paste.html
```

Create a WordPress page with the matching slug, add a Custom HTML block, and paste the full file contents.

Recommended slugs:

- `wolverine-stack-greenwood-village`
- `klow-stack-greenwood-village`
- `glow-stack-greenwood-village`

## Next Pages To Build

- Recovery Peptide Blend / Structural Repair Stack
- GLP-1 Support Stack
- BPC-157
- TB-500
- KPV
- MOTS-c
- Epitalon
- Semax
- Delta Sleep / DSIP
