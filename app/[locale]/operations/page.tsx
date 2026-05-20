import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import CtaSection from '@/components/CtaSection';
import ScrollObserver from '@/components/ScrollObserver';

export default async function OperationsPage() {
  const t = await getTranslations('operations');

  const stats = [
    {value: t('stat0Value'), label: t('stat0Label')},
    {value: t('stat1Value'), label: t('stat1Label')},
    {value: t('stat2Value'), label: t('stat2Label')},
  ];

  const proofPoints = [
    {
      src: '/screenshots/reminders.png',
      width: 2561,
      height: 1600,
      label: t('remindersLabel'),
      desc: t('remindersDesc'),
    },
    {
      src: '/screenshots/vehicle-readiness.png',
      width: 2561,
      height: 1600,
      label: t('readinessLabel'),
      desc: t('readinessDesc'),
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <AnimatedRibbon />
      <Navbar />
      <main>

        {/* ── 1. Hero ────────────────────────────────────────────────── */}
        <section
          className="pt-28 pb-0 relative"
          style={{backgroundColor: 'var(--navy-950)'}}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl pt-10 pb-12 lg:pt-14">

              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold mb-6 border"
                style={{
                  backgroundColor: 'rgba(37,99,235,0.12)',
                  borderColor: 'rgba(37,99,235,0.3)',
                  color: 'var(--blue-light)',
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--blue-light)'}} />
                {t('heroBadge')}
              </div>

              <h1
                className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.08] tracking-tight mb-6"
                style={{color: 'var(--text-primary)'}}
              >
                {t('heroHeadline')}
              </h1>

              <p
                className="text-[18px] leading-relaxed mb-8 max-w-2xl"
                style={{color: 'var(--text-secondary)'}}
              >
                {t('heroSubheadline')}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors"
                >
                  {t('heroCta')}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M3 8h10M8 3l5 5-5 5" />
                  </svg>
                </a>
                <a
                  href="#dashboard"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-[15px] font-semibold border transition-colors"
                  style={{borderColor: 'var(--border-dim)', color: 'var(--text-secondary)'}}
                >
                  {t('heroSecondary')}
                </a>
              </div>

              <p className="text-[13px]" style={{color: 'var(--text-muted)'}}>
                {t('heroTrust')}
              </p>
            </div>

            {/* Hero screenshot — operations.png rising from bottom, no bottom border */}
            <div
              className="rounded-t-2xl overflow-hidden border border-b-0"
              style={{
                borderColor: 'var(--border-dim)',
                boxShadow: '0 -8px 48px rgba(0,0,0,0.35)',
              }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3 border-b"
                style={{backgroundColor: '#0f1f38', borderColor: 'var(--border-subtle)'}}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#fca5a5'}} />
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#fcd34d'}} />
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#86efac'}} />
                </div>
                <div className="flex-1 text-center text-[12px] font-mono" style={{color: 'var(--text-muted)'}}>
                  camperflow.io/operations
                </div>
              </div>
              <div data-sc-pan="" style={{height: '540px', overflow: 'hidden', position: 'relative'}}>
                <Image
                  src="/screenshots/operations.png"
                  alt="CamperFlow operations dashboard — fleet status, active rentals, reminders and upcoming pickups"
                  width={2561}
                  height={5507}
                  style={{width: '100%', height: 'auto', display: 'block'}}
                  priority
                />
                <div className="sc-callout" style={{top: '17%', right: '3.5%'}}>
                  <div className="sc-dot" />
                  <span className="sc-label sc-label--dark">Time until pickup</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Dashboard proof ─────────────────────────────────────── */}
        <section
          id="dashboard"
          className="py-20 lg:py-28"
          style={{backgroundColor: 'var(--surface-white)'}}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div data-reveal="" className="max-w-2xl mb-10">
              <div
                className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
                style={{
                  backgroundColor: 'var(--surface-blue-pale)',
                  borderColor: 'var(--border-blue-light)',
                  color: 'var(--blue-brand)',
                }}
              >
                {t('dashboardBadge')}
              </div>
              <h2
                className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('dashboardHeadline')}
              </h2>
              <p className="text-[17px] leading-relaxed" style={{color: 'var(--on-light-secondary)'}}>
                {t('dashboardBody')}
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[22px] sm:text-[28px] font-bold mb-0.5" style={{color: 'var(--blue-brand)'}}>
                    {s.value}
                  </div>
                  <div className="text-[12px] leading-snug" style={{color: 'var(--on-light-muted)'}}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Full operations screenshot */}
            <div
              data-reveal=""
              data-reveal-delay="1"
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: 'var(--border-light)',
                boxShadow: '0 8px 40px rgba(15,23,42,0.08)',
              }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3 border-b"
                style={{backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)'}}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#fca5a5'}} />
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#fcd34d'}} />
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#86efac'}} />
                </div>
                <div className="flex-1 text-center text-[12px] font-mono" style={{color: 'var(--on-light-muted)'}}>
                  camperflow.io/operations
                </div>
              </div>
              <div data-sc-pan="" style={{maxHeight: '1100px', overflow: 'hidden'}}>
                <Image
                  src="/screenshots/operations.png"
                  alt="CamperFlow fleet command center — full operations dashboard with upcoming rentals, vehicle readiness, and open tasks"
                  width={2561}
                  height={5507}
                  style={{width: '100%', height: 'auto', display: 'block'}}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. Today / next-action workflow ────────────────────────── */}
        <section
          className="py-20 lg:py-28 border-y"
          style={{backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)'}}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left: copy */}
              <div data-reveal="" className="max-w-lg">
                <div
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5 border"
                  style={{
                    backgroundColor: 'var(--surface-blue-pale)',
                    borderColor: 'var(--border-blue-light)',
                    color: 'var(--blue-brand)',
                  }}
                >
                  {t('workflowBadge')}
                </div>
                <h2
                  className="text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight mb-5"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {t('workflowHeadline')}
                </h2>
                <p className="text-[17px] leading-relaxed" style={{color: 'var(--on-light-secondary)'}}>
                  {t('workflowBody')}
                </p>
              </div>

              {/* Right: operations.png — mid crop showing upcoming tasks panel */}
              <div
                data-reveal=""
                data-reveal-delay="1"
                className="rounded-2xl overflow-hidden border"
                style={{
                  borderColor: 'var(--border-light)',
                  boxShadow: '0 4px 24px rgba(15,23,42,0.07)',
                }}
              >
                <div
                  className="flex items-center gap-3 px-4 py-2.5 border-b"
                  style={{backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)'}}
                >
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: '#fca5a5'}} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: '#fcd34d'}} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: '#86efac'}} />
                  </div>
                  <div className="flex-1 text-center text-[11px] font-mono" style={{color: 'var(--on-light-muted)'}}>
                    camperflow.io/operations
                  </div>
                </div>
                <div style={{height: '400px', overflow: 'hidden', position: 'relative'}}>
                  <Image
                    src="/screenshots/operations.png"
                    alt="CamperFlow today's operational view — upcoming pickups and next actions"
                    width={2561}
                    height={5507}
                    style={{width: '100%', height: 'auto', display: 'block', marginTop: '-180px'}}
                  />
                  <div className="sc-callout" style={{top: '22%', right: '4%'}}>
                    <div className="sc-dot sc-dot--pulse" />
                    <span className="sc-label sc-label--blue">{t('workflowCallout')}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. Reminders + Vehicle Readiness ───────────────────────── */}
        <section
          className="py-20 lg:py-28"
          style={{backgroundColor: 'var(--surface-white)'}}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div data-reveal="" className="max-w-2xl mb-12">
              <div
                className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
                style={{
                  backgroundColor: 'var(--surface-blue-pale)',
                  borderColor: 'var(--border-blue-light)',
                  color: 'var(--blue-brand)',
                }}
              >
                {t('featuresBadge')}
              </div>
              <h2
                className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('featuresHeadline')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {proofPoints.map((item) => (
                <div
                  key={item.src}
                  data-reveal=""
                  className="rounded-2xl overflow-hidden border"
                  style={{borderColor: 'var(--border-light)', backgroundColor: 'var(--surface-light)'}}
                >
                  <div style={{height: '260px', overflow: 'hidden'}}>
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={item.width}
                      height={item.height}
                      style={{width: '100%', height: 'auto', display: 'block'}}
                    />
                  </div>
                  <div className="px-5 py-4 border-t" style={{borderColor: 'var(--border-light)'}}>
                    <div className="text-[14px] font-semibold mb-1" style={{color: 'var(--on-light-primary)'}}>
                      {item.label}
                    </div>
                    <div className="text-[13px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 5. CTA ─────────────────────────────────────────────────── */}
        <CtaSection />

      </main>
      <ScrollObserver />
      <footer
        className="py-8 border-t text-center text-[13px]"
        style={{
          backgroundColor: 'var(--navy-950)',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-muted)',
        }}
      >
        © {new Date().getFullYear()} CamperFlow. All rights reserved.
      </footer>
    </div>
  );
}
