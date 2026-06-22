import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://landing.edenhealthclubs.com",
  output: "hybrid",
  adapter: vercel()
});
