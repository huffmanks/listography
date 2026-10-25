import { defineConfig, passthroughImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  site: isDev ? "http://localhost:4321" : "https://listography.huffmanks.com",
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
