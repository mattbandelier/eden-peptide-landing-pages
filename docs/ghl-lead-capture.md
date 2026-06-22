# GHL Lead Capture Setup

The Astro preview pages submit leads through `/api/ghl-lead`. That endpoint works when the Astro app is hosted with server/API support and either `GHL_WEBHOOK_URL` or the direct LeadConnector API variables are configured.

For WordPress publishing on Eden's current site, do not replace the Eden-styled form with an iframe unless you absolutely have to. The recommended launch path is HighLevel External Tracking on the native HTML forms. It can capture standard WordPress/custom HTML forms and trigger workflows by external form name or page path when its tracking script is installed.

## What The Form Captures

- Name
- Email
- Phone
- Goal / reason for inquiry
- Service interest: page-specific service name
- Lead source: page-specific Denver landing page
- External form name: page-specific form name, such as `Structural Repair Stack Denver Lead Form`
- Source URL
- Landing page URL
- Referrer
- UTM source, medium, campaign, term, content
- GCLID
- FBCLID
- First-touch attribution from local storage
- Last-touch attribution from the current/latest campaign visit

## GHL Contact Behavior

The Astro API endpoint first sends the full lead payload to `GHL_WEBHOOK_URL` when that variable exists in Vercel. This is the preferred path for the landing-page domain because the HighLevel workflow can own routing, notifications, pipeline stage, and follow-up.

If no webhook is configured, the endpoint falls back to upserting a contact in HighLevel using:

- `GHL_PRIVATE_INTEGRATION_TOKEN`
- `GHL_LOCATION_ID`
- `/contacts/upsert`

It adds fallback tags by default:

- Website Lead
- Eden Landing Page

For WordPress publishing, use the External Form Submitted trigger instead of relying on this Astro API tag.

## Best WordPress Setup

Use this path first:

1. Install HighLevel External Tracking globally in WordPress.
2. Keep the Eden-styled HTML form on the page.
3. Trigger workflows by external form name or page path.
4. If Billy later hosts the Astro/API version or builds a WordPress server-side proxy, keep `/api/ghl-lead` or the proxy active as the direct GHL backup.

In GHL:

1. Go to `Settings -> External Tracking`.
2. Click `Copy Script`.
3. Add that script before the closing `</body>` tag in WordPress, ideally through the theme, header/footer settings, or the site's code-injection tool.
4. Submit a test lead on the live page.
5. In GHL, check `Sites -> Forms -> Submissions -> External Forms`.
6. Create a workflow with trigger `Form Submitted` or `Contact Created`, filtered by the page path or the matching external form name.

HighLevel External Tracking works with valid DOM forms, including WordPress forms and custom HTML forms, as long as fields have `name` attributes and an email field is present. These pages meet those requirements.

## Required Environment Variables

```text
GHL_API_BASE_URL=https://services.leadconnectorhq.com
GHL_WEBHOOK_URL=
GHL_PRIVATE_INTEGRATION_TOKEN=
GHL_LOCATION_ID=PDPqf43omVZVvrp4sHkf
GHL_API_VERSION=2021-07-28
GHL_LEAD_TAGS=Website Lead,Eden Landing Page
GHL_LEAD_SOURCE=Eden Landing Page
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

Preferred trigger for the direct Astro/API path:
Contact tag added: `Wolverine Stack LP Lead`

Preferred trigger for the WordPress External Tracking path:
Form submitted, filtered by the exact external form name or page path.

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
