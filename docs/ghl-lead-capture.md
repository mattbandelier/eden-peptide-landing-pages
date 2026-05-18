# GHL Lead Capture Setup

The Wolverine Stack landing page now submits leads through `/api/ghl-lead`.

For WordPress publishing, do not replace the Eden-styled form with an iframe unless you absolutely have to. HighLevel's current External Tracking feature supports normal HTML forms on WordPress and custom pages, and it can automatically create/update contacts from those submissions when its tracking script is installed.

## What The Form Captures

- Name
- Email
- Phone
- Goal / reason for inquiry
- Service interest: Wolverine Stack
- Lead source: Wolverine Stack Denver Landing Page
- External form name: Wolverine Stack Denver Lead Form
- Source URL
- Landing page URL
- Referrer
- UTM source, medium, campaign, term, content
- GCLID
- FBCLID
- First-touch attribution from local storage
- Last-touch attribution from the current/latest campaign visit

## GHL Contact Behavior

The API endpoint upserts a contact in HighLevel using:

- `GHL_PRIVATE_INTEGRATION_TOKEN`
- `GHL_LOCATION_ID`
- `/contacts/upsert`

It adds these tags by default:

- Website Lead
- Wolverine Stack
- Peptide Therapy
- Denver LP
- Wolverine Stack LP Lead

Use `Wolverine Stack LP Lead` as the native GHL workflow trigger tag.

## Best WordPress Setup

Use both layers below when possible:

1. Install HighLevel External Tracking globally in WordPress.
2. Keep the Eden-styled HTML form on the page.
3. If the Astro/API version is hosted somewhere later, keep `/api/ghl-lead` active as the direct GHL backup.

In GHL:

1. Go to `Settings -> External Tracking`.
2. Click `Copy Script`.
3. Add that script before the closing `</body>` tag in WordPress, ideally through the theme, header/footer settings, or the site's code-injection tool.
4. Submit a test lead on the live page.
5. In GHL, check `Sites -> Forms -> Submissions -> External Forms`.
6. Create a workflow with trigger `Form Submitted` or `Contact Created`, filtered by page path `/wolverine-stack-greenwood-village` or external form name `Wolverine Stack Denver Lead Form`.

HighLevel's own docs say External Tracking works with valid DOM forms, including WordPress forms and custom HTML forms, as long as fields have `name` attributes and an email field is present. This page now meets those requirements.

## Required Environment Variables

```text
GHL_API_BASE_URL=https://services.leadconnectorhq.com
GHL_PRIVATE_INTEGRATION_TOKEN=
GHL_LOCATION_ID=PDPqf43omVZVvrp4sHkf
GHL_API_VERSION=2021-07-28
GHL_LEAD_TAGS=Website Lead,Wolverine Stack,Peptide Therapy,Denver LP,Wolverine Stack LP Lead
GHL_LEAD_SOURCE=Wolverine Stack Denver Landing Page
```

If you want the Astro-hosted version to include the External Tracking script automatically, also add:

```text
PUBLIC_GHL_EXTERNAL_TRACKING_SRC=
PUBLIC_GHL_EXTERNAL_TRACKING_ID=
```

Copy those values from the GHL External Tracking script. The script usually looks similar to:

```html
<script src="https://link.yourdomain.com/js/external-tracking.js" data-tracking-id="tk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"></script>
```

## Optional Custom Fields

Only add these after the matching custom fields exist in GHL. If they are blank, the endpoint stores the data in the contact note instead.

```text
GHL_CF_SERVICE_INTEREST=
GHL_CF_LEAD_GOAL=
GHL_CF_SOURCE_URL=
GHL_CF_LANDING_PAGE=
GHL_CF_REFERRER=
GHL_CF_UTM_SOURCE=
GHL_CF_UTM_MEDIUM=
GHL_CF_UTM_CAMPAIGN=
GHL_CF_UTM_TERM=
GHL_CF_UTM_CONTENT=
GHL_CF_GCLID=
GHL_CF_FBCLID=
```

## Recommended GHL Workflow

Preferred trigger for the direct API path:
Contact tag added: `Wolverine Stack LP Lead`

Preferred trigger for the WordPress External Tracking path:
Form submitted, filtered by external form name `Wolverine Stack Denver Lead Form` or page path `/wolverine-stack-greenwood-village`.

Suggested steps:

1. Create internal notification to Eden care team.
2. Send immediate confirmation SMS/email if consent language is approved.
3. Assign lead owner.
4. Create opportunity in the peptide pipeline.
5. Wait 10 minutes, then send booking nudge if no appointment is booked.
6. If no response after 24 hours, send second follow-up.
7. If no response after 72 hours, move to nurture.

## Tracking Events

On successful form submit, the browser pushes:

- `dataLayer` event: `lead_submit`
- `gtag` event: `generate_lead`, if `gtag` exists
- Meta event: `Lead`, if `fbq` exists

This means Google Tag Manager, GA4, and Meta Pixel can listen without changing the form code.
