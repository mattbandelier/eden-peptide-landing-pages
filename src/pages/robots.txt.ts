import type { APIRoute } from "astro";
import { indexNowKey, siteUrl } from "@/data/site-urls";

export const GET: APIRoute = async () => {
  return new Response(`User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
LLM-Text: ${siteUrl}/llms.txt
IndexNow-Key: ${siteUrl}/${indexNowKey}.txt
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
