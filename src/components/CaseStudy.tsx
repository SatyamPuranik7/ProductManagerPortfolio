import { type ReactNode } from 'react';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';
import { getProject, projects } from '@/data/projects';
import type { Project, ProjectSection } from '@/types';

function SectionContent({ section, project }: { section: ProjectSection; project: Project }) {
  const accentText = { color: project.accentColor };

  return (
    <div className="mb-10">
      <h3 className="font-display text-xl sm:text-2xl font-600 text-ink mb-4">{section.heading}</h3>
      {section.body && (
        <p className="text-ink-light leading-[1.65] mb-4">{section.body}</p>
      )}
      {section.items && (
        <ul className="space-y-2.5 mb-4">
          {section.items.map((item) => (
            <li key={item} className="flex gap-2.5 text-ink-light leading-[1.55]">
              <span className="mt-1 shrink-0" style={accentText}>
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {section.subsections && (
        <div className="space-y-5">
          {section.subsections.map((sub) => (
            <div key={sub.heading} className="card-base p-5">
              <h4 className="text-base font-600 text-ink mb-2" style={accentText}>
                {sub.heading}
              </h4>
              <p className="text-sm text-ink-light leading-[1.6]">{sub.body}</p>
              {sub.items && (
                <ul className="mt-3 space-y-1.5">
                  {sub.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink-light leading-[1.5]">
                      <span className="mt-0.5 shrink-0" style={accentText}>
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MetricCard({
  metric,
  variant,
}: {
  metric: Project['metrics'][number];
  variant: Project['visualStyle'];
}) {
  const highlight = metric.highlight;

  const baseClasses = 'p-6 text-center';

  const variantClasses: Record<Project['visualStyle'], string> = {
    neumorphism: 'neu-inset bg-stone-200 rounded-lg',
    glassmorphism: 'glass border border-stone-300 rounded-lg',
    parallax: 'card-base rounded-lg',
    motion: 'card-base rounded-lg',
    micro: 'card-base card-hover rounded-lg',
    hybrid: 'neu-inset glass rounded-lg border border-stone-300',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div
        className={`font-display text-3xl sm:text-4xl font-700 ${
          highlight ? 'text-purple' : 'text-ink'
        }`}
      >
        {metric.value}
      </div>
      <div className="mt-2 text-xs font-500 text-ink-light leading-tight">{metric.label}</div>
    </div>
  );
}

function CaseStudyHero({ project, parallaxOffset }: { project: Project; parallaxOffset: number }) {
  const darkBg = project.visualStyle === 'parallax' || project.visualStyle === 'glassmorphism';

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${
        darkBg ? 'bg-olive-dark' : 'card-base'
      }`}
    >
      {project.visualStyle === 'parallax' && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        >
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-olive/10 blur-3xl" />
          <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full bg-terracotta/10 blur-3xl" />
        </div>
      )}

      <div className="relative p-8 sm:p-10 lg:p-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-sm text-xs font-600 ${
                darkBg
                  ? 'bg-stone-50/10 text-stone-50/80 border border-stone-50/15'
                  : 'bg-stone-200 text-ink-light'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h1
          className={`font-display text-3xl sm:text-4xl lg:text-5xl font-600 leading-[1.1] ${
            darkBg ? 'text-stone-50' : 'text-ink'
          }`}
        >
          {project.name}
        </h1>
        <p
          className={`mt-3 text-lg ${
            darkBg ? 'text-stone-50/70' : 'text-ink-light'
          }`}
        >
          {project.tagline}
        </p>
        <p
          className={`mt-4 max-w-2xl leading-[1.6] ${
            darkBg ? 'text-stone-50/60' : 'text-ink-light'
          }`}
        >
          {project.overview}
        </p>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={darkBg ? 'btn-secondary' : 'btn-primary'}
              >
                {link.label}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function getNextProject(slug: string): Project | undefined {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return projects[(idx + 1) % projects.length];
}

export function CaseStudy({ slug }: { slug: string }) {
  const project = getProject(slug);
  const parallaxOffset = useParallax(0.1);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100">
        <div className="text-center">
          <p className="text-ink-light">Case study not found.</p>
          <a href="#/" className="btn-primary mt-4">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const nextProject = getNextProject(slug);
  const isMotion = project.visualStyle === 'motion';

  return (
    <div
      className={`min-h-screen bg-stone-100 ${
        isMotion ? 'animate-fade-slide-up' : ''
      }`}
    >
      <div className="pt-20 pb-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-sm font-600 text-olive transition-all duration-200 hover:gap-3 hover:text-olive-dark mb-6"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </a>

          <Reveal>
            <CaseStudyHero project={project} parallaxOffset={parallaxOffset} />
          </Reveal>

          <Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {project.metrics.map((metric: typeof project.metrics[number], i: number) => (
                <div
                  key={metric.label}
                  className={isMotion ? 'animate-fade-slide-up' : ''}
                  style={isMotion ? { animationDelay: `${i * 100}ms` } : undefined}
                >
                  <MetricCard metric={metric} variant={project.visualStyle} />
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-12">
            {project.sections.map((section: typeof project.sections[number], i: number) => (
              <Reveal key={section.heading} delay={isMotion ? i * 60 : 0}>
                <SectionContent section={section} project={project} />
              </Reveal>
            ))}
          </div>

          {nextProject && (
            <div className="mt-16 pt-10 border-t border-stone-300">
              <span className="section-label">Next Project</span>
              <a
                href={`#/work/${nextProject.slug}`}
                className="mt-3 flex items-center justify-between card-base card-hover p-6 group"
              >
                <div>
                  <h3 className="text-lg font-600 text-ink">{nextProject.name}</h3>
                  <p className="text-sm text-ink-light mt-1">{nextProject.tagline}</p>
                </div>
                <ArrowRight
                  size={24}
                  className="text-olive transition-all duration-200 group-hover:translate-x-1 group-hover:text-olive-dark"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
