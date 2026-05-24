export default function FinalCtaSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-reveal=""
          className="rounded-3xl border p-10 lg:p-16 text-center"
          style={{
            backgroundColor: 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(20px) saturate(160%)',
            WebkitBackdropFilter: 'blur(20px) saturate(160%)',
            borderColor: 'rgba(14,30,54,0.07)',
            boxShadow: '0 4px 32px rgba(15,23,42,0.06)',
          }}
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-6 border"
            style={{ backgroundColor: 'var(--surface-blue-pale)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
          >
            Ready to get started?
          </div>

          <h2
            className="text-[28px] sm:text-[40px] font-bold tracking-tight leading-tight mb-4 max-w-2xl mx-auto"
            style={{ color: 'var(--on-light-primary)' }}
          >
            Run a tighter operation. Starting now.
          </h2>

          <p
            className="text-[17px] leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: 'var(--on-light-secondary)' }}
          >
            See CamperFlow working with your fleet, your team, your workflow. No need to replace your existing booking system.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="mailto:info@camperflow.io"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px] font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors"
            >
              Book a demo
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M3 8h10M8 3l5 5-5 5" />
              </svg>
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center px-8 py-4 rounded-xl text-[15px] font-semibold border transition-colors"
              style={{ borderColor: 'var(--border-light)', color: 'var(--on-light-secondary)' }}
            >
              View pricing
            </a>
          </div>

          <p className="text-[13px]" style={{ color: 'var(--on-light-muted)' }}>
            Works on any device · No long-term contract
          </p>
        </div>
      </div>
    </section>
  );
}
