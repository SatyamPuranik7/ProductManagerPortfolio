import { ArrowRight } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

const flowSteps = [
  { num: '01', label: 'Problem', sub: 'Root friction' },
  { num: '02', label: 'Evidence', sub: 'Data & observation' },
  { num: '03', label: 'Insight', sub: 'Underlying driver', highlight: true },
  { num: '04', label: 'Solution', sub: 'Pragmatic MVP' },
  { num: '05', label: 'Experiment', sub: 'Guardrails & metrics' },
  { num: '06', label: 'Learn', sub: 'Iterate & calibrate' },
];

export function Hero() {
  const parallaxOffset = useParallax(0.15);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 -right-20 w-72 h-72 rounded-full bg-olive/5 blur-3xl" />
        <div className="absolute top-40 -left-10 w-64 h-64 rounded-full bg-purple/5 blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-48 h-48 rounded-full bg-terracotta/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="animate-fade-slide-up">
            <span className="section-label">Product Manager</span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-600 text-ink">
              Building{' '}
              <span className="text-purple">AI-powered</span> products
              <br className="hidden sm:block" /> that solve real user problems.
            </h1>
            <p className="mt-6 text-lg text-ink-light leading-[1.6] max-w-xl">
              I'm Satyam, an aspiring Product Manager focused on AI products, product strategy and
              execution. I turn ambiguous problems into user-focused products through product
              thinking, experimentation, and rapid prototyping.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollTo('#work')} className="btn-primary">
                View My Work
                <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollTo('#about')} className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>

          <div
            className="animate-fade-slide-up"
            style={{ animationDelay: '100ms', transitionDelay: '100ms' }}
          >
            <div className="card-base p-6 sm:p-7">
              <div className="flex items-center justify-between pb-4 border-b border-stone-300">
                <span className="text-sm font-600 text-ink">Product Thinking Framework</span>
                <span className="text-sm font-700 text-purple">System Loop</span>
              </div>
              <div className="mt-5 flex flex-col gap-2.5">
                {flowSteps.map((step) => (
                  <div
                    key={step.num}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-md transition-all duration-200 ${
                      step.highlight
                        ? 'bg-purple-light/40 border border-purple/20'
                        : 'bg-stone-100 border border-stone-300'
                    }`}
                  >
                    <span className="text-sm font-600 text-ink">
                      {step.num} {step.label}
                    </span>
                    <span
                      className={`text-xs font-500 ${
                        step.highlight ? 'text-purple-deep font-600' : 'text-ink-light'
                      }`}
                    >
                      {step.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
