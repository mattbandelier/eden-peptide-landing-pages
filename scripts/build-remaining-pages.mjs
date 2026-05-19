import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

const common = {
  area: ["Denver", "Greenwood Village", "Denver Tech Center", "Cherry Hills Village", "Centennial", "Englewood", "Littleton"],
  trust: ["Clinician-guided", "Personalized protocols", "Greenwood Village + Denver", "Licensed pharmacy fulfillment"],
  why: [
    "Real local health club: Greenwood Village, a physical address, and licensed providers on site.",
    "Functional medicine, aesthetics, recovery, and fitness under one roof.",
    "Premium environment designed for the south Denver longevity client.",
    "Clinician-guided protocols with medical director oversight.",
    "Integration with wellness injections, peptide injections, GLP-1 support, BHRT, recovery, fitness, and aesthetics.",
    "Personalized plans built around goals, labs, and the rest of your care."
  ],
  links: [
    ["Functional Medicine", "https://edenhealthclubs.com/functional-medicine/"],
    ["Peptide Injections", "https://edenhealthclubs.com/functional-medicine/peptide-injections/"],
    ["Wellness Injections", "https://edenhealthclubs.com/functional-medicine/wellness-injections/"],
    ["Fitness + Performance", "https://edenhealthclubs.com/fitness-performance/"]
  ]
};

const library = {
  "BPC-157": ["Tissue & Gut Repair", "A 15-amino-acid peptide studied for its role in supporting the gut lining, tendon and ligament repair, nerve regeneration, blood-vessel signaling, and localized tissue recovery."],
  "TB-500": ["Systemic Recovery", "A synthetic fragment of Thymosin Beta-4 studied for its role in supporting cell migration, soft-tissue remodeling, mobility, and systemic recovery."],
  "KPV": ["Inflammatory Balance", "A short tripeptide studied for its role in supporting inflammatory balance, gut barrier integrity, mast-cell stability, and skin inflammatory comfort."],
  "MOTS-c": ["Mitochondrial Support", "A mitochondrial-derived peptide studied for its role in supporting AMPK signaling, metabolic flexibility, glucose handling, and exercise response."],
  "Epitalon": ["Telomere & Circadian Support", "A four-amino-acid peptide studied for its role in telomerase activity, cellular-aging pathways, melatonin rhythm, and sleep architecture."],
  "Semax": ["Cognitive Performance", "A synthetic ACTH fragment studied for its role in supporting BDNF, NGF, focus, working memory, and cognitive performance."],
  "Emideltide (DSIP)": ["Deep Sleep Architecture", "A delta-sleep-inducing peptide studied for its role in supporting deep-sleep architecture, stress recovery, and nervous-system reset without next-day sedation."],
  "Sermorelin": ["GH Pulse Support", "A GHRH analog studied for its role in supporting the body's own overnight growth-hormone pulse for recovery, lean tissue, and collagen support."],
  "NAD+": ["Cellular Coenzyme", "A coenzyme central to cellular energy production, mitochondrial function, DNA repair, and cellular cleanup. NAD+ is not a peptide."],
  "Glutathione": ["Master Antioxidant", "A tripeptide antioxidant studied for its role in oxidative-stress balance, detoxification pathways, cellular defense, and skin clarity."]
};

const pages = [
  stack("The Joint Insurance", "the-joint-insurance-greenwood-village", ["BPC-157", "TB-500", "Sermorelin"], "connective-tissue resilience, joint support, and preventative repair", "For active adults who want their joints and connective tissue to keep up with strength, training, and aging."),
  stack("The Deep Sleep Reset", "the-deep-sleep-reset-greenwood-village", ["Emideltide (DSIP)", "Epitalon", "NAD+"], "sleep architecture, circadian rhythm, and cellular recovery", "For high performers who are tired of sleeping enough hours and still waking up under-recovered."),
  stack("Gut Repair & IBD", "gut-repair-ibd-greenwood-village", ["BPC-157", "KPV", "Glutathione", "NAD+"], "gut barrier support, inflammatory balance, and cellular repair", "For functional medicine clients whose gut, inflammation, and recovery story need to be addressed together.", {
    title: "Gut Repair & IBD Peptide Protocol in Greenwood Village | Denver Functional Medicine",
    description: "Gut Repair & IBD support at Eden Health Clubs combines BPC-157, KPV, Glutathione, and NAD+ with clinician-guided functional medicine care in Greenwood Village.",
    leadHeading: "The gut is not separate from recovery, inflammation, or energy.",
    leadParagraphs: [
      "Bloating, food sensitivity patterns, inflammatory load, and inconsistent recovery rarely live in separate boxes. For many Eden clients, the gut becomes the place where stress, medication history, training load, sleep debt, and inflammation all show up at once.",
      "Gut Repair & IBD is Eden's functional medicine protocol for clients who want a coordinated plan around gut barrier support, inflammatory balance, antioxidant capacity, and cellular repair. It is not a generic supplement protocol or an online peptide kit.",
      "The goal is to connect the dots: how your gut feels, how you recover, how your skin responds, how your energy holds up, and how your larger Eden plan should support the system underneath."
    ],
    quickBestFit: "For adults with gut-barrier, inflammatory, recovery, or post-medication concerns who want clinician-guided functional medicine support in Greenwood Village.",
    whatCopy: "Gut Repair & IBD combines BPC-157, KPV, Glutathione, and NAD+. BPC-157 and KPV are included for gut barrier and inflammatory-balance support, while Glutathione and NAD+ support antioxidant capacity and cellular repair.",
    noteCopy: "Why these four? Gut repair is rarely just a lining problem. Eden pairs gut-barrier support with inflammatory balance, antioxidant defense, and cellular energy so the protocol supports the broader functional medicine picture.",
    alternateNames: ["Gut Repair Protocol", "Gut Barrier Support Protocol", "Functional Medicine Gut Protocol"]
  }),
  stack("Hormone Optimization", "hormone-optimization-greenwood-village", ["Emideltide (DSIP)", "Epitalon", "MOTS-c", "NAD+", "Glutathione"], "sleep, mitochondrial energy, and cellular cleanup alongside hormone care", "For BHRT and functional medicine clients who need the recovery systems around hormones to work better.", {
    title: "Hormone Optimization Support in Greenwood Village | Eden Health Clubs Denver",
    description: "Hormone Optimization support at Eden combines DSIP, Epitalon, MOTS-c, NAD+, and Glutathione for sleep, mitochondrial, and cellular support alongside functional medicine care.",
    leadHeading: "Hormones do not work in isolation.",
    leadParagraphs: [
      "A hormone plan can look right on paper and still feel incomplete if sleep, mitochondrial energy, inflammation, and cellular cleanup are lagging behind. That is where high-performing adults often get stuck.",
      "Hormone Optimization at Eden is built as the support system around hormone care: deep sleep architecture, circadian rhythm, mitochondrial output, antioxidant capacity, and cellular recovery in one clinician-guided protocol.",
      "This page is not a replacement for BHRT, lab review, or medical evaluation. It is the integration layer for clients who want their hormone work, recovery, fitness, and longevity plan to finally point in the same direction."
    ],
    quickBestFit: "For BHRT, longevity, and functional medicine clients who want sleep, energy, and recovery systems coordinated around hormone optimization.",
    whatCopy: "Hormone Optimization combines Emideltide (DSIP), Epitalon, MOTS-c, NAD+, and Glutathione. Eden uses this protocol to support sleep architecture, circadian rhythm, mitochondrial function, antioxidant balance, and cellular recovery around a broader hormone plan.",
    noteCopy: "Why these five? Hormone outcomes depend on more than hormone levels. Eden supports the systems that help the body use, recover from, and respond to hormone optimization: sleep, mitochondria, circadian rhythm, and cellular cleanup.",
    alternateNames: ["Hormone Optimization Stack", "BHRT Support Protocol", "Functional Medicine Hormone Support"]
  }),
  solo("Glutathione", "glutathione-greenwood-village", "Wellness Therapies in Denver", "antioxidant capacity, cellular defense, and skin clarity", "Master Antioxidant"),
  solo("TB-500", "tb-500-greenwood-village", "Peptide Therapy in Denver", "systemic recovery, mobility, and soft-tissue remodeling", "Systemic Recovery"),
  stack("The Cognitive Edge", "the-cognitive-edge-greenwood-village", ["Semax", "Sermorelin", "NAD+"], "executive function, focus, and overnight brain recovery", "For Greenwood Village executives who need sharper days and better recovery at night."),
  stack("The Morning Spark", "the-morning-spark-greenwood-village", ["Semax", "MOTS-c", "NAD+"], "non-stimulant energy, focus, and metabolic response", "For high performers who want clean morning drive without leaning harder on caffeine."),
  stack("The CNS Recovery", "the-cns-recovery-greenwood-village", ["Semax", "Emideltide (DSIP)", "NAD+"], "nervous-system recovery, deep sleep, and cognitive repair", "For clients who feel fried from stress, travel, training, or high-output work."),
  stack("Neuro-Recovery", "neuro-recovery-greenwood-village", ["Semax", "BPC-157", "Emideltide (DSIP)", "NAD+"], "brain fog, cognitive recovery, and neuro-inflammatory support", "For clients exploring clinician-guided neuro-recovery support after cumulative load, stress, or head-impact history.", {
    title: "Neuro-Recovery Peptide Protocol in Greenwood Village | Brain Fog Support Denver",
    description: "Neuro-Recovery at Eden combines Semax, BPC-157, DSIP, and NAD+ with clinician-guided care for cognitive recovery, brain fog, sleep, and nervous-system support.",
    leadHeading: "High output needs a calmer, clearer nervous system.",
    leadParagraphs: [
      "Brain fog, low resilience, poor sleep, and the feeling of being wired but underpowered can show up after stress, travel, overtraining, head-impact history, or simply years of running hot.",
      "Neuro-Recovery is Eden's clinician-guided protocol for clients who want cognitive performance, deep recovery, and nervous-system support considered together instead of scattered across separate appointments.",
      "The protocol combines focus-support, gut-brain recovery support, sleep architecture, and cellular energy into one plan that can be coordinated with functional medicine, IV therapy, recovery, and fitness."
    ],
    quickBestFit: "For executives, athletes, and high-output adults dealing with brain fog, poor recovery, sleep disruption, or nervous-system fatigue.",
    whatCopy: "Neuro-Recovery combines Semax, BPC-157, Emideltide (DSIP), and NAD+. Each component is selected for a distinct role in supporting cognitive performance, tissue and gut-brain recovery, deep-sleep architecture, and cellular energy.",
    noteCopy: "Why these four? Neuro-recovery is not just focus. Eden supports the brain, gut-brain axis, sleep architecture, and cellular energy together so the nervous system has more than one lever to pull.",
    alternateNames: ["Neuro Recovery Stack", "Brain Fog Support Protocol", "Cognitive Recovery Protocol"]
  }),
  solo("Semax", "semax-greenwood-village", "Peptide Therapy in Denver", "focus, working memory, and cognitive performance", "Cognitive Performance"),
  solo("Delta Sleep / DSIP", "delta-sleep-dsip-greenwood-village", "Peptide Therapy in Denver", "deep sleep architecture, stress recovery, and nervous-system reset", "Deep Sleep Architecture", "Emideltide (DSIP)"),
  stack("The Telomere Protocol", "the-telomere-protocol-greenwood-village", ["Epitalon", "NAD+", "Glutathione"], "cellular aging, DNA integrity, and longevity support", "For longevity clients who want the cellular-aging conversation treated as a structured protocol."),
  solo("Epitalon", "epitalon-greenwood-village", "Peptide Therapy in Denver", "telomere support, circadian rhythm, and longevity", "Telomere & Circadian Support"),
  stack("The Social Flow", "the-social-flow-greenwood-village", ["Semax", "NAD+", "Emideltide (DSIP)"], "calm focus, confidence, and recovery from social stress", "For executives and high-output adults who want steadier focus in high-pressure rooms."),
  stack("Insulin Shield", "insulin-shield-greenwood-village", ["MOTS-c", "KPV", "NAD+"], "metabolic flexibility, nutrient partitioning, and inflammatory balance", "For metabolic optimization clients who train, eat well, and still want better glucose-response support."),
  stack("Cortisol Management", "cortisol-management-greenwood-village", ["KPV", "Emideltide (DSIP)", "Sermorelin"], "stress buffering, sleep recovery, and GH-axis support", "For overworked clients whose stress load is blocking recovery, sleep, and body composition."),
  stack("Migraine & Neuralgia", "migraine-neuralgia-greenwood-village", ["Semax", "KPV", "Emideltide (DSIP)", "NAD+"], "neurovascular comfort, inflammatory balance, and nervous-system recovery", "For clients exploring clinician-guided support around recurring head and nerve-comfort patterns.", {
    title: "Migraine & Neuralgia Support in Greenwood Village | Eden Health Clubs Denver",
    description: "Migraine & Neuralgia support at Eden combines Semax, KPV, DSIP, and NAD+ with clinician-guided care for neurovascular comfort and nervous-system recovery.",
    leadHeading: "Nerve comfort and recovery need a calmer system.",
    leadParagraphs: [
      "Recurring head and nerve-comfort patterns can be disruptive even when clients are already doing the basics: hydration, sleep, stress management, nutrition, and medical follow-up.",
      "Migraine & Neuralgia at Eden is framed as supportive care, not a cure or replacement for neurological evaluation. It is for clients who want clinician-guided support around neurovascular comfort, inflammatory balance, sleep recovery, and cellular energy.",
      "Eden coordinates this protocol with the rest of your care plan so it can fit alongside functional medicine, recovery, IV therapy, and medical guidance rather than sitting off to the side."
    ],
    quickBestFit: "For adults seeking supportive, clinician-guided care around recurring head or nerve-comfort patterns, inflammatory load, and nervous-system recovery.",
    whatCopy: "Migraine & Neuralgia combines Semax, KPV, Emideltide (DSIP), and NAD+. Eden uses this protocol to support cognitive and neurovascular signaling, inflammatory balance, deep sleep, and cellular energy.",
    noteCopy: "Why these four? Head and nerve-comfort patterns are often tied to more than one system. Eden supports cognition, inflammatory balance, sleep recovery, and cellular energy together while keeping medical evaluation central.",
    alternateNames: ["Migraine Support Protocol", "Neuralgia Support Protocol", "Nervous System Recovery Protocol"]
  }),
  stack("Post-Medication Reset", "post-medication-reset-greenwood-village", ["BPC-157", "KPV", "Glutathione"], "gut barrier support after medication stress", "For clients rebuilding gut comfort and antioxidant capacity after antibiotics or medication-related gut disruption."),
  solo("KPV", "kpv-peptide-greenwood-village", "Peptide Therapy in Denver", "inflammatory balance, gut barrier integrity, and skin comfort", "Inflammatory Balance"),
  solo("MOTS-c", "mots-c-greenwood-village", "Peptide Therapy in Denver", "mitochondrial support, metabolic flexibility, and training response", "Mitochondrial Support")
];

const funnels = [
  funnel("Wolverine Stack Denver", "wolverine-stack-denver", "Wolverine Stack", "BPC-157 + TB-500", "The Joint Insurance", "/the-joint-insurance-greenwood-village/", "Structural Repair", "/structural-repair-stack-greenwood-village/"),
  funnel("KLOW Stack Denver", "klow-stack-denver", "KLOW Stack", "varied BPC-157, TB-500, KPV, and skin-support formulas", "Structural Repair", "/structural-repair-stack-greenwood-village/", "KLOW Stack", "/klow-stack-greenwood-village/"),
  funnel("GLOW Stack Denver", "glow-stack-denver", "GLOW Stack", "skin and collagen peptide formulas that vary by clinic", "The Skin & Glow", "/the-skin-and-glow-greenwood-village/", "GLOW Stack", "/glow-stack-greenwood-village/")
];

for (const page of pages) {
  await writeFile(resolve(root, "src/pages", `${page.slug}.astro`), renderPage(page), "utf8");
  console.log(`Wrote src/pages/${page.slug}.astro`);
}
for (const page of funnels) {
  await writeFile(resolve(root, "src/pages", `${page.slug}.astro`), renderFunnel(page), "utf8");
  console.log(`Wrote src/pages/${page.slug}.astro`);
}

function stack(service, slug, ingredients, positioning, human, options = {}) {
  return {
    kind: "stack",
    service,
    slug,
    h1: `${service} in Greenwood Village / Denver`,
    title: `${service} in Greenwood Village | Eden Health Clubs Denver`,
    description: `${service} at Eden Health Clubs: clinician-guided protocol for ${positioning} in Greenwood Village and Denver.`,
    eyebrow: "Peptide Therapy in Denver",
    positioning,
    human,
    ingredients: ingredients.map((name) => ({ name, tag: library[name][0], description: library[name][1] })),
    ingredientClass: ingredients.length === 3 ? "ingredient-grid ingredient-grid--three" : "ingredient-grid ingredient-grid--auto",
    outcomes: outcomeList(positioning),
    formName: `${service.replace("&", "and")} Denver Lead Form`,
    cta: `Request My ${service} Consultation`,
    ...options
  };
}

function solo(service, slug, eyebrow, positioning, tag, ingredientName = service) {
  return {
    kind: "solo",
    service,
    slug,
    h1: `${service} in Greenwood Village / Denver`,
    title: `${service} in Greenwood Village | Eden Health Clubs Denver`,
    description: `${service} at Eden Health Clubs: clinician-guided support for ${positioning} in Greenwood Village and Denver.`,
    eyebrow,
    positioning,
    human: `For adults who want clinician-guided support around ${positioning}.`,
    ingredients: [{ name: ingredientName, tag, description: library[ingredientName]?.[1] || library[service]?.[1] }],
    ingredientClass: "ingredient-grid ingredient-grid--solo",
    outcomes: outcomeList(positioning),
    formName: `${service.replace("/", "").replace("&", "and")} Denver Lead Form`,
    cta: `Request My ${service} Consultation`
  };
}

function outcomeList(positioning) {
  const [a = "Personalized support", b = "Recovery", c = "Optimization"] = positioning.split(",").map((part) => part.trim());
  return [`${capitalize(a)} support`, `${capitalize(b)} support`, `${capitalize(c)} support`, "Personalized by an Eden clinician"];
}

function renderPage(page) {
  const canonical = `https://edenhealthclubs.com/${page.slug}/`;
  const medicalName = `${page.service} ${page.kind === "solo" ? "Protocol" : "Stack Protocol"}`;
  const faqItems = buildFaq(page);
  const schema = buildSchema(page, canonical, medicalName, faqItems);
  const ingredientNames = page.ingredients.map((i) => i.name).join(", ");
  const isNad = page.service === "NAD+";
  return `---
import LeadForm from "@/components/LeadForm.astro";
import BaseLayout from "@/layouts/BaseLayout.astro";

const faqItems = ${JSON.stringify(faqItems, null, 2)};
const schema = ${JSON.stringify(schema, null, 2)};
---

<BaseLayout title=${JSON.stringify(page.title)} description=${JSON.stringify(page.description)} canonical=${JSON.stringify(canonical)}>
  <script is:inline type="application/ld+json" set:html={JSON.stringify(schema)} />
  <main class="lp-detail">
    <section class="hero hero--glow">
      <video class="hero__media" autoplay muted loop playsinline aria-hidden="true">
        <source src="https://edenhealthclubs.com/wp-content/uploads/2025/07/edenhealth-hero-video.mp4" type="video/mp4" />
      </video>
      <nav class="mobile-topbar" aria-label="Page">
        <img class="site-logo" src="/assets/eden-health-club-logo-transparent.png" alt="Eden Health Club" width="1080" height="1080" />
        <a href="#consult-form">Consult</a>
      </nav>
      <div class="hero__overlay">
        <p class="eyebrow">${esc(page.eyebrow)}</p>
        <h1>${esc(page.h1)}</h1>
        <p class="hero__summary">A clinician-guided ${isNad ? "wellness therapy" : page.kind === "solo" ? "protocol" : "multi-component protocol"} for ${esc(page.positioning)}: built for adults in Greenwood Village and Denver who want medical oversight, not internet guesswork.</p>
        <div class="hero__expect">
          <h3>Designed for:</h3>
          <ul>${page.outcomes.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </div>
        <div class="hero__actions" aria-label="Primary actions">
          <a class="button button--primary" href="#consult-form">Book a Consultation</a>
          <a class="button button--secondary" href="#how">See How It Works</a>
        </div>
        <p class="hero__credibility">Clinician-guided care with medical director oversight · Compounded in the U.S. by a licensed pharmacy partner when prescribed</p>
      </div>
    </section>
    <section class="proof-band" aria-label="Trust points">${common.trust.map((item) => `<span>${esc(item)}</span>`).join("")}</section>
    <section class="local-seo-band" aria-label="Local service area"><p>Eden Health Clubs serves Greenwood Village, the Denver Tech Center (DTC), Cherry Hills Village, Centennial, Englewood, Littleton, and the broader south Denver metro. ${esc(page.service)} is available through Eden's Greenwood Village health club or via telehealth for established Eden patients in Colorado.</p></section>
    <section class="quick-answer-section" aria-labelledby="quick-answer-heading">
      <div><p class="eyebrow">Quick answer</p><h2 id="quick-answer-heading">What is ${esc(page.service)} at Eden?</h2></div>
      <div class="quick-answer-card"><p>${esc(page.service)} at Eden Health Clubs is ${isNad ? "a clinician-guided wellness therapy" : "a clinician-guided protocol"} in Greenwood Village for ${esc(page.positioning)}. Eligibility is determined during consultation with Eden's clinical team and medical director oversight.</p><ul><li><strong>Location:</strong> Greenwood Village, serving Denver, DTC, Cherry Hills, Centennial, Englewood, and Littleton.</li><li><strong>Best fit:</strong> ${esc(page.quickBestFit || page.human)}</li><li><strong>Care model:</strong> Eden medical wellness club consult, licensed provider review, pharmacy fulfillment when prescribed.</li></ul></div>
    </section>
    <section class="copy-section copy-section--lead">
      <p class="eyebrow">${esc(page.positioning)}</p>
      <h2>${esc(page.leadHeading || headline(page))}</h2>
      <div class="prose">${(page.leadParagraphs || [`${page.human} Most people try to solve this with isolated tactics: another supplement, another protocol, another online recommendation. Eden starts by putting the system back together.`, `${page.service} is built for clients who want ${page.positioning} handled through a structured, medically guided plan. The goal is not to chase every new peptide trend. It is to understand the mechanism, the client, and the care plan.`, "At Eden, this page connects into functional medicine, wellness injections, IV therapy, recovery, fitness, aesthetics, and hormone support when appropriate."]).map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}</div>
    </section>
    <section class="copy-section copy-section--split"><div><p class="eyebrow">What it is</p><h2>What Is ${esc(page.service)}?</h2></div><div class="prose prose--tight"><p>${esc(page.whatCopy || `${page.kind === "solo" ? `${page.service} is a focused Eden protocol centered on ${ingredientNames}.` : `${page.service} combines ${ingredientNames}.`} Each component is selected for a distinct role in supporting ${page.positioning}.`)}</p><p>Eligibility, timing, and follow-up are determined during consultation. Specific clinical instructions are reviewed only with eligible patients.</p></div></section>
    <section class="copy-section copy-section--split"><div><p class="eyebrow">Who it is for</p><h2>For adults who want a personalized plan, not a generic kit.</h2></div><ul class="check-list"><li>High-performing adults in Greenwood Village, DTC, and south Denver.</li><li>Clients who feel their results are not matching their effort.</li><li>Functional medicine and longevity clients building a coordinated care plan.</li><li>Fitness, recovery, GLP-1, BHRT, or aesthetic clients who want better integration.</li><li>Clients who want medical oversight instead of research compounds from the internet.</li><li>Adults willing to use follow-up, labs, and clinical review to guide the protocol.</li></ul><p class="note-box">Eligibility for ${esc(page.service)} is determined during clinical consultation.</p></section>
    <section class="${page.ingredientClass}">
      <div class="section-heading"><p class="eyebrow">Inside ${esc(page.service)}</p><h2>${esc(page.kind === "solo" ? "One focused component, clinically reviewed." : `${page.ingredients.length} components, one coordinated protocol.`)}</h2></div>
      ${page.ingredients.map((ing) => `<article class="${page.ingredients.length === 1 ? "ingredient-card solo" : ""}"><p class="ingredient-tag">${esc(ing.tag)}</p><h3>${esc(ing.name)}</h3><p>${esc(ing.description)}</p></article>`).join("")}
      <p class="note-box note-box--wide">${esc(page.noteCopy || `Why this protocol? ${page.service} addresses ${page.positioning} as a connected system rather than a single isolated symptom. Eden coordinates it with the rest of your care so the protocol can support the bigger plan.`)}</p>
    </section>
    ${processSection(page)}
    ${whySection(isNad)}
    <section class="pricing-section"><div><p class="eyebrow">Pricing</p><h2>Know the right protocol before paying for the wrong one.</h2><p>Your consultation helps determine whether this protocol is appropriate and what level of support makes sense for your goals. ${esc(page.service)} is personalized care, not a product on a shelf. Pricing is reviewed during your consultation so you leave with a clear plan and a clear number.</p></div><a class="button button--primary" href="#consult-form">Book a Consultation</a></section>
    <section class="testimonial-section"><div class="section-heading"><p class="eyebrow">Why it matters</p><h2>The cost of waiting is another season of guessing.</h2></div><div class="testimonial-grid"><blockquote>Personalized protocols require clinical review, not a rushed checkout flow.</blockquote><blockquote>The clients who get the most from Eden usually stop piecing care together and start coordinating it.</blockquote><blockquote>Consult availability with Eden's clinical team is limited each week.</blockquote></div></section>
    <section class="faq-section"><div class="section-heading"><p class="eyebrow">FAQ</p><h2>Frequently asked.</h2></div><div class="faq-list">{faqItems.map((item) => (<details><summary>{item.question}</summary><p>{item.answer}</p></details>))}</div></section>
    <section class="split-section" id="consult-form"><div><p class="eyebrow">Start with a consultation</p><h2>Start with your goals, history, and full care plan.</h2><p>Eden will review your goals, medications, health history, current protocols, and whether ${esc(page.service)} is clinically appropriate.</p><p class="microcopy">Greenwood Village health club consults and telehealth follow-ups may be available for established Colorado patients.</p></div><LeadForm cta=${JSON.stringify(page.cta)} service=${JSON.stringify(page.service)} page=${JSON.stringify(`${page.service} in Greenwood Village`)} leadSource=${JSON.stringify(`${page.service} Denver Landing Page`)} externalFormName=${JSON.stringify(page.formName)} goalLabel="Goal / reason for inquiry" goalPlaceholder="Tell us what you are hoping to address." useTextarea /></section>
    <section class="legal-section"><p>Information on this page is educational and is not a substitute for personalized medical advice. Eligibility for ${esc(page.service)} is determined during clinical consultation. Results vary by individual. Peptides and wellness therapies on this page may not be FDA-approved for all uses and are dispensed only when prescribed by a licensed medical provider and fulfilled by a licensed compounding pharmacy when appropriate. Statements on this page have not been evaluated by the Food and Drug Administration. Eden Health Clubs makes no claims to diagnose, treat, cure, or prevent any disease.</p></section>
    ${actionBar()}
  </main>
  ${stickyScript()}
</BaseLayout>
`;
}

function processSection(page) {
  return `<section class="process-section" id="how"><div class="section-heading"><p class="eyebrow">How it works at Eden</p><h2>A premium protocol should feel clear from the first consult.</h2></div><ol class="step-list"><li><div><strong>Consultation.</strong> A 30-45 minute visit with an Eden clinician to review your goals, history, and current protocols.</div></li><li><div><strong>Medical review & eligibility.</strong> Your clinician determines whether ${esc(page.service)} is appropriate. Labs, medication review, or body-composition markers may be requested when relevant.</div></li><li><div><strong>Personalized protocol.</strong> Components, timeline, and support are tailored to your goals and labs, not pulled from a template.</div></li><li><div><strong>Pharmacy fulfillment or in-club guidance.</strong> Compounded in the U.S. by a licensed pharmacy partner when prescribed. Optional in-club teaching is available for first-time users.</div></li><li><div><strong>Follow-up & optimization.</strong> Check-ins help Eden adjust based on how your body responds and how the protocol fits into the rest of your care.</div></li></ol></section>`;
}

function whySection(isNad) {
  return `<section class="copy-section copy-section--split"><div><p class="eyebrow">Why Eden</p><h2>${isNad ? "Eden is not a generic drip bar. It is a medical wellness club." : "Eden is not an online peptide shop. It is a medical wellness club."}</h2></div><ul class="check-list">${common.why.map((item) => `<li>${esc(item)}</li>`).join("")}</ul><div class="internal-link-grid" aria-label="Related Eden services">${common.links.map(([label, href]) => `<a href="${href}">${esc(label)}</a>`).join("")}</div></section>`;
}

function actionBar() {
  return `<nav class="eden-action-bar" aria-label="Contact Eden"><a href="tel:+17206057678"><span>Phone</span><strong>Call Now</strong></a><a href="mailto:care@edenhealthclubs.com"><span>Email</span><strong>Care Team</strong></a><a href="#consult-form"><span>Consult</span><strong>Book</strong></a></nav>`;
}

function stickyScript() {
  return `<script>
    const consultSection = document.querySelector("#consult-form");
    const actionBar = document.querySelector(".eden-action-bar");
    if (consultSection && actionBar) {
      const observer = new IntersectionObserver(([entry]) => {
        actionBar.classList.toggle("is-hidden", entry.isIntersecting && entry.intersectionRatio >= 0.5);
      }, { threshold: [0, 0.5, 1] });
      observer.observe(consultSection);
    }
  </script>`;
}

function buildFaq(page) {
  const isNad = page.service === "NAD+" || page.ingredients.some((ing) => ing.name === "NAD+");
  return [
    { question: `What is ${page.service}?`, answer: `${page.service} is ${page.kind === "solo" ? "a focused Eden protocol" : "a clinician-guided Eden protocol"} used to support ${page.positioning}.` },
    { question: "How is eligibility determined?", answer: "Through clinical consultation, medical history, medication review, and labs when appropriate." },
    { question: "Is it prescribed?", answer: isNad ? "NAD+ and related wellness therapies are reviewed by Eden's clinical team and recommended only when appropriate." : "When prescription components are appropriate, Eden uses licensed medical oversight and licensed pharmacy fulfillment." },
    { question: "Can it stack with GLP-1, IV therapy, BHRT, recovery, or fitness?", answer: "Often, yes. Eden reviews the full care plan before recommending how protocols fit together." },
    { question: "How soon do people notice changes?", answer: "Some clients notice early changes in comfort, sleep, energy, or recovery, while deeper changes usually require a longer timeline. Individual response varies." },
    { question: "Is this available in Greenwood Village?", answer: "Yes. Eden serves Greenwood Village, DTC, Cherry Hills Village, Centennial, Englewood, Littleton, and the broader south Denver metro." },
    { question: "Is this the same as ordering peptides online?", answer: "No. Eden uses clinician-guided care, medical director oversight, and licensed fulfillment when prescribed rather than research compounds from the internet." },
    { question: "Is it FDA-approved?", answer: "The components in this protocol are not presented as FDA-approved drugs for this use unless specifically stated. Eligibility is determined during consultation." },
    { question: "Are protocols personalized?", answer: "Yes. Eden personalizes protocols around goals, history, medications, labs, and follow-up." },
    { question: "What happens after the consult?", answer: "If you are eligible, Eden designs the protocol, reviews fulfillment, and sets follow-up expectations." }
  ];
}

function buildSchema(page, canonical, medicalName, faqItems) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": ["MedicalBusiness", "HealthClub"], "@id": "https://edenhealthclubs.com/#medicalbusiness", name: "Eden Health Clubs", url: "https://edenhealthclubs.com/", telephone: "+1-720-605-7678", priceRange: "$$$", logo: "https://edenhealthclubs.com/wp-content/uploads/2025/07/eden-health-club-logo-transparent.png", image: "https://edenhealthclubs.com/wp-content/uploads/2025/07/edenhealth-hero-video-poster.jpg", address: { "@type": "PostalAddress", streetAddress: "5990 S University Blvd", addressLocality: "Greenwood Village", addressRegion: "CO", postalCode: "80121", addressCountry: "US" }, areaServed: common.area, medicalSpecialty: ["Functional Medicine", "Wellness", "Longevity", "Recovery"] },
      { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: page.h1, description: page.description, isPartOf: { "@type": "WebSite", "@id": "https://edenhealthclubs.com/#website", name: "Eden Health Clubs", url: "https://edenhealthclubs.com/" }, about: { "@id": `${canonical}#service` }, primaryImageOfPage: "https://edenhealthclubs.com/wp-content/uploads/2025/07/edenhealth-hero-video-poster.jpg", inLanguage: "en-US" },
      { "@type": "MedicalProcedure", "@id": `${canonical}#service`, name: medicalName, ...(page.alternateNames ? { alternateName: page.alternateNames } : {}), serviceType: page.service === "NAD+" ? "Clinician-guided wellness therapy consultation" : "Clinician-guided peptide protocol consultation", provider: { "@id": "https://edenhealthclubs.com/#medicalbusiness" }, areaServed: common.area.map((name) => ({ "@type": name === "Denver Tech Center" ? "Place" : "City", name })), description: page.description },
      { "@type": "FAQPage", "@id": `${canonical}#faq`, mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }
    ]
  };
}

function funnel(title, slug, communityName, communityFormula, primaryName, primaryHref, secondaryName, secondaryHref) {
  return { title, slug, communityName, communityFormula, primaryName, primaryHref, secondaryName, secondaryHref };
}

function renderFunnel(page) {
  const canonical = `https://edenhealthclubs.com/${page.slug}/`;
  return `---
import BaseLayout from "@/layouts/BaseLayout.astro";
---
<BaseLayout title="${esc(page.title)} | Eden Health Clubs" description="${esc(page.communityName)} in Denver: learn how Eden maps community peptide-stack names to clinician-guided protocols in Greenwood Village." canonical="${canonical}">
  <main class="lp-detail">
    <section class="hero hero--glow">
      <video class="hero__media" autoplay muted loop playsinline aria-hidden="true"><source src="https://edenhealthclubs.com/wp-content/uploads/2025/07/edenhealth-hero-video.mp4" type="video/mp4" /></video>
      <nav class="mobile-topbar" aria-label="Page"><img class="site-logo" src="/assets/eden-health-club-logo-transparent.png" alt="Eden Health Club" width="1080" height="1080" /><a href="#options">Options</a></nav>
      <div class="hero__overlay"><p class="eyebrow">Peptide Stack Names in Denver</p><h1>${esc(page.communityName)} in Denver</h1><p class="hero__summary">Searching for the ${esc(page.communityName)}? Community stack names are useful, but formulas vary. Eden maps the intent behind the name to clinician-guided protocols in Greenwood Village.</p><div class="hero__actions"><a class="button button--primary" href="${page.primaryHref}">View ${esc(page.primaryName)}</a><a class="button button--secondary" href="${page.secondaryHref}">Compare ${esc(page.secondaryName)}</a></div></div>
    </section>
    <section class="proof-band" aria-label="Trust points">${common.trust.map((item) => `<span>${esc(item)}</span>`).join("")}</section>
    <section class="local-seo-band"><p>Eden Health Clubs serves Greenwood Village, DTC, Cherry Hills Village, Centennial, Englewood, Littleton, and south Denver. This page helps Denver-area clients understand community peptide-stack names before booking a consult.</p></section>
    <section class="copy-section copy-section--lead" id="options"><p class="eyebrow">Community-name SEO guide</p><h2>What people usually mean by ${esc(page.communityName)}.</h2><div class="prose"><p>Online, ${esc(page.communityName)} is commonly used around ${esc(page.communityFormula)}. The problem is that names are not regulated, and clinics may use different formulas under the same label.</p><p>Eden's recommendation is simple: use the name to start the conversation, then choose the protocol based on the actual ingredients, your goals, your history, and clinical eligibility.</p></div></section>
    <section class="pricing-section"><div><p class="eyebrow">Best next step</p><h2>Compare Eden's actual protocols.</h2><p>Start with the Eden protocol that most closely matches your goal, then review eligibility with the clinical team.</p></div><a class="button button--primary" href="${page.primaryHref}">View ${esc(page.primaryName)}</a></section>
    <section class="legal-section"><p>Information on this page is educational and is not a substitute for personalized medical advice. Eligibility for peptide protocols is determined during clinical consultation. Results vary by individual. Eden Health Clubs makes no claims to diagnose, treat, cure, or prevent any disease.</p></section>
  </main>
</BaseLayout>
`;
}

function headline(page) {
  if (page.service.includes("Sleep")) return "Sleep is not passive. It is the recovery protocol.";
  if (page.service.includes("Gut")) return "The gut is not separate from recovery.";
  if (page.service.includes("Cognitive") || page.service.includes("Morning") || page.service.includes("Neuro") || page.service.includes("CNS")) return "High output needs a cleaner nervous system.";
  if (page.service.includes("Skin")) return "Skin quality starts under the surface.";
  if (page.service.includes("Telomere") || page.service === "Epitalon") return "Longevity needs a cellular plan.";
  return `${page.service} starts with the right mechanism.`;
}

function capitalize(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

function esc(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
