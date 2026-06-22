import type { APIRoute } from "astro";

const siteUrl = "https://landing.edenhealthclubs.com";

export const GET: APIRoute = async () => {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\nLLM-Text: ${siteUrl}/llms.txt\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
