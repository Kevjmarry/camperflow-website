import ScreenshotFrame from '@/components/ScreenshotFrame';

const FEATURES = [
  {
    label: 'Branded booking portal',
    desc: 'Every guest gets a dedicated portal with their booking details, vehicle guide, and pickup instructions.',
  },
  {
    label: 'Pickup and return instructions',
    desc: 'Guests know exactly what to bring, where to go, and what to expect — before they arrive.',
  },
  {
    label: 'Vehicle-specific guides',
    desc: "How to use the van, key features, tips — specific to their vehicle, attached to their booking.",
  },
  {
    label: 'Automated reminders',
    desc: 'Guests receive timely reminders before pickup and return so nothing is forgotten on either side.',
  },
];

export default function GuestExperienceMomentSection() {
  return (
    <section id="guest-experience-moment" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Copy */}
          <div data-reveal="">
            <div
              className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
              style={{ backgroundColor: 'var(--surface-blue-pale)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
            >
              Guest Experience
            </div>
            <h2
              className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
              style={{ color: 'var(--on-light-primary)' }}
            >
              Informed guests. Smoother handovers. Fewer calls.
            </h2>
            <p
              className="text-[16px] leading-relaxed mb-8"
              style={{ color: 'var(--on-light-secondary)' }}
            >
              A branded guest portal for every booking — pickup instructions, vehicle guide, return requirements. Guests arrive prepared. Your team spends less time explaining and more time running the operation.
            </p>
            <div className="space-y-5">
              {FEATURES.map((f) => (
                <div key={f.label} className="flex gap-3">
                  <div
                    className="mt-0.5 w-5 h-5 rounded flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--surface-blue-pale)', border: '1px solid var(--border-blue-light)' }}
                  >
                    <svg viewBox="0 0 10 10" fill="none" stroke="#2563eb" strokeWidth={2} strokeLinecap="round" className="w-2.5 h-2.5">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold mb-0.5" style={{ color: 'var(--on-light-primary)' }}>{f.label}</div>
                    <div className="text-[13px] leading-relaxed" style={{ color: 'var(--on-light-muted)' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="/guest-experience"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold"
                style={{ color: 'var(--blue-brand)' }}
              >
                Learn more about Guest Experience
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M3 8h10M8 3l5 5-5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Screenshot */}
          <div data-reveal="" data-reveal-delay="1">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: 'var(--border-light)', boxShadow: '0 4px 24px rgba(15,23,42,0.08)' }}
            >
              <div
                className="flex items-center gap-3 px-4 py-2.5 border-b"
                style={{ backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#fca5a5' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#fcd34d' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#86efac' }} />
                </div>
                <div className="flex-1 text-center text-[11px] font-mono" style={{ color: 'var(--on-light-muted)' }}>
                  camperflow.io/my-booking
                </div>
              </div>
              <ScreenshotFrame
                src="/screenshots/guest-portal.png"
                alt="CamperFlow guest booking portal — pickup instructions and vehicle guide"
                width={2561}
                height={1264}
                containerStyle={{ height: '340px' }}
                viewLabel="View full screenshot"
              >
                <div className="sc-callout" style={{ top: '12%', right: '4%' }}>
                  <div
                    className="sc-dot"
                    style={{ backgroundColor: '#16a34a', boxShadow: '0 0 0 3px rgba(22,163,74,0.15)' }}
                  />
                  <span className="sc-label">Pickup confirmed</span>
                </div>
              </ScreenshotFrame>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
