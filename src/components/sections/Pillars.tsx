import { Brain, Target, Activity, Zap } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const pillars = [
  {
    icon: Brain,
    title: 'AI Product Management',
    desc: 'Building and evaluating AI-powered products with a focus on user value, reliability, and measurable outcomes.',
  },
  {
    icon: Target,
    title: 'Product Strategy',
    desc: 'Breaking ambiguous problems into user needs, product opportunities, constraints, and product decisions.',
  },
  {
    icon: Activity,
    title: 'Experimentation',
    desc: 'Designing experiments, metrics, guardrails, and rollout strategies to validate product decisions.',
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    desc: 'Turning product concepts into interactive prototypes quickly using AI-assisted development tools.',
  },
];

export function Pillars() {
  return (
    <section className="py-20 bg-stone-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Core Competencies</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-600 text-ink">
            What I Work On
          </h2>
          <p className="mt-3 text-ink-light max-w-2xl">
            Bridging user problems, business goals, and engineering execution through structured
            product thinking.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80}>
              <div className="card-base card-hover p-6 h-full group">
                <div className="w-11 h-11 rounded-md bg-olive/10 flex items-center justify-center text-olive mb-4 transition-all duration-200 group-hover:bg-olive group-hover:text-stone-50">
                  <pillar.icon size={22} />
                </div>
                <h3 className="text-base font-600 text-ink mb-2">{pillar.title}</h3>
                <p className="text-sm text-ink-light leading-[1.55]">{pillar.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
