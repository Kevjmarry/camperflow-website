import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

const MAILTO_BODY = "Hi,\n\nPlease show me CamperFlow in action.\n\nFleet size: \nCurrent setup: \nMain question: ";
const MAILTO =
  "mailto:info@camperflow.io?subject=" +
  encodeURIComponent("CamperFlow walkthrough") +
  "&body=" +
  encodeURIComponent(MAILTO_BODY);

export default async function ContactPage() {
  const t = await getTranslations('contactPage');

  const nextSteps = [
    {num: '1', title: t('next0Title'), desc: t('next0Desc')},
    {num: '2', title: t('next1Title'), desc: t('next1Desc')},
    {num: '3', title: t('next2Title'), desc: t('next2Desc')},
  ];

  const forItems = [
    {
      title: t('for0Title'),
      desc: t('for0Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="3" width="14" height="12" rx="1.5" stroke="#2563eb" strokeWidth="1.4" />
          <path d="M2 7h14M2 11h14" stroke="#2563eb" strokeWidth="1.2" strokeOpacity=".5" />
          <path d="M7 7v8" stroke="#2563eb" strokeWidth="1.2" strokeOpacity=".5" />
          <path d="M4 5h2M10 5h4" stroke="#2563eb" strokeWidth="1.1" strokeLinecap="round" strokeOpacity=".6" />
        </svg>
      ),
    },
    {
      title: t('for1Title'),
      desc: t('for1Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2" width="14" height="5.5" rx="1.5" stroke="#2563eb" strokeWidth="1.4" />
          <rect x="2" y="10.5" width="14" height="5.5" rx="1.5" stroke="#2563eb" strokeWidth="1.4" strokeOpacity=".5" />
          <path d="M9 7.5v3" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M7 9.5l2 1.5 2-1.5" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t('for2Title'),
      desc: t('for2Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="6.5" stroke="#2563eb" strokeWidth="1.4" />
          <path d="M6.8 7c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.4-1.5 1.8-2.2 2.8" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="9" cy="13" r=".85" fill="#2563eb" />
        </svg>
      ),
    },
    {
      title: t('for3Title'),
      desc: t('for3Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="6.5" stroke="#2563eb" strokeWidth="1.4" />
          <path d="M5.5 9l3 3 5-5.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const setupItems = [
    {
      title: t('setup0Title'),
      desc: t('setup0Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="6" r="3" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M4 14v-1a5 5 0 0 1 10 0v1" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13.5 11l1.3 1.3 2.7-2.7" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: t('setup1Title'),
      desc: t('setup1Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1.5" y="5" width="15" height="9" rx="2" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M5 9h3M10 9h3" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeOpacity=".55" />
          <path d="M6 4V2.5M12 4V2.5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: t('setup2Title'),
      desc: t('setup2Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="1.5" width="8.5" height="13" rx="1.5" stroke="#2563eb" strokeWidth="1.4" />
          <rect x="7.5" y="4.5" width="8.5" height="11" rx="1.5" stroke="#2563eb" strokeWidth="1.4" strokeOpacity=".4" />
          <path d="M4.5 6.5h4M4.5 9h3M4.5 11.5h2" stroke="#2563eb" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: t('setup3Title'),
      desc: t('setup3Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2L3.5 4.5v5.5c0 3.5 2.5 5.5 5.5 6 3-.5 5.5-2.5 5.5-6V4.5L9 2z" stroke="#2563eb" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M6.5 9l2 2 4-4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
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
                  href={MAILTO}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors"
                >
                  {t('heroCta')}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" />
                  </svg>
                </a>
                <a
                  href="#next"
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

        {/* ── 2. What happens next ───────────────────────────────────── */}
        <section id="next" className="py-10 lg:py-14">
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

        {/* ── 3. Who it's for ─────────────────────────────────────────── */}
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
                {t('forBadge')}
              </div>
              <h2
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('forHeadline')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {forItems.map((item, i) => (
                <div
                  key={i}
                  data-reveal=""
                  data-reveal-delay={String((i % 2) + 1) as '1' | '2' | '3'}
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

        {/* ── 4. Assisted setup ───────────────────────────────────────── */}
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
                {t('setupBadge')}
              </div>
              <h2
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('setupHeadline')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {setupItems.map((item, i) => (
                <div
                  key={i}
                  data-reveal=""
                  data-reveal-delay={String((i % 2) + 1) as '1' | '2' | '3'}
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

        {/* ── 5. Get in touch ─────────────────────────────────────────── */}
        <section id="contact" className="py-10 lg:py-14">
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
                {t('contactBadge')}
              </div>
              <h2
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight mb-3"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('contactHeadline')}
              </h2>
              <p className="text-[16px] leading-relaxed" style={{color: 'var(--on-light-secondary)'}}>
                {t('contactBody')}
              </p>
            </div>

            <div
              data-reveal=""
              className="max-w-2xl rounded-2xl border p-7 sm:p-8"
              style={{
                borderColor: 'var(--border-light)',
                backgroundColor: 'var(--surface-white)',
                boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium uppercase tracking-widest mb-1.5" style={{color: 'var(--on-light-muted)'}}>
                    Email
                  </p>
                  <a
                    href={`mailto:${t('contactEmail')}`}
                    className="text-[22px] font-bold tracking-tight hover:underline"
                    style={{color: 'var(--blue-brand)'}}
                  >
                    {t('contactEmail')}
                  </a>
                </div>
                <a
                  href={MAILTO}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors shrink-0"
                >
                  {t('contactCta')}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" />
                  </svg>
                </a>
              </div>
              <p className="mt-5 text-[13px]" style={{color: 'var(--on-light-muted)'}}>
                {t('contactNote')}
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
