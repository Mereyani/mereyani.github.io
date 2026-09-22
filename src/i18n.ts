import en from './data/en';
import ar from './data/ar';
import tr from './data/tr';

export const locales = ['en', 'ar', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const dicts = { en, ar, tr };
export const langNames: Record<Locale, string> = { en: 'English', ar: 'العربية', tr: 'Türkçe' };
export const ogLocales: Record<Locale, string> = { en: 'en_US', ar: 'ar_AR', tr: 'tr_TR' };

/** Plain separator lists: Intl.ListFormat would add «و» / "and" before tech names. */
export const joinList = (locale: Locale, items: string[]) => items.join(locale === 'ar' ? '، ' : ', ');

export const dir = (locale: Locale) => (locale === 'ar' ? 'rtl' : 'ltr');

/** localePath('ar', 'projects/jobpilot') -> '/ar/projects/jobpilot/' */
export const localePath = (locale: Locale, path = '') =>
  (locale === defaultLocale ? '/' : `/${locale}/`) + (path ? `${path}/` : '');

/** getStaticPaths for `[...lang]` routes: English lives at the root. */
export const localeParams = () =>
  locales.map((locale) => ({
    params: { lang: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));
