# Billy GHL Forms Handoff

Short answer: if Eden already has a GHL embedded form that triggers the correct workflow, use that for the fastest first launch. The native Eden form path is still the better long-term design/control path.

## Recommended First Launch Setup

Use the existing `Integrative Medicine LP Form` for all peptide landing pages at launch.

- GHL form name: `Integrative Medicine LP Form`
- GHL form ID: `9BUDLFhLIUhPoauueXfX`
- Recommended workflow: `Integrative Medicine: Full 14-Day Sequence`
- Workflow status: published
- Reason: peptide leads are functionally closer to integrative/functional medicine intake than med spa-only intake, and Matt wants these leads routed toward consultation and bloodwork when appropriate.

Embed code:

```html
<iframe
  src="https://api.leadconnectorhq.com/widget/form/9BUDLFhLIUhPoauueXfX"
  style="width:100%;height:100%;border:none;border-radius:8px"
  id="inline-9BUDLFhLIUhPoauueXfX"
  data-layout='{"id":"INLINE"}'
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Integrative Medicine LP Form"
  data-height="760"
  data-layout-iframe-id="inline-9BUDLFhLIUhPoauueXfX"
  data-form-id="9BUDLFhLIUhPoauueXfX"
  title="Integrative Medicine LP Form"
></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

Place the iframe inside the existing `Start with a Consultation` section on each page. Keep the surrounding Eden copy, heading, sticky CTA behavior, and mobile spacing.

## A2P / SMS Note

A2P is the approved SMS/compliance lane, not the visual form itself. Keep using the A2P-approved sending setup for follow-up texts. The landing page form just needs to enter the same GHL contact/workflow system that already sends through Eden's approved SMS setup.

## Page Attribution

Using one form for all pages is the fastest launch path, but it makes attribution more important.

Billy should preserve page-level tracking in one of these ways:

1. Preferred: add a hidden field or custom field mapping for `Services Interested In`, `contact source`, or `form name` based on the page/service.
2. Good fallback: use workflow conditions or tags based on the landing page URL, if GHL captures it from the embed.
3. Minimum viable launch: all peptide pages use the same form/workflow and the team qualifies the exact peptide interest during intake.

Existing helpful GHL custom fields found:

- `Services Interested In` / `contact.services_interested_in`
- `contact source` / `contact.contact_source`
- `form name` / `contact.form_name`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- `gclid capture`
- `FBCLID`

For launch, tag all submissions from these pages as:

- `Peptide Therapy`
- `Peptide Lead`
- `Website Lead`
- `Functional Medicine`

The pages already include native Eden-styled forms that match the landing page design, mobile spacing, attribution fields, and conversion flow. The best WordPress launch path is to keep those native forms and connect them to GoHighLevel through External Tracking or a server-side proxy.

## Fastest Path: Existing GHL Embedded Form

Use this if Eden's current GHL form is already working and already triggers the intake workflow.

1. Billy can replace the native `<LeadForm>` / rendered `<form class="lead-form">` area in each WordPress page with Eden's existing GHL embed code.
2. Keep the surrounding section copy, heading, spacing, and sticky CTA behavior.
3. Add a page-specific hidden field or source value if the GHL form supports it, or create a URL/query/source rule in GHL so leads can be tagged by page.
4. Submit a test lead from each first-batch page.
5. Confirm the existing workflow fires.

Why this may be best for first launch:

- Eden already knows this model works.
- The form goes straight into GHL.
- Existing workflows can keep working.
- Fastest way to get the pages live.

Tradeoff:

- The embedded GHL form may not perfectly match the premium Eden page design.
- Iframe styling can be limited.
- Mobile spacing must be checked carefully after embed.
- Page-specific attribution may need hidden fields, URL parameters, or workflow conditions.

## Best Long-Term Path: Native Eden Form + GHL External Tracking

Use this when Billy wants the page design and attribution to stay fully native.

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

## If Using GHL Embed Forms

Ask Billy to confirm these items:

- Does the embedded form collect name, email, phone, and goal/reason?
- Can the form pass page-specific service interest?
- Can the workflow tag leads by page or service?
- Can UTMs, GCLID, FBCLID, referrer, and landing page still be captured?
- Does the iframe fit cleanly on iPhone widths without hiding submit buttons?
- Does the sticky CTA hide or avoid covering the embedded form?

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
