# Billy GHL Forms Handoff

Short answer: create one dedicated GHL form for the peptide pages if the GHL builder is available. If the form must go live immediately, use the existing Integrative Medicine form because it already feeds the right 14-day workflow.

## Dedicated Peptide Form To Create In GHL

GHL's public Forms API currently exposes form reads/submissions, not native form creation, so this needs to be created or cloned inside the GHL UI:

`Sites -> Forms -> Builder -> Add Form`

If the form list loads, the fastest version is to duplicate `Integrative Medicine LP Form`, rename the duplicate, then edit the fields/style below. That preserves the working GHL form behavior and reduces setup risk.

### Exact Build Steps

1. In GHL, switch to the Eden Health International location.
2. Go to `Sites -> Forms -> Builder`.
3. Click `Add Form`, or duplicate `Integrative Medicine LP Form` if duplication is available.
4. Rename the form to `Peptide Therapy Consultation Form`.
5. Add/edit the visible fields in the order below.
6. Add hidden fields/custom fields for source attribution if the builder allows it.
7. Set the submit button to `Request Consultation`.
8. Set the post-submit action to either thank-you message or redirect to the peptide booking/calendar page.
9. Save and publish the form.
10. Click share/embed and copy the inline embed code.
11. Add this new form to the existing `Integrative Medicine: Full 14-Day Sequence` workflow trigger.
12. Submit one test lead from staging and confirm the workflow fires.

Recommended setup:

- Form name: `Peptide Therapy Consultation Form`
- Submit button: `Request Consultation`
- Workflow to connect: `Integrative Medicine: Full 14-Day Sequence`
- Workflow trigger: `Form Submitted -> Peptide Therapy Consultation Form`
- Lead tags in workflow: `Peptide Therapy`, `Peptide Lead`, `Website Lead`, `Functional Medicine`
- Goal: all peptide-page leads go to the same consult/bloodwork intake sequence first, then staff qualifies the exact protocol.

Visible fields:

- `First Name`
- `Last Name`
- `Phone` required
- `Email` required
- `Services Interested In` dropdown or multi-select
- `Goal / Reason for Inquiry` large text field
- SMS consent checkbox using Eden's existing A2P-approved consent language

Suggested copy:

- Form headline: `Start with a Peptide Consultation`
- Form intro: `Tell us what you're hoping to improve. Eden will follow up about consultation and bloodwork when appropriate.`
- Goal field label: `Goal / Reason for Inquiry`
- Goal placeholder: `Tell us what you're hoping to address, what page brought you here, or which peptide protocol you're curious about.`
- Submit button: `Request Consultation`
- Thank-you message: `Thanks — Eden will be in touch within one business day. If you'd like to book now, use the consultation link on this page.`

Recommended `Services Interested In` options:

- `Peptide Therapy / Not Sure`
- `Tesamorelin`
- `BPC-157`
- `Sermorelin`
- `NAD+`
- `The Skin & Glow`
- `Wolverine Stack`
- `KLOW Stack`
- `GLOW Stack`
- `CJC-1295 / Ipamorelin`
- `Structural Repair Stack`
- `GLP-1 Support Stack`
- `Other`

Hidden/custom fields to add if practical:

- `contact source` = `Peptide Landing Pages`
- `form name` = `Peptide Therapy Consultation Form`
- `Services Interested In`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `gclid capture`
- `FBCLID`

Suggested mobile styling:

- Single-column layout only
- Field height at least 48px
- Label/body font at least 16px
- Full-width submit button
- Button color: Eden forest green or gold if available in the builder
- Avoid two-column fields because these pages are mostly iPhone traffic
- Embed iframe height: start at `860px`; reduce only after testing on iPhone widths
- Replace any legacy/privacy links that point to another brand/domain with Eden's current Privacy Policy and Terms URLs before launch.

### Workflow Wiring

Use the existing workflow first:

- Workflow name: `Integrative Medicine: Full 14-Day Sequence`
- Workflow ID: `672c856a-bafe-47a2-9c7f-d23b071127a8`
- Workflow URL: `https://app.gohighlevel.com/location/PDPqf43omVZVvrp4sHkf/workflow/672c856a-bafe-47a2-9c7f-d23b071127a8`

In the workflow:

1. Open the first trigger: `Form Submitted`.
2. Keep `Integrative Medicine LP Form` selected.
3. Add `Peptide Therapy Consultation Form` as an additional allowed form.
4. Add a workflow step near the top if not already present: `Add Tags`.
5. Add tags: `Peptide Therapy`, `Peptide Lead`, `Website Lead`, `Functional Medicine`.
6. Save and publish.

Do not remove the existing Integrative Medicine form from the trigger. This new peptide form should be added alongside it.

Once created, Billy should replace `[NEW_FORM_ID]` below with the GHL form ID.

```html
<iframe
  src="https://api.leadconnectorhq.com/widget/form/[NEW_FORM_ID]?contact_source=Peptide%20Landing%20Pages&form_name=Peptide%20Therapy%20Consultation%20Form"
  style="width:100%;height:860px;border:none;border-radius:8px"
  id="inline-[NEW_FORM_ID]"
  data-layout='{"id":"INLINE"}'
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Peptide Therapy Consultation Form"
  data-height="860"
  data-layout-iframe-id="inline-[NEW_FORM_ID]"
  data-form-id="[NEW_FORM_ID]"
  title="Peptide Therapy Consultation Form"
></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

After the new form is created, the standalone form URL will be:

```text
https://api.leadconnectorhq.com/widget/form/[NEW_FORM_ID]
```

## Current Working Fallback Form

## Recommended First Launch Setup

Use the existing `Integrative Medicine LP Form` for all peptide landing pages at launch.

- GHL form name: `Integrative Medicine LP Form`
- GHL form ID: `9BUDLFhLIUhPoauueXfX`
- Direct URL: `https://api.leadconnectorhq.com/widget/form/9BUDLFhLIUhPoauueXfX`
- Recommended workflow: `Integrative Medicine: Full 14-Day Sequence`
- Workflow status: published
- Reason: peptide leads are functionally closer to integrative/functional medicine intake than med spa-only intake, and Matt wants these leads routed toward consultation and bloodwork when appropriate.

Mobile-friendly embed code:

```html
<iframe
  src="https://api.leadconnectorhq.com/widget/form/9BUDLFhLIUhPoauueXfX?contact_source=Peptide%20Landing%20Pages&form_name=Peptide%20Therapy%20Consultation%20Form"
  style="width:100%;height:820px;border:none;border-radius:8px"
  id="inline-9BUDLFhLIUhPoauueXfX"
  data-layout='{"id":"INLINE"}'
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Integrative Medicine LP Form"
  data-height="820"
  data-layout-iframe-id="inline-9BUDLFhLIUhPoauueXfX"
  data-form-id="9BUDLFhLIUhPoauueXfX"
  title="Integrative Medicine LP Form"
></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

Place the iframe inside the existing `Start with a Consultation` section on each page. Keep the surrounding Eden copy, heading, sticky CTA behavior, and mobile spacing.

For page-specific attribution, Billy can append a `service` query value in the iframe `src` per page, for example:

```text
&service=Tesamorelin
&service=BPC-157
&service=Peptide%20Therapy%20Hub
```

If GHL hidden fields are present with matching names, GHL can populate them. Even without hidden fields, GHL form submissions typically retain the submitted page URL in event data, which allows filtering/tagging by peptide page path.

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
