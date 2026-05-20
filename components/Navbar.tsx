'use client';

import {useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/navigation';
import {Link} from '@/navigation';
import {routing} from '@/i18n/routing';

const productPages = [
  {key: 'features', href: '/features'},
  {key: 'operations', href: '/operations'},
  {key: 'checklists', href: '/checklists'},
  {key: 'guestExperience', href: '/guest-experience'},
] as const;

const topLinks = [
  {key: 'pricing', href: '/pricing'},
  {key: 'faq', href: '/faq'},
  {key: 'about', href: '/about'},
  {key: 'contact', href: '/contact'},
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  function switchLocale(next: string) {
    router.replace(pathname, {locale: next});
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(248, 250, 252, 0.82)',
        borderColor: 'rgba(14, 30, 54, 0.07)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/screenshots/logo.png"
              alt="CamperFlow"
              width={28}
              height={28}
              className="rounded-md flex-shrink-0"
            />
            <span className="font-semibold text-[15px] tracking-tight" style={{color: '#0f172a'}}>
              CamperFlow
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {/* Product dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button
                className="px-3 py-2 text-[13px] font-medium rounded-md transition-colors flex items-center gap-1"
                style={{color: '#475569'}}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.color = '#0f172a';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0,0,0,0.05)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.color = '#475569';
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                }}
                onClick={() => setProductOpen((o) => !o)}
                aria-expanded={productOpen}
                aria-haspopup="true"
              >
                {t('product')}
                <svg
                  className={`w-3 h-3 transition-transform duration-150 ${productOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-52 rounded-lg border py-1 shadow-lg z-50"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.97)',
                    borderColor: 'rgba(14, 30, 54, 0.09)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  {productPages.map(({key, href}) => (
                    <Link
                      key={key}
                      href={href}
                      className="block px-4 py-2.5 text-[13px] transition-colors"
                      style={{color: '#334155'}}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#0f172a';
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(0,0,0,0.04)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#334155';
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                      }}
                      onClick={() => setProductOpen(false)}
                    >
                      {t(key)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Top-level links */}
            {topLinks.map(({key, href}) => (
              <Link
                key={key}
                href={href}
                className="px-3 py-2 text-[13px] font-medium rounded-md transition-colors"
                style={{color: '#475569'}}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#0f172a';
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(0,0,0,0.05)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#475569';
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                }}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right: language switcher + CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-0.5">
              {routing.locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  disabled={loc === locale}
                  className="px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded transition-colors"
                  style={{
                    color: loc === locale ? '#0f172a' : '#64748b',
                    backgroundColor: loc === locale ? 'rgba(0,0,0,0.06)' : 'transparent',
                    cursor: loc === locale ? 'default' : 'pointer',
                  }}
                >
                  {loc}
                </button>
              ))}
            </div>

            <a
              href="#cta"
              className="hidden sm:inline-flex items-center text-[13px] font-medium px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white transition-colors"
            >
              {t('bookDemo')}
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 flex flex-col gap-[5px]"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: '#0f172a',
                  transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: '#0f172a',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: '#0f172a',
                  transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-4 py-4 space-y-1"
          style={{
            backgroundColor: 'rgba(248, 250, 252, 0.97)',
            borderColor: 'rgba(14, 30, 54, 0.07)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Product section */}
          <p
            className="px-3 pt-1 pb-0.5 text-[10px] font-semibold uppercase tracking-widest"
            style={{color: '#64748b'}}
          >
            {t('product')}
          </p>
          {productPages.map(({key, href}) => (
            <Link
              key={key}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm rounded-md"
              style={{color: '#334155'}}
            >
              {t(key)}
            </Link>
          ))}

          <div className="pt-2" style={{borderTop: '1px solid rgba(14,30,54,0.08)'}}>
            {topLinks.map(({key, href}) => (
              <Link
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm rounded-md"
                style={{color: '#334155'}}
              >
                {t(key)}
              </Link>
            ))}
          </div>

          <div className="pt-3 mt-2 border-t flex items-center justify-between" style={{borderColor: 'rgba(14,30,54,0.08)'}}>
            <div className="flex gap-1">
              {routing.locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  disabled={loc === locale}
                  className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded"
                  style={{
                    color: loc === locale ? '#0f172a' : '#64748b',
                    backgroundColor: loc === locale ? 'rgba(0,0,0,0.06)' : 'transparent',
                  }}
                >
                  {loc}
                </button>
              ))}
            </div>
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium px-4 py-2 rounded-lg"
              style={{backgroundColor: 'var(--blue-brand)', color: 'white'}}
            >
              {t('bookDemo')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
