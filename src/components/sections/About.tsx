import { Lightbulb, Hammer, CheckCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const focusAreas = ['AI Products', 'Product Strategy', 'Experimentation', 'Execution'];
const buildingAreas = ['AI-powered products', 'Working prototypes', 'Product case studies'];
const tools = ['Figma', 'Jira', 'Framer', 'Lovable', 'Google AI Studio', 'OpenRouter', 'Vercel', 'Streamlit', 'Antigravity', 'Bolt'];

const howIWork = [
  {
    badge: 'THINK',
    badgeClass: 'bg-olive/15 text-olive',
    icon: Lightbulb,
    desc: 'I break ambiguous problems into users, evidence, root causes and constraints.',
  },
  {
    badge: 'BUILD',
    badgeClass: 'bg-terracotta/15 text-terracotta',
    icon: Hammer,
    desc: 'I turn ideas into prototypes and working AI/product experiences.',
  },
  {
    badge: 'VALIDATE',
    badgeClass: 'bg-purple/15 text-purple',
    icon: CheckCircle,
    desc: 'I use experiments, metrics and user feedback to understand whether an idea actually works.',
  },
];

const journey = [
  { label: 'B.A. Background', purple: false },
  { label: 'Product Thinking', purple: false },
  { label: 'AI + Product Building', purple: true },
  { label: 'Working Prototypes', purple: false },
  { label: 'Product Management', purple: true },
];

const transferableStrengths = ['Team Management', 'Operations', 'Coordination', 'Problem Solving', 'Communication', 'Execution'];

const expPoints = [
  'Coordinated examination operations and facility readiness for multi-entrance examinations.',
  'Managed and coordinated a team of 25+ people, including invigilators and support staff.',
  'Ensured adherence to examination protocols and operational requirements.',
  'Resolved candidate, logistics and coordination issues in a high-pressure environment.',
];

function Pill({ children }: { children: string }) {
  return (
    <span className="px-3 py-1.5 rounded-sm text-xs font-500 bg-stone-100 border border-stone-300 text-ink transition-all duration-200 hover:border-olive/30 hover:bg-stone-50">
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12">
          <span className="section-label">About Me</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-600 text-ink">
            Background & Philosophy
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14">
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-ink leading-[1.4] italic mb-6">
              "I like turning messy problems into useful products."
            </h3>
            <div className="space-y-4 text-ink-light leading-[1.65]">
              <p>
                I'm Satyam, an aspiring Product Manager focused on AI products, product strategy and
                execution.
              </p>
              <p>
                I come from a B.A. background and have been developing my product skills through
                hands-on product case studies, AI-powered prototypes, experimentation, and practical
                product problem solving.
              </p>
              <p>
                Alongside product building, my experience as a Center Manager with the CET Cell gave
                me real-world experience coordinating operations and managing 25+ people in a
                high-pressure examination environment.
              </p>
              <p>
                I'm now looking for opportunities where I can work on real product problems,
                collaborate with cross-functional teams, and help build products that people
                actually use.
              </p>
            </div>
          </div>

          <Reveal>
            <div className="card-base p-6 sm:p-7 sticky top-24">
              <div className="pb-5 border-b border-stone-300">
                <div className="text-xl font-700 text-ink">Satyam Puranik</div>
                <div className="text-sm text-ink-light mt-1">Aspiring Product Manager</div>
                <div className="text-xs text-olive mt-1 font-500">
                  AI Products · Product Strategy · Execution
                </div>
              </div>

              <div className="mt-5">
                <div className="section-label mb-2.5">Focus</div>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((f) => (
                    <Pill key={f}>{f}</Pill>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="section-label mb-2.5">Building</div>
                <div className="flex flex-wrap gap-2">
                  {buildingAreas.map((b) => (
                    <Pill key={b}>{b}</Pill>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="section-label mb-2.5">Tools</div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <span className="section-label">How I Work</span>
          <div className="mt-5 grid sm:grid-cols-3 gap-5">
            {howIWork.map((item, i) => (
              <Reveal key={item.badge} delay={i * 80}>
                <div className="card-base card-hover p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1.5 rounded-sm text-xs font-700 ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                    <item.icon size={18} className="text-ink-light" />
                  </div>
                  <p className="text-sm text-ink-light leading-[1.6]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <span className="section-label">My Product Journey</span>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {journey.map((node, i) => (
              <div key={node.label} className="flex items-center gap-3">
                <div className="flex items-center gap-2.5 card-base px-4 py-2.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      node.purple ? 'bg-purple' : 'bg-olive'
                    }`}
                  />
                  <span className="text-sm font-600 text-ink">{node.label}</span>
                </div>
                {i < journey.length - 1 && (
                  <span className="text-olive/40 text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="card-base p-6 sm:p-7 h-full">
              <span className="section-label">Experience</span>
              <h3 className="mt-2 text-lg font-700 text-ink">
                Center Manager | CET Cell
              </h3>
              <div className="text-sm text-ink-light mt-1">
                MSS's College of Engineering, Jalna
              </div>
              <div className="text-xs text-ink-light/70 mt-0.5">
                March 2026 – May 2026
              </div>
              <ul className="mt-4 space-y-2.5">
                {expPoints.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-ink-light leading-[1.55]">
                    <span className="text-olive mt-1 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-stone-300">
                <span className="text-[10px] font-700 text-ink-light/60 uppercase tracking-wider">
                  Transferable Strengths
                </span>
                <div className="flex flex-wrap gap-2 mt-2.5">
                  {transferableStrengths.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-base p-6 sm:p-7 h-full">
              <div className="mb-7">
                <span className="section-label">Education</span>
                <h3 className="mt-2 text-lg font-700 text-ink">Bachelor of Arts (B.A.)</h3>
                <div className="text-sm text-ink-light mt-1">BAMU University</div>
                <div className="text-xs text-ink-light/70 mt-0.5">Graduated 2024</div>
              </div>

              <div>
                <span className="section-label">Certifications & Learning</span>
                <h3 className="mt-2 text-base font-700 text-ink">
                  TCS iON Career Edge – Young Professionals
                </h3>
                <div className="text-sm text-ink-light mt-1">TCS iON</div>
                <div className="text-xs text-ink-light/70 mt-0.5">Verified Credential</div>
                <p className="text-sm text-ink-light mt-2 leading-[1.55]">
                  Business communication, collaboration, presentations, and organizational execution.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
