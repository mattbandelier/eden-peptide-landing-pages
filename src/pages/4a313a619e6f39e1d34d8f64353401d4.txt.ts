import type { APIRoute } from "astro";
import { indexNowKey } from "@/data/site-urls";

export const GET: APIRoute = async () => {
  return new Response(indexNowKey, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
