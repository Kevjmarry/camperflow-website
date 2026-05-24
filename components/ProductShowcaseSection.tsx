import Image from 'next/image';

const STATS = [
  { value: '100%', label: 'of fleet status visible in one view' },
  { value: '0', label: 'spreadsheets required' },
  { value: 'Real-time', label: 'readiness updates across all vehicles' },
];

export default function ProductShowcaseSection() {
  return (
    <section
      id="operations"
      className="py-16 lg:py-24"
      style={{ backgroundColor: 'var(--navy-950)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div data-reveal="" className="max-w-2xl mb-12">
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
            style={{ backgroundColor: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.25)', color: 'var(--blue-light)' }}
          >
            Fleet command center
          </div>
          <h2
            className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Every vehicle, every booking, every open task. One view.
          </h2>
          <p className="text-[17px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            The operations dashboard is the control layer your booking system never built. Upcoming pickups, vehicle readiness, compliance blockers, open checklists, and outstanding reminders — all surfaced before they become problems at handover.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl">
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="text-[22px] sm:text-[28px] font-bold mb-0.5" style={{ color: 'var(--blue-light)' }}>
                {s.value}
              </div>
              <div className="text-[12px] leading-snug" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Operations.png — large, mission control presentation */}
        <div
          data-reveal=""
          data-reveal-delay="1"
          className="rounded-2xl overflow-hidden border"
          style={{
            borderColor: 'var(--border-dim)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          }}
        >
          {/* Browser chrome */}
          <div
            className="flex items-center gap-3 px-5 py-3 border-b"
            style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fca5a5' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fcd34d' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#86efac' }} />
            </div>
            <div className="flex-1 text-center text-[12px] font-mono" style={{ color: '#94a3b8' }}>
              camperflow.io/operations
            </div>
          </div>

          {/* Full operations screenshot — shows a deep crop revealing more of the dashboard */}
          <div style={{ maxHeight: '720px', overflow: 'hidden' }}>
            <Image
              src="/screenshots/operations.png"
              alt="CamperFlow fleet command center — full operations dashboard with upcoming rentals, vehicle readiness, and open tasks"
              width={2561}
              height={5507}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
