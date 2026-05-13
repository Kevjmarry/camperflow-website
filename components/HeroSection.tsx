import Image from 'next/image';
import {useTranslations} from 'next-intl';

function OperationsScreenshot() {
  return (
    <div className="relative">
      {/* Subtle glow */}
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.14) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Screenshot frame */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: '1px solid var(--border-dim)',
          boxShadow: '0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-3 px-4 py-2.5 border-b"
          style={{backgroundColor: '#f8fafc', borderColor: '#e2e8f0'}}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="flex-1 text-center text-[11px] font-mono text-slate-400 truncate">
            camperflow.io/operations
          </div>
        </div>

        {/* Screenshot — shows top portion of the operations dashboard */}
        <div className="relative" style={{height: '420px', overflow: 'hidden'}}>
          <Image
            src="/screenshots/operations.png"
            alt="CamperFlow Operations Dashboard showing fleet status, active rentals, reminders and upcoming pickups"
            width={2561}
            height={5507}
            style={{width: '100%', height: 'auto', display: 'block'}}
            priority
          />
          {/* Gradient fade at bottom to signal more content below */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '80px',
              background: 'linear-gradient(to bottom, transparent, rgba(10,22,40,0.85))',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-grid"
      style={{backgroundColor: 'var(--navy-900)'}}
    >
      {/* Background radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div className="max-w-xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium mb-6 border"
              style={{
                backgroundColor: 'rgba(37,99,235,0.1)',
                borderColor: 'rgba(37,99,235,0.25)',
                color: 'var(--blue-light)',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{backgroundColor: 'var(--blue-brand)'}} />
              Operations management
            </div>

            {/* Headline */}
            <h1
              className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-5"
              style={{color: 'var(--text-primary)'}}
            >
              {t('headline')}
            </h1>

            {/* Subheadline */}
            <p className="text-[17px] leading-relaxed mb-6" style={{color: 'var(--text-secondary)'}}>
              {t('subheadline')}
            </p>

            {/* Clarification box */}
            <div
              className="px-4 py-3.5 rounded-xl border mb-8 text-[14px] leading-relaxed"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-muted)',
              }}
            >
              <span
                className="font-semibold mr-1"
                style={{color: 'var(--text-secondary)'}}
              >
                Note:
              </span>
              {t('clarification')}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold bg-[#2563eb] hover:bg-[#1d4ed8] text-white transition-colors"
              >
                {t('ctaDemo')}
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold border border-white/10 hover:border-white/20 text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
              >
                {t('ctaHow')}
              </a>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {['KM'].map((init) => (
                  <div
                    key={init}
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                    style={{
                      backgroundColor: 'var(--navy-600)',
                      borderColor: 'var(--navy-900)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <p className="text-[13px]" style={{color: 'var(--text-muted)'}}>
                {t('trust')}
              </p>
            </div>
          </div>

          {/* Right: operations screenshot */}
          <div className="lg:block">
            <OperationsScreenshot />
          </div>
        </div>
      </div>
    </section>
  );
}
