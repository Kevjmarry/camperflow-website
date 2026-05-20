export default function CtaSection() {
  return (
    <section
      id="cta"
      className="py-16 lg:py-24"
    >
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
            Get started
          </div>

          <h2
            className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight leading-tight mb-7"
            style={{ color: 'var(--on-light-primary)' }}
          >
            See CamperFlow in action.
          </h2>

          <a
            href="mailto:info@camperflow.io"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[16px] font-semibold text-white transition-colors mb-7 bg-[#2563eb] hover:bg-[#1d4ed8]"
          >
            Book a demo
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M3 8h10M8 3l5 5-5 5" />
            </svg>
          </a>

          <p className="text-[16px] leading-relaxed mb-4 max-w-md mx-auto" style={{ color: 'var(--on-light-secondary)' }}>
            Book a 30-minute demo. We&apos;ll walk through your fleet, your current process, and show you exactly how CamperFlow fits your operation.
          </p>

          <p className="text-[13px]" style={{ color: 'var(--on-light-muted)' }}>
            No commitment. No pitch deck. Just a real look at the product.
          </p>
        </div>
      </div>
    </section>
  );
}
