import Image from 'next/image';

export default function LifecycleSection() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: 'var(--surface-blue-pale)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* Left: copy */}
          <div data-reveal="" className="max-w-lg">
            <div
              className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5 border"
              style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
            >
              Staff &amp; checklists
            </div>

            <h2
              className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-5"
              style={{ color: 'var(--on-light-primary)' }}
            >
              Seasonal staff don&apos;t carry institutional memory. Your checklists should.
            </h2>

            <p className="text-[17px] leading-relaxed mb-6" style={{ color: 'var(--on-light-secondary)' }}>
              Every season you onboard new staff. Every handover depends on someone knowing the right steps in the right order. Without a structured system, things get missed — and you only find out when a guest calls.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Consistent across every staff member',
                  body: 'The checklist doesn\'t change based on who\'s on shift. Everyone follows the same structured workflow.',
                },
                {
                  title: 'Logged and timestamped',
                  body: 'Every completed step creates a record. You always know who did what and when — before or after handover.',
                },
                {
                  title: 'Photo evidence at every handover',
                  body: 'Staff capture vehicle condition at pickup and return. Timestamped photos tied to the booking — your protection if a damage dispute arises.',
                },
                {
                  title: 'Custom templates per workflow',
                  body: 'Different checklists for pre-rental prep, pickup handover, return inspection, and deep clean.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 rounded-xl border"
                  style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-blue-light)' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'var(--blue-brand)' }}
                  >
                    <svg viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" className="w-2.5 h-2.5">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold mb-0.5" style={{ color: 'var(--on-light-primary)' }}>
                      {item.title}
                    </div>
                    <div className="text-[13px] leading-relaxed" style={{ color: 'var(--on-light-muted)' }}>
                      {item.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-[14px] font-semibold"
              style={{ color: 'var(--blue-brand)' }}
            >
              See checklists in action
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M3 8h10M8 3l5 5-5 5" />
              </svg>
            </a>
          </div>

          {/* Right: staff.png + digital-checklists.png — layered stack */}
          <div data-reveal="" data-reveal-delay="1" className="lg:sticky lg:top-24 space-y-4">

            {/* Supporting: staff.png */}
            <div
              className="rounded-xl overflow-hidden border"
              style={{
                borderColor: 'var(--border-blue-light)',
                boxShadow: '0 4px 16px rgba(37,99,235,0.06)',
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2 border-b"
                style={{ backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)' }}
              >
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#fca5a5' }} />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#fcd34d' }} />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#86efac' }} />
                </div>
                <div className="flex-1 text-center text-[10px] font-mono" style={{ color: 'var(--on-light-muted)' }}>
                  camperflow.io/staff
                </div>
              </div>
              <div style={{ height: '190px', overflow: 'hidden' }}>
                <Image
                  src="/screenshots/staff.png"
                  alt="CamperFlow staff management — team roles, task assignments, and accountability across seasonal staff"
                  width={2561}
                  height={1800}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Main: digital-checklists.png with Checklist progress callout */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: 'var(--border-blue-light)',
                boxShadow: '0 12px 40px rgba(37,99,235,0.08), 0 2px 8px rgba(0,0,0,0.06)',
              }}
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
                  camperflow.io/checklists
                </div>
              </div>
              <div style={{ maxHeight: '520px', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src="/screenshots/digital-checklists.png"
                  alt="CamperFlow digital checklists — structured handover workflows with completion tracking"
                  width={2561}
                  height={3200}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div className="sc-callout" style={{ top: '38%', right: '4%' }}>
                  <div className="sc-dot" />
                  <span className="sc-label sc-label--blue">Checklist progress</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
