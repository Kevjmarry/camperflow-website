import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import ScreenshotFrame from '@/components/ScreenshotFrame';

export default async function OperationsPage() {
  const t = await getTranslations('operations');
  const tCommon = await getTranslations('common');

  const stats = [
    {value: t('stat0Value'), label: t('stat0Label')},
    {value: t('stat1Value'), label: t('stat1Label')},
    {value: t('stat2Value'), label: t('stat2Label')},
  ];

  const remindersList = [
    t('remindersList0'),
    t('remindersList1'),
    t('remindersList2'),
    t('remindersList3'),
  ];

  const readinessList = [
    t('readinessList0'),
    t('readinessList1'),
    t('readinessList2'),
  ];

  const staffCards = [
    {title: t('staff0Title'), timestamp: t('staff0Timestamp'), desc: t('staff0Desc'), icon: 'checklist' as const},
    {title: t('staff1Title'), timestamp: t('staff1Timestamp'), desc: t('staff1Desc'), icon: 'issue' as const},
    {title: t('staff2Title'), timestamp: t('staff2Timestamp'), desc: t('staff2Desc'), icon: 'return' as const},
  ];

  return (
    <div
      className="operations-page relative overflow-hidden"
      style={{background: '#eef4ff'}}
    >
      {/*
       * Ribbon blend mode override: multiply makes the blue/cyan bands visible
       * against the light #eef4ff surface. Same fix as checklist-page.
       */}
      <style>{`
        .operations-page .ribbon-root { mix-blend-mode: multiply; }
        .operations-page main, .operations-page footer { position: relative; z-index: 25; }
      `}</style>
      <AnimatedRibbon />
      <Navbar />
      <main>

        {/* ── 1. Hero ────────────────────────────────────────────────── */}
        <section className="pt-20 pb-0 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl pt-6 pb-12 lg:pt-8">

              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold mb-6 border"
                style={{
                  backgroundColor: 'var(--surface-blue-pale)',
                  borderColor: 'var(--border-blue-light)',
                  color: 'var(--blue-brand)',
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--blue-brand)'}} />
                {t('heroBadge')}
              </div>

              <h1
                className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.08] tracking-tight mb-6"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('heroHeadline')}
              </h1>

              <p
                className="text-[18px] leading-relaxed mb-8 max-w-2xl"
                style={{color: 'var(--on-light-secondary)'}}
              >
                {t('heroSubheadline')}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="mailto:info@camperflow.io"
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
                  style={{borderColor: 'var(--border-light)', color: 'var(--on-light-secondary)'}}
                >
                  {t('heroSecondary')}
                </a>
              </div>

              <p className="text-[13px]" style={{color: 'var(--on-light-muted)'}}>
                {t('heroTrust')}
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
              <ScreenshotFrame
                src="/screenshots/operations.png"
                alt="CamperFlow operations dashboard — fleet status, active rentals, reminders and upcoming pickups"
                width={2561}
                height={5507}
                containerStyle={{height: '540px'}}
                viewLabel={tCommon('viewFullScreenshot')}
                priority
              >
                <div className="sc-callout" style={{top: '17%', right: '3.5%'}}>
                  <div className="sc-dot sc-dot--pulse" />
                  <span className="sc-label">Time until pickup</span>
                </div>
              </ScreenshotFrame>
            </div>
          </div>
        </section>

        {/* ── 2. Fleet at a Glance ─────────────────────────────────── */}
        <section
          id="dashboard"
          className="py-16 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

              {/* Left: copy + stats */}
              <div data-reveal="" className="max-w-lg">
                <div
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5 border"
                  style={{
                    backgroundColor: 'var(--surface-blue-pale)',
                    borderColor: 'var(--border-blue-light)',
                    color: 'var(--blue-brand)',
                  }}
                >
                  {t('dashboardBadge')}
                </div>
                <h2
                  className="text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight mb-5"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {t('dashboardHeadline')}
                </h2>
                <p className="text-[17px] leading-relaxed mb-8" style={{color: 'var(--on-light-secondary)'}}>
                  {t('dashboardBody')}
                </p>

                <div className="grid grid-cols-3 gap-4">
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
              </div>

              {/* Right: operations dashboard screenshot — top crop */}
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
                <div style={{height: '420px', overflow: 'hidden', position: 'relative'}}>
                  <Image
                    src="/screenshots/operations.png"
                    alt="CamperFlow operations dashboard — every vehicle, booking, and open task in one view"
                    width={2561}
                    height={5507}
                    style={{width: '100%', height: 'auto', display: 'block'}}
                  />
                  <div className="sc-callout" style={{top: '12%', left: '4%'}}>
                    <div className="sc-dot" />
                    <span className="sc-label">Vehicle readiness</span>
                  </div>
                  <div className="sc-callout" style={{top: '28%', right: '4%'}}>
                    <div className="sc-dot sc-dot--pulse" />
                    <span className="sc-label">Pickup in 2h</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. Today's Priorities (reversed: screenshot left, copy right) ── */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

              {/* Screenshot: left on desktop (first in DOM order) */}
              <div
                data-reveal=""
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
                <div style={{height: '420px', overflow: 'hidden', position: 'relative'}}>
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

              {/* Copy: right on desktop (second in DOM order) */}
              <div data-reveal="" data-reveal-delay="1" className="max-w-lg">
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

            </div>
          </div>
        </section>

        {/* ── 4. Automated Reminders ───────────────────────────────── */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-14 items-start">

              {/* Left: copy + reminder checklist */}
              <div data-reveal="" className="max-w-lg">
                <div
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5 border"
                  style={{
                    backgroundColor: 'var(--surface-blue-pale)',
                    borderColor: 'var(--border-blue-light)',
                    color: 'var(--blue-brand)',
                  }}
                >
                  {t('remindersSectionBadge')}
                </div>
                <h2
                  className="text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight mb-5"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {t('remindersSectionHeadline')}
                </h2>
                <p className="text-[17px] leading-relaxed mb-7" style={{color: 'var(--on-light-secondary)'}}>
                  {t('remindersSectionBody')}
                </p>

                <ul className="space-y-3">
                  {remindersList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{backgroundColor: 'rgba(37,99,235,0.1)'}}
                      >
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path d="M1.5 4.5l2 2 4-4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[14px] leading-snug" style={{color: 'var(--on-light-secondary)'}}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: reminders screenshot with caption */}
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
                    camperflow.io/reminders
                  </div>
                </div>
                <div style={{height: '440px', overflow: 'hidden', position: 'relative'}}>
                  <Image
                    src="/screenshots/reminders.png"
                    alt="CamperFlow automated reminders — pre-pickup, return, invoice and compliance notifications"
                    width={2561}
                    height={1600}
                    style={{width: '100%', height: 'auto', display: 'block'}}
                  />
                  <div className="sc-callout" style={{bottom: '18%', left: '4%'}}>
                    <div className="sc-dot sc-dot--pulse" />
                    <span className="sc-label">Sent automatically</span>
                  </div>
                </div>
                <div
                  className="px-5 py-3.5 border-t"
                  style={{borderColor: 'var(--border-light)', backgroundColor: 'var(--surface-light)'}}
                >
                  <p className="text-[12px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                    {t('remindersDesc')}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. Vehicle Readiness ─────────────────────────────────── */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

              {/* Left: copy + readiness list */}
              <div data-reveal="" className="max-w-lg">
                <div
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5 border"
                  style={{
                    backgroundColor: 'var(--surface-blue-pale)',
                    borderColor: 'var(--border-blue-light)',
                    color: 'var(--blue-brand)',
                  }}
                >
                  {t('readinessSectionBadge')}
                </div>
                <h2
                  className="text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight mb-5"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {t('readinessSectionHeadline')}
                </h2>
                <p className="text-[17px] leading-relaxed mb-7" style={{color: 'var(--on-light-secondary)'}}>
                  {t('readinessSectionBody')}
                </p>

                <ul className="space-y-3">
                  {readinessList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{backgroundColor: 'rgba(239,68,68,0.08)'}}
                      >
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path d="M4.5 2v2.8M4.5 6.2v.3" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-[14px] leading-snug" style={{color: 'var(--on-light-secondary)'}}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: vehicle readiness screenshot with caption */}
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
                    camperflow.io/vehicles
                  </div>
                </div>
                <div style={{height: '440px', overflow: 'hidden', position: 'relative'}}>
                  <Image
                    src="/screenshots/vehicle-readiness.png"
                    alt="CamperFlow vehicle readiness — amber and red status flags across the fleet"
                    width={2561}
                    height={1600}
                    style={{width: '100%', height: 'auto', display: 'block'}}
                  />
                  <div className="sc-callout" style={{top: '18%', right: '4%'}}>
                    <div className="sc-dot sc-dot--danger" />
                    <span className="sc-label">Action needed</span>
                  </div>
                </div>
                <div
                  className="px-5 py-3.5 border-t"
                  style={{borderColor: 'var(--border-light)', backgroundColor: 'var(--surface-light)'}}
                >
                  <p className="text-[12px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                    {t('readinessDesc')}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. Staff Attribution & Accountability ────────────────── */}
        <section className="py-16 lg:py-24">
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
                {t('staffBadge')}
              </div>
              <h2
                className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('staffHeadline')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {staffCards.map((card, i) => (
                <div
                  key={card.title}
                  data-reveal=""
                  data-reveal-delay={String(i + 1) as '1' | '2' | '3'}
                  className="rounded-2xl border p-6"
                  style={{
                    borderColor: 'var(--border-light)',
                    backgroundColor: 'var(--surface-white)',
                    boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{backgroundColor: 'rgba(37,99,235,0.08)'}}
                  >
                    {card.icon === 'checklist' && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="2" y="3" width="14" height="12" rx="2" stroke="#2563eb" strokeWidth="1.5" />
                        <path d="M2 7h14" stroke="#2563eb" strokeWidth="1.5" />
                        <path d="M5 10.5l2 2 4-4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {card.icon === 'issue' && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 2L2 5v5c0 4 3.5 6.5 7 7 3.5-.5 7-3 7-7V5L9 2z" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M9 6.5v3M9 11v.5" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    )}
                    {card.icon === 'return' && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="7" stroke="#2563eb" strokeWidth="1.5" />
                        <path d="M9 5v4l2.5 2.5" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>

                  <div className="text-[15px] font-semibold mb-2" style={{color: 'var(--on-light-primary)'}}>
                    {card.title}
                  </div>

                  {/* Timestamp badge — styled as a log entry */}
                  <div
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-medium mb-3"
                    style={{
                      backgroundColor: 'var(--surface-slate)',
                      color: 'var(--on-light-muted)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M5 3v2.2l1.3 1.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {card.timestamp}
                  </div>

                  <div className="text-[13px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                    {card.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 7. Final CTA ─────────────────────────────────────────── */}
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              data-reveal=""
              className="max-w-2xl mx-auto rounded-3xl px-8 py-12 lg:px-14 lg:py-16 text-center"
              style={{
                backgroundColor: 'rgba(248, 250, 252, 0.88)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(14, 30, 54, 0.07)',
                boxShadow: '0 8px 48px rgba(37, 99, 235, 0.08), 0 2px 20px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div
                className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-6 border"
                style={{
                  backgroundColor: 'var(--surface-blue-pale)',
                  borderColor: 'var(--border-blue-light)',
                  color: 'var(--blue-brand)',
                }}
              >
                {t('finalCtaBadge')}
              </div>

              <h2
                className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight leading-tight mb-4"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('finalCtaHeadline')}
              </h2>

              <p className="text-[16px] leading-relaxed mb-8 max-w-md mx-auto" style={{color: 'var(--on-light-secondary)'}}>
                {t('finalCtaBody')}
              </p>

              <a
                href="mailto:info@camperflow.io"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[16px] font-semibold text-white transition-colors mb-6 bg-[#2563eb] hover:bg-[#1d4ed8]"
              >
                {t('heroCta')}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M3 8h10M8 3l5 5-5 5" />
                </svg>
              </a>

              <p className="text-[13px]" style={{color: 'var(--on-light-muted)'}}>
                {t('finalCtaNote')}
              </p>
            </div>
          </div>
        </section>

      </main>
      <ScrollObserver />
      <Footer />
    </div>
  );
}
