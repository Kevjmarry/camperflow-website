import Image from 'next/image';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AnimatedRibbon from '@/components/AnimatedRibbon';
import ProblemSection from '@/components/ProblemSection';
import FounderSection from '@/components/FounderSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

const PATHS = [
  {
    href: '/operations',
    badge: 'Operations',
    headline: 'Fleet command center',
    desc: 'Every vehicle, booking, and open task in one view. Upcoming pickups, vehicle readiness, and compliance deadlines — surfaced before they become problems at handover.',
    src: '/screenshots/operations.png',
    width: 2561,
    height: 5507,
    url: 'camperflow.io/operations',
  },
  {
    href: '/checklists',
    badge: 'Checklists',
    headline: 'Structured, logged handovers',
    desc: 'Guided digital checklists for every pickup and return. Timestamped photo evidence tied to the booking — consistent across every staff member, every shift.',
    src: '/screenshots/digital-checklists.png',
    width: 2561,
    height: 1600,
    url: 'camperflow.io/checklists',
  },
  {
    href: '/guest-experience',
    badge: 'Guest Experience',
    headline: 'Informed guests, fewer problems',
    desc: 'A branded portal for every booking — vehicle guide, pickup instructions, return requirements. Guests arrive knowing what to expect.',
    src: '/screenshots/guest-portal.png',
    width: 2561,
    height: 1264,
    url: 'camperflow.io/my-booking',
  },
  {
    href: '/pricing',
    badge: 'Pricing',
    headline: 'From €29 / month',
    desc: 'Simple per-vehicle pricing that scales with your fleet. Starter, Core, Growth, and Pro plans — no hidden fees, no long-term contract.',
    src: null,
    width: 0,
    height: 0,
    url: null,
  },
];

export default function LocalePage() {
  return (
    <div
      className="homepage relative overflow-hidden"
      style={{ background: '#eef4ff' }}
    >
      <style>{`
        .homepage .ribbon-root { mix-blend-mode: multiply; }
        .homepage main, .homepage footer { position: relative; z-index: 25; }
      `}</style>
      <AnimatedRibbon />
      <Navbar />
      <main>

        {/* ── 1. Hero ────────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── 2. Problem ─────────────────────────────────────────────── */}
        <ProblemSection />

        {/* ── 3. Product paths ───────────────────────────────────────── */}
        <section id="paths" className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div data-reveal="" className="max-w-xl mb-10">
              <div
                className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
                style={{ backgroundColor: 'var(--surface-blue-pale)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
              >
                What CamperFlow does
              </div>
              <h2
                className="text-[26px] sm:text-[32px] font-bold tracking-tight leading-tight mb-3"
                style={{ color: 'var(--on-light-primary)' }}
              >
                One platform. Four operational layers.
              </h2>
              <p className="text-[15px] leading-relaxed" style={{ color: 'var(--on-light-secondary)' }}>
                Explore each area, or book a demo to see the full platform in your context.
              </p>
            </div>

            <div data-reveal="" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PATHS.map((path) => (
                <a
                  key={path.href}
                  href={path.href}
                  className="group flex flex-col rounded-2xl border overflow-hidden"
                  style={{
                    borderColor: 'var(--border-light)',
                    backgroundColor: 'var(--surface-white)',
                    boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
                    transition: 'box-shadow 0.18s ease',
                  }}
                >
                  {/* Visual area */}
                  {path.src ? (
                    <div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 border-b"
                        style={{ backgroundColor: 'var(--surface-white)', borderColor: 'var(--border-light)' }}
                      >
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#fca5a5' }} />
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#fcd34d' }} />
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#86efac' }} />
                        </div>
                        <div
                          className="flex-1 text-center text-[10px] font-mono truncate"
                          style={{ color: 'var(--on-light-muted)' }}
                        >
                          {path.url}
                        </div>
                      </div>
                      <div style={{ height: '148px', overflow: 'hidden' }}>
                        <Image
                          src={path.src}
                          alt={`CamperFlow ${path.badge}`}
                          width={path.width}
                          height={path.height}
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="flex flex-col items-center justify-center"
                      style={{
                        height: '180px',
                        background: 'linear-gradient(135deg, var(--surface-blue-pale) 0%, #dbeafe 100%)',
                      }}
                    >
                      <div
                        className="text-[42px] font-bold tracking-tight leading-none mb-1"
                        style={{ color: 'var(--blue-brand)' }}
                      >
                        €29
                      </div>
                      <div className="text-[12px]" style={{ color: 'var(--on-light-muted)' }}>
                        per month to start
                      </div>
                    </div>
                  )}

                  {/* Copy area */}
                  <div className="flex flex-col flex-1 p-5 border-t" style={{ borderColor: 'var(--border-light)' }}>
                    <div
                      className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-3 self-start border"
                      style={{ backgroundColor: 'var(--surface-blue-pale)', borderColor: 'var(--border-blue-light)', color: 'var(--blue-brand)' }}
                    >
                      {path.badge}
                    </div>
                    <div className="text-[13px] font-semibold mb-1.5" style={{ color: 'var(--on-light-primary)' }}>
                      {path.headline}
                    </div>
                    <p className="text-[12px] leading-relaxed flex-1" style={{ color: 'var(--on-light-muted)' }}>
                      {path.desc}
                    </p>
                    <div
                      className="mt-4 flex items-center gap-1 text-[12px] font-semibold group-hover:gap-2 transition-[gap]"
                      style={{ color: 'var(--blue-brand)' }}
                    >
                      Explore
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                        <path d="M3 8h10M8 3l5 5-5 5" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* ── 4. Founder credibility ─────────────────────────────────── */}
        <FounderSection />

        {/* ── 5. CTA ─────────────────────────────────────────────────── */}
        <CtaSection />

      </main>
      <ScrollObserver />
      <Footer />
    </div>
  );
}
