# Eden Peptide LP Launch Workflow

This is the practical handoff path for Billy / WP Engine / WordPress / GoHighLevel.

## 1. GitHub handoff

Use GitHub as the source of truth for the landing page system.

- Astro source pages: `src/pages/`
- Shared styling: `src/styles/global.css`
- Shared form component: `src/components/LeadForm.astro`
- WordPress paste files: `wordpress/*-wordpress-paste.html`
- GHL setup: `docs/ghl-lead-capture.md`
- Billy-facing GHL forms answer: `docs/billy-ghl-forms-handoff.md`
- Build/export scripts: `scripts/`

Billy can either rebuild the pages natively in WordPress from the local previews or paste the exported HTML files into WordPress Custom HTML blocks.

## 2. WordPress publishing path

1. Create a new WordPress page for each slug.
2. Keep the slug exactly the same as the file name mapping in `wordpress/README.md`.
3. Add a Custom HTML block or builder HTML widget.
4. Paste the full contents of the matching `wordpress/*-wordpress-paste.html` file.
5. Keep the page as draft or staging until clinical/compliance review is complete.
6. Add internal links from Eden's peptide / functional medicine hub to the new page.
7. Once approved, publish and request indexing in Google Search Console.

## 3. Recommended GHL path

Use GoHighLevel External Tracking first. This is the cleanest path for native Eden-styled forms inside WordPress.

If the developer is asking whether to create visual GHL forms, send them `docs/billy-ghl-forms-handoff.md`. The short answer is to keep the native Eden forms and connect them to GHL, rather than replacing them with embedded GHL iframes.

1. In GHL, open `Settings -> External Tracking`.
2. Copy the External Tracking script.
3. Install it globally in WordPress through WP Engine/theme/header-footer injection, or paste it into the marked comment inside each paste-kit file.
4. In GHL, create a workflow trigger: `Form Submitted`.
5. Filter by exact external form name, for example `Structural Repair Stack Denver Lead Form`.
6. Add tags based on the form/page:
   - `website-lead`
   - `peptide-lead`
   - service-specific tag, for example `structural-repair-stack`
   - `denver-area`
7. Assign the lead to clinical intake.
8. Send internal notification.
9. Send approved confirmation SMS/email.
10. Add a 10-15 minute booking follow-up if the lead has not booked yet.
11. Add the contact to the matching peptide nurture sequence.

## 4. Optional webhook/server-side path

If Billy wants a server-to-server backup, use one of these:

- Host the Astro API endpoint `/api/ghl-lead` with the required `.env` variables.
- Build a small WordPress REST endpoint that receives the native form JSON and forwards it to GHL Contacts Upsert.
- Use a GHL inbound webhook if CORS and payload mapping are confirmed on staging.

Do not put the GHL Private Integration Token in browser JavaScript or a WordPress Custom HTML block.

## 5. Launch QA

Before publishing any page:

- Submit one test lead from staging.
- Confirm the lead appears in GHL.
- Confirm service interest, page, UTM fields, GCLID/FBCLID, and goal field are captured.
- Confirm the workflow fires.
- Confirm the confirmation message is compliant.
- Check the page on iPhone-width mobile.
- Confirm no public dosing, route, or frequency appears in patient-facing copy.
- Confirm KPV remains route-neutral.
