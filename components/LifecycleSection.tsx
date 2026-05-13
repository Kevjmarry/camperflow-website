import {useTranslations} from 'next-intl';

const STEP_ICONS: React.ReactNode[] = [
  /* 0: Booking in — calendar */
  <svg key="0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="3" width="16" height="15" rx="2" />
    <path d="M2 8h16M6 1v4M14 1v4" />
  </svg>,

  /* 1: Checklists assigned — clipboard with check */
  <svg key="1" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M7 2h6a1 1 0 011 1v13a1 1 0 01-1 1H7a1 1 0 01-1-1V3a1 1 0 011-1z" />
    <path d="M8 9.5l1.5 1.5 3-3" />
    <path d="M8 2V1M12 2V1" />
  </svg>,

  /* 2: Vehicle prep — wrench */
  <svg key="2" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M14.5 3.5a4 4 0 00-5 5.3L3.8 14.5a1.2 1.2 0 001.7 1.7l5.7-5.7a4 4 0 005.3-5l-2.2 2.2-1.5-1.5 2.2-2.2z" />
  </svg>,

  /* 3: Compliance verified — shield with check */
  <svg key="3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M10 2l7 2.5V10c0 4.5-3 7.5-7 8-4-.5-7-3.5-7-8V4.5L10 2z" />
    <path d="M7 10l2 2 4-4" />
  </svg>,

  /* 4: Guest portal — QR code */
  <svg key="4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="6" height="6" rx="1" />
    <rect x="12" y="2" width="6" height="6" rx="1" />
    <rect x="2" y="12" width="6" height="6" rx="1" />
    <path d="M12 12h2M16 12v2M14 14h2M12 16h2M14 16h2M16 16v2" />
  </svg>,

  /* 5: Pickup handover — key */
  <svg key="5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="7.5" cy="9.5" r="4.5" />
    <path d="M10.5 12.5L17 6M13 6h4M17 6v4" />
  </svg>,

  /* 6: Return & reset — circular arrow */
  <svg key="6" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M4.5 10a5.5 5.5 0 106-5.47" />
    <path d="M4.5 6v4h4" />
  </svg>,
];

const STEPS = [0, 1, 2, 3, 4, 5, 6] as const;

export default function LifecycleSection() {
  const t = useTranslations('lifecycle');

  return (
    <section
      className="py-20 lg:py-28"
      style={{backgroundColor: 'var(--navy-800)'}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
            style={{
              backgroundColor: 'rgba(37,99,235,0.08)',
              borderColor: 'rgba(37,99,235,0.2)',
              color: 'var(--blue-light)',
            }}
          >
            {t('badge')}
          </div>
          <h2
            className="text-[30px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
            style={{color: 'var(--text-primary)'}}
          >
            {t('headline')}
          </h2>
          <p className="text-[17px] leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            {t('subheadline')}
          </p>
        </div>

        {/* Desktop: horizontal pipeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line running through the icon circles */}
          <div
            className="absolute"
            style={{
              top: '20px',
              left: 'calc(100% / 14)',
              right: 'calc(100% / 14)',
              height: '1px',
              backgroundColor: 'var(--border-dim)',
            }}
          />

          <div
            className="relative grid"
            style={{gridTemplateColumns: 'repeat(7, 1fr)'}}
          >
            {STEPS.map((i) => (
              <div key={i} className="flex flex-col items-center text-center px-2">
                {/* Icon circle — sits on top of the line */}
                <div
                  className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center mb-3 border"
                  style={{
                    backgroundColor: 'var(--navy-800)',
                    borderColor: 'rgba(37,99,235,0.4)',
                    color: 'var(--blue-light)',
                  }}
                >
                  {STEP_ICONS[i]}
                </div>

                {/* Step number */}
                <div
                  className="text-[9px] font-semibold uppercase tracking-widest mb-1"
                  style={{color: 'var(--text-muted)'}}
                >
                  0{i + 1}
                </div>

                {/* Label */}
                <div
                  className="text-[12px] font-semibold leading-tight mb-1"
                  style={{color: 'var(--text-primary)'}}
                >
                  {t(`step${i}`)}
                </div>

                {/* Description */}
                <div
                  className="text-[11px] leading-relaxed"
                  style={{color: 'var(--text-muted)'}}
                >
                  {t(`step${i}Desc`)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          {STEPS.map((i, idx) => (
            <div key={i} className="flex gap-4">
              {/* Left: icon + connecting line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center border"
                  style={{
                    backgroundColor: 'var(--navy-700)',
                    borderColor: 'rgba(37,99,235,0.4)',
                    color: 'var(--blue-light)',
                  }}
                >
                  {STEP_ICONS[i]}
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className="w-px my-1.5"
                    style={{backgroundColor: 'var(--border-subtle)', minHeight: '28px'}}
                  />
                )}
              </div>

              {/* Right: content */}
              <div className={idx < STEPS.length - 1 ? 'pb-5' : ''}>
                <div
                  className="text-[9px] font-semibold uppercase tracking-widest mb-0.5"
                  style={{color: 'var(--text-muted)'}}
                >
                  0{i + 1}
                </div>
                <div
                  className="text-[14px] font-semibold mb-0.5"
                  style={{color: 'var(--text-primary)'}}
                >
                  {t(`step${i}`)}
                </div>
                <div
                  className="text-[13px] leading-relaxed"
                  style={{color: 'var(--text-muted)'}}
                >
                  {t(`step${i}Desc`)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
