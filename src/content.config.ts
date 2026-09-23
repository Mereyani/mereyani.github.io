import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Facts shared by every language, one entry per project (key = URL slug).
const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: ({ image }) =>
    z.object({
      order: z.number(), // lower comes first
      domain: z.enum(['medical', 'clinical', 'agents', 'hardware']), // sets the project's colour
      year: z.number().optional(),
      tags: z.array(z.string()),
      github: z.url().optional(),
      kaggle: z.url().optional(),
      live: z.url().optional(),
      video: z.url().optional(),
      cover: image().optional(), // path relative to projects.yaml
    }),
});

// Translated text: src/content/projects/<slug>/<en|ar|tr>.md
const projectText = defineCollection({
  loader: glob({ pattern: '*/*.md', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    cv: z.string().optional(), // one-line version for the printed CV
    coverAlt: z.string().optional(),
    role: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, projectText };
