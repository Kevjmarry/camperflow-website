export default function CtaSection() {
  return (
    <section
      id="cta"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--navy-900)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div
          className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-6 border"
          style={{ backgroundColor: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.25)', color: 'var(--blue-light)' }}
        >
          Get started
        </div>

        <h2
          className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold tracking-tight leading-tight mb-5"
          style={{ color: 'var(--text-primary)' }}
        >
          See CamperFlow in action.
        </h2>

        <p className="text-[17px] leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Book a 30-minute demo. We&apos;ll walk through your fleet, your current process, and show you exactly how CamperFlow fits your operation.
        </p>

        <a
          href="mailto:info@camperflow.io"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[16px] font-semibold text-white transition-colors mb-5"
          style={{ backgroundColor: 'var(--blue-brand)' }}
        >
          Book a demo
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M3 8h10M8 3l5 5-5 5" />
          </svg>
        </a>

        <p className="text-[13px]" style={{ color: 'var(--text-muted)' }}>
          No commitment. No pitch deck. Just a real look at the product.
        </p>

      </div>
    </section>
  );
}
