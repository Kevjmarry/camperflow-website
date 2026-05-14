import Image from 'next/image';

const RISKS = [
  'One expired certificate or vignette can ground a vehicle — immediately.',
  'One missed service interval can void your warranty or insurance.',
  'One overlooked roadworthiness date puts you on the wrong side of the law.',
];

export default function ComplianceSection() {
  return (
    <section
      id="compliance"
      className="py-20 lg:py-28 border-y"
      style={{ backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: compliance-monitoring screenshot — compliance card with visible Expired badge */}
          <div className="order-2 lg:order-1">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: 'var(--border-light)',
                boxShadow: '0 8px 32px rgba(239,68,68,0.07), 0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <div
                className="flex items-center gap-3 px-4 py-2.5 border-b"
                style={{ backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#fca5a5' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#fcd34d' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#86efac' }} />
                </div>
                <div className="flex-1 text-center text-[11px] font-mono" style={{ color: 'var(--on-light-muted)' }}>
                  camperflow.io/compliance
                </div>
              </div>

              {/* compliance-monitoring.png — show full screenshot, red Expired status visible */}
              <div style={{ maxHeight: '560px', overflow: 'hidden' }}>
                <Image
                  src="/screenshots/compliance-monitoring.png"
                  alt="CamperFlow compliance monitoring — vehicle certifications, service dates, and Expired status indicators"
                  width={2561}
                  height={1800}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Caption anchored to the red status */}
            <div
              className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-xl border"
              style={{ backgroundColor: 'var(--danger-red-bg)', borderColor: 'var(--danger-red-border)' }}
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--danger-red)' }} />
              <span className="text-[13px] font-medium" style={{ color: '#991b1b' }}>
                The red "Expired" badge you see above — CamperFlow catches that before your next rental goes out.
              </span>
            </div>
          </div>

          {/* Right: copy */}
          <div className="order-1 lg:order-2 max-w-lg">
            <div
              className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5 border"
              style={{ backgroundColor: 'var(--danger-red-bg)', borderColor: 'var(--danger-red-border)', color: 'var(--danger-red)' }}
            >
              Compliance monitoring
            </div>

            <h2
              className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-5"
              style={{ color: 'var(--on-light-primary)' }}
            >
              Compliance anxiety is a real operational cost.
            </h2>

            <p className="text-[17px] leading-relaxed mb-6" style={{ color: 'var(--on-light-secondary)' }}>
              Insurance renewals, vignettes, roadworthiness certificates, service intervals — keeping track of these across an entire fleet is error-prone. During busy season, compliance tends to slip. CamperFlow keeps it visible so it doesn&apos;t.
            </p>

            <div className="space-y-3 mb-8">
              {RISKS.map((risk, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl border"
                  style={{ backgroundColor: 'var(--danger-red-bg)', borderColor: 'var(--danger-red-border)' }}
                >
                  <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#fee2e2' }}>
                    <svg viewBox="0 0 10 10" fill="none" stroke="#ef4444" strokeWidth={2} strokeLinecap="round" className="w-2.5 h-2.5">
                      <path d="M5 2v4M5 7.5v.5" />
                    </svg>
                  </div>
                  <span className="text-[14px] leading-snug" style={{ color: '#7f1d1d' }}>
                    {risk}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="p-5 rounded-xl border"
              style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}
            >
              <div className="text-[15px] font-semibold mb-2" style={{ color: 'var(--on-light-primary)' }}>
                CamperFlow tracks every deadline
              </div>
              <p className="text-[14px] leading-relaxed" style={{ color: 'var(--on-light-muted)' }}>
                Insurance renewals, vignettes, roadworthiness certificates, service intervals, and warranty conditions — each tied to the vehicle, with alerts before deadlines hit.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
