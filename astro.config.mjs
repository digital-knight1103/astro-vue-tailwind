import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// import netlify from "@astrojs/netlify/functions";
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  output: "server",
  adapter: netlify()
});