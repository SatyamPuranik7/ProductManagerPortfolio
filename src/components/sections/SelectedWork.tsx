import { ArrowRight, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

const badgeConfig: Record<Project['category'], { label: string; classes: string }> = {
  built: {
    label: 'BUILT PRODUCT',
    classes: 'bg-olive/10 text-olive border-olive/20',
  },
  prototype: {
    label: 'INTERACTIVE PROTOTYPE',
    classes: 'bg-terracotta/10 text-terracotta border-terracotta/20',
  },
  study: {
    label: 'PRODUCT CASE STUDY',
    classes: 'bg-purple/10 text-purple border-purple/20',
  },
};

function ProjectVisual({ project }: { project: Project }) {
  const chips = project.tags;

  if (project.slug === 'quickbite') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-olive-dark to-ink flex flex-col items-center justify-center gap-3 p-6">
        <div className="font-display text-3xl sm:text-4xl font-700 text-stone-50">
          92% → 82%
        </div>
        <div className="text-xs text-stone-50/70 text-center max-w-[200px]">
          Order Completion Drop Traced to Callback Processing
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-olive-dark to-ink flex flex-wrap items-center justify-center gap-2 p-5">
      {chips.map((chip, i) => (
        <div key={chip} className="flex items-center gap-2">
          <span
            className={`px-3 py-1.5 rounded-sm text-xs font-600 border ${
              i === chips.length - 1
                ? 'text-purple-light border-purple/30 bg-purple/10'
                : 'text-stone-50/80 border-stone-50/20'
            }`}
          >
            {chip}
          </span>
          {i < chips.length - 1 && <span className="text-stone-50/40 text-xs">→</span>}
        </div>
      ))}
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Portfolio</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-600 text-ink">
            Selected Work
          </h2>
          <p className="mt-3 text-ink-light max-w-2xl">
            A mix of products I've built, interactive prototypes, and product management case studies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const badge = badgeConfig[project.category as Project['category']];
            const liveLink = project.links.find((l: typeof project.links[number]) => l.type === 'live' || l.type === 'prototype');

            return (
              <Reveal key={project.slug} delay={i * 80}>
                <article className="card-base card-hover overflow-hidden h-full flex flex-col group">
                  <div className="h-40 overflow-hidden border-b border-stone-300">
                    <ProjectVisual project={project} />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-700 uppercase tracking-wider border ${badge.classes}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {badge.label}
                      </span>
                    </div>

                    <h3 className="text-lg font-600 text-ink mb-2">{project.name}</h3>
                    <p className="text-sm text-ink-light leading-[1.55] flex-1">
                      {project.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-stone-300 flex items-center justify-between">
                      <a
                        href={`#/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-600 text-olive transition-all duration-200 hover:gap-2.5 hover:text-olive-dark"
                      >
                        View Case Study
                        <ArrowRight size={15} />
                      </a>
                      {liveLink && (
                        <a
                          href={liveLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-600 text-olive hover:text-olive-dark transition-colors"
                        >
                          {liveLink.type === 'live' ? 'Live Demo' : 'Prototype'}
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
