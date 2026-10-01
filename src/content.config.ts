import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const diensten = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diensten' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.string().optional(),
    order: z.number().default(10),
  }),
});

const projecten = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projecten' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number(),
    summary: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { diensten, projecten };
