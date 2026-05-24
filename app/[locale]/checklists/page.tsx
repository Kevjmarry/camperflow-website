import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import ScreenshotFrame from '@/components/ScreenshotFrame';

export default async function ChecklistsPage() {
  const t = await getTranslations('checklists');
  const tCommon = await getTranslations('common');

  const consistencyItems = [
    {title: t('item0Title'), desc: t('item0Desc')},
    {title: t('item1Title'), desc: t('item1Desc')},
    {title: t('item2Title'), desc: t('item2Desc')},
  ];

  const mobileList = [
    t('mobileList0'),
    t('mobileList1'),
    t('mobileList2'),
  ];

  const returnList = [
    t('returnList0'),
    t('returnList1'),
    t('returnList2'),
  ];

  const evidenceCards = [
    {
      src: '/screenshots/issue-tracking.png',
      width: 2561,
      height: 1600,
      label: t('evidenceCard0Label'),
      desc: t('evidenceCard0Desc'),
    },
    {
      src: '/screenshots/vehicle-readiness.png',
      width: 2561,
      height: 1600,
      label: t('evidenceCard1Label'),
      desc: t('evidenceCard1Desc'),
    },
  ];

  return (
    <div
      className="checklist-page relative overflow-hidden"
      style={{background: '#eef4ff'}}
    >
      {/*
       * Ribbon blend mode override: multiply makes the blue/cyan bands visible
       * against the light #eef4ff surface.
       */}
      <style>{`
        .checklist-page .ribbon-root { mix-blend-mode: multiply; }
        .checklist-page main, .checklist-page footer { position: relative; z-index: 25; }
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
                  href="#proof"
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
                  camperflow.io/checklists
                </div>
              </div>
              <ScreenshotFrame
                src="/screenshots/digital-checklists.png"
                alt="CamperFlow digital checklists — mobile pickup and return workflows with photo capture and timestamped sign-off"
                width={2561}
                height={1600}
                containerStyle={{height: '540px'}}
                viewLabel={tCommon('viewFullScreenshot')}
                priority
              >
                <div className="sc-callout" style={{top: '18%', right: '3.5%'}}>
                  <div className="sc-dot sc-dot--pulse" />
                  <span className="sc-label">Pickup checklist</span>
                </div>
              </ScreenshotFrame>
            </div>
          </div>
        </section>

        {/* ── 2. Every Booking Gets a Checklist ─────────────────────── */}
        <section
          id="proof"
          className="py-16 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

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

              {/* Right: booking-details screenshot — checklist already assigned */}
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
                    camperflow.io/booking/CHK-2024
                  </div>
                </div>
                <div style={{height: '420px', overflow: 'hidden', position: 'relative'}}>
                  <Image
                    src="/screenshots/booking-details.png"
                    alt="CamperFlow booking details — pickup checklist assigned and in progress with timestamped steps"
                    width={2561}
                    height={1600}
                    style={{width: '100%', height: 'auto', display: 'block'}}
                  />
                  <div className="sc-callout" style={{top: '20%', right: '4%'}}>
                    <div className="sc-dot sc-dot--pulse" />
                    <span className="sc-label sc-label--blue">{t('workflowCallout')}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. Mobile Checklist Experience ─────────────────────────── */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

              {/* Screenshot: left on desktop */}
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
                    camperflow.io/checklists
                  </div>
                </div>
                <div style={{height: '420px', overflow: 'hidden', position: 'relative'}}>
                  <Image
                    src="/screenshots/digital-checklists.png"
                    alt="CamperFlow checklist on mobile — step-by-step guided workflow with photo capture"
                    width={2561}
                    height={1600}
                    style={{width: '100%', height: 'auto', display: 'block', marginTop: '-80px'}}
                  />
                  <div className="sc-callout" style={{top: '30%', right: '4%'}}>
                    <div className="sc-dot sc-dot--pulse" />
                    <span className="sc-label sc-label--blue">{t('mobileCallout')}</span>
                  </div>
                </div>
              </div>

              {/* Copy: right on desktop */}
              <div data-reveal="" data-reveal-delay="1" className="max-w-lg">
                <div
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5 border"
                  style={{
                    backgroundColor: 'var(--surface-blue-pale)',
                    borderColor: 'var(--border-blue-light)',
                    color: 'var(--blue-brand)',
                  }}
                >
                  {t('mobileBadge')}
                </div>
                <h2
                  className="text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight mb-5"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {t('mobileHeadline')}
                </h2>
                <p className="text-[17px] leading-relaxed mb-7" style={{color: 'var(--on-light-secondary)'}}>
                  {t('mobileBody')}
                </p>

                <ul className="space-y-3">
                  {mobileList.map((item, i) => (
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

            </div>
          </div>
        </section>

        {/* ── 4. Photo Evidence & Timestamps ────────────────────────── */}
        <section className="py-16 lg:py-24">
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
                {t('evidenceBadge')}
              </div>
              <h2
                className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('evidenceHeadline')}
              </h2>
              <p className="text-[17px] leading-relaxed" style={{color: 'var(--on-light-secondary)'}}>
                {t('evidenceBody')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {evidenceCards.map((item) => (
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

        {/* ── 5. Return Checklists ─────────────────────────────────── */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-14 items-start">

              {/* Left: copy + return list */}
              <div data-reveal="" className="max-w-lg">
                <div
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5 border"
                  style={{
                    backgroundColor: 'var(--surface-blue-pale)',
                    borderColor: 'var(--border-blue-light)',
                    color: 'var(--blue-brand)',
                  }}
                >
                  {t('returnBadge')}
                </div>
                <h2
                  className="text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight mb-5"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {t('returnHeadline')}
                </h2>
                <p className="text-[17px] leading-relaxed mb-7" style={{color: 'var(--on-light-secondary)'}}>
                  {t('returnBody')}
                </p>

                <ul className="space-y-3">
                  {returnList.map((item, i) => (
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

              {/* Right: booking-details screenshot — scrolled to return view */}
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
                    camperflow.io/booking/RET-2024
                  </div>
                </div>
                <div style={{height: '440px', overflow: 'hidden', position: 'relative'}}>
                  <Image
                    src="/screenshots/booking-details.png"
                    alt="CamperFlow booking details — return checklist in progress with timestamped completion"
                    width={2561}
                    height={1600}
                    style={{width: '100%', height: 'auto', display: 'block', marginTop: '-160px'}}
                  />
                  <div className="sc-callout" style={{top: '22%', right: '4%'}}>
                    <div className="sc-dot sc-dot--pulse" />
                    <span className="sc-label">{t('returnCallout')}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. Consistency / Accountability Outcomes ────────────────── */}
        <section className="py-14 lg:py-20">
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
              {consistencyItems.map((item, i) => (
                <div
                  key={item.title}
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
                        <rect x="2" y="2" width="14" height="3" rx="1.5" fill="#2563eb" />
                        <rect x="2" y="7.5" width="10" height="3" rx="1.5" fill="#2563eb" opacity=".5" />
                        <rect x="2" y="13" width="7" height="3" rx="1.5" fill="#2563eb" opacity=".3" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="7" stroke="#2563eb" strokeWidth="1.5" />
                        <path d="M6 9l2 2 4-4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 4h12M3 8h9M3 12h6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="14" cy="12" r="3" fill="rgba(37,99,235,0.15)" stroke="#2563eb" strokeWidth="1.2" />
                        <path d="M13 12l.8.8 1.4-1.4" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div className="text-[15px] font-semibold mb-2" style={{color: 'var(--on-light-primary)'}}>
                    {item.title}
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                    {item.desc}
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
