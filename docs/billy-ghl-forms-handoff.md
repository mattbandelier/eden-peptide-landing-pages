# Billy GHL Forms Handoff

Short answer: do **not** rebuild these as embedded GHL iframe forms unless absolutely necessary.

The pages already include native Eden-styled forms that match the landing page design, mobile spacing, attribution fields, and conversion flow. The best WordPress launch path is to keep those native forms and connect them to GoHighLevel through External Tracking or a server-side proxy.

## Recommended Path: Native Eden Form + GHL External Tracking

Use this first.

1. Keep the native form inside each WordPress page / paste-kit file.
2. Install the GHL External Tracking script globally in WordPress, ideally through WP Engine/theme/header-footer injection.
3. Submit one test lead from staging.
4. In GHL, check `Sites -> Forms -> Submissions -> External Forms`.
5. Build workflows triggered by exact external form name or page path.

Why this is best:

- Keeps the premium Eden design intact.
- Avoids GHL iframe styling limitations.
- Keeps the sticky mobile CTA and iPhone layout clean.
- Preserves UTMs, GCLID, FBCLID, referrer, source URL, landing page, service interest, and goal field.
- Allows one consistent lead-capture pattern across all peptide LPs.

## Fallback Path: WordPress Server-Side Proxy

Use this if GHL External Tracking does not reliably capture the forms on staging.

Billy can create a small WordPress REST endpoint that accepts the native form submission and forwards it to GHL Contacts Upsert using a private server-side token.

Important: never put the GHL Private Integration Token in browser JavaScript, a WordPress Custom HTML block, or the public repo.

## Avoid Unless Necessary: Embedded GHL Form/Iframe

Only use embedded GHL forms if Eden decides speed matters more than design/control.

Downsides:

- Harder to match Eden's premium LP design.
- Can create mobile layout issues.
- Often weaker for conversion tracking and UX.
- More likely to feel like a generic med spa lead form.

## Native Form Fields Already Included

Visible fields:

- `name`
- `email`
- `phone`
- `goal`

Hidden / attribution fields:

- `service`
- `page`
- `leadSource`
- `externalFormName`
- `landingPage`
- `referrer`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `gclid`
- `fbclid`

The JavaScript also sends:

- `sourceUrl`
- `firstTouch`
- `lastTouch`
- `submittedAt`

## First Batch Form Names

Use these exact names for GHL workflow filters:

- `Peptide Therapy Denver Lead Form`
- `Tesamorelin Denver Lead Form`
- `BPC-157 Denver Lead Form`
- `Sermorelin Denver Lead Form`
- `NAD+ Denver Lead Form`
- `The Skin and Glow Denver Lead Form`
- `Wolverine Stack Denver Lead Form`
- `KLOW Stack Denver Lead Form`
- `GLP-1 Support Stack Denver Lead Form`

## Suggested First Batch Workflow Tags

For every lead:

- `website-lead`
- `peptide-lead`
- `denver-area`

Add one service-specific tag:

- `peptide-therapy`
- `tesamorelin`
- `bpc-157`
- `sermorelin`
- `nad-plus`
- `skin-and-glow`
- `wolverine-stack`
- `klow-stack`
- `glp-1-support`

## Suggested Workflow Steps

1. Trigger: external form submitted, filtered by exact form name or page path.
2. Add tags.
3. Create/update contact.
4. Create opportunity in Eden peptide / functional medicine pipeline.
5. Assign to clinical intake owner.
6. Send internal notification to intake.
7. Send approved confirmation SMS/email.
8. Wait 10-15 minutes.
9. If no booking yet, send booking follow-up.
10. Add to the matching peptide nurture sequence.

## Staging Test Checklist

Before publishing:

- Submit a test lead from each first-batch page.
- Confirm contact appears in GHL.
- Confirm form name is captured.
- Confirm `service`, `page`, `goal`, UTMs, GCLID/FBCLID, and referrer are captured.
- Confirm the correct workflow fires.
- Confirm the confirmation message is compliant.
- Confirm mobile layout still looks clean after any WordPress/GHL script injection.

