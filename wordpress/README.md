# WordPress Paste Kit

Use these files when you want a copy/paste handoff for WordPress:

- `wolverine-stack-wordpress-paste.html`
- `klow-stack-wordpress-paste.html`
- `glow-stack-wordpress-paste.html`
- `structural-repair-stack-wordpress-paste.html`

## How to publish

1. In WordPress, create a new page with the matching slug.
2. Add a `Custom HTML` block, or the equivalent HTML/code widget in the page builder.
3. Paste the full contents of the matching paste-kit HTML file.
4. In GoHighLevel, go to `Settings -> External Tracking` and copy the tracking script.
5. Paste that GHL tracking script into the marked spot in the HTML, or install it globally before `</body>` in WordPress.
6. Publish the page and submit one test lead.
7. In GHL, check `Sites -> Forms -> Submissions -> External Forms`.

## GHL trigger

Use either:

- External form name matching the page, such as `Wolverine Stack Denver Lead Form`, `KLOW Stack Denver Lead Form`, `GLOW Stack Denver Lead Form`, or `Structural Repair Stack Denver Lead Form`
- Page path matching the slug, such as `/wolverine-stack-greenwood-village`, `/klow-stack-greenwood-village`, `/glow-stack-greenwood-village`, or `/structural-repair-stack-greenwood-village`

The form also includes UTMs, GCLID, FBCLID, source URL, service, and lead source fields.
