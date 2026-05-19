# Phase 1 Architecture — Per-LP Spec for Codex

> Five LPs. Each spec includes: page identity, hero, lead copy direction, ingredient cards (verbatim), FAQ specifics, form spec, schema notes, SEO notes, and internal links.
>
> **Visual + structural template:** `cjc-1295-ipamorelin-stack.html` (for stacks) and a "solo card" variant of the same template for the 4 individual peptide LPs. Codex: clone, then content-swap.
>
> **Solo card layout note:** for individual peptide LPs, change the `.ingredient-grid` to a single centered card with `max-width: 560px` and `margin: 28px auto 0`. Use the `.ingredient-card.solo` style from the individual-peptide-template.html in this folder.

---

# LP 1 — Tesamorelin

## Identity

| Field | Value |
|---|---|
| Service | Tesamorelin |
| Type | Individual peptide LP (single ingredient) |
| Slug | `/tesamorelin-greenwood-village` |
| SEO Title | `Tesamorelin in Greenwood Village | FDA-Approved Visceral Fat Peptide, Denver` |
| Meta Description | `Tesamorelin at Eden Health Clubs — FDA-approved peptide therapy for visceral fat reduction and IGF-1 support, physician-prescribed in Greenwood Village, Colorado.` |
| H1 | `Tesamorelin in Greenwood Village / Denver` |
| Canonical | `https://edenhealthclubs.com/tesamorelin-greenwood-village` |
| Form name | `Tesamorelin Denver Lead Form` |
| GHL workflow | `Tesamorelin — New Lead` |
| Service hidden value | `Tesamorelin` |

## Hero

- **Eyebrow:** `Peptide Therapy in Denver`
- **Lede:** `The only FDA-approved peptide on Eden's menu. A clinician-guided protocol studied for its role in reducing visceral fat, supporting body composition, and elevating IGF-1 — for adults whose midsection isn't responding to diet, training, or even GLP-1 medications the way it used to.`
- **Outcome bullets:**
  - Visceral fat reduction support
  - IGF-1 and body-composition support
  - Cognitive clarity support in older adults
  - Physician-prescribed and clinician-monitored

## Lead copy

- **H2:** `The visceral fat peptide. Backed by an FDA approval.`
- **Body:**
  > Visceral fat — the deep, organ-wrapping kind — isn't the same as the layer you can pinch. It's metabolically active, harder to lose, and the kind that GLP-1 medications, training, and diet sometimes leave behind even when overall weight drops.
  > Tesamorelin is the protocol Eden prescribes when visceral fat is the specific problem. It's a synthetic analog of growth-hormone-releasing hormone — and the only peptide on Eden's menu that carries an FDA approval (originally for HIV-associated lipodystrophy). Clinical use today is broader, including body composition support in adults with metabolic concerns and IGF-1 elevation in active-aging clients.

## What it is

> Tesamorelin is a synthetic GHRH analog that binds to growth-hormone-releasing-hormone receptors in the anterior pituitary, stimulating the body's own growth hormone release. Originally FDA-approved (brand name Egrifta) for HIV-associated lipodystrophy. Clinical interest has expanded to body composition, visceral fat, IGF-1, and cognitive function in older adults.
> At Eden, Tesamorelin is prescribed only after clinical consultation, compounded by a U.S. licensed pharmacy partner, and dosed and monitored under physician guidance.

## Who it's for

- **Adults with persistent visceral fat** that hasn't responded to standard interventions
- **GLP-1 clients** whose midsection hasn't shifted at the rate the rest of their body has
- **Active-aging clients** focused on body composition and IGF-1
- **Clients with metabolic concerns** under functional medicine care
- **Adults wanting cognitive-clarity support** with a GH-axis mechanism
- **Clients who want physician oversight** and structured follow-up

## Ingredient card (solo, single)

- **Tag:** FDA-Approved GHRH Analog
- **H3:** Tesamorelin
- **Description:** `A synthetic GHRH analog. FDA-approved (Egrifta) for HIV-associated lipodystrophy. Studied for its role in reducing visceral fat, elevating IGF-1, supporting body composition, and — in older adults — supporting cognitive clarity. The only peptide on Eden's menu with FDA approval.`

**Callout:** `Why Tesamorelin matters. Most peptides on the wellness market are compounded under physician prescription but not FDA-approved for any indication. Tesamorelin is the exception. That doesn't make it the right peptide for every client — but it does make it the cleanest regulatory option when the visceral-fat or IGF-1 conversation is the right one.`

## How it works at Eden — standard 5-step

Replace "BPC-157" / "the stack" with "Tesamorelin" throughout. Add to step 2: `Baseline labs include IGF-1 and metabolic panel. DEXA scan may be requested if visceral fat is the lead concern.`

## Why Eden — standard 6 bullets (no changes)

## Pricing — standard framing

## Urgency

- **H2:** `Visceral fat doesn't reverse on its own.`
- **Body:**
  > The kind of fat Tesamorelin is studied for isn't the kind you outrun on a treadmill or starve out with a calorie cut. It's metabolically active, hormonally tangled, and the clients who shift it are usually the ones who got specific about the mechanism instead of trying harder at the general approach.
  > Consult availability with Eden's clinical team is limited each week.

## FAQ (10 questions — Tesamorelin-specific)

1. **What is Tesamorelin?** — GHRH analog, FDA-approved, mechanism explanation.
2. **Is Tesamorelin really FDA-approved?** — Yes (HIV-associated lipodystrophy). Clinical interest has expanded.
3. **Is this the same as Ozempic or other GLP-1s?** — No. Different mechanism. Often complementary.
4. **Can I take Tesamorelin while on a GLP-1?** — Often yes; clinician will review.
5. **How long until I notice changes?** — Visceral fat changes typically take 12–26 weeks; IGF-1 shifts faster.
6. **Is this safe long-term?** — Standard compliance answer; clinician monitoring.
7. **What labs are needed?** — IGF-1 baseline, metabolic panel; sometimes DEXA.
8. **How is it administered?** — Subcutaneous; typically pre-bed.
9. **Will my insurance cover it?** — Compounded; typically out of pocket; check at consult.
10. **What happens after consult?** — Standard answer.

## Internal links

- Body copy: link "GLP-1" → `/glp-1-support-stack-greenwood-village`
- Why Eden section: link "functional medicine" → `/functional-medicine`
- FAQ "Can I take with GLP-1?" → link to GLP-1 Support Stack page

## SEO notes — high priority

- Title and H1 must contain "Tesamorelin" and "Greenwood Village"
- Within first 100 words: mention "FDA-approved", "visceral fat", "Tesamorelin", "Greenwood Village"
- Schema MedicalProcedure name = "Tesamorelin Therapy"
- Add `alternateName: ["Egrifta", "Tesamorelin Acetate"]` in schema
- Request indexing immediately on launch — this is a high-value page

---

# LP 2 — BPC-157

## Identity

| Field | Value |
|---|---|
| Service | BPC-157 |
| Type | Individual peptide LP (single ingredient) |
| Slug | `/bpc-157-greenwood-village` |
| SEO Title | `BPC-157 in Greenwood Village | Gut & Tissue Repair Peptide, Denver` |
| Meta Description | `BPC-157 at Eden Health Clubs — physician-prescribed peptide therapy for gut, tendon, ligament, and tissue repair in Greenwood Village, Colorado.` |
| H1 | `BPC-157 in Greenwood Village / Denver` |
| Form name | `BPC-157 Denver Lead Form` |
| Service value | `BPC-157` |

## Hero lede

`The most-studied tissue-repair peptide in functional medicine. A clinician-guided protocol studied for its role in supporting the gut lining, tendon and ligament repair, nerve regeneration, and localized tissue recovery — at Eden, prescribed alone for focused concerns or as the foundation of larger stacks.`

## Outcome bullets

- Gut lining and digestive comfort support
- Tendon, ligament, and joint recovery support
- Nerve repair support
- Personalized by an Eden clinician

## Lead copy H2

`The foundation peptide of recovery and gut work.`

## Lead body

> BPC-157 is the peptide that started most of the modern recovery and gut conversations in functional medicine. It's derived from a protein found in gastric juice — which is part of why oral dosing actually works for gut targets (it survives stomach acid intact). For tendons, ligaments, nerves, and systemic tissue work, subcutaneous injection is the standard.
> At Eden, BPC-157 is prescribed alone for focused cases — a specific tendon flare, a gut barrier issue, a nerve repair concern — or as the foundation peptide in larger stacks (Wolverine, KLOW, Structural Repair, The Joint Insurance, GLP-1 Support, Gut Repair & IBD).

## Who it's for

- Active adults with tendinopathy, joint flares, or chronic soft-tissue issues
- Clients with gut barrier symptoms, reflux, post-NSAID gut discomfort, or food sensitivities
- Post-injury or post-procedure clients
- Functional medicine clients addressing gut-driven inflammation
- Clients with nerve repair concerns under physician guidance
- Clients who want clinician oversight

## Ingredient card (solo)

- **Tag:** Tissue & Gut Repair
- **H3:** BPC-157
- **Description:** `"Body Protection Compound." A 15-amino-acid peptide derived from a protein found in gastric juice. Studied for its role in supporting the gut lining, tendon and ligament repair, nerve regeneration, and localized tissue recovery. Oral dosing for gut targets (survives stomach acid); subcutaneous for systemic work.`

**Callout:** `Used alone or as part of a stack. BPC-157 is prescribed individually for focused gut, tendon, or nerve cases — or as the foundation peptide in Eden's recovery stacks (Wolverine, KLOW, Structural Repair, The Joint Insurance). Your clinician will recommend which approach fits your case.`

## FAQ specifics

Add: `Is BPC-157 banned for athletes? — BPC-157 is on the WADA/USADA prohibited list. Athletes subject to drug testing should screen carefully with their clinician before starting.`

## Internal links

- Link "Wolverine" → `/wolverine-stack-greenwood-village`
- Link "KLOW" → `/klow-stack-greenwood-village`
- Link "Structural Repair" → `/structural-repair-stack-greenwood-village`
- Link "The Joint Insurance" → `/the-joint-insurance-greenwood-village` (when built)
- Link "GLP-1 Support" → `/glp-1-support-stack-greenwood-village`
- Link "Gut Repair & IBD" → `/gut-repair-ibd-greenwood-village` (when built)

---

# LP 3 — Sermorelin

## Identity

| Field | Value |
|---|---|
| Service | Sermorelin |
| Type | Individual peptide LP |
| Slug | `/sermorelin-greenwood-village` |
| SEO Title | `Sermorelin in Greenwood Village | GHRH Peptide Therapy, Denver` |
| Meta Description | `Sermorelin at Eden Health Clubs — physician-prescribed GHRH peptide therapy for lean tissue, sleep, and recovery in Greenwood Village, Colorado.` |
| H1 | `Sermorelin in Greenwood Village / Denver` |
| Form name | `Sermorelin Denver Lead Form` |

## Hero lede

`A clinician-guided peptide studied for its role in supporting the body's own growth hormone pulse — the entry point to GH-axis work, without crossing into synthetic HGH.`

## Outcome bullets

- Lean tissue and body composition support
- Sleep depth and recovery support
- Skin quality and collagen support
- Personalized by an Eden clinician

## Lead copy H2

`Work with your endocrine system, not against it.`

## Lead body

> Synthetic HGH replaces your body's growth hormone with someone else's. Sermorelin supports your body's own GH-axis — the pituitary, the pulse, the rhythm. It's the entry point to growth-hormone work for adults who want the lean tissue, sleep, and recovery story without the synthetic-replacement conversation.
> At Eden, Sermorelin is prescribed as a personalized protocol after clinical consultation. It's also a component of several Eden stacks (The Joint Insurance, The Skin & Glow, The Cognitive Edge, Cortisol Management) — your clinician will recommend whether Sermorelin alone or a stack fits your goals.

## Who it's for

- Active-aging clients addressing lean tissue, sleep, and recovery
- BHRT clients adding GH-axis support
- Athletes focused on long-term recovery and body composition (not subject to testing — Sermorelin is also on the WADA list)
- Clients with documented GH-axis concerns
- Clients wanting an entry point to GH work before considering CJC-1295/Ipamorelin
- Clients who want clinician oversight

## Ingredient card (solo)

- **Tag:** GHRH Analog
- **H3:** Sermorelin
- **Description:** `A growth-hormone-releasing-hormone (GHRH) analog studied for its role in supporting the body's own growth hormone pulse. The entry-point GH-axis peptide — used alone or as a component of broader stacks.`

**Callout:** `Sermorelin or CJC-1295/Ipamorelin? Sermorelin is the entry point to GH-axis work — a simpler protocol with a gentler pulse. The CJC-1295/Ipamorelin stack is the stronger, cleaner pairing for clients ready for a more pronounced overnight pulse. Your clinician will recommend based on your goals and labs.`

## Internal links

- Body copy: link "CJC-1295/Ipamorelin" → `/cjc-1295-ipamorelin-greenwood-village`
- Link "The Joint Insurance", "The Skin & Glow", "The Cognitive Edge", "Cortisol Management" → respective pages when built
- Link "BHRT" → `/hormone-therapy`

---

# LP 4 — NAD+

## Identity

| Field | Value |
|---|---|
| Service | NAD+ |
| Type | Individual wellness therapy (NOT classified as peptide on this page) |
| Slug | `/nad-plus-greenwood-village` |
| SEO Title | `NAD+ in Greenwood Village | IV & Injectable Therapy, Denver` |
| Meta Description | `NAD+ therapy at Eden Health Clubs — physician-guided support for cellular energy, longevity, and cognitive clarity in Greenwood Village, Colorado.` |
| H1 | `NAD+ in Greenwood Village / Denver` |
| Form name | `NAD+ Denver Lead Form` |

**Important framing:** NAD+ is a coenzyme, not a peptide. The page positions it under "Wellness Therapies" / "Cellular Support" — keep visual + structural parity with peptide LPs but adjust language: do not call NAD+ a peptide.

## Hero lede

`A coenzyme central to cellular energy production and DNA repair — delivered as IV therapy or injectable under clinician guidance, for adults whose energy, recovery, and cognitive clarity aren't matching their effort.`

## Outcome bullets

- Cellular energy and mitochondrial support
- Longevity-focused care
- Recovery and cognitive clarity support
- Personalized by an Eden clinician

## Lead copy H2

`Energy starts where most therapies don't reach.`

## Lead body

> Most fatigue protocols stop above the cell. Caffeine. Adaptogens. Sleep hygiene. They all help — but they don't reach the part of the system where energy is actually made. NAD+ (nicotinamide adenine dinucleotide) is the coenzyme that makes cellular energy production possible. It also runs the cellular cleanup and DNA-repair pathways longevity research has been pointing to for the last decade.
> At Eden, NAD+ is delivered as IV therapy or injectable, under clinician guidance, as part of personalized recovery, longevity, and cellular-health protocols.

## Who it's for

- Longevity-focused clients
- Active-aging clients addressing energy and cellular health
- Athletes optimizing recovery and cellular function
- Functional medicine clients
- Clients with cognitive-energy concerns
- Clients building a longevity protocol that includes Tesamorelin, Epitalon, or Glutathione

## Ingredient card (solo)

- **Tag:** Cellular Coenzyme
- **H3:** NAD+
- **Description:** `Nicotinamide adenine dinucleotide. A coenzyme central to cellular energy production, DNA repair, and the longevity-research pathways. Delivered at Eden as IV therapy or injectable, under physician guidance.`

**Callout:** `NAD+ shows up in nearly every Eden longevity protocol. It pairs naturally with Glutathione (antioxidant capacity), Epitalon (cellular aging response), Tesamorelin (body composition), and several Eden stacks. Your clinician will recommend whether NAD+ alone or as part of a stack fits your goals.`

## Internal links

- Link "IV therapy" → `/iv-therapy`
- Link "Glutathione" → `/glutathione-greenwood-village` (when built)
- Link "longevity" → `/functional-medicine`
- Link to Eden's various stacks that include NAD+

---

# LP 5 — The Skin & Glow

## Identity

| Field | Value |
|---|---|
| Service | The Skin & Glow |
| Type | Stack LP (3 ingredient cards) |
| Slug | `/the-skin-and-glow-greenwood-village` |
| SEO Title | `The Skin & Glow in Greenwood Village | KPV + Sermorelin + Glutathione, Denver` |
| Meta Description | `The Skin & Glow at Eden Health Clubs — clinician-guided peptide protocol for skin, collagen, and complexion. KPV, Sermorelin, and Glutathione in Greenwood Village.` |
| H1 | `The Skin & Glow in Greenwood Village / Denver` |
| Form name | `The Skin and Glow Denver Lead Form` |
| Service value | `The Skin & Glow` |

**Note:** This LP replaces the older `glow-stack.html` which used the wrong formula. After Codex builds this, either delete `glow-stack.html` or set up a 301 redirect to `/the-skin-and-glow-greenwood-village`. Also: the older "GLOW Stack" community search term should still funnel here via the SEO title and a Phase 1.5 funnel page at `/glow-stack-denver`.

## Hero lede

`A clinician-guided three-component protocol for adults whose skin isn't matching the work they're already doing topically — addressing inflammation, GH-pulse-driven collagen, and antioxidant capacity from the inside.`

## Outcome bullets

- Skin redness and inflammatory comfort support
- Collagen and elasticity support via overnight GH pulse
- Antioxidant capacity and skin clarity support
- Personalized by an Eden clinician

## Lead copy H2

`Your skin keeps the receipts.`

## Lead body

> Most skincare doesn't reach the systems underneath. Inflammation drives reactive skin. Collagen production depends on the body's overnight GH pulse, which drifts with age. Oxidative stress shows up as dullness, uneven tone, and slow recovery. None of that is solvable by what you put on the outside.
> The Skin & Glow is Eden's clinician-guided protocol for clients who want the inside-out conversation. Three components, three roles: KPV calms the inflammatory and histamine load, Sermorelin supports the overnight GH pulse that collagen depends on, and Glutathione underwrites the antioxidant capacity that protects the other two.

## What it is

> The Skin & Glow combines **KPV**, **Sermorelin**, and **Glutathione**. Each is studied for a distinct role in skin health: inflammatory balance, collagen-supporting GH pulse, and antioxidant capacity. Together they address the three systems most topical skincare can't reach.

## Who it's for

- Aesthetic-forward clients in their 30s–60s focused on skin quality
- Clients with reactive, redness-prone, or sensitive skin (no disease claims)
- Post-procedure clients (laser, micro-needling, surgical) wanting tissue-supportive recovery
- Active-aging clients building a skin-and-longevity layer
- Clients combining peptide and aesthetic care under one team
- Clients who want clinician oversight

## Ingredient cards (3)

**Card 1 — KPV**
- Tag: `Skin Inflammatory Comfort`
- Description: `A short tripeptide studied for its role in stabilizing mast cells, reducing histamine-driven skin symptoms, and supporting inflammatory balance in the skin and gut. The "calm the redness" peptide.`

**Card 2 — Sermorelin**
- Tag: `GH Pulse & Collagen`
- Description: `A growth-hormone-releasing-hormone analog studied for its role in supporting the body's own overnight GH pulse — which collagen production and skin elasticity depend on.`

**Card 3 — Glutathione**
- Tag: `Master Antioxidant`
- Description: `A tripeptide antioxidant studied for its role in detoxification, oxidative-stress balance, and skin clarity. Underwrites the antioxidant capacity that protects the rest of the protocol.`

**Callout:** `Why these three? Skin issues are usually three problems wearing one face: inflammation (KPV), collagen-supporting GH (Sermorelin), and oxidative-stress balance (Glutathione). The Skin & Glow addresses all three under one structured plan.`

## FAQ — Skin-specific

- "Will this replace my topicals or aesthetic treatments?" — No. Complementary.
- "Is this the same as the GLOW Stack I've seen elsewhere?" — Acknowledge community GLOW formula (BPC + TB + GHK-Cu) is different. Eden's Skin & Glow approaches the same outcome through a different mechanism stack.
- "How soon do people notice changes?" — Skin feel and reactivity often shift 2–4 weeks; visible texture/tone changes 8–12 weeks.

## Internal links

- Link "aesthetic care" / "aesthetic treatments" → `/aesthetics`
- Link "Sermorelin" → `/sermorelin-greenwood-village`
- Link "KPV" → `/kpv-peptide-greenwood-village` (when built)
- Link "Glutathione" → `/glutathione-greenwood-village` (when built)
- Link "longevity" → `/functional-medicine`

## SEO notes

- Schema `alternateName`: include `["GLOW Stack", "Skin and Glow Peptide Stack", "Dermatological Peptide Protocol"]` to capture community-name searches
- Title tag explicitly includes the ingredients for differentiation from community GLOW
- Funnel page at `/glow-stack-denver` (Phase 1.5) explains the formula difference and canonical-links here

---

## Cross-LP build notes for Codex

1. **Solo card layout** for individual peptide LPs (Tesamorelin, BPC-157, Sermorelin, NAD+): single centered card, `max-width: 560px; margin: 28px auto 0;`. Use `.ingredient-card.solo` styling from `individual-peptide-template.html`.

2. **Multi-card stack** for The Skin & Glow: 3-card auto-fit grid identical to `cjc-1295-ipamorelin-stack.html` adapted to 3 cards (or use `structural-repair-stack.html`'s 3-card grid).

3. **Internal linking discipline:** every LP should link to at least 3 other Eden pages where natural. This builds internal SEO authority across the peptide cluster.

4. **Schema MedicalProcedure.alternateName** is the easiest way to capture community-name searches without misleading visitors. Use it on every page where there's a recognized alternate name.

5. **Don't forget:** Tesamorelin is the ONE peptide where FDA-approved status is stated plainly. All others use compounding-pharmacy language.
