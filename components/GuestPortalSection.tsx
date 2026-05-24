import Image from 'next/image';

const FEATURES = [
  {
    title: 'No app download required',
    body: 'Guests scan a QR code before pickup and get everything they need — instantly, in their browser.',
  },
  {
    title: 'Multilingual guest info',
    body: 'The guest portal serves content in the guest\'s language. Need another language? Contact us.',
  },
  {
    title: 'Return instructions and responsibilities',
    body: 'Clear return instructions, fuel requirements, where to park, and what the guest is responsible for. Fewer misunderstandings at drop-off.',
  },
  {
    title: 'Your branding, not ours',
    body: 'The portal carries your name. It looks like a professional product you built.',
  },
];

export default function GuestPortalSection() {
  return (
    <section
      id="guest-portal"
      className="py-16 lg:py-24"
      style={{ backgroundColor: 'var(--surface-white)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left: copy */}
          <div data-reveal="" className="max-w-lg">
            <div
              className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-5 border"
              style={{ backgroundColor: 'var(--surface-blue-pale)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
            >
              Guest portal
            </div>

            <h2
              className="text-[28px] sm:text-[36px] font-bold tracking-tight leading-tight mb-5"
              style={{ color: 'var(--on-light-primary)' }}
            >
              Guests informed before they arrive. Clear on responsibilities before they leave.
            </h2>

            <p className="text-[17px] leading-relaxed mb-8" style={{ color: 'var(--on-light-secondary)' }}>
              Every rental generates a branded guest page — vehicle guide, emergency contacts, pickup instructions, return requirements, and guest responsibilities — accessible via QR code. Guests know what to expect. Your staff spend less time explaining. Bad reviews from avoidable confusion drop.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {FEATURES.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border"
                  style={{ backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)' }}
                >
                  <div className="text-[13px] font-semibold mb-1" style={{ color: 'var(--on-light-primary)' }}>
                    {item.title}
                  </div>
                  <div className="text-[12px] leading-relaxed" style={{ color: 'var(--on-light-muted)' }}>
                    {item.body}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white transition-colors"
              style={{ backgroundColor: 'var(--blue-brand)' }}
            >
              Book a demo to see the portal
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M3 8h10M8 3l5 5-5 5" />
              </svg>
            </a>
          </div>

          {/* Right: guest-portal.png with Guest portal callout */}
          <div data-reveal="" data-reveal-delay="1">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: 'var(--border-light)',
                boxShadow: '0 8px 32px rgba(15,23,42,0.07)',
                position: 'relative',
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
                  camperflow.io/my-booking
                </div>
              </div>

              {/* guest-portal.png with callout */}
              <div style={{ position: 'relative' }}>
                <Image
                  src="/screenshots/guest-portal.png"
                  alt="CamperFlow guest portal — My Booking page with booking details, pickup info, and multilingual access"
                  width={2561}
                  height={1264}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div className="sc-callout" style={{ top: '22%', right: '4%' }}>
                  <div className="sc-dot" />
                  <span className="sc-label sc-label--blue">Guest portal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
