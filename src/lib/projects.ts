import { getCollection, getEntry } from 'astro:content';
import type { Locale } from '../i18n';

/** Every project with its text in `locale`. Fails the build if a translation is missing. */
export async function getProjects(locale: Locale) {
  const meta = await getCollection('projects');
  const projects = await Promise.all(
    meta.map(async ({ id, data }) => {
      const text = await getEntry('projectText', `${id}/${locale}`);
      if (!text) throw new Error(`Missing ${locale} text: src/content/projects/${id}/${locale}.md`);
      return { slug: id, ...data, text };
    }),
  );
  return projects.sort((a, b) => a.order - b.order);
}
