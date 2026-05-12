import {useTranslations} from 'next-intl';

const problemIcons = [
  /* Spreadsheet / table */
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-5 h-5">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 15h18M9 3v18" />
  </svg>,
  /* Scattered nodes */
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-5 h-5">
    <circle cx="5" cy="12" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="19" cy="18" r="2" />
    <path d="M7 12h4M15 6l-4 5M15 18l-4-5" />
  </svg>,
  /* Shield warning */
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-5 h-5">
    <path d="M12 2l8 3.5V11c0 5-3.6 9-8 10C7.6 20 4 16 4 11V5.5L12 2z" />
    <path d="M12 9v3M12 15h.01" />
  </svg>,
  /* Clock */
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 3.5" />
  </svg>,
];

export default function ProblemSection() {
  const t = useTranslations('problem');

  const items = [0, 1, 2, 3] as const;

  return (
    <section
      id="problem"
      className="py-20 lg:py-28"
      style={{backgroundColor: 'var(--navy-950)'}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-muted)',
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
            {t('intro')}
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border transition-colors group"
              style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-muted)',
                }}
              >
                {problemIcons[i]}
              </div>
              <h3
                className="text-[16px] font-semibold mb-2"
                style={{color: 'var(--text-primary)'}}
              >
                {t(`item${i}Title`)}
              </h3>
              <p className="text-[14px] leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                {t(`item${i}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
