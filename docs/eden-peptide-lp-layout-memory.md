# Eden Peptide Landing Page Layout Memory

Use this as the saved pattern for future Eden peptide landing pages.

Last locked standard: May 19, 2026 after Wolverine + KLOW build, mobile audit, SEO/GEO/AIO pass, and WordPress paste-kit export.

## Core Direction

Build each page as a conversion-first, local SEO landing page for Eden Health Club in Greenwood Village, serving Denver, DTC, Cherry Hills Village, Centennial, Englewood, Littleton, and the south Denver metro.

Brand language:
Use "club," "health club," "medical wellness club," "wellness destination," and "Eden Health Club" for consumer-facing brand language. Keep "clinical consultation," "clinical team," "licensed provider," and "medical director oversight" where medical accuracy matters. Avoid making Eden sound like a generic clinic unless the sentence needs medical trust or compliance context.

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
   - On mobile, show the primary consult CTA in the hero and hide the secondary CTA to reduce friction.

2. Proof Band
   - Four short trust points.
   - Example: `Clinician-guided`, `Medical director oversight`, `Denver + Greenwood Village`, `Licensed pharmacy fulfillment`.

3. Local SEO Band
   - One concise paragraph naming Greenwood Village, Denver Tech Center, Denver, Cherry Hills, Centennial, Englewood, Littleton.

4. Quick Answer / AI Search Section
   - Add a visible "Quick answer" section immediately after the Local SEO Band.
   - H2 should answer: `What is [SERVICE] peptide therapy at Eden?`
   - First paragraph should be direct, factual, and quotable by Google/AI search.
   - Include service name, Eden Health Clubs, Greenwood Village, Denver/south metro, ingredients/components, primary outcomes, clinician-guided care, and medical director oversight.
   - Include 3 bullets:
     - `Location:` Greenwood Village + Denver/DTC/south metro.
     - `Best fit:` the target audience for the service.
     - `Care model:` Eden medical wellness club consult, licensed provider review, pharmacy fulfillment when prescribed.

5. Lead Copy Section
   - Emotion-first problem framing.
   - Explain stack/peptide simply.
   - Position Eden as consult-first and clinician-guided with medical director oversight.

6. Local Service Area Section
   - Emphasize Eden location and convenience.
   - Reinforce this is not a faceless shipment.

7. Who It Is For
   - Five bullets for the ICP.
   - Include a note box about the cost of waiting.

8. Ingredients / What's In It
   - Cards for each peptide or component.
   - Compliant language: `studied for its role in supporting...`
   - No disease-treatment promises.

9. How It Works
   - Numbered 1-5 process.
   - Consultation, protocol design, pharmacy fulfillment, onboarding, follow-up.

10. Why Eden
   - Local, discreet, premium, clinician-guided, medical director oversight, U.S. licensed compounding pharmacy fulfillment.
   - Include a large-tap-target related-service chip grid after the Why Eden bullets.
   - Related service chips should usually include Functional Medicine, Peptide Injections, Wellness Injections, Fitness + Performance, and any page-specific cross-sell that already exists.

11. Pricing
   - Lead with consultation unless pricing is confirmed.
   - Copy angle: `Know the right protocol before you pay for the wrong one.`

12. Demand Signals / Social Proof
   - Use testimonials if approved.
   - If not, use demand-signal copy without implying patient outcomes.

13. FAQ
   - FDA status.
   - Legal/prescription framing.
   - Administration route.
   - Expected timeframe if approved by Eden.
   - Stacking with GLP-1/TRT/other peptides.
   - Location.
   - Denver service area.

14. Consult Section
   - H2: strong emotional CTA.
   - Short paragraph.
   - Limited weekly availability microcopy.
   - Eden-styled lead form.

15. Legal Footer
   - FDA disclaimer.
   - Educational information disclaimer.
   - Eligibility determined during clinical consultation.

16. Sticky Bottom CTA Bar
   - Phone: `tel:+17206057678`
   - Email: `care@edenhealthclubs.com`
   - Consult anchor: `#consult`
   - Mobile-first, pill style, Eden green with sage consult segment.
   - Must respect iOS safe area.
   - Hide when the consult form is in view so it never covers fields or submit button.

## Mobile / Conversion Standard

Treat mobile as the primary experience. Most campaign traffic is expected to come from mobile.

QA every new page at:

- 375 x 667, iPhone SE narrow.
- 393 x 852, iPhone 15/17-style baseline.
- 430 x 932, Pro Max-style large iPhone.

Acceptance criteria:

- No horizontal overflow.
- No undersized tap targets; all actionable links, buttons, form controls, and FAQ summaries should be at least 44px high/wide.
- Sticky CTA should be about 64px+ high and use `env(safe-area-inset-bottom)`.
- Hero should not fully trap the first viewport; trust/proof strip should peek below the fold.
- H1 must fit cleanly without overlap at 375px.
- Primary consult CTA must appear in the mobile hero.
- Secondary hero CTA may be hidden on mobile to reduce clutter.
- Inputs should be full-width, at least 48px high, and use mobile-friendly autocomplete/input modes.
- Internal links inside dense copy should become large chips/buttons on mobile, not tiny inline text links.

Current local audit script:

- `scripts/mobile-audit.mjs`
- It checks 375, 393, and 430 widths for overflow, hero/proof geometry, sticky CTA height, H1 dimensions, and tap-target failures.

## SEO / GEO / AI Search Standard

Every page should include:

- Unique SEO title.
- Unique meta description.
- Canonical URL.
- Open Graph and Twitter card metadata.
- `viewport-fit=cover`.
- One and only one H1.
- Local service-area copy using Greenwood Village, Denver, Denver Tech Center/DTC, Cherry Hills Village, Centennial, Englewood, Littleton, and south Denver metro where natural.
- Visible Quick Answer section for AI search and answer engines.
- FAQ section with concise, non-hype answers.
- Related-service chip grid with large tap targets.

Schema graph should include:

- `MedicalBusiness` + `HealthClub` for Eden Health Clubs.
- `WebPage`.
- `Service`.
- `BreadcrumbList`.
- `FAQPage`.

Schema should reuse Eden's NAP:

- Name: Eden Health Clubs.
- Phone: `+1-720-605-7678`.
- Address: `5990 S University Blvd, Greenwood Village, CO 80121`.
- Area served: Denver, Greenwood Village, Denver Tech Center, Cherry Hills Village, Centennial, Englewood, Littleton.

AI-search writing rules:

- Use direct answer-first paragraphs.
- Define the stack/peptide plainly in the first 1-2 sentences.
- Include the exact ingredients/components in visible copy.
- State the care model clearly: clinician-guided, licensed provider review, medical director oversight, pharmacy fulfillment when prescribed.
- Avoid vague luxury copy in answer-first sections; save emotional copy for lead/problem sections.
- Never include public dosing, route, frequency, or cycle length unless specifically approved.

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
- `when prescribed by a licensed medical provider`
- `clinician-guided`
- `medical director oversight`

Avoid:

- `heals`
- `cures`
- `treats`
- `reverses`
- guaranteed outcomes
- claims that peptides are FDA-approved if they are not
- disease-treatment claims

## Current Reference Page

Use Wolverine Stack and KLOW Stack as the source layout family:

- Local URL: `/wolverine-stack-greenwood-village/`
- WordPress paste kit: `wordpress/wolverine-stack-wordpress-paste.html`
- Form name: `Wolverine Stack Denver Lead Form`
- Local URL: `/klow-stack-greenwood-village/`
- WordPress paste kit: `wordpress/klow-stack-wordpress-paste.html`
- Form name: `KLOW Stack Denver Lead Form`
- Local URL: `/glow-stack-greenwood-village/`
- WordPress paste kit: `wordpress/glow-stack-wordpress-paste.html`
- Form name: `GLOW Stack Denver Lead Form`
- Local URL: `/structural-repair-stack-greenwood-village/`
- WordPress paste kit: `wordpress/structural-repair-stack-wordpress-paste.html`
- Form name: `Structural Repair Stack Denver Lead Form`
