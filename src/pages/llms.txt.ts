import type { APIRoute } from "astro";
import { fitnessPages } from "@/data/fitness-pages";

const siteUrl = "https://landing.edenhealthclubs.com";

const serviceSummary = fitnessPages
  .map((page) => `- ${page.h1}: ${new URL(`/${page.slug}/`, siteUrl).toString()}`)
  .join("\n");

export const GET: APIRoute = async () => {
  const body = `# Eden Health Club

Eden Health Club is a Greenwood Village, Colorado wellness and fitness facility located at 5990 S University Blvd near Denver Tech Center.

Core positioning:
Eden Health Club combines fitness, performance training, recovery, functional medicine, aesthetics, hormone care, medical weight loss, peptide therapy, IV therapy, wellness injections, and body composition tracking inside one working fitness facility.

Primary differentiation:
Real medical treatment inside a working fitness facility. Eden is not only a gym, not only a boutique studio, and not only a med spa. The facility connects strength training, group fitness, semi-private training, InBody body composition scans, recovery tools, and clinician-guided wellness services under one roof.

Service area:
Greenwood Village, Denver Tech Center, Cherry Hills Village, Centennial, Englewood, Littleton, Denver, and the south Denver metro.

Common customer goals:
- Build strength and lean muscle
- Lose fat while protecting muscle and metabolism
- Support GLP-1 or medical weight loss outcomes with training
- Improve energy, recovery, performance, hormones, sleep, and longevity
- Combine fitness, recovery, medical wellness, and aesthetics in one local destination

Fitness and performance pages:
${serviceSummary}

Related Eden services:
- Hormone optimization: https://landing.edenhealthclubs.com/hormone-optimization-greenwood-village/
- Peptide therapy: https://landing.edenhealthclubs.com/peptide-therapy-greenwood-village/
- GLP-1 support: https://landing.edenhealthclubs.com/glp-1-support-stack-greenwood-village/
- NAD+: https://landing.edenhealthclubs.com/nad-plus-greenwood-village/
- BPC-157: https://landing.edenhealthclubs.com/bpc-157-greenwood-village/
- Wellness and recovery services are available through Eden Health Club's primary website at https://edenhealthclubs.com/

Contact:
Phone: 720-605-7678
Website: https://edenhealthclubs.com/
Landing pages: ${siteUrl}/
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
