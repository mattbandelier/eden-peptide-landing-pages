import type { APIRoute } from "astro";
import { getIndexableUrlEntries } from "@/data/site-urls";

function urlEntry(url: string, priority: string) {
  return [
    "  <url>",
    `    <loc>${url}</loc>`,
    "    <changefreq>weekly</changefreq>",
    `    <priority>${priority}</priority>`,
    "  </url>"
  ].join("\n");
}

export const GET: APIRoute = async () => {
  const urls = getIndexableUrlEntries().map((entry) => urlEntry(entry.url, entry.priority));

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>"
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
