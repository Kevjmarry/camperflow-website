import Image from 'next/image';

const SHOWCASE = [
  {
    src: '/screenshots/operations.png',
    label: 'Daily Operations',
    alt: 'CamperFlow daily operations dashboard showing booking queue and task assignments',
  },
  {
    src: '/screenshots/reminders.png',
    label: 'Automated Reminders',
    alt: 'CamperFlow automated reminder system for guests and staff',
  },
  {
    src: '/screenshots/vehicle-readiness.png',
    label: 'Vehicle Readiness',
    alt: 'CamperFlow vehicle readiness tracker showing fleet status at a glance',
  },
  {
    src: '/screenshots/compliance-monitoring.png',
    label: 'Compliance Monitoring',
    alt: 'CamperFlow compliance monitoring dashboard with certification and service date tracking',
  },
  {
    src: '/screenshots/guest-portal.png',
    label: 'Guest Portal',
    alt: 'CamperFlow guest self-service portal showing booking details and pickup instructions',
  },
] as const;

function ShowcaseCard({
  src,
  label,
  alt,
  heightPx = 280,
}: {
  src: string;
  label: string;
  alt: string;
  heightPx?: number;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{borderColor: 'var(--border-dim)', backgroundColor: 'var(--navy-800)'}}
    >
      <div className="relative" style={{height: `${heightPx}px`}}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          style={{objectFit: 'cover', objectPosition: 'top'}}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '64px',
            background: 'linear-gradient(to bottom, transparent, var(--navy-800))',
          }}
        />
      </div>
      <div className="px-4 py-3 border-t" style={{borderColor: 'var(--border-subtle)'}}>
        <span className="text-[13px] font-semibold" style={{color: 'var(--text-secondary)'}}>
          {label}
        </span>
      </div>
    </div>
  );
}

export default function ProductShowcaseSection() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{backgroundColor: 'var(--navy-950)'}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-12">
          <div
            className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4 border"
            style={{
              backgroundColor: 'rgba(37,99,235,0.08)',
              borderColor: 'rgba(37,99,235,0.2)',
              color: 'var(--blue-light)',
            }}
          >
            Product
          </div>
          <h2
            className="text-[30px] sm:text-[36px] font-bold tracking-tight leading-tight"
            style={{color: 'var(--text-primary)'}}
          >
            Real workflows, built for rental operators
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {SHOWCASE.slice(0, 4).map((item) => (
            <ShowcaseCard key={item.src} {...item} heightPx={280} />
          ))}
          <div className="sm:col-span-2">
            <ShowcaseCard {...SHOWCASE[4]} heightPx={380} />
          </div>
        </div>

      </div>
    </section>
  );
}
