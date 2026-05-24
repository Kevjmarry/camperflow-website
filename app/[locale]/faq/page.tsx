import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import PricingFAQAccordion from '@/components/PricingFAQAccordion';

export default async function FaqPage() {
  const t = await getTranslations('faqPage');

  const groups = [
    {
      badge: t('g0Badge'),
      headline: t('g0Headline'),
      items: [
        {q: t('g0q0'), a: t('g0a0')},
        {q: t('g0q1'), a: t('g0a1')},
        {q: t('g0q2'), a: t('g0a2')},
      ],
    },
    {
      badge: t('g1Badge'),
      headline: t('g1Headline'),
      items: [
        {q: t('g1q0'), a: t('g1a0')},
        {q: t('g1q1'), a: t('g1a1')},
        {q: t('g1q2'), a: t('g1a2')},
      ],
    },
    {
      badge: t('g2Badge'),
      headline: t('g2Headline'),
      items: [
        {q: t('g2q0'), a: t('g2a0')},
        {q: t('g2q1'), a: t('g2a1')},
        {q: t('g2q2'), a: t('g2a2')},
      ],
    },
    {
      badge: t('g3Badge'),
      headline: t('g3Headline'),
      items: [
        {q: t('g3q0'), a: t('g3a0')},
        {q: t('g3q1'), a: t('g3a1')},
      ],
    },
    {
      badge: t('g4Badge'),
      headline: t('g4Headline'),
      items: [
        {q: t('g4q0'), a: t('g4a0')},
        {q: t('g4q1'), a: t('g4a1')},
      ],
    },
  ];

  return (
    <div className="faq-page relative overflow-hidden" style={{background: '#eef4ff'}}>
      <style>{`
        .faq-page .ribbon-root { mix-blend-mode: multiply; }
        .faq-page main, .faq-page footer { position: relative; z-index: 25; }
      `}</style>
      <AnimatedRibbon />
      <Navbar />
      <main>

        {/* ── 1. Hero ──────────────────────────────────────────────── */}
        <section className="pt-20 pb-0 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl pt-6 pb-12 lg:pt-8">

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

              <div className="flex flex-wrap gap-3 mb-5">
                <a
                  href="mailto:info@camperflow.io"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors"
                >
                  {t('heroCta')}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M8 3l5 5-5 5M3 8h10" />
                  </svg>
                </a>
              </div>

              <p className="text-[13px]" style={{color: 'var(--on-light-muted)'}}>
                {t('heroTrust')}
              </p>

            </div>
          </div>
        </section>

        {/* ── 2. FAQ groups ─────────────────────────────────────────── */}
        {groups.map((group, gi) => (
          <section key={gi} className="py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div data-reveal="" className="max-w-2xl mb-6">
                <div
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
                  style={{
                    backgroundColor: 'var(--surface-blue-pale)',
                    borderColor: 'var(--border-blue-light)',
                    color: 'var(--blue-brand)',
                  }}
                >
                  {group.badge}
                </div>
                <h2
                  className="text-[20px] sm:text-[26px] font-bold tracking-tight leading-tight"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {group.headline}
                </h2>
              </div>

              <div
                data-reveal=""
                className="max-w-3xl rounded-2xl border overflow-hidden"
                style={{
                  borderColor: 'var(--border-light)',
                  backgroundColor: 'var(--surface-white)',
                  boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                }}
              >
                <div className="px-6 lg:px-8">
                  <PricingFAQAccordion items={group.items} />
                </div>
              </div>

            </div>
          </section>
        ))}

        {/* ── 3. Still Have Questions CTA ───────────────────────────── */}
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
                {t('ctaBadge')}
              </div>

              <h2
                className="text-[28px] sm:text-[38px] font-bold tracking-tight leading-tight mb-5"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('ctaHeadline')}
              </h2>

              <p
                className="text-[16px] leading-relaxed mb-8 max-w-md mx-auto"
                style={{color: 'var(--on-light-secondary)'}}
              >
                {t('ctaBody')}
              </p>

              <a
                href="mailto:info@camperflow.io"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[16px] font-semibold text-white transition-colors mb-6 bg-[#2563eb] hover:bg-[#1d4ed8]"
              >
                {t('ctaCta')}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M3 8h10M8 3l5 5-5 5" />
                </svg>
              </a>

              <p className="text-[13px]" style={{color: 'var(--on-light-muted)'}}>
                {t('ctaNote')}
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
