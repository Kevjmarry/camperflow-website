export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-14 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-reveal=""
          className="max-w-3xl rounded-3xl border p-8 lg:p-12"
          style={{
            backgroundColor: 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(20px) saturate(160%)',
            WebkitBackdropFilter: 'blur(20px) saturate(160%)',
            borderColor: 'rgba(14,30,54,0.07)',
            boxShadow: '0 4px 32px rgba(15,23,42,0.06)',
          }}
        >

          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-8 border"
            style={{ backgroundColor: 'var(--surface-blue-pale)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
          >
            Built from inside the industry
          </div>

          <h2
            className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-10"
            style={{ color: 'var(--on-light-primary)' }}
          >
            Built by a commercial pilot who also runs a rental company.
          </h2>

          <div
            className="border-l-2 pl-6 mb-10 space-y-4"
            style={{ borderColor: 'var(--blue-brand)' }}
          >
            <p className="text-[17px] leading-relaxed" style={{ color: 'var(--on-light-secondary)' }}>
              Aviation runs on checklists, readiness states, documented handovers, and accountability at every step — not because pilots are forgetful, but because the cost of a missed step is too high to leave to memory. That discipline exists because it was engineered in. It doesn&apos;t happen by accident.
            </p>
            <p className="text-[17px] leading-relaxed" style={{ color: 'var(--on-light-secondary)' }}>
              Running Epic Vans, I kept hitting the same wall: the booking system handled reservations, and nothing handled the rest. Vehicle readiness, compliance tracking, staff checklists, guest handovers, photo documentation — it all fell back on whoever knew the most that day. That&apos;s not a process. That&apos;s a liability.
            </p>
            <p className="text-[17px] leading-relaxed" style={{ color: 'var(--on-light-secondary)' }}>
              CamperFlow is what I built to close that gap — applying the same operational thinking I use in aviation to a rental context: repeatable processes, clear readiness states, documented handovers, and no step left to memory. Built for this industry specifically, while still actively running a rental company in it.
            </p>
          </div>

          {/* Aviation influence tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              'Checklist discipline',
              'Readiness states',
              'Documented handovers',
              'Staff accountability',
              'Repeatable processes',
              'Reducing human error',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[12px] font-medium border"
                style={{ backgroundColor: 'var(--surface-blue-pale)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0 border-2"
              style={{ backgroundColor: '#1e3a5f', borderColor: 'var(--border-blue-light)', color: '#f1f5f9' }}
            >
              KM
            </div>
            <div>
              <div className="text-[15px] font-semibold" style={{ color: 'var(--on-light-primary)' }}>
                Kevin Marry
              </div>
              <div className="text-[13px]" style={{ color: 'var(--on-light-muted)' }}>
                Founder, CamperFlow — commercial pilot and active operator of Epic Vans
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
