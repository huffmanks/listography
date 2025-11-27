import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const CardObject = z.object({
  type: z.enum(["common", "rare", "unique"]),
  topic: z.string(),
});

const cards = defineCollection({
  loader: glob({ pattern: "cards.json", base: "./src/data" }),
  schema: z.array(CardObject),
});

export type Card = z.infer<typeof CardObject>;
export type CardList = Card[];

export const collections = { cards };
