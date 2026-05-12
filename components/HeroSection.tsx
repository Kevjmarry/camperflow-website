import {useTranslations} from 'next-intl';

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Blue glow */}
      <div
        className="absolute -inset-8 rounded-3xl"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(30,106,255,0.18) 0%, transparent 70%)',
          filter: 'blur(16px)',
        }}
      />

      {/* Dashboard card */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          backgroundColor: 'var(--navy-800)',
          border: '1px solid var(--border-dim)',
          boxShadow: '0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Window chrome */}
        <div
          className="flex items-center gap-3 px-4 py-3 border-b"
          style={{backgroundColor: 'var(--navy-950)', borderColor: 'var(--border-subtle)'}}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.12)'}} />
            <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.12)'}} />
            <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.12)'}} />
          </div>
          <div className="flex-1 text-center text-[11px] font-mono" style={{color: 'var(--text-muted)'}}>
            CamperFlow — Operations
          </div>
          <div className="text-[11px] font-mono" style={{color: 'var(--text-muted)'}}>
            12 May
          </div>
        </div>

        <div className="p-4 sm:p-5">
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {[
              {label: 'Fleet ready', value: '12', color: '#22c55e', pct: 80},
              {label: 'Active rentals', value: '4', color: 'var(--blue-brand)', pct: 33},
              {label: 'Open issues', value: '2', color: '#f59e0b', pct: 20},
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-3 border"
                style={{backgroundColor: 'var(--navy-950)', borderColor: 'var(--border-subtle)'}}
              >
                <div className="text-[18px] font-bold leading-none mb-1" style={{color: 'var(--text-primary)'}}>
                  {stat.value}
                </div>
                <div className="text-[10px] mb-2" style={{color: 'var(--text-muted)'}}>
                  {stat.label}
                </div>
                <div className="h-0.5 rounded-full w-full" style={{backgroundColor: 'rgba(255,255,255,0.06)'}}>
                  <div
                    className="h-full rounded-full"
                    style={{width: `${stat.pct}%`, backgroundColor: stat.color}}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming rentals */}
          <div
            className="rounded-xl overflow-hidden border"
            style={{borderColor: 'var(--border-subtle)'}}
          >
            <div
              className="px-3 py-2 border-b text-[10px] font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: 'var(--navy-950)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-muted)',
              }}
            >
              Upcoming rentals
            </div>
            {[
              {vehicle: 'EV-Camper A3', date: 'Today, 10:00', status: 'Ready', color: '#22c55e'},
              {vehicle: 'EV-Camper B7', date: 'Today, 14:00', status: 'Checking', color: '#f59e0b'},
              {vehicle: 'EV-Camper C2', date: 'Tomorrow', status: 'Ready', color: '#22c55e'},
              {vehicle: 'EV-Camper D5', date: '14 May', status: 'Ready', color: '#22c55e'},
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-3 py-2.5 border-b last:border-0"
                style={{
                  backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div>
                  <div className="text-[11px] font-medium" style={{color: 'var(--text-primary)'}}>
                    {row.vehicle}
                  </div>
                  <div className="text-[10px]" style={{color: 'var(--text-muted)'}}>
                    {row.date}
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: row.color}} />
                  <span className="text-[10px] font-medium" style={{color: row.color}}>
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
          background: 'radial-gradient(ellipse at top, rgba(30,106,255,0.12) 0%, transparent 60%)',
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
                backgroundColor: 'rgba(30,106,255,0.1)',
                borderColor: 'rgba(30,106,255,0.25)',
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold bg-[#1e6aff] hover:bg-[#1459d9] text-white transition-colors"
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

          {/* Right: dashboard visual */}
          <div className="lg:block">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
