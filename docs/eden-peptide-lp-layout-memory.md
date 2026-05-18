# Eden Peptide Landing Page Layout Memory

Use this as the saved pattern for future Eden peptide landing pages.

## Core Direction

Build each page as a conversion-first, local SEO landing page for Eden Health Club in Greenwood Village, serving Denver, DTC, Cherry Hills Village, Centennial, Englewood, Littleton, and the south Denver metro.

Primary ICP:
40-50 year old suburban / urban Denver-area adults who are active, image-conscious, performance-minded, and willing to pay for clinician-guided wellness care.

Tone:
Premium, emotionally resonant, medically cautious, local, discreet, and direct. Use urgency and FOMO around limited consult availability and the cost of waiting, but avoid disease-treatment claims or guaranteed outcomes.

## Page Structure

1. Hero
   - Full-bleed Eden video/photo background.
   - Transparent Eden logo in top navigation.
   - Localized eyebrow: `[SERVICE] in Denver`.
   - H1 includes service/stack name + Denver.
   - Short emotional subhead.
   - Bullet box with what the user gets.
   - Primary CTA to `#consult`.
   - Secondary CTA to `#how-it-works`.

2. Proof Band
   - Four short trust points.
   - Example: `Physician-supervised`, `Pharmacy-compounded`, `Denver + Greenwood Village`, `Subcutaneous injection protocol`.

3. Local SEO Band
   - One concise paragraph naming Greenwood Village, Denver Tech Center, Denver, Cherry Hills, Centennial, Englewood, Littleton.

4. Lead Copy Section
   - Emotion-first problem framing.
   - Explain stack/peptide simply.
   - Position Eden as consult-first and physician-guided.

5. Local Service Area Section
   - Emphasize Eden location and convenience.
   - Reinforce this is not a faceless shipment.

6. Who It Is For
   - Five bullets for the ICP.
   - Include a note box about the cost of waiting.

7. Ingredients / What's In It
   - Cards for each peptide or component.
   - Compliant language: `studied for its role in supporting...`
   - No disease-treatment promises.

8. How It Works
   - Numbered 1-5 process.
   - Consultation, protocol design, pharmacy fulfillment, onboarding, follow-up.

9. Why Eden
   - Local, discreet, premium, physician oversight, U.S. licensed compounding pharmacy fulfillment.

10. Pricing
   - Lead with consultation unless pricing is confirmed.
   - Copy angle: `Know the right protocol before you pay for the wrong one.`

11. Demand Signals / Social Proof
   - Use testimonials if approved.
   - If not, use demand-signal copy without implying patient outcomes.

12. FAQ
   - FDA status.
   - Legal/prescription framing.
   - Administration route.
   - Expected timeframe if approved by Eden.
   - Stacking with GLP-1/TRT/other peptides.
   - Location.
   - Denver service area.

13. Consult Section
   - H2: strong emotional CTA.
   - Short paragraph.
   - Limited weekly availability microcopy.
   - Eden-styled lead form.

14. Legal Footer
   - FDA disclaimer.
   - Educational information disclaimer.
   - Eligibility determined during clinical consultation.

15. Sticky Bottom CTA Bar
   - Phone: `tel:+17206057678`
   - Email: `care@edenhealthclubs.com`
   - Consult anchor: `#consult`
   - Mobile-first, pill style, Eden green with sage consult segment.

## GHL Form Pattern

Use a styled native HTML form, not a GHL iframe, unless forced.

Form requirements:

- Name
- Email
- Phone
- Goal / reason for inquiry
- Hidden service
- Hidden page
- Hidden leadSource
- Hidden externalFormName
- Hidden landingPage
- Hidden referrer
- Hidden UTM source, medium, campaign, term, content
- Hidden GCLID
- Hidden FBCLID

For each page, form name should follow:

`[Service Name] Denver Lead Form`

GHL workflow trigger should use either:

- External form name equals `[Service Name] Denver Lead Form`
- Page path equals `/[slug]/`

## WordPress Publishing Pattern

Create a paste kit per page:

- Inline CSS
- Inline page HTML
- Inline schema
- Inline form attribution script
- Embedded transparent Eden logo if asset hosting is uncertain
- Marked spot for GHL External Tracking script

Developer instructions:

- Create WordPress page with exact slug.
- Paste full HTML into Custom HTML block or code widget.
- Ensure WordPress permits `<style>` and `<script>`.
- Add GHL External Tracking script globally before `</body>` or into marked spot.
- Publish and submit one test lead.
- Confirm in GHL `Sites -> Forms -> Submissions -> External Forms`.

## Compliance Rules

Use:

- `supports`
- `studied for its role in`
- `may be appropriate for`
- `eligibility is determined during consultation`
- `when prescribed`

Avoid:

- `heals`
- `cures`
- `treats`
- `reverses`
- guaranteed outcomes
- claims that peptides are FDA-approved if they are not
- disease-treatment claims

## Current Reference Page

Use Wolverine Stack as the source layout:

- Local URL: `/wolverine-stack-greenwood-village/`
- WordPress paste kit: `wordpress/wolverine-stack-wordpress-paste.html`
- Form name: `Wolverine Stack Denver Lead Form`
