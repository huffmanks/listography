import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const cards = defineCollection({
  loader: glob({ pattern: "cards.json", base: "./src/data" }),
  schema: z.array(
    z.object({
      type: z.string(),
      topic: z.string(),
    })
  ),
});

export const collections = { cards };
