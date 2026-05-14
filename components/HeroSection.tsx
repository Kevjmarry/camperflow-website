import Image from 'next/image';

const FLOW_STEPS = [
  { label: 'Booking imported', accent: 'var(--blue-brand)' },
  { label: 'Checklist created', accent: 'var(--blue-brand)' },
  { label: 'Vehicle ready', accent: '#16a34a' },
  { label: 'Guest informed', accent: 'var(--blue-brand)' },
];

export default function HeroSection() {
  return (
    <section style={{ backgroundColor: 'var(--surface-white)' }} className="pt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Copy block */}
        <div className="max-w-3xl pt-10 pb-14 lg:pt-14 lg:pb-16">

          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold mb-6 border"
            style={{ backgroundColor: 'var(--surface-blue-pale)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--blue-brand)' }} />
            Works alongside your booking system
          </div>

          <h1
            className="text-[38px] sm:text-[50px] lg:text-[58px] font-bold leading-[1.07] tracking-tight mb-6"
            style={{ color: 'var(--on-light-primary)' }}
          >
            Your booking system takes the reservation. CamperFlow runs the operation.
          </h1>

          <p className="text-[18px] leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--on-light-secondary)' }}>
            CamperFlow is the operational control layer for campervan, caravan, and motorhome rental companies. Once a booking is confirmed — in whatever system you use — CamperFlow handles everything next: vehicle readiness, compliance tracking, digital checklists, photo evidence, guest handovers, and automated reminders. Fewer missed steps. Fewer bad reviews.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors"
            >
              Book a demo
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M3 8h10M8 3l5 5-5 5" />
              </svg>
            </a>
            <a
              href="#operations"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-[15px] font-semibold border transition-colors"
              style={{ borderColor: 'var(--border-light)', color: 'var(--on-light-secondary)' }}
            >
              See how it works
            </a>
          </div>

          {/* Operational flow proof strip */}
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 mb-6">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center gap-1.5">
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg"
                  style={{
                    backgroundColor: 'var(--surface-light)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--on-light-secondary)',
                    fontSize: '11.5px',
                    fontWeight: 500,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: step.accent }} />
                  {step.label}
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-2.5 h-2.5 flex-shrink-0"
                    style={{ color: 'var(--on-light-muted)' }}
                  >
                    <path d="M2 5h6M5.5 2.5l2.5 2.5-2.5 2.5" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <p className="text-[13px] mb-6" style={{ color: 'var(--on-light-muted)' }}>
            No need to replace your booking system. Staff can use any phone, tablet, or laptop.
          </p>

          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 border-2"
              style={{ backgroundColor: '#1e3a5f', borderColor: 'var(--border-blue-light)', color: '#f1f5f9' }}
            >
              KM
            </div>
            <p className="text-[13px]" style={{ color: 'var(--on-light-muted)' }}>
              Built by Kevin Marry — commercial pilot and active operator of Epic Vans
            </p>
          </div>
        </div>

        {/* Operations dashboard screenshot — dominant, no glow, clean browser frame */}
        <div
          className="rounded-t-2xl overflow-hidden border border-b-0"
          style={{
            borderColor: 'var(--border-light)',
            boxShadow: '0 -8px 40px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.04)',
          }}
        >
          {/* Browser chrome */}
          <div
            className="flex items-center gap-3 px-5 py-3 border-b"
            style={{ backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fca5a5' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fcd34d' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#86efac' }} />
            </div>
            <div
              className="flex-1 text-center text-[12px] font-mono"
              style={{ color: 'var(--on-light-muted)' }}
            >
              camperflow.io/operations
            </div>
          </div>

          {/* Screenshot with callout */}
          <div style={{ height: '580px', overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/screenshots/operations.png"
              alt="CamperFlow Operations Dashboard — fleet status, active rentals, reminders and upcoming pickups"
              width={2561}
              height={5507}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
            <div className="sc-callout" style={{ top: '18%', right: '3.5%' }}>
              <div className="sc-dot" />
              <span className="sc-label sc-label--dark">Time until pickup</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
