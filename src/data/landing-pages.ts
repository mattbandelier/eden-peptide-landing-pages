export type LandingPage = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  audience: string;
  heroImage: string;
  primaryCta: string;
  secondaryCta: string;
  proof: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const landingPages: LandingPage[] = [
  {
    slug: "wolverine-stack",
    eyebrow: "Peptide therapy at Eden",
    title: "Wolverine Stack for recovery, repair, and mobility",
    summary:
      "A clinician-guided recovery stack built around BPC-157 and TB-500 for people looking to support connective tissue, soft-tissue recovery, and an active lifestyle.",
    audience: "Active adults, athletes, and high-output professionals exploring recovery support",
    heroImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=85",
    primaryCta: "Book recovery consult",
    secondaryCta: "See how it works",
    proof: [
      "BPC-157 + TB-500",
      "Consult-first protocol",
      "Draft staging ready",
      "Mobile-first LP template"
    ],
    sections: [
      {
        title: "Built around the common Wolverine Stack",
        body:
          "This page leads with the market-recognized stack name while keeping Eden as the provider wrapper and the protocol clinician-guided."
      },
      {
        title: "Recovery language without overpromising",
        body:
          "The page focuses on repair support, mobility, and recovery goals without publishing dosage, route, or medical-treatment claims."
      },
      {
        title: "Designed for staged QA before launch",
        body:
          "Each page can be reviewed locally and on staging first, so layout, forms, compliance copy, tracking, and iPhone rendering can be ironed out before publishing."
      }
    ],
    faqs: [
      {
        question: "What is the Wolverine Stack?",
        answer:
          "It is the common market name for a BPC-157 and TB-500 recovery stack. Eligibility and protocol details are determined during consultation."
      },
      {
        question: "Will this page show dosing?",
        answer:
          "No. Public landing pages should stay consult-first and avoid dosage, route, or frequency instructions."
      },
      {
        question: "Is this optimized for iPhone?",
        answer:
          "Yes. The template is mobile-first with sticky calls to action, stable spacing, and touch-friendly controls for current large iPhone screens."
      }
    ]
  }
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
