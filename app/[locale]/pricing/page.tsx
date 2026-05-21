import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import PricingFAQAccordion from '@/components/PricingFAQAccordion';
import CheckoutButton from '@/components/CheckoutButton';

type Plan = {
  key: 'starter' | 'core' | 'growth' | 'pro';
  price: number;
  vehicles: number;
  staff: number;
  extraVehicle: number;
  extraStaff: number;
  maxExtraVehicles: number | null;
  popular: boolean;
};

const PLANS: Plan[] = [
  {key: 'starter', price: 29, vehicles: 3,  staff: 3,  extraVehicle: 9, extraStaff: 5, maxExtraVehicles: 3,    popular: false},
  {key: 'core',    price: 49, vehicles: 5,  staff: 5,  extraVehicle: 9, extraStaff: 5, maxExtraVehicles: 5,    popular: true},
  {key: 'growth',  price: 79, vehicles: 15, staff: 15, extraVehicle: 7, extraStaff: 3, maxExtraVehicles: 10,   popular: false},
  {key: 'pro',     price: 119,vehicles: 30, staff: 30, extraVehicle: 7, extraStaff: 3, maxExtraVehicles: null, popular: false},
];

function CheckIcon({bright}: {bright: boolean}) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 shrink-0"
      style={{color: bright ? 'var(--blue-light)' : 'var(--blue-brand)'}}
    >
      <path d="M3 8l3.5 3.5L13 4" />
    </svg>
  );
}

export default async function PricingPage() {
  const t = await getTranslations('pricingPage');

  const planMeta = {
    starter: {name: t('starterName'), desc: t('starterDesc')},
    core:    {name: t('coreName'),    desc: t('coreDesc')},
    growth:  {name: t('growthName'), desc: t('growthDesc')},
    pro:     {name: t('proName'),     desc: t('proDesc')},
  };

  const included = [t('included0'), t('included1'), t('included2'), t('included3')];

  const setupItems = [
    {
      title: t('setup0Title'),
      desc:  t('setup0Desc'),
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
      desc:  t('setup1Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1.5" y="5" width="15" height="9" rx="2" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M5 9h3M10 9h3" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" opacity=".55" />
          <path d="M6 4V2.5M12 4V2.5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: t('setup2Title'),
      desc:  t('setup2Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="1.5" width="8.5" height="13" rx="1.5" stroke="#2563eb" strokeWidth="1.4" />
          <rect x="7.5" y="4.5" width="8.5" height="11" rx="1.5" stroke="#2563eb" strokeWidth="1.4" opacity=".4" />
          <path d="M4.5 6.5h4M4.5 9h3M4.5 11.5h2" stroke="#2563eb" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: t('setup3Title'),
      desc:  t('setup3Desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2L3.5 4.5v5.5c0 3.5 2.5 5.5 5.5 6 3-.5 5.5-2.5 5.5-6V4.5L9 2z" stroke="#2563eb" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M6.5 9l2 2 4-4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const faqItems = [
    {q: t('faq0Q'), a: t('faq0A')},
    {q: t('faq1Q'), a: t('faq1A')},
    {q: t('faq2Q'), a: t('faq2A')},
    {q: t('faq3Q'), a: t('faq3A')},
    {q: t('faq4Q'), a: t('faq4A')},
    {q: t('faq5Q'), a: t('faq5A')},
  ];

  return (
    <div className="pricing-page relative overflow-hidden" style={{background: '#eef4ff'}}>
      <style>{`
        .pricing-page .ribbon-root { mix-blend-mode: multiply; }
        .pricing-page main, .pricing-page footer { position: relative; z-index: 25; }
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
                  href="#plans"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors"
                >
                  {t('heroCta')}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M8 3l5 5-5 5M3 8h10" />
                  </svg>
                </a>
                <a
                  href="#faq"
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

        {/* ── 2. Plans ─────────────────────────────────────────────── */}
        <section id="plans" className="py-10 lg:py-14">
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
                {t('plansBadge')}
              </div>
              <h2
                className="text-[26px] sm:text-[32px] font-bold tracking-tight leading-tight mb-3"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('plansHeadline')}
              </h2>
              <p className="text-[16px] leading-relaxed" style={{color: 'var(--on-light-secondary)'}}>
                {t('plansSubheadline')}
              </p>
            </div>

            <div data-reveal="" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
              {PLANS.map((plan) => {
                const dark = plan.popular;
                const meta = planMeta[plan.key];
                return (
                  <div
                    key={plan.key}
                    className="relative flex flex-col rounded-2xl border p-6"
                    style={{
                      backgroundColor: dark ? 'var(--navy-800)' : 'var(--surface-white)',
                      borderColor: dark ? 'var(--blue-brand)' : 'var(--border-light)',
                      boxShadow: dark
                        ? '0 0 0 1px var(--blue-brand), 0 8px 32px rgba(37,99,235,0.12)'
                        : '0 2px 12px rgba(15,23,42,0.04)',
                    }}
                  >
                    {dark && (
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap"
                        style={{backgroundColor: 'var(--blue-brand)', color: '#fff'}}
                      >
                        {t('mostPopular')}
                      </div>
                    )}

                    {/* Name + price */}
                    <div className="mb-5">
                      <div
                        className="text-[11px] font-semibold uppercase tracking-widest mb-3"
                        style={{color: dark ? 'var(--blue-light)' : 'var(--blue-brand)'}}
                      >
                        {meta.name}
                      </div>
                      <div className="flex items-baseline gap-1 mb-1.5">
                        <span
                          className="text-[34px] font-bold tracking-tight"
                          style={{color: dark ? 'var(--text-primary)' : 'var(--on-light-primary)'}}
                        >
                          €{plan.price}
                        </span>
                        <span
                          className="text-[13px]"
                          style={{color: dark ? 'var(--text-muted)' : 'var(--on-light-muted)'}}
                        >
                          {t('perMonth')}
                        </span>
                      </div>
                      <p
                        className="text-[13px] leading-snug"
                        style={{color: dark ? 'var(--text-secondary)' : 'var(--on-light-secondary)'}}
                      >
                        {meta.desc}
                      </p>
                    </div>

                    {/* Vehicles + staff */}
                    <div
                      className="mb-4 pb-4 border-b"
                      style={{borderColor: dark ? 'var(--border-subtle)' : 'var(--border-light)'}}
                    >
                      <div
                        className="flex items-center gap-2 text-[13px] mb-1.5"
                        style={{color: dark ? 'var(--text-secondary)' : 'var(--on-light-primary)'}}
                      >
                        <CheckIcon bright={dark} />
                        {plan.vehicles} {t('vehiclesIncluded')}
                      </div>
                      <div
                        className="flex items-center gap-2 text-[13px]"
                        style={{color: dark ? 'var(--text-secondary)' : 'var(--on-light-primary)'}}
                      >
                        <CheckIcon bright={dark} />
                        {plan.staff} {t('staffIncluded')}
                      </div>
                    </div>

                    {/* Included features */}
                    <ul className="flex-1 space-y-1.5 mb-5">
                      {included.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-[13px]"
                          style={{color: dark ? 'var(--text-secondary)' : 'var(--on-light-secondary)'}}
                        >
                          <CheckIcon bright={dark} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Extras + scaling */}
                    <div
                      className="mb-5 text-[12px] leading-relaxed space-y-0.5"
                      style={{color: dark ? 'var(--text-muted)' : 'var(--on-light-muted)'}}
                    >
                      <div>+ €{plan.extraVehicle}{t('perMonth')} {t('extraVehicle')}</div>
                      <div>+ €{plan.extraStaff}{t('perMonth')} {t('extraStaff')}</div>
                      <div
                        className="mt-1 text-[11px]"
                        style={{color: dark ? 'rgba(148,163,184,0.65)' : 'var(--on-light-muted)', opacity: 0.8}}
                      >
                        {plan.maxExtraVehicles !== null
                          ? t('maxExtraNote', {n: plan.maxExtraVehicles})
                          : t('noExtraLimit')}
                      </div>
                    </div>

                    {/* CTA */}
                    <CheckoutButton
                      plan={plan.key}
                      dark={dark}
                      label={t('getStarted')}
                    />
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── 3. Setup / switching fear ─────────────────────────────── */}
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
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight mb-3"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('setupHeadline')}
              </h2>
              <p className="text-[16px] leading-relaxed" style={{color: 'var(--on-light-secondary)'}}>
                {t('setupSubheadline')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {setupItems.map((item, i) => (
                <div
                  key={i}
                  data-reveal=""
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

        {/* ── 4. FAQ ───────────────────────────────────────────────── */}
        <section id="faq" className="py-10 lg:py-14">
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
                {t('faqBadge')}
              </div>
              <h2
                className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight"
                style={{color: 'var(--on-light-primary)'}}
              >
                {t('faqHeadline')}
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
                <PricingFAQAccordion items={faqItems} />
              </div>
            </div>

          </div>
        </section>


      </main>
      <ScrollObserver />
      <Footer />
    </div>
  );
}
