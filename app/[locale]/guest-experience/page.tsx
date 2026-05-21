import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import ScreenshotFrame from '@/components/ScreenshotFrame';

export default async function GuestExperiencePage() {
  const t = await getTranslations('guestExperience');
  const tCommon = await getTranslations('common');

  const stats = [
    {value: t('stat0Value'), label: t('stat0Label')},
    {value: t('stat1Value'), label: t('stat1Label')},
    {value: t('stat2Value'), label: t('stat2Label')},
  ];

  const workflowSteps = [
    {title: t('step0Title'), desc: t('step0Desc')},
    {title: t('step1Title'), desc: t('step1Desc')},
    {title: t('step2Title'), desc: t('step2Desc')},
  ];

  const proofCards = [
    {
      src: '/screenshots/guest-portal.png',
      width: 2561,
      height: 1600,
      label: t('portalLabel'),
      desc: t('portalDesc'),
    },
    {
      src: '/screenshots/reminders.png',
      width: 2561,
      height: 1600,
      label: t('remindersLabel'),
      desc: t('remindersDesc'),
    },
  ];

  const outcomeCards = [
    {title: t('outcome0Title'), desc: t('outcome0Desc')},
    {title: t('outcome1Title'), desc: t('outcome1Desc')},
    {title: t('outcome2Title'), desc: t('outcome2Desc')},
  ];

  return (
    <div
      className="guest-experience-page relative overflow-hidden"
      style={{background: '#eef4ff'}}
    >
      {/*
       * Ribbon blend mode override: multiply makes the blue/cyan bands visible
       * against the light #eef4ff surface. Same fix as checklist-page.
       */}
      <style>{`
        .guest-experience-page .ribbon-root { mix-blend-mode: multiply; }
        .guest-experience-page main, .guest-experience-page footer { position: relative; z-index: 25; }
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
                  href="#portal"
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
                  camperflow.io/guest-portal
                </div>
              </div>
              <ScreenshotFrame
                src="/screenshots/guest-portal.png"
                alt="CamperFlow guest portal — professional trip guide with pickup details, vehicle guide, and return instructions"
                width={2561}
                height={1600}
                containerStyle={{height: '540px'}}
                viewLabel={tCommon('viewFullScreenshot')}
                priority
              >
                <div className="sc-callout" style={{top: '18%', right: '3.5%'}}>
                  <div className="sc-dot sc-dot--pulse" />
                  <span className="sc-label">{t('workflowCallout')}</span>
                </div>
              </ScreenshotFrame>
            </div>
          </div>
        </section>

        {/* ── 2. Booking information delivered ───────────────────────── */}
        <section
          id="portal"
          className="py-10 lg:py-14"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">

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
                  {t('portalBadge')}
                </div>
                <h2
                  className="text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight mb-5"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {t('portalHeadline')}
                </h2>
                <p className="text-[17px] leading-relaxed" style={{color: 'var(--on-light-secondary)'}}>
                  {t('portalBody')}
                </p>
              </div>

              {/* Right: booking-details screenshot — pickup confirmation */}
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
                    camperflow.io/booking/GP-2024
                  </div>
                </div>
                <div style={{height: '420px', overflow: 'hidden', position: 'relative'}}>
                  <Image
                    src="/screenshots/booking-details.png"
                    alt="CamperFlow booking details — guest pickup information and portal link"
                    width={2561}
                    height={1600}
                    style={{width: '100%', height: 'auto', display: 'block'}}
                  />
                  <div className="sc-callout" style={{top: '20%', right: '4%'}}>
                    <div className="sc-dot sc-dot--pulse" />
                    <span className="sc-label sc-label--blue">{t('portalCallout')}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. Professional journey — step by step ──────────────────── */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div data-reveal="" className="max-w-2xl mb-8">
              <div
                className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
                style={{
                  backgroundColor: 'var(--surface-blue-pale)',
                  borderColor: 'var(--border-blue-light)',
                  color: 'var(--blue-brand)',
                }}
              >
                {t('workflowBadge')}
              </div>
              <h2
                className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('workflowHeadline')}
              </h2>
              <p className="text-[17px] leading-relaxed" style={{color: 'var(--on-light-secondary)'}}>
                {t('workflowBody')}
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl">
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

            {/* Steps + focused screenshot */}
            <div
              data-reveal=""
              data-reveal-delay="1"
              className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start"
            >
              {/* Numbered steps */}
              <div className="space-y-7">
                {workflowSteps.map((step, i) => (
                  <div key={step.title} className="flex gap-5 items-start">
                    <div
                      className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-bold tabular-nums"
                      style={{backgroundColor: 'rgba(37,99,235,0.08)', color: 'var(--blue-brand)'}}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="pt-1">
                      <div className="text-[15px] font-semibold mb-1.5" style={{color: 'var(--on-light-primary)'}}>
                        {step.title}
                      </div>
                      <div className="text-[13px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Small supporting screenshot */}
              <div
                className="rounded-2xl overflow-hidden border"
                style={{borderColor: 'var(--border-light)', boxShadow: '0 4px 20px rgba(15,23,42,0.07)'}}
              >
                <div
                  className="flex items-center gap-2 px-4 py-2.5 border-b"
                  style={{backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)'}}
                >
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: '#fca5a5'}} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: '#fcd34d'}} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: '#86efac'}} />
                  </div>
                  <div className="flex-1 text-center text-[11px] font-mono" style={{color: 'var(--on-light-muted)'}}>
                    camperflow.io/guest-portal
                  </div>
                </div>
                <div style={{height: '300px', overflow: 'hidden'}}>
                  <Image
                    src="/screenshots/guest-portal.png"
                    alt="CamperFlow guest portal on mobile"
                    width={2561}
                    height={1600}
                    style={{width: '100%', height: 'auto', display: 'block'}}
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── 4. Portal + Reminders proof cards ───────────────────────── */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div data-reveal="" className="max-w-2xl mb-8">
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
                className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('featuresHeadline')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {proofCards.map((item) => (
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

        {/* ── 5. Every rental, same professional experience ────────────── */}
        <section className="py-10 lg:py-14">
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
                {t('consistencyBadge')}
              </div>
              <h2
                className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('consistencyHeadline')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {outcomeCards.map((card, i) => (
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
                    {i === 0 && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#2563eb" strokeWidth="1.5" />
                        <path d="M2 6l7 5 7-5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="2" y="2" width="6" height="6" rx="1" stroke="#2563eb" strokeWidth="1.5" />
                        <rect x="10" y="2" width="6" height="6" rx="1" stroke="#2563eb" strokeWidth="1.5" />
                        <rect x="2" y="10" width="6" height="6" rx="1" stroke="#2563eb" strokeWidth="1.5" />
                        <rect x="10" y="10" width="6" height="6" rx="1" fill="rgba(37,99,235,0.15)" stroke="#2563eb" strokeWidth="1.5" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="7" stroke="#2563eb" strokeWidth="1.5" />
                        <path d="M9 5v4l2.5 2.5" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div className="text-[15px] font-semibold mb-2" style={{color: 'var(--on-light-primary)'}}>
                    {card.title}
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                    {card.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


      </main>
      <ScrollObserver />
      <Footer />
    </div>
  );
}
