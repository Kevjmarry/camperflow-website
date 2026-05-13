import {useTranslations} from 'next-intl';

export default function CtaSection() {
  const t = useTranslations('cta');

  return (
    <section
      id="cta"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{backgroundColor: 'var(--navy-900)'}}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Headline */}
        <h2
          className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-tight leading-tight mb-5"
          style={{color: 'var(--text-primary)'}}
        >
          {t('headline')}
        </h2>

        {/* Body */}
        <p className="text-[18px] leading-relaxed mb-8 max-w-xl mx-auto" style={{color: 'var(--text-secondary)'}}>
          {t('body')}
        </p>

        {/* CTA button */}
        <a
          href="mailto:demo@camperflow.io"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[16px] font-semibold bg-[#2563eb] hover:bg-[#1d4ed8] text-white transition-colors mb-5"
        >
          {t('button')}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M3 8h10M8 3l5 5-5 5" />
          </svg>
        </a>

        {/* Note */}
        <p className="text-[13px]" style={{color: 'var(--text-muted)'}}>
          {t('note')}
        </p>
      </div>
    </section>
  );
}
