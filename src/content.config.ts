import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    index: z.string(),
    category: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { services };
