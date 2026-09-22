// Every locale file must fill every field, so a missing translation fails `astro check`.
export interface Dict {
  name: string;
  meta: { title: string; description: string };
  title: string;
  tagline: string;
  nav: { about: string; experience: string; projects: string; education: string; skills: string; contact: string };
  about: string[];
  experience: { period: string; role: string; org: string; where: string; points: string[]; tags: string[] }[];
  education: { period: string; degree: string; org: string; notes: string[] }[];
  skills: { group: string; items: string[] }[];
  languages: { name: string; level: string }[];
  cv: {
    label: string;
    summary: string;
    download: string;
    profile: string;
    location: string;
    references: string;
  };
  ui: {
    skip: string;
    sections: string;
    language: string;
    languages: string;
    contactBody: string;
    email: string;
    github: string;
    linkedin: string;
    code: string;
    notebook: string;
    live: string;
    video: string;
    back: string;
    role: string;
    highlights: string;
    technologies: string;
    year: string;
    notFoundTitle: string;
    notFoundBody: string;
  };
}
