export type FitnessPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  heroHeadline: string;
  summary: string;
  primaryCta: string;
  secondaryCta: string;
  proof: string[];
  builtFor: string[];
  sections: Array<{
    eyebrow: string;
    title: string;
    body: string;
    bullets?: string[];
  }>;
  related: Array<{
    label: string;
    href: string;
    text: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

const coreRelated = [
  {
    label: "InBody scans",
    href: "https://edenhealthclubs.com/functional-medicine/inbody/",
    text: "Track fat, muscle, and body composition beyond the scale."
  },
  {
    label: "Medical weight loss",
    href: "https://edenhealthclubs.com/functional-medicine/medical-weight-loss/",
    text: "Provider-guided weight loss support that can connect with training."
  },
  {
    label: "Peptide therapy",
    href: "https://edenhealthclubs.com/peptide-therapy/",
    text: "Clinician-guided protocols for recovery, body composition, sleep, and longevity goals."
  },
  {
    label: "IV therapy",
    href: "https://edenhealthclubs.com/wellness-recovery/iv-therapy/",
    text: "Hydration, recovery, energy, immunity, glow, relief, and performance support."
  },
  {
    label: "Wellness injections",
    href: "https://edenhealthclubs.com/functional-medicine/wellness-injections/",
    text: "Targeted support for energy, recovery, metabolism, immunity, and wellness."
  },
  {
    label: "Hormone therapy",
    href: "https://edenhealthclubs.com/hormone-replacement-therapy/",
    text: "Hormone care for men and women with labs, monitoring, and provider oversight."
  }
];

const baseProof = [
  "Greenwood Village near DTC",
  "Medical wellness inside a working fitness facility",
  "Training + recovery + body composition",
  "Built for the south Denver lifestyle"
];

const systemSection = {
  eyebrow: "Why Eden is different",
  title: "Medical wellness and coached training, inside one working fitness facility.",
  body:
    "Most gyms and studios stop at the workout. Eden connects coached training, body composition tracking, recovery, medical wellness, and aesthetics inside one Greenwood Village facility, so your plan can match the body you are actually trying to build.",
  bullets: [
    "Coached strength, personal training, semi-private training, and group fitness",
    "InBody scans to track muscle, fat, and progress beyond the scale",
    "Recovery tools including IV therapy, wellness injections, red light, sauna, and compression",
    "Medical weight loss, hormone care, peptide therapy, and functional medicine support when appropriate",
    "Aesthetics and skin health available in the same Eden facility"
  ]
};

const reviewSignalsSection = {
  eyebrow: "Client experience",
  title: "People come for results and stay for the way Eden feels.",
  body:
    "Clients describe attentive coaching, small-group energy, clear wellness guidance, a beautiful facility, recovery tools nearby, and a team that makes the process feel personal instead of transactional.",
  bullets: [
    "Small-group coaching with real attention to form, strength, and confidence",
    "Support for strength, Pilates, weightlifting goals, and feeling stronger",
    "Clear explanations around labs, fatigue, brain fog, stress, and next steps",
    "Recovery tools, a clean facility, and a welcoming community under one roof"
  ]
};

function page(input: Omit<FitnessPage, "proof" | "related"> & Partial<Pick<FitnessPage, "proof" | "related">>): FitnessPage {
  const sections = [
    ...input.sections.slice(0, 2),
    reviewSignalsSection,
    ...input.sections.slice(2)
  ];

  return {
    proof: baseProof,
    related: coreRelated,
    ...input,
    sections
  };
}

export const fitnessPages: FitnessPage[] = [
  page({
    slug: "strength-training-greenwood-village",
    title: "Strength Training in Greenwood Village | Eden Health Club",
    description:
      "Build muscle, protect metabolism, and improve body composition with strength training at Eden Health Club in Greenwood Village, where fitness connects with recovery and medical wellness.",
    h1: "Strength Training in Greenwood Village",
    eyebrow: "Strength. Recovery. Optimization.",
    heroHeadline: "Real medical treatment inside a working fitness facility.",
    summary:
      "Build muscle, protect metabolism, improve body composition, and recover better at Eden Health Club, where strength training can connect with InBody scans, recovery, IV therapy, wellness injections, hormones, peptides, and medical weight loss support.",
    primaryCta: "Book Your Strength Assessment",
    secondaryCta: "Explore the system",
    builtFor: ["Fat loss without losing muscle", "GLP-1 and medical weight loss clients", "Adults who want to age stronger", "Busy professionals who need efficient training"],
    sections: [
      {
        eyebrow: "Why it matters",
        title: "Strength is the foundation of body optimization.",
        body:
          "Strength training is not just a gym category. It is the lever behind muscle, metabolism, posture, bone health, confidence, and long-term function. Eden builds the plan around the body you want to keep, not just the weight you want to lose."
      },
      {
        eyebrow: "How Eden trains",
        title: "Coached strength with a bigger wellness system behind it.",
        body:
          "Your training can be supported by body composition scans, recovery services, medical weight loss, hormone care, peptide therapy, IV therapy, and wellness injections when clinically appropriate.",
        bullets: ["Progressive strength work", "Coach-led form and accountability", "Body composition tracking", "Recovery and wellness support under one roof"]
      },
      systemSection
    ],
    faqs: [
      {
        question: "Where can I find strength training in Greenwood Village?",
        answer:
          "Eden Health Club offers strength training in Greenwood Village near DTC, with personal training, semi-private training, group fitness, body composition tracking, and recovery services under one roof."
      },
      {
        question: "Can strength training help with weight loss?",
        answer:
          "Yes. Strength training helps preserve and build lean muscle, which supports metabolism, body composition, and long-term weight management."
      },
      {
        question: "Is strength training useful if I am taking a GLP-1 medication?",
        answer:
          "Strength training is especially important during weight loss because it helps protect muscle and metabolism while body weight changes."
      }
    ]
  }),
  page({
    slug: "performance-training-greenwood-village",
    title: "Performance Training in Greenwood Village | Eden Health Club",
    description:
      "Train for strength, energy, recovery, and body optimization with performance training at Eden Health Club in Greenwood Village near DTC.",
    h1: "Performance Training in Greenwood Village",
    eyebrow: "Train for the body you actually need",
    heroHeadline: "Performance training inside a facility built to optimize everything.",
    summary:
      "Eden helps active adults build strength, improve conditioning, recover faster, and track body composition inside a working fitness facility with real medical treatment available under the same roof.",
    primaryCta: "Book a Performance Assessment",
    secondaryCta: "See how Eden works",
    builtFor: ["Active adults", "Executives and high performers", "Athletes and former athletes", "People who want strength, energy, and recovery"],
    sections: [
      {
        eyebrow: "Not just athletes",
        title: "Performance is how well your body handles your life.",
        body:
          "For some clients, performance means sport. For others, it means sharper workdays, better recovery, stronger training sessions, steadier energy, and the capacity to do more without breaking down."
      },
      {
        eyebrow: "What Eden connects",
        title: "Strength, conditioning, recovery, and medical wellness in one place.",
        body:
          "Eden's performance model can connect training with InBody scans, recovery tools, IV therapy, wellness injections, peptide therapy, hormone care, and functional medicine support.",
        bullets: ["Strength and conditioning", "Mobility and durability", "Recovery planning", "Body composition and metabolic support"]
      },
      systemSection
    ],
    faqs: [
      {
        question: "Where can I find performance training in Greenwood Village?",
        answer:
          "Eden Health Club offers performance-focused training in Greenwood Village near DTC, with strength coaching, group fitness, recovery services, body composition tracking, and medical wellness support under one roof."
      },
      {
        question: "Is performance training only for athletes?",
        answer:
          "No. Performance training is useful for athletes, active adults, executives, parents, and anyone who wants more strength, energy, durability, and recovery capacity."
      },
      {
        question: "How is Eden different from a performance gym?",
        answer:
          "Eden connects training with recovery, InBody scans, medical weight loss, hormones, peptides, IV therapy, wellness injections, and aesthetics inside one facility."
      }
    ]
  }),
  page({
    slug: "longevity-training-greenwood-village",
    title: "Longevity Training in Greenwood Village | Eden Health Club",
    description:
      "Build strength, mobility, body composition, and recovery capacity with longevity training at Eden Health Club in Greenwood Village.",
    h1: "Longevity Training in Greenwood Village",
    eyebrow: "Train for healthspan",
    heroHeadline: "A stronger body is an anti-aging strategy.",
    summary:
      "Longevity training at Eden focuses on strength, muscle, mobility, balance, recovery, body composition, and medical wellness support so you can keep doing what you love for longer.",
    primaryCta: "Book a Longevity Assessment",
    secondaryCta: "Explore recovery",
    builtFor: ["Adults 35+", "Active aging clients", "Longevity-focused professionals", "People who want to stay strong, mobile, and capable"],
    sections: [
      {
        eyebrow: "Healthspan",
        title: "Longevity is not passive. You train for it.",
        body:
          "Muscle, mobility, balance, and recovery are the physical infrastructure of aging well. Eden builds longevity training around the systems that help you stay strong, capable, and independent."
      },
      {
        eyebrow: "Beyond workouts",
        title: "A longevity plan should connect training with recovery and treatment.",
        body:
          "Eden can connect strength work with InBody scans, hormone care, peptide therapy, IV therapy, wellness injections, and recovery services, so the plan is bigger than exercise alone."
      },
      systemSection
    ],
    faqs: [
      {
        question: "What is longevity training?",
        answer:
          "Longevity training is exercise programming designed to support strength, muscle, mobility, balance, body composition, recovery, and long-term physical independence."
      },
      {
        question: "Does strength training support longevity?",
        answer:
          "Strength training supports muscle, metabolism, bone health, balance, and function, all of which matter for healthy aging and healthspan."
      },
      {
        question: "How does Eden support longevity beyond workouts?",
        answer:
          "Eden can connect training with InBody scans, recovery services, hormone care, peptide therapy, IV therapy, wellness injections, and functional medicine."
      }
    ]
  }),
  page({
    slug: "anti-aging-strength-training-greenwood-village",
    title: "Anti-Aging Strength Training in Greenwood Village | Eden Health Club",
    description:
      "Use strength training, recovery, body composition tracking, and wellness support as part of an anti-aging fitness strategy at Eden Health Club in Greenwood Village.",
    h1: "Anti-Aging Strength Training in Greenwood Village",
    eyebrow: "Muscle is the anti-aging lever",
    heroHeadline: "Aging well is not just skincare. It is strength, recovery, and metabolism.",
    summary:
      "Eden connects strength training with body composition, recovery, hormone care, peptides, IV therapy, wellness injections, and aesthetics so anti-aging is not limited to what happens in the mirror.",
    primaryCta: "Book an Anti-Aging Fitness Assessment",
    secondaryCta: "Explore body composition",
    builtFor: ["Women and men over 40", "Clients focused on muscle and metabolism", "Aesthetics clients who want the body to match", "People who want to look, feel, and function younger"],
    sections: [
      {
        eyebrow: "The deeper layer",
        title: "The body has an aging strategy too.",
        body:
          "Skin, face, and aesthetics matter, but muscle, metabolism, recovery, hormones, and mobility are the deeper anti-aging foundation. Eden brings those pieces into one environment."
      },
      {
        eyebrow: "Train smarter",
        title: "Strength after 40 and 50 should be precise, progressive, and recoverable.",
        body:
          "The goal is not to beat yourself up. It is to build muscle, protect joints, support metabolism, improve posture, and train in a way your body can adapt to."
      },
      systemSection
    ],
    faqs: [
      {
        question: "What is anti-aging strength training?",
        answer:
          "Anti-aging strength training focuses on building and preserving muscle, mobility, metabolism, balance, and body composition as the body changes with age."
      },
      {
        question: "Is anti-aging fitness different from regular fitness?",
        answer:
          "Yes. Anti-aging fitness prioritizes strength, recovery, mobility, body composition, hormone-aware planning, and long-term function instead of random calorie burn."
      },
      {
        question: "Can Eden connect anti-aging fitness with aesthetics?",
        answer:
          "Yes. Eden offers fitness, recovery, functional medicine, hormone care, peptides, wellness injections, and aesthetics under one roof."
      }
    ]
  }),
  page({
    slug: "glp-1-strength-training-greenwood-village",
    title: "GLP-1 Strength Training in Greenwood Village | Eden Health Club",
    description:
      "Pair GLP-1 weight loss with strength training, InBody scans, recovery, and medical wellness support at Eden Health Club in Greenwood Village.",
    h1: "GLP-1 Strength Training in Greenwood Village",
    eyebrow: "Protect muscle while the weight comes off",
    heroHeadline: "Do not just lose weight. Protect your muscle and metabolism.",
    summary:
      "GLP-1 medications can change the number on the scale. Eden helps you protect what matters while your body changes: muscle, strength, metabolism, energy, confidence, and long-term body composition.",
    primaryCta: "Book a Body Composition Assessment",
    secondaryCta: "Explore weight loss support",
    builtFor: ["GLP-1 clients", "Medical weight loss clients", "People losing weight quickly", "Anyone who wants fat loss without getting weaker"],
    sections: [
      {
        eyebrow: "The missing piece",
        title: "Weight loss without muscle protection is an incomplete plan.",
        body:
          "When appetite drops and weight changes quickly, strength training and body composition tracking become essential. Eden helps clients focus on the result they actually want: less fat, more strength, better energy, and a body that can hold the outcome."
      },
      {
        eyebrow: "Track the right thing",
        title: "InBody turns the scale into a smarter conversation.",
        body:
          "InBody scans help track lean mass, fat mass, and progress beyond weight alone. That data can guide training, recovery, protein habits, and next steps with Eden's medical wellness team."
      },
      systemSection
    ],
    faqs: [
      {
        question: "Why should I strength train while using GLP-1 medication?",
        answer:
          "Strength training can help protect lean muscle and support metabolism during weight loss. Eden uses training, body composition tracking, and medical wellness support to help clients pursue better long-term outcomes."
      },
      {
        question: "Does Eden offer GLP-1 weight loss support?",
        answer:
          "Yes. Eden offers medically supervised weight loss services and can connect weight loss care with InBody tracking, training, recovery, and wellness support."
      },
      {
        question: "Can InBody scans show whether I am losing fat or muscle?",
        answer:
          "InBody scans provide body composition information, including fat mass and lean mass, which can help guide a smarter training and weight loss plan."
      }
    ]
  }),
  page({
    slug: "body-composition-training-greenwood-village",
    title: "Body Composition Training in Greenwood Village | Eden Health Club",
    description:
      "Go beyond the scale with InBody-guided body composition training at Eden Health Club in Greenwood Village. Build muscle, lose fat, and track what matters.",
    h1: "Body Composition Training in Greenwood Village",
    eyebrow: "Measure what matters",
    heroHeadline: "Stop guessing. Train with body composition data.",
    summary:
      "Eden connects InBody scans, strength training, recovery, medical weight loss, hormone care, and wellness support so your plan is built around more than a scale number.",
    primaryCta: "Book an InBody + Fitness Assessment",
    secondaryCta: "Learn about InBody",
    builtFor: ["Fat loss clients", "Muscle gain clients", "GLP-1 clients", "Anyone tired of scale-only progress"],
    sections: [
      {
        eyebrow: "Beyond the scale",
        title: "The scale cannot tell you what you are made of.",
        body:
          "Body composition training focuses on fat mass, lean mass, strength, and measurable change. It helps keep the goal clear: improve the body, not just the number."
      },
      {
        eyebrow: "The Eden advantage",
        title: "Data, training, and medical wellness can sit in the same plan.",
        body:
          "InBody scans can support conversations around strength training, medical weight loss, hormones, recovery, wellness injections, and long-term progress."
      },
      systemSection
    ],
    faqs: [
      {
        question: "What is body composition training?",
        answer:
          "Body composition training focuses on changing the ratio of fat mass to lean mass, not just lowering scale weight. At Eden, this can include InBody scans, strength training, nutrition support, and medical wellness services."
      },
      {
        question: "Where can I get an InBody scan in Greenwood Village?",
        answer:
          "Eden Health Club offers InBody scans in Greenwood Village as part of its fitness, functional medicine, and body composition services."
      },
      {
        question: "Is body composition training good for weight loss?",
        answer:
          "Yes. Body composition training helps clients focus on fat loss, muscle preservation, strength, and long-term metabolic health."
      }
    ]
  }),
  page({
    slug: "recovery-performance-greenwood-village",
    title: "Recovery and Performance in Greenwood Village | Eden Health Club",
    description:
      "Connect training with recovery at Eden Health Club in Greenwood Village, including IV therapy, red light, sauna, compression, peptides, and wellness injections.",
    h1: "Recovery and Performance in Greenwood Village",
    eyebrow: "Train hard. Recover on purpose.",
    heroHeadline: "Recovery is not the break from training. It is part of the result.",
    summary:
      "Eden connects performance training with recovery services, IV therapy, wellness injections, red light therapy, infrared sauna, compression therapy, peptides, and body composition support inside one facility.",
    primaryCta: "Build Your Recovery Plan",
    secondaryCta: "Explore recovery services",
    builtFor: ["Active adults", "Athletes and former athletes", "High-output professionals", "People who feel under-recovered"],
    sections: [
      {
        eyebrow: "The bottleneck",
        title: "You do not adapt from training. You adapt from recovering.",
        body:
          "If soreness, stress, poor sleep, travel, or dehydration keep dragging you down, the plan needs more than another hard workout. Eden treats recovery as part of performance."
      },
      {
        eyebrow: "Recovery tools",
        title: "IV therapy, wellness injections, red light, sauna, compression, and peptides.",
        body:
          "Eden's recovery ecosystem gives active clients multiple ways to support hydration, energy, soreness, mobility, and readiness, with medical oversight where appropriate."
      },
      systemSection
    ],
    faqs: [
      {
        question: "Where can I find recovery services in Greenwood Village?",
        answer:
          "Eden Health Club offers recovery services in Greenwood Village, including IV therapy, red light therapy, infrared sauna, compression therapy, wellness injections, and peptide therapy options."
      },
      {
        question: "Can recovery services support workout performance?",
        answer:
          "Recovery services may support hydration, muscle soreness, energy, mobility, stress, and readiness depending on the service and individual fit."
      },
      {
        question: "How is Eden different from a recovery studio?",
        answer:
          "Eden combines recovery services with training, body composition, medical wellness, hormones, peptides, IV therapy, injections, and aesthetics under one roof."
      }
    ]
  }),
  page({
    slug: "executive-fitness-greenwood-village",
    title: "Executive Fitness in Greenwood Village | Eden Health Club",
    description:
      "Executive fitness at Eden Health Club helps busy professionals near DTC build strength, energy, recovery, and body composition with wellness support under one roof.",
    h1: "Executive Fitness in Greenwood Village",
    eyebrow: "For high performers with full calendars",
    heroHeadline: "Your body should not be the bottleneck.",
    summary:
      "Eden helps busy professionals build strength, improve body composition, recover better, and support energy with training, recovery, and medical wellness services inside one Greenwood Village facility near DTC.",
    primaryCta: "Book an Executive Fitness Assessment",
    secondaryCta: "Explore personal training",
    builtFor: ["DTC professionals", "Founders and executives", "Busy parents", "People who need efficient, high-leverage training"],
    sections: [
      {
        eyebrow: "No wasted effort",
        title: "Fitness for people who cannot afford random.",
        body:
          "Executive fitness at Eden is built for efficient strength work, better energy, smarter recovery, and body composition progress without trying to stitch together separate providers."
      },
      {
        eyebrow: "Energy and recovery",
        title: "Training, recovery, and wellness support can point in the same direction.",
        body:
          "When the calendar is full, Eden's advantage is proximity: training, InBody, IV therapy, wellness injections, hormones, peptides, and recovery services can all live in one plan."
      },
      systemSection
    ],
    faqs: [
      {
        question: "What is executive fitness?",
        answer:
          "Executive fitness is training and wellness support designed for busy professionals who need efficient strength training, recovery, energy support, and body composition results."
      },
      {
        question: "Is Eden near Denver Tech Center?",
        answer:
          "Yes. Eden Health Club is located in Greenwood Village near DTC and serves clients throughout the south Denver metro."
      },
      {
        question: "Can executive fitness include recovery or wellness services?",
        answer:
          "Yes. Eden can connect fitness with IV therapy, wellness injections, recovery services, InBody scans, hormone care, and peptide therapy when appropriate."
      }
    ]
  }),
  page({
    slug: "semi-private-personal-training-greenwood-village",
    title: "Semi-Private Personal Training in Greenwood Village | Eden Health Club",
    description:
      "Get small-format coaching, accountability, and strength training at Eden Health Club with semi-private personal training in Greenwood Village.",
    h1: "Semi-Private Personal Training in Greenwood Village",
    eyebrow: "Small group energy. Personal coaching.",
    heroHeadline: "More attention than a class. More energy than training alone.",
    summary:
      "Semi-private training at Eden gives you focused coaching, structure, accountability, and strength work inside a facility where training can connect with recovery, body composition, and medical wellness support.",
    primaryCta: "Book a Semi-Private Assessment",
    secondaryCta: "See training options",
    builtFor: ["People who want accountability", "Clients who dislike crowded gyms", "Friends or partners training together", "Anyone who wants coaching without training alone"],
    sections: [
      {
        eyebrow: "Small format",
        title: "The sweet spot between personal training and group fitness.",
        body:
          "Semi-private training gives you coaching, structure, and accountability in a smaller environment, with more attention than a large class and more energy than solo training."
      },
      {
        eyebrow: "Connected care",
        title: "Small-group training can still connect to the bigger Eden system.",
        body:
          "Your training can connect with InBody scans, recovery, IV therapy, wellness injections, and medical wellness services when they fit your goals."
      },
      systemSection
    ],
    faqs: [
      {
        question: "What is semi-private personal training?",
        answer:
          "Semi-private personal training is small-format coaching where a trainer works with a small number of clients at once. It gives more coaching than a large class while keeping the energy and accountability of training with others."
      },
      {
        question: "Does Eden offer semi-private training in Greenwood Village?",
        answer:
          "Yes. Eden offers fitness and performance training options in Greenwood Village, including personal and small-format training experiences."
      },
      {
        question: "Is semi-private training good for beginners?",
        answer:
          "Yes. Semi-private training can be adapted to your current fitness level while still giving you structure and coaching."
      }
    ]
  }),
  page({
    slug: "group-fitness-classes-greenwood-village",
    title: "Group Fitness Classes in Greenwood Village | Eden Health Club",
    description:
      "Explore group fitness classes in Greenwood Village at Eden Health Club, with strength-focused training, recovery, and wellness services under one roof.",
    h1: "Group Fitness Classes in Greenwood Village",
    eyebrow: "Classes with a bigger system behind them",
    heroHeadline: "Group fitness inside a facility built for optimization.",
    summary:
      "Eden's group fitness classes are built for strength, energy, endurance, and consistency, with recovery, InBody scans, IV therapy, wellness injections, hormones, peptides, and medical weight loss support available under the same roof.",
    primaryCta: "Book a Class",
    secondaryCta: "Explore fitness options",
    builtFor: ["People who want coached classes", "Clients who want variety", "Strength and conditioning seekers", "Anyone who wants recovery nearby"],
    sections: [
      {
        eyebrow: "Beyond class packs",
        title: "A class should be part of a bigger result.",
        body:
          "Eden's group fitness environment is designed for people who want energy and community without giving up the broader support system: training, recovery, body composition, and medical wellness."
      },
      {
        eyebrow: "Formats",
        title: "Strength, conditioning, mobility, barre-inspired, and yoga-informed movement.",
        body:
          "Eden can capture the class demand people are already searching for while offering a more complete destination than a single-format studio."
      },
      systemSection
    ],
    faqs: [
      {
        question: "Where can I take group fitness classes in Greenwood Village?",
        answer:
          "Eden Health Club offers group fitness in Greenwood Village near DTC, with strength-focused classes and access to recovery and wellness services."
      },
      {
        question: "How is Eden different from a boutique fitness studio?",
        answer:
          "Eden offers fitness classes inside a broader wellness facility with recovery, InBody, medical weight loss, hormone care, IV therapy, wellness injections, peptides, and aesthetics available under one roof."
      },
      {
        question: "Are Eden's group fitness classes beginner-friendly?",
        answer:
          "Eden's training team can help clients choose the right fitness option based on experience, goals, and comfort level."
      }
    ]
  }),
  page({
    slug: "barre-classes-greenwood-village",
    title: "Barre Classes in Greenwood Village | Eden Health Club",
    description:
      "Discover barre-inspired strength, sculpt, balance, and core training at Eden Health Club in Greenwood Village, connected to recovery and wellness support.",
    h1: "Barre Classes in Greenwood Village",
    eyebrow: "Sculpt. Stabilize. Strengthen.",
    heroHeadline: "Barre-inspired movement inside a facility built for more than classes.",
    summary:
      "Eden brings low-impact sculpt, core work, balance, and strength into a working fitness facility where recovery, body composition, wellness injections, IV therapy, and medical treatment can all support the bigger plan.",
    primaryCta: "Try Barre at Eden",
    secondaryCta: "Explore group fitness",
    builtFor: ["Low-impact strength seekers", "Core and posture goals", "Clients who like sculpt classes", "People who want recovery and wellness support nearby"],
    sections: [
      {
        eyebrow: "Class intent",
        title: "Low-impact does not mean low-results.",
        body:
          "Barre-inspired training can support core strength, glute strength, posture, balance, muscular endurance, and low-impact conditioning."
      },
      {
        eyebrow: "Why Eden",
        title: "A barre-only studio cannot offer the Eden system.",
        body:
          "Eden lets clients pair barre-inspired movement with strength training, InBody tracking, recovery, IV therapy, wellness injections, and medical wellness support."
      },
      systemSection
    ],
    faqs: [
      {
        question: "Does Eden offer barre classes in Greenwood Village?",
        answer:
          "Eden offers barre-inspired movement and group fitness options in Greenwood Village. Clients can contact Eden for the current class schedule and best fit."
      },
      {
        question: "What are barre classes good for?",
        answer:
          "Barre-inspired training can support core strength, glute strength, posture, balance, muscular endurance, and low-impact conditioning."
      },
      {
        question: "How is Eden different from a barre studio?",
        answer:
          "Eden connects barre-inspired movement with strength training, recovery, body composition tracking, and medical wellness services inside one facility."
      }
    ]
  }),
  page({
    slug: "yoga-classes-greenwood-village",
    title: "Yoga Classes in Greenwood Village | Eden Health Club",
    description:
      "Yoga at Eden Health Club in Greenwood Village supports mobility, recovery, balance, breath, and long-term performance inside a full wellness facility.",
    h1: "Yoga Classes in Greenwood Village",
    eyebrow: "Mobility. Breath. Recovery.",
    heroHeadline: "Yoga for people who want their body to work better.",
    summary:
      "Yoga at Eden supports flexibility, balance, breath, nervous system regulation, and recovery inside a facility where training, recovery, IV therapy, wellness injections, body composition, and medical wellness can work together.",
    primaryCta: "View Yoga Options",
    secondaryCta: "Explore recovery",
    builtFor: ["Mobility goals", "Recovery-focused clients", "Strength clients who need balance", "People managing stress and stiffness"],
    sections: [
      {
        eyebrow: "Recovery",
        title: "Mobility and breath are performance tools.",
        body:
          "Yoga can support mobility, balance, flexibility, breath, and stress regulation, all of which can complement strength training and recovery."
      },
      {
        eyebrow: "The Eden difference",
        title: "Yoga can sit next to recovery, IV therapy, and body composition.",
        body:
          "Instead of existing as a separate studio habit, yoga at Eden can connect with recovery services, InBody scans, training, and medical wellness support."
      },
      systemSection
    ],
    faqs: [
      {
        question: "Does Eden offer yoga classes in Greenwood Village?",
        answer:
          "Eden offers fitness and recovery services in Greenwood Village, including yoga or mobility-focused options depending on the current class schedule."
      },
      {
        question: "Is yoga useful for recovery?",
        answer:
          "Yoga can support mobility, breath, balance, flexibility, and stress regulation, all of which can complement strength training and recovery."
      },
      {
        question: "Can I combine yoga with recovery services at Eden?",
        answer:
          "Yes. Eden's recovery services include options such as infrared sauna, red light therapy, compression therapy, and IV therapy."
      }
    ]
  }),
  page({
    slug: "pilates-strength-training-greenwood-village",
    title: "Pilates Strength Training in Greenwood Village | Eden Health Club",
    description:
      "Explore Pilates-inspired strength, core, control, and mobility training at Eden Health Club in Greenwood Village.",
    h1: "Pilates Strength Training in Greenwood Village",
    eyebrow: "Core. Control. Strength.",
    heroHeadline: "Pilates-inspired training with a stronger system behind it.",
    summary:
      "Eden brings Pilates-inspired core work, control, mobility, and low-impact strength into a working fitness facility where training can connect with recovery, InBody scans, wellness injections, IV therapy, and medical wellness support.",
    primaryCta: "Try Pilates-Inspired Training",
    secondaryCta: "Explore group fitness",
    builtFor: ["Core strength goals", "Low-impact training seekers", "Mobility and posture goals", "Clients comparing Pilates studios"],
    sections: [
      {
        eyebrow: "Control",
        title: "Core, posture, mobility, and strength belong together.",
        body:
          "Pilates-inspired strength training uses core control, alignment, mobility, and low-impact strength principles while connecting them to broader fitness and performance goals."
      },
      {
        eyebrow: "More than a studio",
        title: "Eden gives the Pilates searcher a bigger answer.",
        body:
          "The page can capture Pilates demand while positioning Eden as a more complete destination for strength, recovery, body composition, medical wellness, and aesthetics."
      },
      systemSection
    ],
    faqs: [
      {
        question: "Does Eden offer Pilates in Greenwood Village?",
        answer:
          "Eden offers Pilates-inspired strength, core, mobility, and group fitness options depending on the current schedule and programming."
      },
      {
        question: "What is Pilates-inspired strength training?",
        answer:
          "Pilates-inspired strength training uses core control, alignment, mobility, and low-impact strength principles while connecting them to broader fitness and performance goals."
      },
      {
        question: "How is Eden different from a Pilates studio?",
        answer:
          "Eden offers movement training inside a facility that also supports recovery, body composition, wellness injections, IV therapy, hormones, peptides, medical weight loss, and aesthetics."
      }
    ]
  })
];

export function getFitnessPage(slug: string) {
  return fitnessPages.find((page) => page.slug === slug);
}
