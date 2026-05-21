import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

export default async function AboutPage() {
  const t = await getTranslations('aboutPage');

  const gapItems = [
    {
      title: t('gap0Title'),
      desc: t('gap0Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="7" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M9 5.5V9.5" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="9" cy="12" r=".9" fill="#2563eb" />
        </svg>
      ),
    },
    {
      title: t('gap1Title'),
      desc: t('gap1Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="7.5" cy="5.5" r="3" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M2 15c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13 9.5l1.5 1.5 2.5-2.5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t('gap2Title'),
      desc: t('gap2Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="3" width="14" height="12" rx="2" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M2 7h14" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M6 2v2M12 2v2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12.5 10.5l-2 2M10.5 10.5l2 2" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const positionItems = [
    {
      title: t('position0Title'),
      desc: t('position0Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9c0-3.3 2.7-6 6-6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6.5 3.5L3 6l.5 3.5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 9c0 3.3-2.7 6-6 6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" opacity=".55" />
          <path d="M11.5 14.5L15 12l-.5-3.5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".55" />
        </svg>
      ),
    },
    {
      title: t('position1Title'),
      desc: t('position1Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1.5" y="5" width="15" height="9" rx="2" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M5 9h3M10 9h3" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" opacity=".55" />
          <path d="M6 4V2.5M12 4V2.5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: t('position2Title'),
      desc: t('position2Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2L3.5 4.5v5.5c0 3.5 2.5 5.5 5.5 6 3-.5 5.5-2.5 5.5-6V4.5L9 2z" stroke="#2563eb" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M6.5 9l2 2 4-4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="about-page relative overflow-hidden" style={{background: '#eef4ff'}}>
      <style>{`
        .about-page .ribbon-root { mix-blend-mode: multiply; }
        .about-page main, .about-page footer { position: relative; z-index: 25; }
      `}</style>
      <AnimatedRibbon />
      <Navbar />
      <main>

        {/* ── 1. Hero ──────────────────────────────────────────────── */}
        <section className="pt-20 pb-0 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl pt-6 pb-14 lg:pt-8">

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
                className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.08] tracking-tight mb-5"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('heroHeadline')}
              </h1>

              <p
                className="text-[18px] leading-relaxed mb-8 max-w-xl"
                style={{color: 'var(--on-light-secondary)'}}
              >
                {t('heroSubheadline')}
              </p>

              <div className="flex flex-wrap gap-3">
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
                  href="#story"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-[15px] font-semibold border transition-colors"
                  style={{borderColor: 'var(--border-light)', color: 'var(--on-light-secondary)'}}
                >
                  {t('heroSecondary')}
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. Origin / founder story ─────────────────────────────── */}
        <section id="story" className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-start">

              {/* Narrative */}
              <div className="lg:col-span-3" data-reveal="">
                <div
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-6 border"
                  style={{
                    backgroundColor: 'var(--surface-blue-pale)',
                    borderColor: 'var(--border-blue-light)',
                    color: 'var(--blue-brand)',
                  }}
                >
                  {t('originBadge')}
                </div>

                <h2
                  className="text-[24px] sm:text-[32px] font-bold tracking-tight leading-tight mb-6"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {t('originHeadline')}
                </h2>

                <div className="space-y-4">
                  {[t('originBody1'), t('originBody2'), t('originBody3')].map((para, i) => (
                    <p
                      key={i}
                      className="text-[16px] leading-relaxed"
                      style={{color: 'var(--on-light-secondary)'}}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Founder card */}
              <div className="lg:col-span-2 mt-10 lg:mt-[72px]" data-reveal="" data-reveal-delay="1">
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    borderColor: 'var(--border-blue-light)',
                    backgroundColor: 'var(--surface-white)',
                    boxShadow: '0 2px 16px rgba(37,99,235,0.07)',
                  }}
                >
                  {/* Quote mark */}
                  <div
                    className="text-[40px] font-serif leading-none mb-3 select-none"
                    style={{color: 'var(--blue-brand)', opacity: 0.3}}
                  >
                    &ldquo;
                  </div>

                  <p
                    className="text-[15px] leading-relaxed mb-5 font-medium"
                    style={{color: 'var(--on-light-primary)'}}
                  >
                    {t('founderQuote')}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t" style={{borderColor: 'var(--border-light)'}}>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0"
                      style={{backgroundColor: 'var(--blue-brand)', color: '#fff'}}
                    >
                      KM
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold" style={{color: 'var(--on-light-primary)'}}>
                        {t('founderName')}
                      </div>
                      <div className="text-[12px] leading-snug" style={{color: 'var(--on-light-muted)'}}>
                        {t('founderRole')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. The gap: booking systems aren't enough ────────────── */}
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
                {t('gapBadge')}
              </div>
              <h2
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight mb-4"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('gapHeadline')}
              </h2>
              <p className="text-[16px] leading-relaxed" style={{color: 'var(--on-light-secondary)'}}>
                {t('gapBody')}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {gapItems.map((item, i) => (
                <div
                  key={i}
                  data-reveal=""
                  data-reveal-delay={String(i + 1) as '1' | '2' | '3'}
                  className="rounded-2xl border p-5"
                  style={{
                    borderColor: 'var(--border-light)',
                    backgroundColor: 'var(--surface-white)',
                    boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{backgroundColor: 'rgba(37,99,235,0.08)'}}
                  >
                    {item.icon}
                  </div>
                  <div className="text-[14px] font-semibold mb-1.5" style={{color: 'var(--on-light-primary)'}}>
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

        {/* ── 4. Checklist / accountability philosophy ─────────────── */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

              <div data-reveal="">
                <div
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5 border"
                  style={{
                    backgroundColor: 'var(--surface-blue-pale)',
                    borderColor: 'var(--border-blue-light)',
                    color: 'var(--blue-brand)',
                  }}
                >
                  {t('philosophyBadge')}
                </div>
                <h2
                  className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight mb-5"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {t('philosophyHeadline')}
                </h2>
                <div className="space-y-4">
                  {[t('philosophyBody1'), t('philosophyBody2')].map((para, i) => (
                    <p
                      key={i}
                      className="text-[16px] leading-relaxed"
                      style={{color: 'var(--on-light-secondary)'}}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Pull-quote block */}
              <div data-reveal="" data-reveal-delay="1" className="mt-8 lg:mt-0">
                <div
                  className="rounded-2xl p-7 border-l-4"
                  style={{
                    backgroundColor: 'var(--surface-white)',
                    borderLeftColor: 'var(--blue-brand)',
                    boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
                  }}
                >
                  <p
                    className="text-[17px] leading-relaxed font-medium"
                    style={{color: 'var(--on-light-primary)'}}
                  >
                    &ldquo;{t('philosophyQuote')}&rdquo;
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. Positioning — works alongside ─────────────────────── */}
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
                {t('positionBadge')}
              </div>
              <h2
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight mb-4"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('positionHeadline')}
              </h2>
              <p className="text-[16px] leading-relaxed mb-3" style={{color: 'var(--on-light-secondary)'}}>
                {t('positionBody')}
              </p>
              <p className="text-[13px]" style={{color: 'var(--on-light-muted)'}}>
                {t('positionNote')}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {positionItems.map((item, i) => (
                <div
                  key={i}
                  data-reveal=""
                  data-reveal-delay={String(i + 1) as '1' | '2' | '3'}
                  className="rounded-2xl border p-5"
                  style={{
                    borderColor: 'var(--border-light)',
                    backgroundColor: 'var(--surface-white)',
                    boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{backgroundColor: 'rgba(37,99,235,0.08)'}}
                  >
                    {item.icon}
                  </div>
                  <div className="text-[14px] font-semibold mb-1.5" style={{color: 'var(--on-light-primary)'}}>
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


      </main>
      <ScrollObserver />
      <Footer />
    </div>
  );
}
