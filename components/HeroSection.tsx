import Image from 'next/image';
import ScreenshotFrame from '@/components/ScreenshotFrame';

export default function HeroSection() {
  return (
    <section className="pt-20 pb-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Floating mobile phone — right gutter, xl screens only */}
        <div
          className="hidden xl:block absolute top-16 right-12 z-10"
          style={{ width: '148px' }}
        >
          <div
            className="rounded-[1.5rem] overflow-hidden border-2"
            style={{
              borderColor: 'var(--border-light)',
              boxShadow: '0 12px 36px rgba(15,23,42,0.14), 0 2px 8px rgba(15,23,42,0.08)',
              aspectRatio: '9/16',
              backgroundColor: 'var(--surface-slate)',
              position: 'relative',
            }}
          >
            {/* Phone pill notch */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '56px',
                height: '5px',
                borderRadius: '3px',
                backgroundColor: 'rgba(15,23,42,0.12)',
                zIndex: 10,
              }}
            />
            {/* Mini chrome bar */}
            <div
              className="flex items-center gap-1 px-2 py-1.5 border-b"
              style={{
                backgroundColor: 'var(--surface-light)',
                borderColor: 'var(--border-light)',
                position: 'relative',
                zIndex: 5,
              }}
            >
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#fca5a5' }} />
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#fcd34d' }} />
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#86efac' }} />
              </div>
            </div>
            {/* Screenshot — crops to portrait from top-left */}
            <div style={{ overflow: 'hidden', flex: 1 }}>
              <Image
                src="/screenshots/digital-checklists.png"
                alt="CamperFlow mobile checklist"
                width={2561}
                height={1600}
                style={{ width: '180%', height: 'auto', display: 'block', marginLeft: '-40%' }}
              />
            </div>
          </div>
          <p
            className="mt-2 text-center text-[10px] font-medium"
            style={{ color: 'var(--on-light-muted)' }}
          >
            Mobile checklists
          </p>
        </div>

        {/* Copy block */}
        <div className="max-w-3xl pt-6 pb-16 lg:pt-8">

          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold mb-6 border"
            style={{
              backgroundColor: 'var(--surface-blue-pale)',
              borderColor: 'var(--border-blue-light)',
              color: 'var(--blue-brand)',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--blue-brand)' }} />
            Operations platform for campervan rental
          </div>

          <h1
            className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.08] tracking-tight mb-6"
            style={{ color: 'var(--on-light-primary)' }}
          >
            Your booking system takes the reservation. CamperFlow runs the operation.
          </h1>

          <p
            className="text-[18px] leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'var(--on-light-secondary)' }}
          >
            The operational layer built for campervan and motorhome rental. Everything after the booking — vehicle readiness, digital checklists, compliance tracking, and guest portals — handled in one place. Built for this industry, by an active operator.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="mailto:info@camperflow.io"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors"
            >
              Book a demo
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M3 8h10M8 3l5 5-5 5" />
              </svg>
            </a>
            <a
              href="#problem"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-[15px] font-semibold border transition-colors"
              style={{ borderColor: 'var(--border-light)', color: 'var(--on-light-secondary)' }}
            >
              See the problem it solves
            </a>
          </div>

          <p className="text-[13px]" style={{ color: 'var(--on-light-muted)' }}>
            No need to replace your booking system · Works on any device
          </p>
        </div>

        {/* Hero screenshot — light chrome, rises from bottom, no bottom border */}
        <div
          className="rounded-t-2xl overflow-hidden border border-b-0"
          style={{
            borderColor: 'var(--border-light)',
            boxShadow: '0 -6px 32px rgba(15,23,42,0.09)',
          }}
        >
          <div
            className="flex items-center gap-3 px-5 py-3 border-b"
            style={{ backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fca5a5' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fcd34d' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#86efac' }} />
            </div>
            <div className="flex-1 text-center text-[12px] font-mono" style={{ color: 'var(--on-light-muted)' }}>
              camperflow.io/operations
            </div>
          </div>
          <ScreenshotFrame
            src="/screenshots/operations.png"
            alt="CamperFlow operations dashboard — fleet status, active rentals, reminders and upcoming pickups"
            width={2561}
            height={5507}
            containerStyle={{ height: '540px' }}
            viewLabel="View full screenshot"
            priority
          >
            <div className="sc-callout" style={{ top: '17%', right: '3.5%' }}>
              <div className="sc-dot sc-dot--pulse" />
              <span className="sc-label">Time until pickup</span>
            </div>
          </ScreenshotFrame>
        </div>

      </div>
    </section>
  );
}
