# Eden Peptide Landing Pages

Astro source and WordPress paste exports for Eden Health Club peptide landing pages.

The Wolverine Stack page is the source-of-truth template for design, mobile behavior, background media, sticky CTA, lead form flow, local Denver/Greenwood Village positioning, FAQ, structured data, and compliance language.

## Quick Start

```bash
npm install
npm run dev
```

Then open:

```text
http://127.0.0.1:4321/wolverine-stack-greenwood-village/
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
2. Use the Wolverine Stack page as the conversion/design template.
3. Export WordPress-ready HTML paste files when needed.
4. Keep publishing actions draft-first and explicit.

## Current Pages

- `/` shows the LP system dashboard.
- `/wolverine-stack-greenwood-village/` is the current production-style peptide LP.

## WordPress Export

The WordPress-ready paste file is:

```text
wordpress/wolverine-stack-wordpress-paste.html
```

Create a WordPress page with slug `wolverine-stack-greenwood-village`, add a Custom HTML block, and paste the full file contents.

## Next Pages To Build

- Warrior Stack
- KLOW Stack
- GLOW Stack
- BPC-157
- TB-500
- KPV
- MOTS-c
- Epitalon
- Semax
- Delta Sleep / DSIP
