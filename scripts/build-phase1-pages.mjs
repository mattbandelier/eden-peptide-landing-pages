import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

const areaServed = [
  "Denver",
  "Greenwood Village",
  "Denver Tech Center",
  "Cherry Hills Village",
  "Centennial",
  "Englewood",
  "Littleton"
];

const trustPoints = [
  "Clinician-guided",
  "Personalized protocols",
  "Greenwood Village + Denver",
  "Licensed pharmacy fulfillment"
];

const whyEden = [
  "Real local health club: Greenwood Village, a physical address, and licensed providers on site.",
  "Functional medicine, aesthetics, recovery, and fitness under one roof.",
  "Premium environment designed for the south Denver longevity client.",
  "Clinician-guided protocols with medical director oversight.",
  "Integration with wellness injections, peptide injections, GLP-1 support, BHRT, recovery, fitness, and aesthetics.",
  "Personalized plans built around goals, labs, and the rest of your care."
];

const relatedLinks = [
  ["Functional Medicine", "https://edenhealthclubs.com/functional-medicine/"],
  ["Peptide Injections", "https://edenhealthclubs.com/functional-medicine/peptide-injections/"],
  ["Wellness Injections", "https://edenhealthclubs.com/functional-medicine/wellness-injections/"],
  ["Fitness + Performance", "https://edenhealthclubs.com/fitness-performance/"]
];

const pages = [
  {
    slug: "tesamorelin-greenwood-village",
    file: "tesamorelin-greenwood-village.astro",
    title: "Tesamorelin in Greenwood Village | FDA-Approved Visceral Fat Peptide, Denver",
    description:
      "Tesamorelin at Eden Health Clubs: FDA-approved peptide therapy for visceral fat reduction and IGF-1 support, physician-prescribed in Greenwood Village, Colorado.",
    canonical: "https://edenhealthclubs.com/tesamorelin-greenwood-village/",
    service: "Tesamorelin",
    h1: "Tesamorelin in Greenwood Village / Denver",
    eyebrow: "Peptide Therapy in Denver",
    heroSummary:
      "A clinician-guided protocol with an FDA-approved indication, studied for its role in reducing visceral fat, supporting body composition, and elevating IGF-1 for adults whose midsection is not responding the way it used to.",
    heroKicker: "Designed for visceral-fat and body-composition support:",
    outcomes: [
      "Visceral fat reduction support",
      "IGF-1 and body-composition support",
      "Cognitive clarity support in older adults",
      "Physician-prescribed and clinician-monitored"
    ],
    quickAnswerHeading: "What is Tesamorelin therapy at Eden?",
    quickAnswer:
      "Tesamorelin at Eden Health Clubs is a clinician-guided protocol in Greenwood Village for adults exploring peptide therapy with an FDA-approved indication related to visceral fat, IGF-1, and body composition. Eligibility is determined during consultation with Eden's clinical team and medical director oversight.",
    bestFit:
      "Adults with persistent visceral fat, GLP-1 clients, active-aging clients, and metabolic-health clients who want physician-guided care.",
    leadEyebrow: "Visceral-fat peptide therapy",
    leadHeading: "The visceral fat peptide. Backed by an FDA approval.",
    leadParagraphs: [
      "Visceral fat, the deep organ-wrapping kind, is not the same as the layer you can pinch. It is metabolically active, harder to lose, and often the kind that GLP-1 medications, training, and diet leave behind even when overall weight drops.",
      "Tesamorelin is the protocol Eden considers when visceral fat is the specific conversation. It is a synthetic analog of growth-hormone-releasing hormone with an FDA-approved indication, originally for HIV-associated lipodystrophy.",
      "Clinical interest today is broader, including body-composition support, IGF-1 elevation, and active-aging care. At Eden, the decision starts with consultation, labs when appropriate, and clinician review."
    ],
    whatHeading: "What Is Tesamorelin?",
    whatParagraphs: [
      "Tesamorelin is a synthetic GHRH analog that supports the body's own growth-hormone signaling through the anterior pituitary. It is FDA-approved under the brand name Egrifta for HIV-associated lipodystrophy.",
      "At Eden, Tesamorelin is prescribed only after clinical consultation, compounded in the U.S. when appropriate, and monitored with labs and follow-up so the protocol fits your goals and risk profile."
    ],
    whoHeading: "For adults who need a more specific body-composition conversation.",
    who: [
      "Adults with persistent visceral fat that has not responded to standard interventions.",
      "GLP-1 clients whose midsection has not shifted at the rate the rest of their body has.",
      "Active-aging clients focused on body composition and IGF-1.",
      "Clients with metabolic concerns under functional medicine care.",
      "Adults wanting cognitive-clarity support with a GH-axis mechanism.",
      "Clients who want physician oversight and structured follow-up."
    ],
    ingredientsHeading: "One peptide with a cleaner regulatory story.",
    ingredientClass: "ingredient-grid ingredient-grid--solo",
    ingredients: [
      {
        tag: "FDA-Approved GHRH Analog",
        name: "Tesamorelin",
        description:
          "A synthetic GHRH analog. FDA-approved as Egrifta for HIV-associated lipodystrophy. Studied for its role in reducing visceral fat, elevating IGF-1, supporting body composition, and supporting cognitive clarity in older adults."
      }
    ],
    callout:
      "Why Tesamorelin matters. Tesamorelin has a clearer regulatory story than many wellness peptides because it carries an FDA-approved indication. That does not make it right for every client, but it does make it an important option when the visceral-fat or IGF-1 conversation is the right one.",
    stepTwo:
      "Your clinician determines whether Tesamorelin is appropriate. Baseline labs commonly include IGF-1 and metabolic markers, and body-composition imaging may be requested when visceral fat is the lead concern.",
    urgencyHeading: "Visceral fat does not reverse on its own.",
    urgencyCards: [
      "The kind of fat Tesamorelin is studied for is metabolically active, hormonally tangled, and different from ordinary weight-loss frustration.",
      "The clients who shift it are usually the ones who get specific about the mechanism instead of trying harder at a general approach.",
      "Consult availability with Eden's clinical team is limited each week, and personalized protocols require clinical review."
    ],
    consultHeading: "Start with labs, body composition, and the right mechanism.",
    consultCopy:
      "Eden will review your body-composition goals, GLP-1 history if relevant, medications, health history, IGF-1, metabolic markers, and whether Tesamorelin is clinically appropriate.",
    formName: "Tesamorelin Denver Lead Form",
    cta: "Request My Tesamorelin Consultation",
    alternateName: ["Egrifta", "Tesamorelin Acetate"],
    medicalName: "Tesamorelin Therapy",
    schemaDescription:
      "Physician-guided Tesamorelin therapy consultation for visceral fat, IGF-1, and body-composition support in Greenwood Village.",
    faq: [
      ["What is Tesamorelin?", "Tesamorelin is a synthetic GHRH analog that supports the body's own growth-hormone signaling and carries an FDA-approved indication for HIV-associated lipodystrophy."],
      ["Is Tesamorelin really FDA-approved?", "Yes. Tesamorelin is FDA-approved under the brand name Egrifta for HIV-associated lipodystrophy. Eden still determines eligibility through consultation and clinical review."],
      ["Is this the same as Ozempic or other GLP-1s?", "No. Tesamorelin has a different mechanism than GLP-1 medications. For some clients, the conversations are complementary, especially when visceral fat remains a concern."],
      ["Can I take Tesamorelin while on a GLP-1?", "Often, yes, but Eden reviews your full medication list, labs, goals, and prescribing history before recommending whether it belongs in your plan."],
      ["How long until I notice changes?", "Visceral-fat and body-composition changes usually require a longer timeline. IGF-1 changes may be seen earlier on labs. Individual response varies."],
      ["Is this safe long term?", "Long-term fit depends on your history, labs, risk factors, and response. Eden monitors eligibility and follow-up rather than treating Tesamorelin like an off-the-shelf product."],
      ["What labs are needed?", "Your clinician may request IGF-1, metabolic markers, and other labs based on your history. Body-composition imaging may be considered when visceral fat is the lead concern."],
      ["How is eligibility determined?", "Through clinical consultation, medical history, medication review, and labs when appropriate."],
      ["Will my insurance cover it?", "Many Eden protocols are paid out of pocket. Pricing and fulfillment details are reviewed during your consultation."],
      ["What happens after the consult?", "If you are a fit, your clinician designs the protocol, reviews fulfillment, and sets follow-up expectations before you start."]
    ],
    legal:
      "Information on this page is educational and is not a substitute for personalized medical advice. Eligibility for Tesamorelin is determined during clinical consultation. Results vary by individual. Tesamorelin has an FDA-approved indication, but not every use, client goal, or compounded form is FDA-approved. Eden Health Clubs makes no claims to diagnose, treat, cure, or prevent any disease."
  },
  {
    slug: "bpc-157-greenwood-village",
    file: "bpc-157-greenwood-village.astro",
    title: "BPC-157 in Greenwood Village | Gut & Tissue Repair Peptide, Denver",
    description:
      "BPC-157 at Eden Health Clubs: clinician-guided peptide therapy for gut, tendon, ligament, and tissue repair support in Greenwood Village, Colorado.",
    canonical: "https://edenhealthclubs.com/bpc-157-greenwood-village/",
    service: "BPC-157",
    h1: "BPC-157 in Greenwood Village / Denver",
    eyebrow: "Peptide Therapy in Denver",
    heroSummary:
      "A foundational tissue-repair peptide in functional medicine, studied for its role in supporting the gut lining, tendon and ligament repair, nerve regeneration, and localized tissue recovery.",
    heroKicker: "Designed for focused repair support:",
    outcomes: [
      "Gut lining and digestive comfort support",
      "Tendon, ligament, and joint recovery support",
      "Nerve repair support",
      "Personalized by an Eden clinician"
    ],
    quickAnswerHeading: "What is BPC-157 peptide therapy at Eden?",
    quickAnswer:
      "BPC-157 at Eden Health Clubs is a clinician-guided peptide protocol in Greenwood Village for adults seeking gut lining, soft-tissue, tendon, ligament, and nerve-repair support under medical oversight.",
    bestFit:
      "Active adults, post-injury clients, gut-focused functional medicine clients, and clients considering recovery stacks containing BPC-157.",
    leadEyebrow: "Gut + tissue repair",
    leadHeading: "The foundation peptide of recovery and gut work.",
    leadParagraphs: [
      "BPC-157 is the peptide that started many of the modern recovery and gut conversations in functional medicine. It is derived from a protein found in gastric juice, which is part of why clinicians discuss it in both gut and tissue-repair contexts.",
      "At Eden, BPC-157 may be considered alone for a focused concern, such as gut barrier support, a tendon flare, or a nerve-repair conversation, or as the foundation peptide inside larger recovery protocols.",
      "The goal is not internet self-experimentation. It is a clinician-guided plan that fits your injury history, training load, gut symptoms, medications, and the rest of your Eden care."
    ],
    whatHeading: "What Is BPC-157?",
    whatParagraphs: [
      "BPC-157 stands for Body Protection Compound 157. It is a 15-amino-acid peptide studied for its role in supporting the gut lining, tendon and ligament repair, nerve regeneration, blood-vessel signaling, and localized tissue recovery.",
      "At Eden, BPC-157 is not sold as a research peptide or supplement. Eligibility is determined during consultation and fulfillment is handled through licensed medical channels when prescribed."
    ],
    whoHeading: "For clients who want focused repair support without guessing online.",
    who: [
      "Active adults with tendon, ligament, joint, or chronic soft-tissue issues.",
      "Clients with gut barrier symptoms, digestive discomfort, or gut-driven inflammation concerns.",
      "Post-injury or post-procedure clients under clinical guidance.",
      "Functional medicine clients addressing gut and inflammatory load.",
      "Clients with nerve-repair concerns under provider review.",
      "Clients who want clinician oversight around peptide therapy."
    ],
    ingredientsHeading: "The foundational repair peptide.",
    ingredientClass: "ingredient-grid ingredient-grid--solo",
    ingredients: [
      {
        tag: "Tissue & Gut Repair",
        name: "BPC-157",
        description:
          "Body Protection Compound 157. A 15-amino-acid peptide derived from a gastric-protein fragment. Studied for its role in supporting the gut lining, tendon and ligament repair, nerve regeneration, blood-vessel signaling, and localized tissue recovery."
      }
    ],
    callout:
      "Used alone or as part of a stack. BPC-157 is prescribed individually for focused gut, tendon, or nerve cases, or as the foundation peptide in Eden recovery stacks including Wolverine, KLOW, Structural Repair, and GLP-1 Support.",
    stepTwo:
      "Your clinician determines whether BPC-157 is appropriate and whether a focused protocol or a broader stack is the better fit for your history, goals, medications, and training load.",
    urgencyHeading: "Small repair problems get expensive when they become chronic.",
    urgencyCards: [
      "A tendon flare, gut irritation, or nagging soft-tissue issue can quietly become the thing that limits training, travel, sleep, and recovery.",
      "BPC-157 is often the first peptide conversation because it sits at the intersection of gut, tissue, and recovery support.",
      "Consult availability with Eden's clinical team is limited each week, and personalized protocols require clinical review."
    ],
    consultHeading: "Start with the specific tissue, gut, or recovery problem.",
    consultCopy:
      "Eden will review what you are trying to repair, your training or procedure history, gut symptoms, medications, and whether BPC-157 alone or a broader stack is the better path.",
    formName: "BPC-157 Denver Lead Form",
    cta: "Request My BPC-157 Consultation",
    alternateName: ["Body Protection Compound 157", "BPC 157"],
    medicalName: "BPC-157 Peptide Protocol",
    schemaDescription:
      "Clinician-guided BPC-157 peptide consultation for gut lining, tendon, ligament, tissue, and recovery support in Greenwood Village.",
    faq: [
      ["What is BPC-157?", "BPC-157 is a 15-amino-acid peptide studied for its role in supporting the gut lining, tendon and ligament repair, nerve regeneration, and localized tissue recovery."],
      ["How is eligibility determined?", "Through consultation. Eden reviews your goals, health history, medications, training load, and whether labs or provider review are needed before recommending a protocol."],
      ["Is BPC-157 prescribed?", "Yes. Eden uses clinician-guided protocols and licensed medical oversight. It is not sold as a research compound or over-the-counter supplement."],
      ["Can BPC-157 be part of a stack?", "Yes. BPC-157 is a foundation ingredient in several Eden protocols, including Wolverine, KLOW, Structural Repair, and GLP-1 Support."],
      ["Is BPC-157 banned for athletes?", "BPC-157 is on the WADA/USADA prohibited list. Athletes subject to drug testing should review this carefully with their clinician before starting."],
      ["How soon do people notice changes?", "Some clients report changes in comfort or recovery early, while structural repair support usually requires a longer timeline. Individual response varies."],
      ["Is this available in Greenwood Village?", "Yes. Eden serves Greenwood Village, DTC, Cherry Hills Village, Centennial, Englewood, Littleton, and the broader south Denver metro."],
      ["Is it FDA-approved?", "BPC-157 is not an FDA-approved drug. It may be compounded when prescribed by a licensed medical provider, and eligibility is determined during consultation."],
      ["Is this the same as ordering peptides online?", "No. Online peptide sites often sell research compounds without provider review. Eden uses clinician-guided care and licensed medical channels when prescribed."],
      ["What happens after the consult?", "If you are a fit, your clinician designs the protocol, reviews fulfillment, and sets follow-up expectations."]
    ]
  },
  {
    slug: "sermorelin-greenwood-village",
    file: "sermorelin-greenwood-village.astro",
    title: "Sermorelin in Greenwood Village | GHRH Peptide Therapy, Denver",
    description:
      "Sermorelin at Eden Health Clubs: clinician-guided GHRH peptide therapy for lean tissue, sleep, and recovery support in Greenwood Village, Colorado.",
    canonical: "https://edenhealthclubs.com/sermorelin-greenwood-village/",
    service: "Sermorelin",
    h1: "Sermorelin in Greenwood Village / Denver",
    eyebrow: "Peptide Therapy in Denver",
    heroSummary:
      "A clinician-guided peptide studied for its role in supporting the body's own growth hormone pulse: the entry point to GH-axis work without crossing into synthetic HGH.",
    heroKicker: "Designed for GH-axis support:",
    outcomes: [
      "Lean tissue and body composition support",
      "Sleep depth and recovery support",
      "Skin quality and collagen support",
      "Personalized by an Eden clinician"
    ],
    quickAnswerHeading: "What is Sermorelin therapy at Eden?",
    quickAnswer:
      "Sermorelin at Eden Health Clubs is a clinician-guided GHRH peptide protocol in Greenwood Village for adults exploring GH-axis support, lean tissue, sleep, recovery, and body-composition care.",
    bestFit:
      "Active-aging clients, BHRT clients, recovery-focused adults, and clients comparing Sermorelin with CJC-1295 / Ipamorelin.",
    leadEyebrow: "GH-axis entry point",
    leadHeading: "Work with your endocrine system, not against it.",
    leadParagraphs: [
      "Synthetic HGH replaces your body's growth hormone with an outside hormone. Sermorelin supports your body's own GH-axis: the pituitary, the pulse, the rhythm.",
      "It is the entry point to growth-hormone work for adults who want the lean tissue, sleep, and recovery conversation without jumping directly into stronger GH-axis pairings.",
      "At Eden, Sermorelin is prescribed as a personalized protocol after clinical consultation and may also appear as a component of broader Eden stacks."
    ],
    whatHeading: "What Is Sermorelin?",
    whatParagraphs: [
      "Sermorelin is a growth-hormone-releasing-hormone analog studied for its role in supporting the body's own growth-hormone pulse.",
      "At Eden, Sermorelin is used as a medically guided entry point to GH-axis work, with labs, history, goals, and follow-up determining whether it fits your plan."
    ],
    whoHeading: "For clients considering GH-axis support with a measured first step.",
    who: [
      "Active-aging clients addressing lean tissue, sleep, and recovery.",
      "BHRT clients adding GH-axis support under provider guidance.",
      "Athletes focused on long-term recovery and body composition who are not subject to banned-substance testing.",
      "Clients with documented GH-axis concerns.",
      "Clients wanting an entry point before considering CJC-1295 / Ipamorelin.",
      "Clients who want clinician oversight instead of internet protocols."
    ],
    ingredientsHeading: "The entry-point GH-axis peptide.",
    ingredientClass: "ingredient-grid ingredient-grid--solo",
    ingredients: [
      {
        tag: "GHRH Analog",
        name: "Sermorelin",
        description:
          "A growth-hormone-releasing-hormone analog studied for its role in supporting the body's own growth hormone pulse. Used alone or as a component of broader clinician-guided protocols."
      }
    ],
    callout:
      "Sermorelin or CJC-1295 / Ipamorelin? Sermorelin is the entry point to GH-axis work: a simpler, gentler pulse. CJC-1295 / Ipamorelin is the stronger pairing for clients ready for a more pronounced overnight signal. Eden recommends based on goals, labs, and clinical fit.",
    stepTwo:
      "Your clinician determines whether Sermorelin is appropriate and whether it should be considered alone or compared with CJC-1295 / Ipamorelin based on your goals and labs.",
    urgencyHeading: "The GH-axis drift is easier to address before it becomes your new baseline.",
    urgencyCards: [
      "Sleep depth, recovery, lean tissue, and skin quality can shift gradually until the change feels normal.",
      "Sermorelin gives Eden a measured entry point for clients who want to explore GH-axis support with clinical oversight.",
      "Consult availability with Eden's clinical team is limited each week, and personalized protocols require clinical review."
    ],
    consultHeading: "Start with your sleep, recovery, labs, and goals.",
    consultCopy:
      "Eden will review sleep, recovery, body composition, hormone history, medications, and whether Sermorelin or another GH-axis path is the better fit.",
    formName: "Sermorelin Denver Lead Form",
    cta: "Request My Sermorelin Consultation",
    alternateName: ["GHRH 1-29", "Sermorelin Acetate"],
    medicalName: "Sermorelin Peptide Protocol",
    schemaDescription:
      "Clinician-guided Sermorelin peptide consultation for GH-axis, lean tissue, sleep, and recovery support in Greenwood Village.",
    faq: [
      ["What is Sermorelin?", "Sermorelin is a GHRH analog studied for its role in supporting the body's own growth-hormone pulse."],
      ["Is Sermorelin the same as HGH?", "No. HGH is synthetic human growth hormone. Sermorelin supports signaling upstream in the body's own GH-axis."],
      ["How is eligibility determined?", "Through consultation, medical history, medication review, and labs when appropriate."],
      ["How is Sermorelin different from CJC-1295 / Ipamorelin?", "Sermorelin is often the entry point to GH-axis work. CJC-1295 / Ipamorelin is a stronger pairing for clients ready for a more pronounced overnight signal."],
      ["Can Sermorelin stack with BHRT?", "Often, yes. Eden reviews hormone therapy, labs, medications, and goals before recommending how protocols fit together."],
      ["Is Sermorelin banned for athletes?", "Growth-hormone secretagogues may be prohibited in tested sport. Athletes subject to testing should review this with their clinician."],
      ["How soon do people notice changes?", "Sleep and recovery changes may appear before body-composition or skin-quality shifts. Individual response varies."],
      ["Is it FDA-approved?", "Sermorelin is not an FDA-approved drug. It may be compounded when prescribed by a licensed medical provider."],
      ["Is this available in Greenwood Village?", "Yes. Eden serves Greenwood Village, DTC, Cherry Hills Village, Centennial, Englewood, Littleton, and the broader south Denver metro."],
      ["What happens after the consult?", "If you are a fit, Eden designs the protocol, reviews fulfillment, and sets follow-up expectations."]
    ]
  },
  {
    slug: "nad-plus-greenwood-village",
    file: "nad-plus-greenwood-village.astro",
    title: "NAD+ in Greenwood Village | IV & Injectable Therapy, Denver",
    description:
      "NAD+ therapy at Eden Health Clubs: clinician-guided support for cellular energy, longevity, and cognitive clarity in Greenwood Village, Colorado.",
    canonical: "https://edenhealthclubs.com/nad-plus-greenwood-village/",
    service: "NAD+",
    h1: "NAD+ in Greenwood Village / Denver",
    eyebrow: "Wellness Therapies in Denver",
    heroSummary:
      "A coenzyme central to cellular energy production and DNA repair, delivered as IV therapy or injectable support under clinician guidance for adults whose energy, recovery, and clarity are not matching their effort.",
    heroKicker: "Designed for cellular support:",
    outcomes: [
      "Cellular energy and mitochondrial support",
      "Longevity-focused care",
      "Recovery and cognitive clarity support",
      "Personalized by an Eden clinician"
    ],
    quickAnswerHeading: "What is NAD+ therapy at Eden?",
    quickAnswer:
      "NAD+ therapy at Eden Health Clubs is a clinician-guided wellness therapy in Greenwood Village for cellular energy, longevity, recovery, and cognitive-clarity support. NAD+ is a coenzyme, not a peptide.",
    bestFit:
      "Longevity-focused clients, functional medicine clients, active-aging adults, and clients building cellular-support protocols.",
    leadEyebrow: "Cellular coenzyme therapy",
    leadHeading: "Energy starts where most therapies do not reach.",
    leadParagraphs: [
      "Most fatigue protocols stop above the cell. Caffeine, adaptogens, and sleep hygiene can help, but they do not reach the part of the system where energy is actually made.",
      "NAD+ is the coenzyme that makes cellular energy production possible. It also supports cellular cleanup and DNA-repair pathways that longevity research has pointed to for years.",
      "At Eden, NAD+ is delivered as IV therapy or injectable support under clinician guidance as part of personalized recovery, longevity, and cellular-health protocols."
    ],
    whatHeading: "What Is NAD+?",
    whatParagraphs: [
      "NAD+ stands for nicotinamide adenine dinucleotide. It is a coenzyme central to cellular energy production, mitochondrial function, DNA repair, and cellular cleanup.",
      "NAD+ is not a peptide. Eden positions it as a wellness and cellular-support therapy that can be used alone or layered into functional medicine, IV therapy, longevity, and recovery plans."
    ],
    whoHeading: "For clients building a cellular-energy layer into their care.",
    who: [
      "Longevity-focused clients.",
      "Active-aging clients addressing energy and cellular health.",
      "Athletes optimizing recovery and cellular function.",
      "Functional medicine clients.",
      "Clients with cognitive-energy concerns.",
      "Clients building a longevity protocol that may include Tesamorelin, Epitalon, or Glutathione."
    ],
    ingredientsHeading: "A coenzyme at the center of cellular energy.",
    ingredientClass: "ingredient-grid ingredient-grid--solo",
    ingredients: [
      {
        tag: "Cellular Coenzyme",
        name: "NAD+",
        description:
          "Nicotinamide adenine dinucleotide. A coenzyme central to cellular energy production, mitochondrial function, DNA repair, and longevity-research pathways. Delivered at Eden as IV therapy or injectable support under clinician guidance."
      }
    ],
    callout:
      "NAD+ shows up in many Eden longevity protocols. It pairs naturally with glutathione for antioxidant capacity, Epitalon for cellular-aging conversations, Tesamorelin for body-composition support, and IV therapy for recovery days.",
    stepTwo:
      "Your clinician determines whether NAD+ is appropriate and whether IV therapy, injectable support, or a broader wellness protocol fits your goals and health history.",
    urgencyHeading: "Cellular energy is the quiet bottleneck.",
    urgencyCards: [
      "When cellular energy is low, everything feels more expensive: training, travel, focus, recovery, and even the habits you already know help.",
      "NAD+ gives Eden a cellular-support option that can stand alone or layer into longevity and recovery plans.",
      "Consult availability with Eden's clinical team is limited each week, and personalized protocols require clinical review."
    ],
    consultHeading: "Start with your energy, recovery, and longevity goals.",
    consultCopy:
      "Eden will review your energy, recovery, cognitive clarity, medications, health history, and whether NAD+ makes sense as IV therapy, injectable support, or part of a broader wellness plan.",
    formName: "NAD+ Denver Lead Form",
    cta: "Request My NAD+ Consultation",
    alternateName: ["Nicotinamide Adenine Dinucleotide", "NAD Plus"],
    medicalName: "NAD+ Wellness Therapy",
    schemaDescription:
      "Clinician-guided NAD+ wellness therapy consultation for cellular energy, longevity, recovery, and cognitive clarity support in Greenwood Village.",
    faq: [
      ["What is NAD+?", "NAD+ is nicotinamide adenine dinucleotide, a coenzyme involved in cellular energy production, mitochondrial function, DNA repair, and cellular cleanup."],
      ["Is NAD+ a peptide?", "No. NAD+ is not a peptide. Eden positions NAD+ as a wellness and cellular-support therapy."],
      ["Is NAD+ available as IV therapy?", "Yes. Eden may offer NAD+ through IV therapy or injectable support depending on your goals, eligibility, and provider recommendation."],
      ["Who is NAD+ for?", "It is often considered by longevity-focused clients, active-aging adults, functional medicine clients, and people looking for cellular-energy and recovery support."],
      ["Can NAD+ stack with other Eden protocols?", "Often, yes. Eden may pair NAD+ with IV therapy, glutathione, peptide protocols, recovery care, or functional medicine plans when appropriate."],
      ["How soon do people notice changes?", "Some clients report energy or clarity changes quickly, while deeper recovery and longevity goals require a longer plan. Individual response varies."],
      ["Is NAD+ FDA-approved?", "NAD+ is not presented as an FDA-approved drug on this page. Eligibility and fit are determined during clinician consultation."],
      ["Is this available in Greenwood Village?", "Yes. Eden serves Greenwood Village, DTC, Cherry Hills Village, Centennial, Englewood, Littleton, and the broader south Denver metro."],
      ["Will NAD+ replace sleep, nutrition, or training?", "No. NAD+ is designed to support a larger care plan, not replace the fundamentals Eden will still review with you."],
      ["What happens after the consult?", "If you are a fit, Eden recommends the delivery format, timeline, and follow-up cadence that fits your plan."]
    ],
    whyHeading: "Eden is not a generic drip bar. It is a medical wellness club.",
    legal:
      "Information on this page is educational and is not a substitute for personalized medical advice. Eligibility for NAD+ is determined during clinical consultation. Results vary by individual. NAD+ therapy is personalized wellness support and is not intended to diagnose, treat, cure, or prevent any disease. Statements on this page have not been evaluated by the Food and Drug Administration."
  },
  {
    slug: "the-skin-and-glow-greenwood-village",
    file: "the-skin-and-glow-greenwood-village.astro",
    title: "The Skin & Glow in Greenwood Village | KPV + Sermorelin + Glutathione, Denver",
    description:
      "The Skin & Glow at Eden Health Clubs: clinician-guided protocol for skin, collagen, and complexion. KPV, Sermorelin, and Glutathione in Greenwood Village.",
    canonical: "https://edenhealthclubs.com/the-skin-and-glow-greenwood-village/",
    service: "The Skin & Glow",
    h1: "The Skin & Glow in Greenwood Village / Denver",
    eyebrow: "Aesthetic Peptide Therapy in Denver",
    heroSummary:
      "A clinician-guided three-component protocol for adults whose skin is not matching the work they are already doing topically, addressing inflammatory balance, GH-pulse-driven collagen support, and antioxidant capacity from the inside.",
    heroKicker: "Designed for inside-out skin support:",
    outcomes: [
      "Skin redness and inflammatory comfort support",
      "Collagen and elasticity support via overnight GH pulse",
      "Antioxidant capacity and skin clarity support",
      "Personalized by an Eden clinician"
    ],
    quickAnswerHeading: "What is The Skin & Glow at Eden?",
    quickAnswer:
      "The Skin & Glow at Eden Health Clubs is a clinician-guided protocol in Greenwood Village combining KPV, Sermorelin, and Glutathione for skin inflammatory comfort, collagen-supporting GH-axis care, and antioxidant capacity.",
    bestFit:
      "Aesthetic-forward clients, post-procedure clients, active-aging adults, and Eden aesthetics clients who want an inside-out layer.",
    leadEyebrow: "Skin + collagen + antioxidant support",
    leadHeading: "Your skin keeps the receipts.",
    leadParagraphs: [
      "Most skincare does not reach the systems underneath. Inflammatory load drives reactive skin. Collagen production depends on the body's overnight GH pulse, which drifts with age. Oxidative stress can show up as dullness, uneven tone, and slow recovery.",
      "The Skin & Glow is Eden's clinician-guided protocol for clients who want the inside-out conversation. Three components, three roles: KPV supports inflammatory balance, Sermorelin supports the overnight GH pulse collagen depends on, and Glutathione supports antioxidant capacity.",
      "This page is separate from Eden's GLOW Stack page. The Skin & Glow uses the exact Eden clinical-brief formula: KPV, Sermorelin, and Glutathione."
    ],
    whatHeading: "What Is The Skin & Glow?",
    whatParagraphs: [
      "The Skin & Glow combines KPV, Sermorelin, and Glutathione. Each is studied for a distinct role in skin health: inflammatory balance, collagen-supporting GH pulse, and antioxidant capacity.",
      "Together they address three systems most topical skincare cannot reach. Eligibility is determined during consultation and the protocol is personalized around your skin goals, aesthetic plan, history, and provider review."
    ],
    whoHeading: "For clients who want skin support beyond the surface.",
    who: [
      "Aesthetic-forward clients in their 30s to 60s focused on skin quality.",
      "Clients with reactive, redness-prone, or sensitive-feeling skin concerns.",
      "Post-procedure clients wanting tissue-supportive recovery after aesthetic work.",
      "Active-aging clients building a skin-and-longevity layer.",
      "Clients combining peptide and aesthetic care under one team.",
      "Clients who want clinician oversight."
    ],
    ingredientsHeading: "Three systems behind a better skin response.",
    ingredientClass: "ingredient-grid ingredient-grid--three",
    ingredients: [
      {
        tag: "Skin Inflammatory Comfort",
        name: "KPV",
        description:
          "A short tripeptide studied for its role in stabilizing mast cells, supporting histamine-related comfort, and supporting inflammatory balance in the skin and gut."
      },
      {
        tag: "GH Pulse & Collagen",
        name: "Sermorelin",
        description:
          "A growth-hormone-releasing-hormone analog studied for its role in supporting the body's own overnight GH pulse, which collagen production and skin elasticity depend on."
      },
      {
        tag: "Master Antioxidant",
        name: "Glutathione",
        description:
          "A tripeptide antioxidant studied for its role in detoxification, oxidative-stress balance, and skin clarity. It supports the antioxidant capacity that protects the rest of the protocol."
      }
    ],
    callout:
      "Why these three? Skin concerns are often three problems wearing one face: inflammatory noise, collagen-supporting GH drift, and oxidative-stress load. The Skin & Glow addresses all three under one structured plan.",
    stepTwo:
      "Your clinician determines whether The Skin & Glow is appropriate and how it should be coordinated with your aesthetic treatments, skin history, medications, and goals.",
    urgencyHeading: "Skin repair runs on a real timeline.",
    urgencyCards: [
      "Skin feel and reactivity can shift earlier, but collagen and tone are slower biological processes.",
      "The clients who get the most from inside-out skin protocols usually start before concerns become years-deep.",
      "Consult availability with Eden's clinical team is limited each week, and personalized protocols require clinical review."
    ],
    consultHeading: "Start with your skin goals and aesthetic plan.",
    consultCopy:
      "Eden will review your skin goals, recent or planned aesthetic treatments, medical history, medications, and whether The Skin & Glow is the right inside-out layer.",
    formName: "The Skin and Glow Denver Lead Form",
    cta: "Request My Skin & Glow Consultation",
    alternateName: ["GLOW Stack", "Skin and Glow Peptide Stack", "Dermatological Peptide Protocol"],
    medicalName: "The Skin & Glow Protocol",
    schemaDescription:
      "Clinician-guided Skin & Glow protocol combining KPV, Sermorelin, and Glutathione for skin, collagen, complexion, and antioxidant support in Greenwood Village.",
    faq: [
      ["What is The Skin & Glow?", "The Skin & Glow is Eden's clinician-guided protocol combining KPV, Sermorelin, and Glutathione for inside-out skin, collagen, inflammatory-balance, and antioxidant support."],
      ["Is this the same as the GLOW Stack I have seen elsewhere?", "Not exactly. Community GLOW formulas often refer to BPC-157, TB-500, and GHK-Cu. Eden's The Skin & Glow uses KPV, Sermorelin, and Glutathione per Eden's clinical brief."],
      ["Will this replace my topicals or aesthetic treatments?", "No. The Skin & Glow is designed to complement topical skincare and aesthetic treatments, not replace them."],
      ["Can it stack with injectables, lasers, or microneedling?", "Often, yes. Eden reviews timing, compatibility, and your full aesthetic plan during consultation."],
      ["How soon do people notice changes?", "Skin feel and reactivity may shift within weeks, while visible texture, tone, and collagen-related changes usually take longer. Individual response varies."],
      ["How is eligibility determined?", "Through consultation, medical history, medication review, skin goals, and provider review."],
      ["Is it prescribed?", "When prescription components are appropriate, Eden uses licensed medical oversight and licensed pharmacy fulfillment."],
      ["Is it FDA-approved?", "The components in this protocol are not presented as FDA-approved drugs for this use. Eligibility is determined during consultation."],
      ["Is this available in Greenwood Village?", "Yes. Eden serves Greenwood Village, DTC, Cherry Hills Village, Centennial, Englewood, Littleton, and the broader south Denver metro."],
      ["What happens after the consult?", "If you are a fit, Eden designs the protocol, coordinates it with your aesthetic plan, and sets follow-up expectations."]
    ]
  }
];

for (const page of pages) {
  await writeFile(resolve(root, "src/pages", page.file), renderPage(page), "utf8");
  console.log(`Wrote src/pages/${page.file}`);
}

function renderPage(page) {
  const faqItems = page.faq.map(([question, answer]) => ({ question, answer }));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "HealthClub"],
        "@id": "https://edenhealthclubs.com/#medicalbusiness",
        name: "Eden Health Clubs",
        url: "https://edenhealthclubs.com/",
        telephone: "+1-720-605-7678",
        priceRange: "$$$",
        logo: "https://edenhealthclubs.com/wp-content/uploads/2025/07/eden-health-club-logo-transparent.png",
        image: "https://edenhealthclubs.com/wp-content/uploads/2025/07/edenhealth-hero-video-poster.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5990 S University Blvd",
          addressLocality: "Greenwood Village",
          addressRegion: "CO",
          postalCode: "80121",
          addressCountry: "US"
        },
        areaServed,
        medicalSpecialty: ["Functional Medicine", "Wellness", "Longevity", "Recovery"]
      },
      {
        "@type": "WebPage",
        "@id": `${page.canonical}#webpage`,
        url: page.canonical,
        name: page.h1,
        description: page.schemaDescription,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://edenhealthclubs.com/#website",
          name: "Eden Health Clubs",
          url: "https://edenhealthclubs.com/"
        },
        about: {
          "@id": `${page.canonical}#service`
        },
        primaryImageOfPage: "https://edenhealthclubs.com/wp-content/uploads/2025/07/edenhealth-hero-video-poster.jpg",
        inLanguage: "en-US"
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${page.canonical}#service`,
        name: page.medicalName,
        alternateName: page.alternateName,
        serviceType: page.service === "NAD+" ? "Clinician-guided wellness therapy consultation" : "Clinician-guided peptide protocol consultation",
        provider: {
          "@id": "https://edenhealthclubs.com/#medicalbusiness"
        },
        areaServed: [
          { "@type": "City", name: "Denver" },
          { "@type": "City", name: "Greenwood Village" },
          { "@type": "Place", name: "Denver Tech Center" },
          { "@type": "City", name: "Cherry Hills Village" },
          { "@type": "City", name: "Centennial" },
          { "@type": "City", name: "Englewood" },
          { "@type": "City", name: "Littleton" }
        ],
        description: page.schemaDescription
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${page.canonical}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://edenhealthclubs.com/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Functional Medicine",
            item: "https://edenhealthclubs.com/functional-medicine/"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.service,
            item: page.canonical
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${page.canonical}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  };

  return `---
import LeadForm from "@/components/LeadForm.astro";
import BaseLayout from "@/layouts/BaseLayout.astro";

const faqItems = ${JSON.stringify(faqItems, null, 2)};
const schema = ${JSON.stringify(schema, null, 2)};
---

<BaseLayout
  title=${JSON.stringify(page.title)}
  description=${JSON.stringify(page.description)}
  canonical=${JSON.stringify(page.canonical)}
>
  <script is:inline type="application/ld+json" set:html={JSON.stringify(schema)} />

  <main class="lp-detail">
    <section class="hero hero--glow">
      <video class="hero__media" autoplay muted loop playsinline aria-hidden="true">
        <source src="https://edenhealthclubs.com/wp-content/uploads/2025/07/edenhealth-hero-video.mp4" type="video/mp4" />
      </video>
      <nav class="mobile-topbar" aria-label="Page">
        <img
          class="site-logo"
          src="/assets/eden-health-club-logo-transparent.png"
          alt="Eden Health Club"
          width="1080"
          height="1080"
        />
        <a href="#consult-form">Consult</a>
      </nav>
      <div class="hero__overlay">
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1>${escapeHtml(page.h1)}</h1>
        <p class="hero__summary">${escapeHtml(page.heroSummary)}</p>
        <div class="hero__expect">
          <h3>${escapeHtml(page.heroKicker)}</h3>
          <ul>
${page.outcomes.map((item) => `            <li>${escapeHtml(item)}</li>`).join("\n")}
          </ul>
        </div>
        <div class="hero__actions" aria-label="Primary actions">
          <a class="button button--primary" href="#consult-form">Book a Consultation</a>
          <a class="button button--secondary" href="#how">See How It Works</a>
        </div>
        <p class="hero__credibility">
          Clinician-guided care with medical director oversight · Compounded in the U.S. by a licensed pharmacy partner
        </p>
      </div>
    </section>

    <section class="proof-band" aria-label="Trust points">
${trustPoints.map((item) => `      <span>${escapeHtml(item)}</span>`).join("\n")}
    </section>

    <section class="local-seo-band" aria-label="Local service area">
      <p>
        Eden Health Clubs serves Greenwood Village, the Denver Tech Center (DTC), Cherry
        Hills Village, Centennial, Englewood, Littleton, and the broader south Denver
        metro. ${escapeHtml(page.service)} is available through Eden's Greenwood Village health club or
        via telehealth for established Eden patients in Colorado.
      </p>
    </section>

    <section class="quick-answer-section" aria-labelledby="quick-answer-heading">
      <div>
        <p class="eyebrow">Quick answer</p>
        <h2 id="quick-answer-heading">${escapeHtml(page.quickAnswerHeading)}</h2>
      </div>
      <div class="quick-answer-card">
        <p>${escapeHtml(page.quickAnswer)}</p>
        <ul>
          <li><strong>Location:</strong> Greenwood Village, serving Denver, DTC, Cherry Hills, Centennial, Englewood, and Littleton.</li>
          <li><strong>Best fit:</strong> ${escapeHtml(page.bestFit)}</li>
          <li><strong>Care model:</strong> Eden medical wellness club consult, licensed provider review, pharmacy fulfillment when prescribed.</li>
        </ul>
      </div>
    </section>

    <section class="copy-section copy-section--lead">
      <p class="eyebrow">${escapeHtml(page.leadEyebrow)}</p>
      <h2>${escapeHtml(page.leadHeading)}</h2>
      <div class="prose">
${page.leadParagraphs.map((paragraph) => `        <p>${escapeHtml(paragraph)}</p>`).join("\n")}
      </div>
    </section>

    <section class="copy-section copy-section--split">
      <div>
        <p class="eyebrow">What it is</p>
        <h2>${escapeHtml(page.whatHeading)}</h2>
      </div>
      <div class="prose prose--tight">
${page.whatParagraphs.map((paragraph) => `        <p>${escapeHtml(paragraph)}</p>`).join("\n")}
      </div>
    </section>

    <section class="copy-section copy-section--split">
      <div>
        <p class="eyebrow">Who it is for</p>
        <h2>${escapeHtml(page.whoHeading)}</h2>
      </div>
      <ul class="check-list">
${page.who.map((item) => `        <li>${escapeHtml(item)}</li>`).join("\n")}
      </ul>
      <p class="note-box">
        Eligibility for ${escapeHtml(page.service)} is determined during clinical consultation.
      </p>
    </section>

    <section class="${page.ingredientClass}">
      <div class="section-heading">
        <p class="eyebrow">Inside ${escapeHtml(page.service)}</p>
        <h2>${escapeHtml(page.ingredientsHeading)}</h2>
      </div>
${page.ingredients.map((ingredient) => `      <article class="${page.ingredients.length === 1 ? "ingredient-card solo" : ""}">
        <p class="ingredient-tag">${escapeHtml(ingredient.tag)}</p>
        <h3>${escapeHtml(ingredient.name)}</h3>
        <p>${escapeHtml(ingredient.description)}</p>
      </article>`).join("\n")}
      <p class="note-box note-box--wide">
        ${escapeHtml(page.callout)}
      </p>
    </section>

    <section class="process-section" id="how">
      <div class="section-heading">
        <p class="eyebrow">How it works at Eden</p>
        <h2>A premium protocol should feel clear from the first consult.</h2>
      </div>
      <ol class="step-list">
        <li>
          <div>
            <strong>Consultation.</strong>
            A 30-45 minute visit with an Eden clinician to review your goals, history,
            and current protocols.
          </div>
        </li>
        <li>
          <div>
            <strong>Medical review & eligibility.</strong>
            ${escapeHtml(page.stepTwo)}
          </div>
        </li>
        <li>
          <div>
            <strong>Personalized protocol.</strong>
            Components, timeline, and support are tailored to your goals and labs, not
            pulled from a template.
          </div>
        </li>
        <li>
          <div>
            <strong>Pharmacy fulfillment or in-club guidance.</strong>
            Compounded in the U.S. by a licensed pharmacy partner when prescribed.
            Optional in-club teaching is available for first-time users.
          </div>
        </li>
        <li>
          <div>
            <strong>Follow-up & optimization.</strong>
            Check-ins help Eden adjust based on how your body responds and how the protocol
            fits into the rest of your care.
          </div>
        </li>
      </ol>
    </section>

    <section class="copy-section copy-section--split">
      <div>
        <p class="eyebrow">Why Eden</p>
        <h2>${escapeHtml(page.whyHeading || "Eden is not an online peptide shop. It is a medical wellness club.")}</h2>
      </div>
      <ul class="check-list">
${whyEden.map((item) => `        <li>${escapeHtml(item)}</li>`).join("\n")}
      </ul>
      <div class="internal-link-grid" aria-label="Related Eden services">
${relatedLinks.map(([label, href]) => `        <a href="${href}">${escapeHtml(label)}</a>`).join("\n")}
      </div>
    </section>

    <section class="pricing-section">
      <div>
        <p class="eyebrow">Pricing</p>
        <h2>Know the right protocol before paying for the wrong one.</h2>
        <p>
          Your consultation helps determine whether this protocol is appropriate and what
          level of support makes sense for your goals. ${escapeHtml(page.service)} is personalized care,
          not a product on a shelf. Pricing is reviewed during your consultation so you
          leave with a clear plan and a clear number.
        </p>
      </div>
      <a class="button button--primary" href="#consult-form">Book a Consultation</a>
    </section>

    <section class="testimonial-section">
      <div class="section-heading">
        <p class="eyebrow">Why it matters</p>
        <h2>${escapeHtml(page.urgencyHeading)}</h2>
      </div>
      <div class="testimonial-grid">
${page.urgencyCards.map((item) => `        <blockquote>${escapeHtml(item)}</blockquote>`).join("\n")}
      </div>
    </section>

    <section class="faq-section">
      <div class="section-heading">
        <p class="eyebrow">FAQ</p>
        <h2>Frequently asked.</h2>
      </div>
      <div class="faq-list">
        {faqItems.map((item) => (
          <details>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>

    <section class="split-section" id="consult-form">
      <div>
        <p class="eyebrow">Start with a consultation</p>
        <h2>${escapeHtml(page.consultHeading)}</h2>
        <p>${escapeHtml(page.consultCopy)}</p>
        <p class="microcopy">
          Greenwood Village health club consults and telehealth follow-ups may be available for
          established Colorado patients.
        </p>
      </div>
      <LeadForm
        cta=${JSON.stringify(page.cta)}
        service=${JSON.stringify(page.service)}
        page=${JSON.stringify(`${page.service} in Greenwood Village`)}
        leadSource=${JSON.stringify(`${page.service} Denver Landing Page`)}
        externalFormName=${JSON.stringify(page.formName)}
        goalLabel="Goal / reason for inquiry"
        goalPlaceholder="Tell us what you are hoping to address."
        useTextarea
      />
    </section>

    <section class="legal-section">
      <p>
        ${escapeHtml(
          page.legal ||
            `Information on this page is educational and is not a substitute for personalized medical advice. Eligibility for ${page.service} is determined during clinical consultation. Results vary by individual. Peptides and wellness therapies on this page may not be FDA-approved for all uses and are dispensed only when prescribed by a licensed medical provider and fulfilled by a licensed compounding pharmacy when appropriate. Statements on this page have not been evaluated by the Food and Drug Administration. Eden Health Clubs makes no claims to diagnose, treat, cure, or prevent any disease.`
        )}
      </p>
    </section>

    <nav class="eden-action-bar" aria-label="Contact Eden">
      <a href="tel:+17206057678">
        <span>Phone</span>
        <strong>Call Now</strong>
      </a>
      <a href="mailto:care@edenhealthclubs.com">
        <span>Email</span>
        <strong>Care Team</strong>
      </a>
      <a href="#consult-form">
        <span>Consult</span>
        <strong>Book</strong>
      </a>
    </nav>
  </main>

  <script>
    const consultSection = document.querySelector("#consult-form");
    const actionBar = document.querySelector(".eden-action-bar");
    if (consultSection && actionBar) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          actionBar.classList.toggle("is-hidden", entry.isIntersecting && entry.intersectionRatio >= 0.5);
        },
        { threshold: [0, 0.5, 1] }
      );
      observer.observe(consultSection);
    }
  </script>
</BaseLayout>
`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
