import {Link} from '@/navigation';

const productLinks = [
  {label: 'Operations', href: '/operations'},
  {label: 'Checklists', href: '/checklists'},
  {label: 'Guest Experience', href: '/guest-experience'},
  {label: 'Pricing', href: '/pricing'},
] as const;

const companyLinks = [
  {label: 'About', href: '/about'},
  {label: 'FAQ', href: '/faq'},
  {label: 'Contact', href: '/contact'},
] as const;

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'rgba(248, 250, 252, 0.88)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderTop: '1px solid rgba(14, 30, 54, 0.07)',
      }}
    >
      {/* Primary CTA */}
      <div
        className="py-12 flex flex-col items-center gap-3"
        style={{borderBottom: '1px solid rgba(14, 30, 54, 0.06)'}}
      >
        <a
          href="mailto:info@camperflow.io"
          className="inline-flex items-center gap-2 text-[15px] font-semibold px-7 py-3.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white transition-colors"
        >
          Book a demo
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M3 8h10M8 3l5 5-5 5" />
          </svg>
        </a>
        <p className="text-[13px]" style={{color: '#94a3b8'}}>
          30-minute walkthrough. No commitment.
        </p>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Brand + positioning line */}
          <div>
            <p
              className="text-[13px] font-semibold mb-2.5"
              style={{color: '#0f172a'}}
            >
              CamperFlow
            </p>
            <p
              className="text-[13px] leading-relaxed max-w-[200px]"
              style={{color: '#64748b'}}
            >
              Operational control layer for campervan rental companies.
            </p>
          </div>

          {/* Product links */}
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-3.5"
              style={{color: '#94a3b8'}}
            >
              Product
            </p>
            <ul className="space-y-2.5">
              {productLinks.map(({label, href}) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13px] hover:text-[#0f172a] transition-colors"
                    style={{color: '#475569'}}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-3.5"
              style={{color: '#94a3b8'}}
            >
              Company
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map(({label, href}) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13px] hover:text-[#0f172a] transition-colors"
                    style={{color: '#475569'}}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div
        className="py-4 text-center text-[12px]"
        style={{
          borderTop: '1px solid rgba(14, 30, 54, 0.06)',
          color: '#94a3b8',
        }}
      >
        © {new Date().getFullYear()} CamperFlow. All rights reserved.
      </div>
    </footer>
  );
}
