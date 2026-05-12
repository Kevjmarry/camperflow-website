import {useTranslations} from 'next-intl';

export default function FounderSection() {
  const t = useTranslations('founder');

  return (
    <section
      id="founder"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{backgroundColor: 'var(--navy-950)'}}
    >
      {/* Subtle background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(30,106,255,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Badge */}
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-8 border"
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-muted)',
            }}
          >
            {t('badge')}
          </div>

          {/* Headline */}
          <h2
            className="text-[30px] sm:text-[36px] font-bold tracking-tight leading-tight mb-10"
            style={{color: 'var(--text-primary)'}}
          >
            {t('headline')}
          </h2>

          {/* Quote block */}
          <div
            className="border-l-2 pl-6 mb-10 space-y-4"
            style={{borderColor: 'var(--blue-brand)'}}
          >
            <p className="text-[17px] leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              {t('body1')}
            </p>
            <p className="text-[17px] leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              {t('body2')}
            </p>
          </div>

          {/* Founder identity */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0 border"
              style={{
                backgroundColor: 'var(--navy-600)',
                borderColor: 'var(--border-dim)',
                color: 'var(--text-primary)',
              }}
            >
              KM
            </div>
            <div>
              <div className="text-[15px] font-semibold" style={{color: 'var(--text-primary)'}}>
                {t('name')}
              </div>
              <div className="text-[13px]" style={{color: 'var(--text-muted)'}}>
                {t('role')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
