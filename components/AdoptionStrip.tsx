const POINTS = [
  {
    title: 'Your booking system stays',
    body: 'CamperFlow sits alongside it. Most booking platforms can export bookings as CSV, iCal, or JSON — making it straightforward to bring your rental data across without rebuilding anything.',
  },
  {
    title: 'Staff use any device they already have',
    body: 'No hardware to buy. Staff log in from their own phone, tablet, or laptop. Checklists, photo uploads, and task updates happen in real time from wherever they are.',
  },
  {
    title: 'No starting from scratch',
    body: "Your existing vehicles, workflows, and compliance requirements become the foundation. CamperFlow adds the structure and visibility that's currently missing.",
  },
];

export default function AdoptionStrip() {
  return (
    <section
      className="py-14 lg:py-20 border-b"
      style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}
    >
      <div data-reveal="" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-3 border"
            style={{ backgroundColor: 'var(--surface-light)', borderColor: 'var(--border-light)', color: 'var(--on-light-muted)' }}
          >
            Easy to adopt
          </div>
          <h2
            className="text-[22px] sm:text-[28px] font-bold tracking-tight"
            style={{ color: 'var(--on-light-primary)' }}
          >
            Designed to fit your operation — not replace it.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-10">
          {POINTS.map((p, i) => (
            <div key={i} className="flex gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'var(--blue-brand)' }}
              >
                <svg viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" className="w-2.5 h-2.5">
                  <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-semibold mb-1" style={{ color: 'var(--on-light-primary)' }}>
                  {p.title}
                </div>
                <div className="text-[13px] leading-relaxed" style={{ color: 'var(--on-light-muted)' }}>
                  {p.body}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
