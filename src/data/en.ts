import type { Dict } from './types';

export default {
  name: 'Mohamed Mereyani',
  meta: {
    title: 'Mohamed Mereyani — Computer Engineer',
    description:
      'Computer engineer working on hospital information systems, databases and applied AI. M.Sc. student at Siirt University, with projects in medical image classification and LLM agents.',
  },
  title: 'Computer Engineer',
  tagline:
    'I build healthcare software and deep learning models, from Oracle tables in a hospital information system to CNNs that classify X-rays.',
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    skills: 'Skills',
    contact: 'Contact',
  },
  about: [
    "I'm a computer engineer based in Turkey. I'm in the first year of a thesis-based M.Sc. in Computer Engineering at Siirt University, where I completed my B.Sc. as the top-ranked student in the Faculty of Engineering.",
    'For almost two years I worked at Sinerji Bilişim on Bizmed HBYS, a hospital information system used in nearly 90 hospitals: building modules and interface features in Delphi for hospital clients, fixing bugs, and extending the Oracle database with new tables, columns and PL/SQL functions and procedures.',
    'Most of my own projects apply machine learning to real problems: convolutional networks for medical images and hand gestures, classical models on clinical data, and more recently multi-agent tools built on large language models.',
  ],
  experience: [
    {
      period: '07/2024 — 04/2026',
      role: 'Software & Database Specialist',
      org: 'Sinerji Bilişim (Bizmed)',
      where: 'Remote',
      points: [
        'Developed custom modules, features and interface controls in Delphi for Bizmed HBYS, a hospital information system used in nearly 90 hospitals, based on hospital client requests.',
        'Extended the Oracle database behind new features: added tables, columns and PL/SQL functions, and modified existing functions and procedures.',
        'Found and fixed software bugs across the system.',
        'Worked in a fully remote, task-based team.',
      ],
      tags: ['Delphi', 'Oracle', 'PL/SQL', 'SQL', 'HBYS'],
    },
  ],
  education: [
    {
      period: '2026 — Present',
      degree: 'M.Sc. in Computer Engineering (thesis program)',
      org: 'Siirt University, Institute of Science and Technology',
      notes: ['GPA 86.75 / 100'],
    },
    {
      period: '2021 — 2025',
      degree: 'B.Sc. in Computer Engineering',
      org: 'Siirt University',
      notes: ['First-ranked student in the Faculty of Engineering', 'GPA 3.56 / 4.00'],
    },
  ],
  skills: [
    { group: 'Programming', items: ['Python', 'C#', 'Delphi', 'JavaScript'] },
    { group: 'Databases', items: ['Oracle', 'PL/SQL', 'PostgreSQL', 'Database design'] },
    {
      group: 'AI & data science',
      items: ['Deep learning (CNN)', 'Machine learning', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'OpenCV'],
    },
    { group: 'Hardware', items: ['Arduino', 'Serial communication', 'LCD integration'] },
    { group: 'Systems & tools', items: ['HBYS', 'Remote task management'] },
  ],
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'Turkish', level: 'Fluent' },
    { name: 'English', level: 'Intermediate (B1–B2)' },
  ],
  cv: {
    label: 'CV',
    summary:
      'Computer engineer with almost two years of production experience on Bizmed HBYS, a hospital information system used in nearly 90 hospitals (Delphi, Oracle PL/SQL), and applied deep learning work on medical images, including an X-ray fracture classifier with 98.2% test accuracy. First-ranked graduate of Siirt University\'s Faculty of Engineering, now in a thesis-based M.Sc. in Computer Engineering.',
    download: 'Download PDF',
    profile: 'Profile',
    location: 'Turkey',
    references: 'References',
    referencesNote: 'Available on request.',
  },
  ui: {
    skip: 'Skip to content',
    sections: 'Sections',
    language: 'Language',
    languages: 'Languages',
    contactBody: 'The best way to reach me is by email.',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    code: 'Source code',
    notebook: 'Kaggle notebook',
    live: 'Live demo',
    video: 'Video',
    back: 'Back to home',
    role: 'My role',
    highlights: 'Key results',
    technologies: 'Technologies',
    year: 'Year',
    notFoundTitle: 'Page not found',
    notFoundBody: 'This page does not exist. It may have moved.',
  },
} satisfies Dict;
