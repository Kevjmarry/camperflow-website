import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

export default async function FeaturesPage() {
  const t = await getTranslations('featuresPage');

  const groups = [
    {
      badge: t('group0Badge'),
      headline: t('group0Headline'),
      cols: 3 as const,
      caps: [
        {
          title: t('cap0Title'),
          desc: t('cap0Desc'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="14" height="2.5" rx="1" fill="#2563eb" />
              <rect x="2" y="7" width="14" height="2.5" rx="1" fill="#2563eb" opacity=".55" />
              <rect x="2" y="12" width="8" height="2.5" rx="1" fill="#2563eb" opacity=".3" />
              <circle cx="14.5" cy="13.25" r="2" stroke="#2563eb" strokeWidth="1.2" />
              <path d="M14.5 12v1.25l.8.8" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: t('cap1Title'),
          desc: t('cap1Desc'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="4.5" height="4.5" rx="1" stroke="#2563eb" strokeWidth="1.4" />
              <path d="M3.2 4.2l1.1 1.1 2.2-2.2" stroke="#2563eb" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2" y="10" width="4.5" height="4.5" rx="1" stroke="#2563eb" strokeWidth="1.4" />
              <path d="M3.2 12.2l1.1 1.1 2.2-2.2" stroke="#2563eb" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="9" y="3.5" width="7" height="1.4" rx=".7" fill="#2563eb" opacity=".5" />
              <rect x="9" y="11.5" width="5" height="1.4" rx=".7" fill="#2563eb" opacity=".3" />
            </svg>
          ),
        },
        {
          title: t('cap2Title'),
          desc: t('cap2Desc'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L2 5v5c0 3.8 3.2 6.2 7 7 3.8-.8 7-3.2 7-7V5L9 2z" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M6.5 9l2 2 4-4" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ],
    },
    {
      badge: t('group1Badge'),
      headline: t('group1Headline'),
      cols: 2 as const,
      caps: [
        {
          title: t('cap3Title'),
          desc: t('cap3Desc'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="7.5" cy="5.5" r="3" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M2 16c0-3 2.5-5.5 5.5-5.5S13 13 13 16" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="13" y="1.5" width="4.5" height="5.5" rx="1" stroke="#2563eb" strokeWidth="1.2" opacity=".55" />
              <path d="M14.2 4h2M14.2 5.5h1.5" stroke="#2563eb" strokeWidth=".9" strokeLinecap="round" opacity=".55" />
            </svg>
          ),
        },
        {
          title: t('cap4Title'),
          desc: t('cap4Desc'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2a5.5 5.5 0 1 1 0 11A5.5 5.5 0 0 1 9 2z" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M9 5.5V9l2 2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 16h11" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" opacity=".35" />
              <circle cx="9" cy="16" r="1.5" fill="#2563eb" opacity=".55" />
            </svg>
          ),
        },
      ],
    },
    {
      badge: t('group2Badge'),
      headline: t('group2Headline'),
      cols: 2 as const,
      caps: [
        {
          title: t('cap5Title'),
          desc: t('cap5Desc'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="3" width="14" height="12" rx="2" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M2 7h14" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M6 2v2M12 2v2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="13" cy="12.5" r="2.5" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="1.2" />
              <path d="M13 11.5v1M13 13.5v.2" stroke="#ef4444" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: t('cap6Title'),
          desc: t('cap6Desc'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2.5L2.5 13.5h13L9 2.5z" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M9 7v3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="9" cy="12" r=".9" fill="#2563eb" />
            </svg>
          ),
        },
      ],
    },
    {
      badge: t('group3Badge'),
      headline: t('group3Headline'),
      cols: 3 as const,
      caps: [
        {
          title: t('cap7Title'),
          desc: t('cap7Desc'),
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
          title: t('cap8Title'),
          desc: t('cap8Desc'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="6" r="3" stroke="#2563eb" strokeWidth="1.5" />
              <path d="M4 15v-1a5 5 0 0 1 10 0v1" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="12.5" r="2.5" fill="rgba(37,99,235,0.12)" stroke="#2563eb" strokeWidth="1.2" />
              <path d="M12.8 12.5l.9.9 1.8-1.8" stroke="#2563eb" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          title: t('cap9Title'),
          desc: t('cap9Desc'),
          icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2.5l1.8 3.7 4 .6-2.9 2.8.7 4L9 11.5 5.4 13.6l.7-4L3.2 6.8l4-.6L9 2.5z" stroke="#2563eb" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
          ),
        },
      ],
    },
  ];

  const evidenceItems = [
    {
      src: '/screenshots/operations.png',
      width: 2561,
      height: 5507,
      label: t('evidence0Label'),
      desc: t('evidence0Desc'),
    },
    {
      src: '/screenshots/digital-checklists.png',
      width: 2561,
      height: 1600,
      label: t('evidence1Label'),
      desc: t('evidence1Desc'),
    },
    {
      src: '/screenshots/compliance-monitoring.png',
      width: 2561,
      height: 1600,
      label: t('evidence2Label'),
      desc: t('evidence2Desc'),
    },
  ];

  return (
    <div
      className="features-page relative overflow-hidden"
      style={{background: '#eef4ff'}}
    >
      <style>{`
        .features-page .ribbon-root { mix-blend-mode: multiply; }
        .features-page main, .features-page footer { position: relative; z-index: 25; }
      `}</style>
      <AnimatedRibbon />
      <Navbar />
      <main>

        {/* ── 1. Hero ────────────────────────────────────────────────── */}
        <section className="pt-20 pb-0 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl pt-6 pb-16 lg:pt-8">

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
                  href="#capabilities"
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

        {/* ── 2–5. Capability groups ──────────────────────────────────── */}
        {groups.map((group, gi) => (
          <section
            key={gi}
            id={gi === 0 ? 'capabilities' : undefined}
            className="py-16 lg:py-24"
          >
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
                  {group.badge}
                </div>
                <h2
                  className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight"
                  style={{color: 'var(--on-light-primary)'}}
                >
                  {group.headline}
                </h2>
              </div>

              <div className={`grid gap-4 ${group.cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
                {group.caps.map((cap, ci) => (
                  <div
                    key={ci}
                    data-reveal=""
                    data-reveal-delay={String(ci + 1) as '1' | '2' | '3'}
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
                      {cap.icon}
                    </div>
                    <div className="text-[14px] font-semibold mb-1.5" style={{color: 'var(--on-light-primary)'}}>
                      {cap.title}
                    </div>
                    <div className="text-[13px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                      {cap.desc}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        ))}

        {/* ── 6. In practice — screenshot crops ───────────────────────── */}
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
                {t('evidenceBadge')}
              </div>
              <h2
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('evidenceHeadline')}
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {evidenceItems.map((item, i) => (
                <div
                  key={item.src}
                  data-reveal=""
                  data-reveal-delay={String(i + 1) as '1' | '2' | '3'}
                  className="rounded-2xl overflow-hidden border"
                  style={{borderColor: 'var(--border-light)', backgroundColor: 'var(--surface-light)'}}
                >
                  <div style={{height: '200px', overflow: 'hidden'}}>
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={item.width}
                      height={item.height}
                      style={{width: '100%', height: 'auto', display: 'block'}}
                    />
                  </div>
                  <div className="px-4 py-3.5 border-t" style={{borderColor: 'var(--border-light)'}}>
                    <div className="text-[13px] font-semibold mb-1" style={{color: 'var(--on-light-primary)'}}>
                      {item.label}
                    </div>
                    <div className="text-[12px] leading-relaxed" style={{color: 'var(--on-light-muted)'}}>
                      {item.desc}
                    </div>
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
