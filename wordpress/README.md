# WordPress Paste Kit

Use `wolverine-stack-wordpress-paste.html` when you want the Wolverine Stack page to be a copy/paste handoff for WordPress.

## How to publish

1. In WordPress, create a new page with slug `wolverine-stack-greenwood-village`.
2. Add a `Custom HTML` block, or the equivalent HTML/code widget in the page builder.
3. Paste the full contents of `wolverine-stack-wordpress-paste.html`.
4. In GoHighLevel, go to `Settings -> External Tracking` and copy the tracking script.
5. Paste that GHL tracking script into the marked spot in the HTML, or install it globally before `</body>` in WordPress.
6. Publish the page and submit one test lead.
7. In GHL, check `Sites -> Forms -> Submissions -> External Forms`.

## GHL trigger

Use either:

- External form name: `Wolverine Stack Denver Lead Form`
- Page path: `/wolverine-stack-greenwood-village`

The form also includes UTMs, GCLID, FBCLID, source URL, service, and lead source fields.
