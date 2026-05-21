const BEFORE = [
  { icon: '📋', label: 'Spreadsheets and memory for vehicle readiness' },
  { icon: '💬', label: 'WhatsApp threads for staff coordination' },
  { icon: '📸', label: 'No photo record when guests dispute damage' },
  { icon: '🧠', label: 'Compliance deadlines tracked in someone\'s head' },
  { icon: '🚐', label: 'Guests arriving without proper handover info' },
];

const AFTER = [
  { label: 'Live fleet status — every vehicle\'s readiness at a glance' },
  { label: 'Structured workflows guiding every staff member' },
  { label: 'Photo-documented condition at pickup and return' },
  { label: 'Compliance alerts before deadlines are missed' },
  { label: 'Guests arrive informed — portal, instructions, return info' },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-20 lg:py-28"
    >
      <div data-reveal="" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
            style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)', color: 'var(--on-light-muted)' }}
          >
            The reality
          </div>
          <h2
            className="text-[30px] sm:text-[38px] font-bold tracking-tight leading-tight mb-4"
            style={{ color: 'var(--on-light-primary)' }}
          >
            A booking confirmed is just the start. What happens next is where things go wrong.
          </h2>
          <p className="text-[17px] leading-relaxed" style={{ color: 'var(--on-light-secondary)' }}>
            Most booking systems stop at the reservation. Everything after — vehicle prep, compliance checks, staff coordination, guest handovers, photo evidence — is left to spreadsheets, memory, and whoever is on shift that day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Before column */}
          <div
            className="rounded-2xl border p-6 lg:p-8"
            style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)', boxShadow: '0 2px 16px rgba(15,23,42,0.05)' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#fee2e2' }}
              >
                <svg viewBox="0 0 12 12" fill="none" stroke="#ef4444" strokeWidth={2} strokeLinecap="round" className="w-3 h-3">
                  <path d="M2 2l8 8M10 2l-8 8" />
                </svg>
              </div>
              <span className="text-[14px] font-bold uppercase tracking-widest" style={{ color: '#ef4444' }}>
                Without CamperFlow
              </span>
            </div>
            <div className="space-y-3">
              {BEFORE.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                  style={{ backgroundColor: '#fff7f7', borderColor: '#fee2e2' }}
                >
                  <span className="text-[18px] flex-shrink-0">{item.icon}</span>
                  <span className="text-[14px] leading-snug" style={{ color: '#7f1d1d' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* After column */}
          <div
            className="rounded-2xl border p-6 lg:p-8"
            style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)', boxShadow: '0 2px 16px rgba(15,23,42,0.05)' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#dcfce7' }}
              >
                <svg viewBox="0 0 12 12" fill="none" stroke="#16a34a" strokeWidth={2} strokeLinecap="round" className="w-3 h-3">
                  <path d="M2 6l3 3 5-5" />
                </svg>
              </div>
              <span className="text-[14px] font-bold uppercase tracking-widest" style={{ color: '#16a34a' }}>
                With CamperFlow
              </span>
            </div>
            <div className="space-y-3">
              {AFTER.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                  style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}
                >
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#86efac' }}>
                    <svg viewBox="0 0 10 10" fill="none" stroke="#15803d" strokeWidth={2} strokeLinecap="round" className="w-2.5 h-2.5">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                    </svg>
                  </div>
                  <span className="text-[14px] leading-snug" style={{ color: '#14532d' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
