import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })],
  site: "https://elaborate-panda-f33b08.netlify.app"
});