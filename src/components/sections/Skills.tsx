import { useState, useRef, useCallback } from 'react';
import { Star, Lock, Zap, Users } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const productSkills = [
  'Product Sense', 'Product Strategy', 'Prioritization', 'Root Cause Analysis',
  'Experimentation', 'Product Metrics', 'User Research', 'MVP Thinking',
];

const aiSkills = ['LLMs', 'RAG', 'Embeddings', 'AI Evaluation', 'Prompting', 'AI Product Design'];

const businessSkills = ['Team Management', 'Communication', 'Operations', 'Problem Solving', 'Cross-functional Coordination'];

function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" fill="#1ABCFE"/>
      <path d="M4 18a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4H8a4 4 0 0 0-4 4z" fill="#0ACF83"/>
      <path d="M4 6a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#F24E1E"/>
      <path d="M12 2h4a4 4 0 1 1 0 8h-4V2z" fill="#FF7262"/>
      <path d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#A259FF"/>
    </svg>
  );
}

function JiraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0052CC">
      <path d="M11.53 2c0 5.26 4.27 9.53 9.53 9.53h.94v-8.6a.93.93 0 0 0-.94-.93h-9.53zm-9.53 9.53c0 5.26 4.27 9.53 9.53 9.53h.94v-8.6a.93.93 0 0 0-.94-.93H2zm9.53 0c0 5.26 4.27 9.53 9.53 9.53h.94v-8.6a.93.93 0 0 0-.94-.93h-9.53z"/>
    </svg>
  );
}

function FramerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0055FF">
      <path d="M4 2h16v7h-8zM4 9h8l8 7H4zM4 16h8v7z"/>
    </svg>
  );
}

function LovableIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF3366">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}

function GoogleAIStudioIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#4285F4"/>
      <path d="M2 17l10 5 10-5" fill="#34A853"/>
      <path d="M2 12l10 5 10-5" fill="#FBBC05"/>
    </svg>
  );
}

function OpenRouterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#6366F1" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2" strokeLinecap="round"/>
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000000">
      <path d="M12 2L1 21h22L12 2z"/>
    </svg>
  );
}

function StreamlitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF4B4B">
      <polygon points="12 2 17.5 11 6.5 11"/>
      <polygon points="19 13 22 18 16 18"/>
      <polygon points="5 13 8 18 2 18"/>
    </svg>
  );
}

function AntigravityIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#EA4335" strokeWidth="2">
      <path d="M12 2L4 20h16L12 2z" strokeLinejoin="round"/>
      <path d="M12 8l-4 10h8l-4-10z" fill="#EA4335"/>
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#F59E0B">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

const buildingTools = [
  { name: 'Figma', Icon: FigmaIcon },
  { name: 'Jira', Icon: JiraIcon },
  { name: 'Framer', Icon: FramerIcon },
  { name: 'Lovable', Icon: LovableIcon },
  { name: 'Google AI Studio', Icon: GoogleAIStudioIcon },
  { name: 'OpenRouter', Icon: OpenRouterIcon },
  { name: 'Vercel', Icon: VercelIcon },
  { name: 'Streamlit', Icon: StreamlitIcon },
  { name: 'Antigravity', Icon: AntigravityIcon },
  { name: 'Bolt', Icon: BoltIcon },
];

function SkillChip({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`px-3.5 py-2 rounded-sm text-sm font-500 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
        accent
          ? 'bg-purple-light/30 border-purple/20 text-purple-deep'
          : 'bg-stone-50 border-stone-300 text-ink hover:border-olive/25'
      }`}
    >
      {label}
    </div>
  );
}

export function Skills() {
  const [toast, setToast] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((name: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setToast(name);
    hideTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-stone-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Capabilities</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-600 text-ink">
            Skills & Toolkit
          </h2>
          <p className="mt-3 text-ink-light max-w-2xl">
            Structured competencies spanning product management, AI architecture, rapid building, and
            business execution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="card-base p-6 sm:p-7 h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <Star size={18} className="text-olive" />
                <h3 className="text-base font-700 text-ink">Product Management</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {productSkills.map((s) => (
                  <SkillChip key={s} label={s} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="card-base p-6 sm:p-7 h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <Lock size={18} className="text-purple" />
                <h3 className="text-base font-700 text-purple">AI & Systems</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {aiSkills.map((s) => (
                  <SkillChip key={s} label={s} accent />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="card-base p-6 sm:p-7 h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <Zap size={18} className="text-olive" />
                <h3 className="text-base font-700 text-ink">Building & Prototyping</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {buildingTools.map((t) => (
                  <button
                    key={t.name}
                    onMouseEnter={() => showToast(t.name)}
                    onFocus={() => showToast(t.name)}
                    className="w-12 h-12 rounded-md bg-stone-50 border border-stone-300 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover hover:border-olive/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
                    aria-label={t.name}
                  >
                    <t.Icon />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="card-base p-6 sm:p-7 h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <Users size={18} className="text-olive" />
                <h3 className="text-base font-700 text-ink">Business & Execution</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {businessSkills.map((s) => (
                  <SkillChip key={s} label={s} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-200 ${
          toast
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3'
        }`}
        role="status"
        aria-live="polite"
      >
        <div className="bg-olive-dark text-stone-50 px-5 py-2.5 rounded-md shadow-card-hover text-sm font-600 whitespace-nowrap">
          {toast}
        </div>
      </div>
    </section>
  );
}
