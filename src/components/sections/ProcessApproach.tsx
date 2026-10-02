const steps = [
  'Understand the Problem',
  'Find the Evidence',
  'Identify the Root Cause',
  'Define User & Need',
  'Choose Direction',
  'Experiment & Measure',
  'Learn & Iterate',
];

export function ProcessApproach() {
  return (
    <section className="py-20 bg-stone-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 text-center">
          <span className="section-label">Framework</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-600 text-ink">
            How I Approach Product Problems
          </h2>
          <p className="mt-3 text-ink-light max-w-2xl mx-auto">
            I try to separate assumptions from evidence, understand the underlying user problem, and
            validate product decisions through measurable outcomes rather than relying only on
            intuition.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-3 flex-1">
              <div className="flex-1 card-base card-hover p-4 text-center">
                <div className="text-xs font-700 text-olive mb-1">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="text-sm font-600 text-ink leading-tight">{step}</div>
              </div>
              {i < steps.length - 1 && (
                <span className="hidden sm:block text-olive/40 text-lg">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center max-w-3xl mx-auto">
          <p className="font-display text-lg sm:text-xl text-ink leading-[1.5] italic">
            "A recommendation is not a decision. The PM's role is to combine analytical signals with
            strategic context to make grounded product decisions."
          </p>
        </div>
      </div>
    </section>
  );
}
