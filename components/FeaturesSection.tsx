import Image from 'next/image';

const PROOF_POINTS = [
  {
    src: '/screenshots/reminders.png',
    label: 'Automated Reminders',
    desc: 'Guests and staff are notified at every critical moment — pre-pickup, return reminders, and issue alerts. No one has to remember to send them.',
    width: 2561,
    height: 1600,
  },
  {
    src: '/screenshots/vehicle-readiness.png',
    label: 'Vehicle Readiness',
    desc: 'Every vehicle has a live readiness status. Know what\'s prepped, what\'s pending, and what\'s blocked — before it becomes a problem at pickup.',
    width: 2561,
    height: 1600,
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--surface-white)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div data-reveal="" className="max-w-2xl mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
            style={{ backgroundColor: 'var(--surface-blue-pale)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
          >
            Operational clarity
          </div>
          <h2
            className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
            style={{ color: 'var(--on-light-primary)' }}
          >
            Staff accountability and vehicle readiness — visible, not assumed.
          </h2>
          <p className="text-[17px] leading-relaxed" style={{ color: 'var(--on-light-secondary)' }}>
            CamperFlow surfaces the information that matters — which vehicles are ready, what tasks are overdue, which reminders have gone out — so nothing depends on someone remembering to check or someone being in the office.
          </p>
        </div>

        {/* Operations screenshot crop — main accountability view */}
        <div
          data-reveal=""
          data-reveal-delay="1"
          className="rounded-2xl overflow-hidden border mb-6"
          style={{
            borderColor: 'var(--border-light)',
            boxShadow: '0 4px 24px rgba(15,23,42,0.07)',
          }}
        >
          <div
            className="flex items-center gap-3 px-5 py-3 border-b"
            style={{ backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#fca5a5' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#fcd34d' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#86efac' }} />
            </div>
            <div className="flex-1 text-center text-[11px] font-mono" style={{ color: 'var(--on-light-muted)' }}>
              camperflow.io/operations
            </div>
          </div>
          {/* Shows mid section of operations dashboard — reminders & task panel */}
          <div style={{ height: '440px', overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/screenshots/operations.png"
              alt="CamperFlow operations dashboard — reminders, task accountability and fleet overview"
              width={2561}
              height={5507}
              style={{ width: '100%', height: 'auto', display: 'block', marginTop: '-220px' }}
            />
          </div>
        </div>

        {/* Supporting proof screenshots */}
        <div className="grid sm:grid-cols-2 gap-5">
          {PROOF_POINTS.map((item) => (
            <div
              key={item.src}
              data-reveal=""
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: 'var(--border-light)', backgroundColor: 'var(--surface-light)' }}
            >
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <Image
                  src={item.src}
                  alt={item.label}
                  width={item.width}
                  height={item.height}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="px-5 py-4 border-t" style={{ borderColor: 'var(--border-light)' }}>
                <div className="text-[14px] font-semibold mb-1" style={{ color: 'var(--on-light-primary)' }}>
                  {item.label}
                </div>
                <div className="text-[13px] leading-relaxed" style={{ color: 'var(--on-light-muted)' }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform completeness: customers.png — subtle supporting strip */}
        <div
          data-reveal=""
          className="mt-5 rounded-2xl overflow-hidden border flex flex-col sm:flex-row"
          style={{ borderColor: 'var(--border-light)' }}
        >
          <div
            className="sm:w-60 flex-shrink-0 px-6 py-5 flex flex-col justify-center border-b sm:border-b-0 sm:border-r"
            style={{ backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)' }}
          >
            <div className="text-[13px] font-semibold mb-1.5" style={{ color: 'var(--on-light-primary)' }}>
              Customer records
            </div>
            <div className="text-[12px] leading-relaxed" style={{ color: 'var(--on-light-muted)' }}>
              Every guest&apos;s booking history and contact details — organised and accessible from one place.
            </div>
          </div>
          <div className="flex-1" style={{ height: '160px', overflow: 'hidden' }}>
            <Image
              src="/screenshots/customers.png"
              alt="CamperFlow customer records — guest history and contact management"
              width={2561}
              height={1800}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
