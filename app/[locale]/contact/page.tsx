import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

const EMAIL = 'info@camperflow.io';

const MAILTO_DEMO =
  'mailto:' + EMAIL +
  '?subject=' + encodeURIComponent('CamperFlow walkthrough') +
  '&body=' + encodeURIComponent('Hi,\n\nPlease show me CamperFlow in action.\n\nFleet size: \nCurrent setup: \nMain question: ');

const MAILTO_QUESTION =
  'mailto:' + EMAIL +
  '?subject=' + encodeURIComponent('CamperFlow question');

export default async function ContactPage() {
  const t = await getTranslations('contactPage');

  const nextSteps = [
    {num: '1', title: t('next0Title'), desc: t('next0Desc')},
    {num: '2', title: t('next1Title'), desc: t('next1Desc')},
    {num: '3', title: t('next2Title'), desc: t('next2Desc')},
  ];

  const faqItems = [
    {q: t('faqTeaser0Q'), a: t('faqTeaser0A')},
    {q: t('faqTeaser1Q'), a: t('faqTeaser1A')},
    {q: t('faqTeaser2Q'), a: t('faqTeaser2A')},
  ];

  return (
    <div className="contact-page relative overflow-hidden" style={{background: '#eef4ff'}}>
      <style>{`
        .contact-page .ribbon-root { mix-blend-mode: multiply; }
        .contact-page main, .contact-page footer { position: relative; z-index: 25; }
      `}</style>
      <AnimatedRibbon />
      <Navbar />
      <main>

        {/* ── 1. Hero ────────────────────────────────────────────────── */}
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
                  href={MAILTO_DEMO}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors"
                >
                  {t('heroCta')}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" />
                  </svg>
                </a>
                <a
                  href="#options"
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
          </div>
        </section>

        {/* ── 2. Contact Options ─────────────────────────────────────── */}
        <section id="options" className="py-16 lg:py-24">
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
                {t('optionsBadge')}
              </div>
              <h2
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('optionsHeadline')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">

              {/* Option 1: Book a walkthrough */}
              <div
                data-reveal=""
                data-reveal-delay="1"
                className="rounded-2xl border p-6 flex flex-col"
                style={{
                  borderColor: 'var(--border-blue-light)',
                  backgroundColor: 'var(--surface-white)',
                  boxShadow: '0 2px 12px rgba(15,23,42,0.06)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{backgroundColor: 'rgba(37,99,235,0.08)'}}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="5" width="16" height="12" rx="2" stroke="#2563eb" strokeWidth="1.5" />
                    <path d="M2 9l8 5 8-5" stroke="#2563eb" strokeWidth="1.4" strokeOpacity=".6" />
                    <path d="M7 2v3M13 2v3" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="text-[15px] font-semibold mb-2" style={{color: 'var(--on-light-primary)'}}>
                  {t('option0Title')}
                </div>
                <p className="text-[13px] leading-relaxed mb-5 flex-1" style={{color: 'var(--on-light-muted)'}}>
                  {t('option0Desc')}
                </p>
                <a
                  href={MAILTO_DEMO}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors self-start"
                >
                  {t('option0Cta')}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M3 8h10M8 3l5 5-5 5" />
                  </svg>
                </a>
                <p className="mt-3 text-[12px]" style={{color: 'var(--on-light-muted)'}}>
                  {t('option0Note')}
                </p>
              </div>

              {/* Option 2: Ask a question */}
              <div
                data-reveal=""
                data-reveal-delay="2"
                className="rounded-2xl border p-6 flex flex-col"
                style={{
                  borderColor: 'var(--border-light)',
                  backgroundColor: 'var(--surface-white)',
                  boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{backgroundColor: 'rgba(37,99,235,0.06)'}}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7.5" stroke="#2563eb" strokeWidth="1.5" />
                    <path d="M7.8 8c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.4-1.5 1.8-2.2 2.8" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="10" cy="14.5" r=".9" fill="#2563eb" />
                  </svg>
                </div>
                <div className="text-[15px] font-semibold mb-2" style={{color: 'var(--on-light-primary)'}}>
                  {t('option1Title')}
                </div>
                <p className="text-[13px] leading-relaxed mb-5 flex-1" style={{color: 'var(--on-light-muted)'}}>
                  {t('option1Desc')}
                </p>
                <a
                  href={MAILTO_QUESTION}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[14px] font-semibold border transition-colors self-start"
                  style={{borderColor: 'var(--border-light)', color: 'var(--on-light-secondary)'}}
                >
                  {t('option1Cta')}
                </a>
                <p className="mt-3 text-[12px] font-mono" style={{color: 'var(--on-light-muted)'}}>
                  {t('option1Email')}
                </p>
              </div>

            </div>

            <p className="mt-5 text-[13px]" style={{color: 'var(--on-light-muted)'}}>
              {t('optionsReply')}
            </p>

          </div>
        </section>

        {/* ── 3. What Happens Next ───────────────────────────────────── */}
        <section id="next" className="py-16 lg:py-24">
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
                {t('nextBadge')}
              </div>
              <h2
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('nextHeadline')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {nextSteps.map((step, i) => (
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
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 text-[15px] font-bold"
                    style={{backgroundColor: 'rgba(37,99,235,0.08)', color: 'var(--blue-brand)'}}
                  >
                    {step.num}
                  </div>
                  <div className="text-[14px] font-semibold mb-1.5" style={{color: 'var(--on-light-primary)'}}>
                    {step.title}
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 4. FAQ Teaser ──────────────────────────────────────────── */}
        <section className="py-14 lg:py-20">
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
                {t('faqTeaserBadge')}
              </div>
              <h2
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('faqTeaserHeadline')}
              </h2>
            </div>

            <div className="max-w-2xl flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  data-reveal=""
                  data-reveal-delay={String(i + 1) as '1' | '2' | '3'}
                  className="rounded-2xl border p-5"
                  style={{
                    borderColor: 'var(--border-light)',
                    backgroundColor: 'var(--surface-white)',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
                  }}
                >
                  <div className="text-[14px] font-semibold mb-2" style={{color: 'var(--on-light-primary)'}}>
                    {item.q}
                  </div>
                  <div className="text-[13px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                    {item.a}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="/faq"
                className="inline-flex items-center gap-2 text-[14px] font-semibold transition-colors hover:underline"
                style={{color: 'var(--blue-brand)'}}
              >
                {t('faqTeaserCta')}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M3 8h10M8 3l5 5-5 5" />
                </svg>
              </a>
            </div>

          </div>
        </section>

      </main>
      <ScrollObserver />
      <Footer />
    </div>
  );
}
