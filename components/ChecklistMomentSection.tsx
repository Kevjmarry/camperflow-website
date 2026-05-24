const FEATURES = [
  {
    label: 'Guided step-by-step checklists',
    desc: 'Every pickup and return follows the same structured process — regardless of who is on shift.',
  },
  {
    label: 'Timestamped photo evidence',
    desc: "Photos tied to each step, each booking. When a guest disputes damage, you have the record.",
  },
  {
    label: 'Consistent across your whole team',
    desc: 'New staff follow the same process as your most experienced. No shortcuts, no guesswork.',
  },
  {
    label: 'Signed off and stored permanently',
    desc: 'Each checklist is signed at completion and stored against the booking — retrievable any time.',
  },
];

export default function ChecklistMomentSection() {
  return (
    <section id="checklist-moment" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Portrait phone placeholder — left on desktop, below on mobile */}
          <div data-reveal="" className="flex justify-center order-last lg:order-first">
            <div style={{ width: '260px', position: 'relative' }}>
              <div
                className="rounded-[2rem] overflow-hidden border-2"
                style={{
                  borderColor: 'var(--border-light)',
                  boxShadow: '0 16px 48px rgba(15,23,42,0.12), 0 2px 8px rgba(15,23,42,0.06)',
                  aspectRatio: '9/16',
                  backgroundColor: 'var(--surface-slate)',
                  position: 'relative',
                }}
              >
                {/* Phone pill notch */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '64px',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: 'rgba(15,23,42,0.12)',
                    zIndex: 10,
                  }}
                />
                {/* Placeholder content */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--surface-blue-pale)',
                    padding: '24px',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.7)',
                      border: '1px solid var(--border-blue-light)',
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <path d="M9 7h6M9 11h6M9 15h4" />
                    </svg>
                  </div>
                  {/* Mock checklist rows */}
                  <div className="w-full space-y-2.5">
                    {['Vehicle condition check', 'Fuel level recorded', 'Photos captured', 'Guest signed off'].map((step, i) => (
                      <div
                        key={step}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.7)',
                          border: '1px solid rgba(37,99,235,0.12)',
                        }}
                      >
                        <div
                          className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center"
                          style={{
                            backgroundColor: i < 3 ? '#86efac' : 'rgba(37,99,235,0.1)',
                            border: i < 3 ? '1px solid #4ade80' : '1px solid rgba(37,99,235,0.2)',
                          }}
                        >
                          {i < 3 && (
                            <svg viewBox="0 0 8 8" fill="none" stroke="#15803d" strokeWidth={2} strokeLinecap="round" className="w-2 h-2">
                              <path d="M1 4l2 2 4-4" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[10px] font-medium" style={{ color: i < 3 ? 'var(--on-light-secondary)' : 'var(--blue-brand)' }}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p
                    className="mt-4 text-[9px] text-center font-medium"
                    style={{ color: 'var(--on-light-muted)' }}
                  >
                    Portrait screenshot · asset pending
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div data-reveal="" data-reveal-delay="1">
            <div
              className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
              style={{ backgroundColor: 'var(--surface-blue-pale)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
            >
              Checklists &amp; Evidence
            </div>
            <h2
              className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
              style={{ color: 'var(--on-light-primary)' }}
            >
              Every handover guided, logged, and evidenced.
            </h2>
            <p
              className="text-[16px] leading-relaxed mb-8"
              style={{ color: 'var(--on-light-secondary)' }}
            >
              No more relying on the right person being on shift to run a proper handover. Digital checklists guide every pickup and return — with photo evidence attached to every booking, permanently.
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
                href="/checklists"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold"
                style={{ color: 'var(--blue-brand)' }}
              >
                Learn more about Checklists
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M3 8h10M8 3l5 5-5 5" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
