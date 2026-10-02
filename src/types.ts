export type ProjectSlug =
  | 'modelcompare'
  | 'voice-of-customer'
  | 'rapido-night'
  | 'quickbite'
  | 'google-maps'
  | 'ai-study-assistant';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'live' | 'prototype' | 'internal';
}

export interface ProjectMetric {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface ProjectSection {
  heading: string;
  body?: string;
  items?: string[];
  subsections?: { heading: string; body: string; items?: string[] }[];
}

export interface Project {
  slug: ProjectSlug;
  name: string;
  type: string;
  category: 'built' | 'prototype' | 'study';
  tagline: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  metrics: ProjectMetric[];
  overview: string;
  sections: ProjectSection[];
  visualStyle: 'neumorphism' | 'glassmorphism' | 'parallax' | 'motion' | 'micro' | 'hybrid';
  accentColor: string;
}
