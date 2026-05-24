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
